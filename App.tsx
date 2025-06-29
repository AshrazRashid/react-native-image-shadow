/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import ImageCard from './ImageCard';
// import ImageCard from 'react-native-image-shadow';

const demoImages = [
  {
    id: '1',
    url: require('./Images/cute-animal-lion.png'),
  },

  { id: '6', url: require('./Images/images-removebg-preview.png') },

  {
    id: '3',
    url: require('./Images/rainbow.png'),
  },
  { id: '9', url: require('./Images/strawberry.png') },
  {
    id: '7',
    url: require('./Images/sun.png'),
  },
  {
    id: '4',
    url: require('./Images/pumpkin.png'),
  },

  { id: '5', url: require('./Images/ahknbm7c5.png') },
];

export default function App() {
  const renderImageCard = ({ item, index }) => (
    <ImageCard item={item} gradientAngleIndex={index % 6} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Image Shadow Demo</Text>
      <FlatList
        horizontal
        data={demoImages}
        renderItem={renderImageCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    padding: 10,
  },
});
