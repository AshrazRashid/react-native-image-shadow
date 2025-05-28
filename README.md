# react-native-image-shadow

A React Native library that generates beautiful shadows from images using color analysis and gradient effects.

## Features

- Automatically extracts dominant colors from images
- Creates dynamic shadows based on image content
- Smooth gradient transitions
- Easy to integrate with existing React Native components
- Lightweight and performant

## Installation

```bash
npm install react-native-image-shadow
# or
yarn add react-native-image-shadow
```

## Usage

```javascript
import {ImageCard} from 'react-native-image-shadow';

const MyComponent = () => {
  return (
    <ImageCard
      source={{uri: 'https://example.com/image.jpg'}}
      style={{width: 300, height: 200}}
    />
  );
};
```

## Props

| Prop            | Type                | Description                             |
| --------------- | ------------------- | --------------------------------------- |
| source          | ImageSourcePropType | The image source (required)             |
| style           | ViewStyle           | Style for the container                 |
| shadowIntensity | number              | Intensity of the shadow (default: 0.5)  |
| borderRadius    | number              | Border radius of the image (default: 8) |

## Dependencies

- react-native-image-colors
- react-native-linear-gradient

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Ashraz Rashid

## Support

If you find this library useful, please consider giving it a star on GitHub!
