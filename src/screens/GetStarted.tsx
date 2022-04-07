import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ImageBackground, useWindowDimensions } from 'react-native';
import { Button, Text, View } from 'react-native-ui-lib';

export const GetStarted: React.FC = observer(() => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{
        width,
        height,
      }}
    >
      <View
        flex
        spread
        paddingV-60
        style={{
          backgroundColor: '#000000A0',
        }}
      >
        <View marginT-80 centerH>
          <Text center text30BO white>
            MetaShop
          </Text>
          <Text
            center
            white
            style={{
              width: '70%',
            }}
          >
            the best experience of expanding your business to multiple metaverses.
          </Text>
        </View>
        <View marginH-30>
          <Button borderRadius={8} label="Login" bg-black />
          <Button
            marginT-15
            borderRadius={8}
            label="Getting Started"
            bg-white
            labelStyle={{
              color: 'black',
            }}
            onPress={() => {
              // @ts-ignore
              navigation.navigate('ShopBasicInfo');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
});
