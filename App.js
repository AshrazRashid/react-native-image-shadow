import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ImageCard from '../src';

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
