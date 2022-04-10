import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Incubator, Text, TouchableOpacity, View, RadioButton } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { If } from '@kanzitelli/if-component';
import { FontAwesome, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

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
          <View row marginT-40 marginB-10 spread>
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
          <View row marginB-30 spread>
            <Text marginR-10>Total</Text>
            <Text>$297</Text>
          </View>

          <View>
            <View row centerV marginB-10>
              <RadioButton
                style={{
                  borderColor: 'black',
                }}
                value="Pay monthly"
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                }}
              >
                $297
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 10,
                  color: '#808080',
                  alignSelf: 'flex-end',
                }}
              >
                Paid monthly
              </Text>
            </View>
            <View row centerV>
              <RadioButton
                style={{
                  borderColor: 'black',
                }}
                value="Pay annually"
              />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  color: 'green',
                }}
              >
                $3267, 9% off
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 10,
                  color: '#808080',
                  alignSelf: 'flex-end',
                }}
              >
                Paid annually
              </Text>
            </View>
          </View>
          <View>
            <TouchableWithoutFeedback
              style={{
                borderRadius: 8,
                borderWidth: 2,
                marginRight: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                alignContent: 'center',
                marginTop: 30,
              }}
            >
              <View row spread centerV>
                <View row centerV>
                  <FontAwesome name="credit-card" size={24} color="black" />
                  <Text text70 marginL-15 centerV>
                    Credit Card
                  </Text>
                </View>
                <RadioButton
                  style={{
                    borderColor: 'black',
                  }}
                  value="Credit Card"
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={{
                borderRadius: 8,
                borderWidth: 2,
                marginRight: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                alignContent: 'center',
                marginTop: 10,
              }}
            >
              <View row spread>
                <View row>
                  <SimpleLineIcons name="paypal" size={24} color="black" />
                  <Text text70 marginL-15 centerV>
                    Paypal
                  </Text>
                </View>
                <RadioButton
                  style={{
                    borderColor: 'black',
                  }}
                  value="Paypal"
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={{
                borderRadius: 8,
                borderWidth: 2,
                marginRight: 20,
                paddingVertical: 10,
                paddingHorizontal: 10,
                alignContent: 'center',
                marginTop: 10,
              }}
            >
              <View row spread>
                <View row>
                  <AntDesign name="apple-o" size={24} color="black" />
                  <Text text70 marginL-15 centerV>
                    Apple Pay
                  </Text>
                </View>
                <RadioButton
                  style={{
                    borderColor: 'black',
                  }}
                  value="Apple Pay"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>

      <Button
        marginB-5
        marginT-10
        centerV
        label="Checkout"
        labelStyle={{
          fontSize: 20,
        }}
        borderRadius={8}
        bg-black
        onPress={() => {
          // @ts-ignore
          navigation.navigate('MakeYourNFT');
        }}
      />
      <Text marginB-20 green30>
        You won't be charged yet
      </Text>
    </View>
  );
});
