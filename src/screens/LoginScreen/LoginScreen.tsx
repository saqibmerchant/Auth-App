import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import AppText from "../../components/AppText";
import styles from "./styles";

import AppButton from "../../components/AppButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoginInput from "../../components/LoginInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login , loading} = useContext(AuthContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View >
            <Image
          source={require('../../assets/images/eclips-t.png')}
          style={styles.eclipsTop}
        />
        </View>
      <TouchableOpacity
   
        onPress={() => navigation.navigate('Welcome')}>
      <Image
          source={require('../../assets/images/left.png')}
          style={{height :45, width:45,marginHorizontal:20,}}
        />
      </TouchableOpacity>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        
        <AppText style={styles.hText}>Welcome Back</AppText>
        <AppText style={styles.details}>
          Login into your account and enjoy!
        </AppText>
        <View style={styles.inputContainer}>
          <View style={{marginTop: wp(10), marginBottom: wp(4), gap: 15}}>
            <LoginInput
              validation={false}
              label="EMAIL ADDRESS"
              placeholder="Example: john@mail.com"
              value={email}
            
              onChangeText={text => {
                setEmail(text.trim())
        
              }}
            />
            <LoginInput
              validation={false}
              password={true}
              label="PASSWORD"
              placeholder="***************"
              valid={password.length >= 6}
              value={password}
              onChangeText={text => {
                setPassword(text)
              }}
            />
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginBottom: 5}}
              >
              <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>
          </View>
        </View>

               {loading ? (
        <ActivityIndicator size="large" color="#2563eb" />
      ) : (<AppButton
          title="Sign In"
          onPress={()=> login(email, password)}
          // loading={loading}
          style={{alignSelf: 'center', marginTop: hp(5)}}
       
        />)}
        
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.skipText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.skipText, {color: '#B1CEDC'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};



export default LoginScreen;
