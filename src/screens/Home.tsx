import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, Image, Text, View } from 'react-native-ui-lib';
import USDT from '../../assets/usdt.png';
import CampaignImg from '../../assets/campaign.png';
import { globalStyle } from '../styles/global';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, ImageSourcePropType } from 'react-native';
import EveningDress from '../../assets/evening-dress.png';
import ManSuit from '../../assets/man-suit.png';
import decentraland from '../../assets/decentraland.png';
import sandbox from '../../assets/sandbox.png';
import { LineChart } from 'react-native-chart-kit';
import { FlagContext } from '../../App';
import Sing from '../../assets/sing.jpg';

export const Home: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { flag } = useContext(FlagContext);

  const renderHeader = (title: string) => (
    <View>
      <Text text60BO>{title}</Text>
    </View>
  );

  const renderCampaignCard = (
    image: ImageSourcePropType,
    name: string,
    text: string,
    percentage: number,
  ) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[globalStyle.card, { width: 220, marginRight: 20 }]}
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Campaign');
        }}
      >
        <Image
          source={image}
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
            NFT + Offline
          </Text>
          <Text text80BO>{name}</Text>
          <Text text100L grey30 numberOfLines={2}>
            {text}
          </Text>
          <View row spread centerV>
            <Text text100L black>
              {percentage}%
            </Text>
            <Text text100L black>
              25,000
            </Text>
          </View>
          <View width={'100%'} height={3} backgroundColor={'#DDDDDD'} br40>
            <View width={`${percentage}%`} height={'100%'} backgroundColor={'black'} br40 />
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
    orders: string,
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
            <Text text60BO>8,520</Text>
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
          {renderCampaignCard(
            Sing,
            '🎤 😌 Expired Campaign - Sing to your staff',
            "Fellow shoppers, let's sing to your staff in metaverse, express your love and passion...",
            100,
          )}
          {flag &&
            renderCampaignCard(
              CampaignImg,
              '👗 💅🏻 Flashsale Campaign - Outfit of the day ',
              'Hi Shoppers, we are proudly launching our #OOTD Campaign! Shoot an OOTD with ....',
              0,
            )}
          <TouchableOpacity
            style={[
              globalStyle.card,
              { width: 200, height: 220, justifyContent: 'center', alignItems: 'center', flex: 1 },
            ]}
            onPress={() => {
              // @ts-ignore
              navigation.navigate('NewCampaign');
            }}
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
          {renderItemCard(EveningDress, 2, 1021, 'Evening Dress', '1,200', 99)}
          {renderItemCard(ManSuit, 2, 1329, 'Man Suit', '898', 140)}
        </ScrollView>
        {renderHeader('Statistics')}
        <TouchableOpacity style={[globalStyle.card, { marginTop: 10, marginBottom: 20 }]}>
          <View paddingH-20 paddingT-10 row spread>
            <Text text65>Conversion Rate</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={28}
              color="#D9D9D9"
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
              }}
            />
          </View>
          <View center>
            <LineChart
              data={{
                labels: ['15/3', '16/3', '17/3', '18/3', '19/3'],
                datasets: [
                  {
                    data: [10, 30, 40, 60, 80],
                  },
                ],
              }}
              segments={2}
              width={Dimensions.get('window').width - 65} // from react-native
              height={200}
              yAxisInterval={1} // optional, defaults to 1
              yLabelsOffset={15}
              chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgb(0, 0, 0)`,
                labelColor: (opacity = 1) => `rgba(150, 150, 150, ${opacity})`,

                style: {
                  borderRadius: 16,
                  borderColor: 'black',
                  borderWidth: 1,
                },
                propsForDots: {
                  r: '4',
                  fill: 'black',
                },
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
