import React from 'react';

import { SafeAreaView, FlatList, Dimensions } from 'react-native';

import ImageCard from './ImageCard';

const App = () => {
  const data = [
    {
      url: 'https://www.clipartmax.com/png/full/276-2769476_flower-dahlia-pink-transparent-background-350-1-flower-with-no-background.png',
    },
    {
      url: 'https://www.pinclipart.com/picdir/big/519-5191350_car-clip-art-pictures-cartoon-transparent-background-car.png',
    },
    {
      url: 'https://www.nicepng.com/png/full/108-1088748_download-png-image-report-transparent-background-fish-clipart.png',
    },
    {
      url: 'https://www.pngkey.com/png/full/56-560792_free-snowflake-clipart-transparent-background-snowflake-clipart.png',
    },
    {
      url: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9680/penguin-clipart-md.png',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/05/21/12/49/clipart-3418189__340.png',
    },
    {
      url: 'https://cliparting.com/wp-content/uploads/2016/05/Cow-clip-art-pictures-free-clipart-images-clipartcow.png',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png',
    },
    {
      url: 'https://www.clipartmax.com/png/full/276-2769476_flower-dahlia-pink-transparent-background-350-1-flower-with-no-background.png',
    },
    {
      url: 'https://www.pinclipart.com/picdir/big/519-5191350_car-clip-art-pictures-cartoon-transparent-background-car.png',
    },
  ];

  // <Image style={{width: 100, height: 100}} source={{uri: item.url}} />
  const _renderItem = ({ item }) => {
    return <ImageCard item={item} />;
  };
  const keyExtractor = (item, index) => `item_${index}`;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlatList
        horizontal={true}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        data={data}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default App;
