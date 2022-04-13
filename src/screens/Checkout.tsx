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

  const [payType, setType] = useState('Pay annually');
  const [payMethod, setMethod] = useState('Credit Card')

   const renderSubitems = (amount: number, description: string, price: number) => (
     <View row marginB-10 spread>
       <View row>
         <Text marginR-10 grey>
           {amount}x
         </Text>
         <Text grey>{description}</Text>
       </View>
       <Text>${price}</Text>
     </View>
   );

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
          <Text marginB-40>
            Please confirm your information is correct, your shop information and shop venue on the
            metaverse can be changed afterwards.
          </Text>
          {renderSubitems(1, 'Basic Subscription Plan', 100)}
          {renderSubitems(1, 'Decentraland Shop Rental', 89)}
          {renderSubitems(1, 'Facebook Metaverse Shop Rental', 78)}
          {renderSubitems(1, 'NFT Scanning (One off)', 30)}
          <View row marginB-30 spread>
            <Text marginR-10 text70BO>
              Total
            </Text>
            <Text text70BO>$297</Text>
          </View>
          <View>
            <View row centerV marginB-10>
              <RadioButton
                style={{
                  borderColor: 'black',
                }}
                value="Pay monthly"
                onPress={payType => setType('Pay monthly')}
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
                onPress={payType => setType('Pay annually')}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  color: 'green',
                }}
              >
                $3244, 9% off
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
            <View
              style={{
                borderRadius: 8,
                borderWidth: 2,
                marginHorizontal: 10,
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
                  onPress={payMethod => setMethod('Credit Card')}
                />
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                borderWidth: 2,
                marginHorizontal: 10,
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
                  onPress={payMethod => setMethod('Paypal')}
                />
              </View>
            </View>
            <View
              style={{
                borderRadius: 8,
                borderWidth: 2,
                marginHorizontal: 10,
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
                  onPress={payMethod => setMethod('Apple Pay')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Success');
          console.log({ payMethod }, { payType });
        }}
      >
        <View row bg-black centerV center paddingV-10 style={{ borderRadius: 7 }}>
          <AntDesign name="lock1" size={24} color="white" />
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              marginLeft: 5,
            }}
          >
            Checkout
          </Text>
        </View>
      </TouchableOpacity>
      <Text marginB-10 green30 marginT-6 text70>
        You won't be charged yet.
      </Text>
    </View>
  );
});
