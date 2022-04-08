import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Incubator, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { If } from '@kanzitelli/if-component';

const choiceOfSoc = ['Small', 'Medium', 'Large'];
export const ShopBasicInfo: React.FC = observer(() => {
  const navigation = useNavigation();

  const [openedSoc, setOpenedSoc] = useState(false);
  const [selectedSoc, setSelectedSoc] = useState<string | null>(null);

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
            Shop Basic Info
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Text>Please enter some basic information of your app.</Text>
          <Text marginT-20 marginB-10 text70>
            Shop name
          </Text>
          <Incubator.TextField
            style={{
              backgroundColor: 'white',
              padding: 15,
              height: 40,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: '#d9d9d9',
            }}
            placeholder="Shop name..."
          />
          <Text marginT-20 marginB-10 text70>
            Country
          </Text>
          <Incubator.TextField
            style={{
              backgroundColor: 'white',
              padding: 15,
              height: 40,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: '#d9d9d9',
            }}
            placeholder="Country..."
          />
          <Text marginT-20 marginB-10 text70>
            Scale of Company
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 15,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: '#d9d9d9',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setOpenedSoc(s => !s);
              }}
              activeOpacity={0.8}
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <Text color={selectedSoc ? 'black' : 'grey'}>{selectedSoc ?? 'Pick One'}</Text>
              <MaterialIcons
                name={openedSoc ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
            <Collapsible collapsed={!openedSoc}>
              {choiceOfSoc.map(soc => (
                <TouchableOpacity
                  onPress={() => {
                    setOpenedSoc(false);
                    setSelectedSoc(soc);
                  }}
                  key={soc}
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Text>{soc}</Text>
                </TouchableOpacity>
              ))}
            </Collapsible>
          </View>
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
          navigation.navigate('ChooseYourLand');
        }}
      />
    </View>
  );
});
