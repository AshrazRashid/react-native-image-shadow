import React from 'react';
import {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
 
const ImageCard = props => {
 const {url} = props.item;
 useEffect(() => {
   getColorsofImage();
 }, []);
 const [primaryColor, SetPrimaryColor] = useState('#228B22');
 const [secondaryColor, SetSecondaryColor] = useState('#228B22');
 const [backgroundColor, SetBackgroundColor] = useState('#228B22');
 
 const getColorsofImage = async () => {
   const result = await ImageColors.getColors(url, {
     fallback: '#A196DE',
     // cache: true,
     key: 'unique_key',
   });
   switch (result.platform) {
     case 'android':
       // android result properties
       SetBackgroundColor(result?.average);
       SetPrimaryColor(result?.vibrant);
       SetSecondaryColor(result?.lightVibrant);
       console.log('result', result);
       break;
     case 'web':
       // web result properties
       const lightVibrantColor = result.lightVibrant;
       console.log('lightVibrantColor', lightVibrantColor);
       break;
     case 'ios':
       // iOS result properties
       SetBackgroundColor(result?.background);
       SetPrimaryColor(result?.primary);
       SetSecondaryColor(result?.secondary);
 
       break;
     default:
       throw new Error('Unexpected platform key');
   }
 };
 
 return (
   <LinearGradient
     colors={[primaryColor, backgroundColor, secondaryColor]}
     useAngle={true}
     start={{x: 1, y: 0}}
     end={{x: 0, y: 1}}
     style={{
       margin: 15,
       height: 100,
       width: 100,
       justifyContent: 'center',
       alignItems: 'center',
     }}>
     <Image
       resizeMode="contain"
       style={{height: '50%', width: '50%'}}
       source={{
         uri: url,
       }}
     />
   </LinearGradient>
 );
};
 
export default ImageCard;