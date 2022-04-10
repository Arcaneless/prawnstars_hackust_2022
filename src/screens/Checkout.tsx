import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Incubator, Text, TouchableOpacity, View, RadioButton } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { If } from '@kanzitelli/if-component';

export const Checkout: React.FC = observer(() => {
  const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);

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
            Checkout
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Text>
            Please confirm your information is correct, your shop information and shop venue on the
            metaverse can be changed afterwards.
          </Text>

          <View row marginT-20 marginB-10 spread>
            <View row>
              <Text marginR-10 grey>
                1X
              </Text>
              <Text grey>Basic Subscription Plan</Text>
            </View>
            <Text>$100</Text>
          </View>

          <View row marginB-10 spread>
            <View row>
              <Text marginR-10>1X</Text>
              <Text>Decentraland Shop Rental</Text>
            </View>
            <Text>$89</Text>
          </View>

          <View row marginB-10 spread>
            <View row>
              <Text marginR-10>1X</Text>
              <Text>Facebook Metaverse Shop Rental</Text>
            </View>
            <Text>$78</Text>
          </View>

          <View row marginB-10 spread>
            <View row>
              <Text marginR-10>1X</Text>
              <Text>NFT Scanning (One off)</Text>
            </View>
            <Text>$30</Text>
          </View>

          <View row marginB-10 spread>
            <View row>
              <Text marginR-10>Total</Text>
            </View>
            <Text>$297</Text>
          </View>
        </ScrollView>

        <View>
          <View row centerV>
            <RadioButton value="First" />
            <Text marginL-5>$297</Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 10,
                color: '#808080',
              }}
            >
              Paid monthly
            </Text>
          </View>
          <View row centerV>
            <RadioButton value="Second" />
            <Text marginL-5>$3267, 9% off</Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 10,
                color: '#808080',
              }}
            >
              Paid annually
            </Text>
          </View>
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
          navigation.navigate('MakeYourNFT');
        }}
      />
    </View>
  );
});
