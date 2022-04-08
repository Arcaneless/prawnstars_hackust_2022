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

  const renderCard = () => {
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
          <Text text70>MetaShop #1</Text>
          <View row marginT-5>
            <View row centerV padding-5 marginR-10 bg-red20 style={{ borderRadius: 7 }}>
              <EvilIcons name="location" size={15} color="white" />
              <Text white>25,47</Text>
            </View>
            <View padding-5 bg-grey40 style={{ borderRadius: 7 }}>
              <Text white>Browse Map</Text>
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
          <ScrollView horizontal>{[0, 1, 2, 3].map(num => renderCard())}</ScrollView>

          <Text
            marginT-20
            marginB-10
            style={{
              fontSize: 24,
            }}
          >
            <Ionicons name="checkbox-outline" size={24} color="green" />
            Facebook Metaverse
          </Text>
          <ScrollView horizontal>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                borderWidth: 1,
              }}
            >
              <View>
                <Image
                  style={{
                    height: 180,
                    width: 180,
                  }}
                  source={require('../../assets/land.png')}
                />
              </View>
              <View>
                <Text text50>MetaShop #5</Text>
              </View>
              <View row>
                <View padding-5 bg-red20 style={{ borderRadius: 10 }}>
                  <Text>
                    <EvilIcons name="location" size={15} color="black" />
                    3,12
                  </Text>
                </View>
                <View padding-10 bg-grey40 style={{ borderRadius: 10 }}>
                  <Text>Browse Map</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 8,
                borderWidth: 1,
              }}
            >
              <View>
                <Image
                  style={{
                    height: 180,
                    width: 180,
                  }}
                  source={require('../../assets/land.png')}
                />
              </View>
              <View>
                <Text text50>MetaShop #6</Text>
              </View>
              <View row>
                <View padding-5 bg-red20 style={{ borderRadius: 10 }}>
                  <Text>
                    <EvilIcons name="location" size={15} color="black" />
                    32, 94
                  </Text>
                </View>
                <View padding-10 bg-grey40 style={{ borderRadius: 10 }}>
                  <Text>Browse Map</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 8,
                borderWidth: 1,
              }}
            >
              <View>
                <Image
                  style={{
                    height: 180,
                    width: 180,
                  }}
                  source={require('../../assets/land.png')}
                />
              </View>
              <View>
                <Text text50>MetaShop #7</Text>
              </View>
              <View row>
                <View padding-5 bg-red20 style={{ borderRadius: 10 }}>
                  <Text>
                    <EvilIcons name="location" size={15} color="black" />
                    410, 21
                  </Text>
                </View>
                <View padding-10 bg-grey40 style={{ borderRadius: 10 }}>
                  <Text>Browse Map</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 8,
                borderWidth: 1,
              }}
            >
              <View>
                <Image
                  style={{
                    height: 180,
                    width: 180,
                  }}
                  source={require('../../assets/land.png')}
                />
              </View>
              <View>
                <Text text50>MetaShop #8</Text>
              </View>
              <View row>
                <View padding-5 bg-red20 style={{ borderRadius: 10 }}>
                  <Text>
                    <EvilIcons name="location" size={15} color="black" />
                    15, 200
                  </Text>
                </View>
                <View padding-10 bg-grey40 style={{ borderRadius: 10 }}>
                  <Text>Browse Map</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
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
