import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Incubator, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { If } from '@kanzitelli/if-component';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const choiceOfSoc = ['Small', 'Medium', 'Large'];
export const ChooseYourLand: React.FC = observer(() => {
  const navigation = useNavigation();

  const [openedSoc, setOpenedSoc] = useState(false);
  const [selectedSoc, setSelectedSoc] = useState<string | null>(null);

  const renderCard = (num:number) => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 8,
          borderWidth: 1,
          marginRight: 20,
        }}
      >
        <Image
          style={{
            height: 180,
            width: 180,
          }}
          source={require('../../assets/land.png')}
        />

        <View paddingV-5 paddingH-5>
          <Text text70>MetaShop #{num}</Text>
          <View row marginT-5>
            <View row centerV padding-5 marginR-10 bg-red20 style={{ borderRadius: 7 }}>
              <EvilIcons name="location" size={15} color="white" />
              <Text text100 white>
                {Math.floor(Math.random() * 500 + 1)}, {Math.floor(Math.random() * 500 + 1)}
              </Text>
            </View>
            <View padding-5 bg-grey40 style={{ borderRadius: 7 }}>
              <Text text100 white>
                Browse Map
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
            Choose Your Land
          </Text>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <Text>Select a land on metaverse to place your NFT product.</Text>
          <View row centerV marginT-10 marginB-10>
            <Ionicons name="checkbox-outline" size={24} color="green" />
            <Text
              marginL-10
              style={{
                fontSize: 24,
              }}
            >
              Decentraland
            </Text>
          </View>
          <ScrollView horizontal>{[0, 1, 2, 3].map(num => renderCard(num + 1))}</ScrollView>

          <View row centerV marginT-10 marginB-10>
            <Ionicons name="checkbox-outline" size={24} color="green" />
            <Text
              marginL-10
              style={{
                fontSize: 24,
              }}
            >
              Facebook Metaverse
            </Text>
          </View>
          <ScrollView horizontal>{[0, 1, 2, 3].map(num => renderCard(num + 5))}</ScrollView>
        </ScrollView>
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
          navigation.navigate('MakeYourNFT');
        }}
      />
    </View>
  );
});
