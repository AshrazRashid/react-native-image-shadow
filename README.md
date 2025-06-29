# react-native-image-shadow

[![npm version](https://img.shields.io/npm/v/react-native-image-shadow.svg)](https://www.npmjs.com/package/react-native-image-shadow)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.80.0+-blue.svg)](https://reactnative.dev)

<p align="center">
  <img src="./Simulator Screen Recording - iPhone 16 Pro - 2025-06-29 at 16.50.40.gif" alt="react-native-image-shadow demo" width="300" />
</p>

A React Native library that generates beautiful shadows from images using color analysis and gradient effects. Automatically extracts dominant colors from images and creates dynamic gradient backgrounds that complement the image content.

## ✨ Features

- 🎨 **Automatic Color Extraction** - Extracts dominant colors from images using advanced palette analysis
- 🌈 **Dynamic Gradients** - Creates beautiful gradient backgrounds based on image content
- 🌀 **Multiple Gradient Angles** - 6 different gradient directions for variety
- 🧩 **Easy Integration** - Simple API that works with existing React Native components
- ⚡ **Performance Optimized** - Lightweight and efficient with proper memoization
- 🛡️ **Error Handling** - Graceful fallbacks for failed image loads or color extraction
- 📱 **Cross Platform** - Works on both iOS and Android

## 📦 Installation

### Prerequisites

Make sure you have the following dependencies installed in your React Native project:

```sh
npm install react-native-linear-gradient @somesoap/react-native-image-palette
# or
yarn add react-native-linear-gradient @somesoap/react-native-image-palette
```

### Install the library

```sh
npm install react-native-image-shadow
# or
yarn add react-native-image-shadow
```

### iOS Setup

For iOS, you'll need to install CocoaPods dependencies:

```sh
cd ios && pod install && cd ..
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ImageCard from 'react-native-image-shadow';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageCard
        item={{
          url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        }}
        style={{ width: 200, height: 200 }}
        gradientAngleIndex={1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
```

## 📖 API Reference

### Props

| Prop                 | Type   | Required | Default | Description                          |
| -------------------- | ------ | -------- | ------- | ------------------------------------ |
| `item`               | object | ✅       | -       | Object containing the image URL      |
| `item.url`           | string | ✅       | -       | URL or require() path to the image   |
| `style`              | object | ❌       | -       | Custom styles for the container      |
| `gradientAngleIndex` | number | ❌       | auto    | Index to select gradient angle (0-5) |

### Gradient Angles

The library provides 6 different gradient angles that you can select using `gradientAngleIndex`:

- **0**: Diagonal from bottom-left to top-right
- **1**: Diagonal from top-left to bottom-right
- **2**: Diagonal from top-right to bottom-left
- **3**: Vertical from top to bottom
- **4**: Diagonal from bottom-right to top-left
- **5**: Diagonal from top-right to bottom-left (alternative)

If no `gradientAngleIndex` is provided, the library automatically selects an angle based on the image URL hash.

## 💡 Usage Examples

### Basic Usage

```jsx
import ImageCard from 'react-native-image-shadow';

<ImageCard
  item={{
    url: 'https://example.com/image.jpg',
  }}
/>;
```

### Custom Styling

```jsx
<ImageCard
  item={{
    url: 'https://example.com/image.jpg',
  }}
  style={{
    width: 300,
    height: 200,
    borderRadius: 25,
    margin: 20,
  }}
/>
```

### Specific Gradient Angle

```jsx
<ImageCard
  item={{
    url: 'https://example.com/image.jpg',
  }}
  gradientAngleIndex={2}
  style={{ width: 150, height: 150 }}
/>
```

### Multiple Cards with Different Angles

```jsx
import React from 'react';
import { FlatList, View } from 'react-native';
import ImageCard from 'react-native-image-shadow';

const images = [
  { id: '1', url: 'https://example.com/image1.jpg' },
  { id: '2', url: 'https://example.com/image2.jpg' },
  { id: '3', url: 'https://example.com/image3.jpg' },
];

export default function ImageGallery() {
  const renderImageCard = ({ item, index }) => (
    <ImageCard
      item={item}
      gradientAngleIndex={index % 6}
      style={{ width: 120, height: 120, margin: 10 }}
    />
  );

  return (
    <FlatList
      data={images}
      renderItem={renderImageCard}
      keyExtractor={item => item.id}
      horizontal
    />
  );
}
```

### Local Images

```jsx
<ImageCard
  item={{
    url: require('./assets/local-image.png'),
  }}
  style={{ width: 200, height: 200 }}
/>
```

## 🎨 How It Works

1. **Image Analysis**: The library uses `@somesoap/react-native-image-palette` to extract dominant colors from the image
2. **Color Selection**: It intelligently selects primary and background colors from the palette
3. **Gradient Creation**: Creates a beautiful gradient using the extracted colors
4. **Fallback Handling**: If color extraction fails, it uses default colors and fallback images

## 🔧 Customization

### Default Colors

The library uses a modern teal blue (`#36D1C4`) as the default color when color extraction fails.

### Available Gradient Angles

You can access the available gradient angles programmatically:

```jsx
import ImageCard from 'react-native-image-shadow';

console.log(ImageCard.GRADIENT_ANGLES);
// Returns array of gradient angle configurations
```

## 📱 Example App

Check out the example app in the `example/LatestApp` directory to see the library in action:

```sh
cd example/LatestApp
npm install
# or
yarn install

# For iOS
npx react-native run-ios

# For Android
npx react-native run-android
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient) for gradient support
- [@somesoap/react-native-image-palette](https://github.com/somesoap/react-native-image-palette) for color extraction
- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) for optimized image loading

---

**Made with ❤️ by [Ashraz Rashid](https://github.com/AshrazRashid)**
