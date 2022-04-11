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
export const Success: React.FC = observer(() => {
  const navigation = useNavigation();

  const [openedSoc, setOpenedSoc] = useState(false);
  const [selectedSoc, setSelectedSoc] = useState<string | null>(null);

  return (
    <View flex bg-white spread paddingT-50 paddingB-60 paddingH-30>
      <View flex>
        <ScrollView style={{ flex: 1 }}>
          <Text marginT-100 center text30 green30>
            Success!
          </Text>
          <Image>
            style=
            {{
              height: 180,
              width: 180,
            }}
            source={require('../../assets/success.png')}
          </Image>
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
