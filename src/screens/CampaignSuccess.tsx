import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Incubator, Text, TouchableOpacity, View, Image } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { If } from '@kanzitelli/if-component';

const choiceOfSoc = ['Small', 'Medium', 'Large'];
export const CampaignSuccess: React.FC = observer(() => {
  const navigation = useNavigation();

  const [openedSoc, setOpenedSoc] = useState(false);
  const [selectedSoc, setSelectedSoc] = useState<string | null>(null);

  return (
    <View flex bg-white spread paddingT-50 paddingB-60 paddingH-30>
      <View flex>
        <Text marginT-100 center text30 green30>
          Success!
        </Text>
        <Image
          style={{
            alignSelf: 'center',
            marginTop: 40,
            height: 200,
            width: 200,
          }}
          source={require('../../assets/success.png')}
        />
        <Text marginT-20 center>
          Your new campaign has been created on metaverse! Let's dive into the next
          generation shopping experience!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.navigate('BottomTab');
        }}
      >
        <View
          row
          centerV
          center
          paddingV-10
          marginH-50
          style={{ borderRadius: 7, backgroundColor: '#32CD32' }}
        >
          <Text text70 white>
            Back to Home
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
});
