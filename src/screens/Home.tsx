import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, Image, Text, View } from 'react-native-ui-lib';
import USDT from '../../assets/usdt.png';
import CampaignImg from '../../assets/campaign.png';
import { globalStyle } from '../styles/global';
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType } from 'react-native';
import EveningDress from '../../assets/evening-dress.png';
import ManSuit from '../../assets/man-suit.png';
import decentraland from '../../assets/decentraland.png';
import sandbox from '../../assets/sandbox.png';

export const Home: React.FC = () => {
  const insets = useSafeAreaInsets();

  const renderHeader = (title: string) => (
    <View>
      <Text text60BO>{title}</Text>
    </View>
  );

  const renderCampaignCard = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[globalStyle.card, { width: 220, marginRight: 20 }]}
      >
        <Image
          source={CampaignImg}
          style={{
            width: '100%',
            height: 120,
            marginTop: -2,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <View paddingH-10 paddingV-5>
          <Text color="#0085FF" text100>
            NFT + Online
          </Text>
          <Text text80BO>👗 💅🏻 Flashsale Campaign - Outfit of the day </Text>
          <Text text100L grey30 numberOfLines={2}>
            Hi Shoppers, we are proudly launching our #OOTD Campaign! Shoot an OOTD with ....
          </Text>
          <View row spread centerV>
            <Text text100L black>
              65%
            </Text>
            <Text text100L black>
              25000
            </Text>
          </View>
          <View width={'100%'} height={3} backgroundColor={'#DDDDDD'} br40>
            <View width={'65%'} height={'100%'} backgroundColor={'black'} />
          </View>
          <View
            row
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <Text text100L grey30>
              Target
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemCard = (
    image: ImageSourcePropType,
    tags: number,
    id: number,
    name: string,
    orders: number,
    price: number,
  ) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[globalStyle.card, { width: 150, marginRight: 20 }]}
      >
        <Image
          source={image}
          style={{
            width: '100%',
            height: 120,
          }}
        />
        <View paddingH-10 paddingV-5>
          <View row spread centerV>
            <Text text90M>#{id}</Text>
            <View row centerV>
              <Image
                source={decentraland}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                }}
              />
              <Image
                source={sandbox}
                style={{
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          <View row spread centerV>
            <Text text90M>{name}</Text>
            <View row centerV>
              <Text text100R color={'grey'}>
                {price}
              </Text>
              <Image
                source={USDT}
                style={{
                  marginLeft: 2,
                  width: 12,
                  height: 12,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          <Text marginT-10 text100L>
            {orders} Orders Today
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View flex bg-white>
      <View
        row
        centerV
        spread
        bg-black
        paddingB-10
        paddingH-20
        style={{
          paddingTop: insets.top,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Text white text60BO>
          Welcome Back, Staff
        </Text>
        <Avatar label="S" />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 20,
          flexGrow: 1,
        }}
      >
        {renderHeader('Explore')}
        <View row spread paddingH-30 paddingV-20>
          <View centerH>
            <Text text60BO>534</Text>
            <Text>Visits</Text>
          </View>
          <View centerH>
            <Text text60BO>8520</Text>
            <View row centerV>
              <Image
                source={USDT}
                width={20}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  marginRight: 4,
                }}
              />
              <Text>USDT Earned</Text>
            </View>
          </View>
          <View centerH>
            <Text text60BO>759</Text>
            <Text>Followers</Text>
          </View>
        </View>
        {renderHeader('Campaign')}
        <ScrollView
          horizontal
          style={{
            marginHorizontal: -20,
          }}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          {renderCampaignCard()}
          <TouchableOpacity
            style={[
              globalStyle.card,
              { width: 200, justifyContent: 'center', alignItems: 'center', flex: 1 },
            ]}
          >
            <Fontisto name="plus-a" size={24} color="black" />
            <Text marginT-10 text80BO>
              Create Campaign
            </Text>
          </TouchableOpacity>
        </ScrollView>
        {renderHeader('Best Selling')}
        <ScrollView
          horizontal
          style={{
            marginHorizontal: -20,
          }}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          {renderItemCard(EveningDress, 2, 1021, 'Evening Dress', 1200, 99)}
          {renderItemCard(ManSuit, 2, 1329, 'Man Suit', 898, 140)}
        </ScrollView>
      </ScrollView>
    </View>
  );
};