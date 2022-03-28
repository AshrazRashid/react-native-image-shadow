/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/
 
import React from 'react';
import type {Node} from 'react';
import {
 SafeAreaView,
 StyleSheet,
 useColorScheme,
 FlatList,
 Dimensions,
} from 'react-native';
 
import {
 Colors,
} from 'react-native/Libraries/NewAppScreen';
import ImageCard from './Components/ImageCard';
 
const App: () => Node = () => {
 const isDarkMode = useColorScheme() === 'dark';
 
 const data = [
   {
     url: 'https://previews.123rf.com/images/mainfu/mainfu1808/mainfu180800339/111520499-simple-flower-of-pink-colors-on-a-transparent-background.jpg',
   },
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
 ];
 
 const backgroundStyle = {
   flex: 1,
   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
 };
 {
   /* <ImageCard item={item.url} /> */
 }
 // <Image style={{width: 100, height: 100}} source={{uri: item.url}} />
 const _renderItem = ({item}) => {
   return <ImageCard item={item} />;
 };
 const keyExtractor = (item, index) => `item_${index}`;
 
 return (
   <SafeAreaView style={backgroundStyle}>
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
 
const styles = StyleSheet.create({
 sectionContainer: {
   marginTop: 32,
   paddingHorizontal: 24,
 },
 sectionTitle: {
   fontSize: 24,
   fontWeight: '600',
 },
 sectionDescription: {
   marginTop: 8,
   fontSize: 18,
   fontWeight: '400',
 },
 highlight: {
   fontWeight: '700',
 },
});
 
export default App;