import { ScrollView } from 'react-native-gesture-handler';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import CampaignImage from '../../assets/campaign.png';
import { AntDesign } from '@expo/vector-icons';
import TabBar from '../components/TabBar';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';
import Comment1 from '../../assets/comment1.png';
import Comment2 from '../../assets/comment2.png';
import { Octicons } from '@expo/vector-icons';
import Crown from '../../assets/crown.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const dummyLeaderboard = [
  {},
  { name: 'Trovey', id: '313421', likes: 69 },
  { name: 'Keungshow', id: '12123', likes: 68 },
  { name: 'Edan', id: '43197', likes: 60 },
  { name: 'Day', id: '32133', likes: 58 },
  { name: 'Marf', id: '32109', likes: 55 },
];

export const Campaign = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderComment = (
    name: string,
    mins: number,
    likes: number,
    text: string,
    image: ImageSourcePropType,
  ) => {
    return (
      <View>
        <View row centerV spread>
          <View row centerV>
            <Text marginR-12>{name}</Text>
            <Text grey40>{mins} mins ago</Text>
          </View>
          <View row centerV>
            <MaterialCommunityIcons name="thumb-up" size={18} color="#cecece" />
            <Text marginL-5 grey40>
              {likes}
            </Text>
          </View>
        </View>
        <View row centerV flex marginV-10>
          <Image
            source={image}
            style={{
              width: 60,
              height: 70,
              resizeMode: 'contain',
            }}
          />
          <Text marginL-10 style={{ flex: 1 }}>
            {text}
          </Text>
        </View>
        <View>
          <Text color={'#0085FF'}>Replay as merchant...</Text>
        </View>
      </View>
    );
  };

  const itemDisplays = [
    <View marginT-5>
      <Text>
        Hi Shoppers, we are proudly launching our #OOTD Campaign! Shoot an OOTD with our product,
        and send it to us, and you will have a chance to get a $15 coupon! The best 15 photo even
        got a chance to mint their custom NFT, along with their custom cloth! Get moving boys and
        girls!
      </Text>
    </View>,
    <View marginT-6>
      {renderComment(
        'Trovey',
        15,
        69,
        'Today is the day of my birthday and I’m going to Disneyland!! This #ootd today is the fantasy vibe~😘',
        Comment1,
      )}
      <View marginV-10 height={1} width={'100%'} backgroundColor={'#d0d0d0'} />
      {renderComment(
        'Hugh',
        19,
        14,
        'Today I’m chillin with my bro, went to Sheung Wan got some hot pic for you guys to check out 🔥',
        Comment2,
      )}
    </View>,
    null,
    <View>
      {dummyLeaderboard.map((item, index) => {
        if (index === 0) {
          return (
            <View row centerV spread width={'100%'} marginT-6>
              <View row centerV>
                <Text style={{ width: 50, textAlign: 'center' }}>Rank</Text>
                <Text style={{ width: 200 }}>Username</Text>
              </View>
              <Text>Likes</Text>
            </View>
          );
        }

        return (
          <View row centerV spread width={'100%'} marginT-12>
            <View row centerV>
              {index === 1 ? (
                <Image
                  source={Crown}
                  style={{
                    width: 50,
                    height: 18,
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Text style={{ width: 50, textAlign: 'center' }}>{index}.</Text>
              )}

              <View row centerV width={200}>
                <Text>{item.name}</Text>
                <Text grey40 marginL-8>
                  @{item.id}
                </Text>
              </View>
            </View>
            <Text>{item.likes}</Text>
          </View>
        );
      })}
    </View>,
  ];

  return (
    <View flex>
      <TouchableOpacity
        activeOpacity={0.6}
        br100
        center
        style={{
          position: 'absolute',
          flexDirection: 'row',
          padding: 10,
          left: 12,
          top: 5 + insets.top,
          backgroundColor: 'white',
          zIndex: 999,
        }}
        onPress={() => {
          navigation.dispatch(StackActions.pop(1));
        }}
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          style={{
            right: -4,
          }}
        />
      </TouchableOpacity>
      <Image
        source={CampaignImage}
        style={{
          width: '100%',
          height: '35%',
        }}
      />
      <ScrollView
        style={{
          height: '70%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          zIndex: 2,
          marginTop: '-5%',
          backgroundColor: '#efefef',
        }}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        <View paddingH-22 paddingT-17 backgroundColor="white">
          <View row spread marginB-10>
            <Text color="#0085FF" text80>
              NFT + Offline
            </Text>
            <View row centerV>
              <AntDesign name="clockcircle" size={20} color="#e3e3e3" />
              <Text color={'#bcbcbc'} marginL-8>
                14 Days to go
              </Text>
            </View>
          </View>
          <Text text50BO>👗 💅🏻 Flashsale Campaign - Outfit of the day </Text>
          <View
            marginV-20
            width={'90%'}
            paddingH-10
            height={1}
            backgroundColor={'#d0d0d0'}
            style={{
              alignSelf: 'center',
            }}
          />
          <View row spread centerV>
            <Text text80R black>
              People Participated: 0
            </Text>
            <Text text80R black>
              25,000
            </Text>
          </View>
          <View marginV-5 width={'100%'} height={6} backgroundColor={'#DDDDDD'} br50></View>
          <View
            row
            style={{
              justifyContent: 'space-between',
            }}
          >
            <Text text80L grey30>
              0%
            </Text>
            <Text text80L grey30>
              Target
            </Text>
          </View>
          <View
            marginV-20
            width={'90%'}
            paddingH-10
            height={1}
            backgroundColor={'#d0d0d0'}
            style={{
              alignSelf: 'center',
            }}
          />
          <TabBar
            tabNames={['Description', 'Comments', 'Statistics', 'Leaderboard', 'Settings']}
            selectedIndex={selectedIndex}
            onTabPress={setSelectedIndex}
          />
        </View>
        <View
          paddingT-5
          style={{
            paddingHorizontal: 22,
          }}
        >
          {itemDisplays[selectedIndex]}
        </View>
      </ScrollView>
      <View
        row
        paddingH-12
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          zIndex: 999,
          paddingBottom: insets.bottom + 15,
          paddingTop: 15,
          width: '100%',
          justifyContent: 'flex-end',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Button borderRadius={10} backgroundColor={'white'} outlineColor="black" marginR-10>
          <Text black text70>
            Edit
          </Text>
        </Button>
        <Button borderRadius={10} backgroundColor={'black'}>
          <Text white text70>
            End Campaign
          </Text>
        </Button>
      </View>
    </View>
  );
};
