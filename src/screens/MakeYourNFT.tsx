import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, Incubator, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { If } from '@kanzitelli/if-component';
import { Camera, PermissionStatus } from 'expo-camera';

export const MakeYourNFT: React.FC = observer(() => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);

  const [openedSoc, setOpenedSoc] = useState(false);
  const [selectedSoc, setSelectedSoc] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);
  console.log('permission', hasPermission);

  return (
    <View flex bg-white spread paddingT-50 paddingB-60 paddingH-30>
      <View flex>
        <View row centerV marginB-20>
          <MaterialIcons
            name="arrow-back-ios"
            size={28}
            color="#D9D9D9"
            onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              }
            }}
          />
          <Text center color="black" text50>
            Make Your NFT
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>
            Make your first NFT. Move your camera around your product, a 3D product will be
            generated from your actual product.
          </Text>
          {hasPermission && (
            <Camera
              type={'back'}
              style={{
                marginVertical: 20,
                height: '80%',
                width: '100%',
              }}
            ></Camera>
          )}
        </View>
      </View>
      <Button
        label="Next"
        labelStyle={{
          fontSize: 18,
        }}
        borderRadius={8}
        bg-black
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Checkout');
        }}
      />
    </View>
  );
});
