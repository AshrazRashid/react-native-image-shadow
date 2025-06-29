import React, { useEffect, useState, memo } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {
  getPalette,
  getAverageColor,
} from '@somesoap/react-native-image-palette';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

const FALLBACK_IMAGE = require('./Images/fallback.png'); // adjust path as needed

const DEFAULT_COLOR = '#36D1C4'; // Modern teal blue
const GRADIENT_ANGLES = [
  { start: { x: 0.2, y: 0.8 }, end: { x: 0.8, y: 0.2 } },
  { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
  { start: { x: 1, y: 0 }, end: { x: 0, y: 1 } },
  { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } },
  { start: { x: 0, y: 1 }, end: { x: 1, y: 0 } },
  { start: { x: 0.8, y: 0.2 }, end: { x: 0.2, y: 0.8 } },
];

// Helper to lighten/darken a hex color
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (1 + percent), 10);
  G = parseInt(G * (1 + percent), 10);
  B = parseInt(B * (1 + percent), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
}

function getAngleIndexFromUrl(url) {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = url.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % GRADIENT_ANGLES.length;
}

const ImageCard = memo(({ item, style, gradientAngleIndex }) => {
  const { url } = item;
  const [colors, setColors] = useState({
    primary: '#FFF',
    background: '#000',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFallback, setShowFallback] = useState(false);

  // Determine gradient angle
  const angleIndex =
    typeof gradientAngleIndex === 'number' &&
    gradientAngleIndex >= 0 &&
    gradientAngleIndex < GRADIENT_ANGLES.length
      ? gradientAngleIndex
      : getAngleIndexFromUrl(url);
  const gradientAngle = GRADIENT_ANGLES[angleIndex];

  useEffect(() => {
    let isMounted = true;

    const getColorsOfImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        let newColors = {
          primary: DEFAULT_COLOR,
          background: DEFAULT_COLOR,
        };
        try {
          const palette = await getPalette(url, {
            fallbackColor: DEFAULT_COLOR,
          });
          let primary =
            palette.vibrant || palette.dominantAndroid || DEFAULT_COLOR;
          let background =
            palette.lightVibrant ||
            palette.muted ||
            palette.darkMuted ||
            DEFAULT_COLOR;

          // If colors are too similar, use average color or adjust brightness
          if (
            primary &&
            background &&
            primary.toLowerCase() === background.toLowerCase()
          ) {
            background = (await getAverageColor(url)) || DEFAULT_COLOR;
          }

          // If still too close, lighten the background
          if (
            primary &&
            background &&
            primary.toLowerCase() === background.toLowerCase()
          ) {
            background = shadeColor(primary, 0.3); // make it lighter
          }

          newColors = { primary, background };
        } catch (e) {
          // fallback to default colors if palette extraction fails
          newColors = { primary: DEFAULT_COLOR, background: DEFAULT_COLOR };
        }

        if (!isMounted) return;

        setColors(newColors);
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          console.warn('Error extracting colors:', err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    getColorsOfImage();

    return () => {
      isMounted = false;
    };
  }, [url]);

  // Always use safe color strings for LinearGradient
  const safePrimary =
    typeof colors.primary === 'string' && colors.primary[0] === '#'
      ? colors.primary
      : DEFAULT_COLOR;
  const safeBackground =
    typeof colors.background === 'string' && colors.background[0] === '#'
      ? colors.background
      : DEFAULT_COLOR;

  return (
    <LinearGradient
      colors={[safePrimary, safeBackground]}
      start={gradientAngle.start}
      end={gradientAngle.end}
      style={[styles.container, style]}
    >
      <View style={styles.overlay} />
      <FastImage
        source={
          showFallback
            ? FALLBACK_IMAGE
            : typeof url === 'string'
            ? { uri: url }
            : url
        }
        onError={() => setShowFallback(true)}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />

      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator color="#fff" />
        </View>
      )}
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
  },
  image: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

ImageCard.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.object,
  gradientAngleIndex: PropTypes.number,
};

ImageCard.defaultProps = {
  style: {},
  gradientAngleIndex: undefined,
};

// Expose the angles for user reference
ImageCard.GRADIENT_ANGLES = GRADIENT_ANGLES;

export default ImageCard;
