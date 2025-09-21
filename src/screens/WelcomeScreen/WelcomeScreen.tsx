import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};


const WelcomeScreen: React.FC<Props>  = ({navigation}: any) => {
  return (
    
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/eclips-t.png')}
          style={styles.eclipsTop}
        />
     
      
<View style={styles.textwrap}>
        <AppText style={styles.hText}>
          Welcome to Authentication App
        </AppText>
        <AppText style={styles.details}>
          Lorem ipsum dolor sit amet consectetur. Tortor sed in in id donec.
          Auctor auctor enim aliquet dui ac scelerisque.
        </AppText>
        </View>
        <View style={styles.btnCon}>
          <AppButton
            title="Get Started"
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignSelf : 'center',
              marginTop: heightPercentageToDP(2),
              marginBottom: heightPercentageToDP('10%'),
            }}>
            <AppText style={styles.subline}>Already have an account? </AppText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <AppText style={styles.subline2}>Sign In</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

  );
};

export default WelcomeScreen;

