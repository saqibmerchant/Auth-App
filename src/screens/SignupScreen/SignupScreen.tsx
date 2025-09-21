import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppText from "../../components/AppText";
import LoginInput from "../../components/LoginInput";
import AppButton from "../../components/AppButton";
import styles from "./styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
type SignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Signup"
>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const { signup, loading } = useContext(AuthContext)!;
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{...styles.container ,}}>
        <ImageBackground
          source={require('../../assets/images/top-circle.png')}
          imageStyle={{
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            position: 'absolute',
            left: -15,
          }}
          style={styles.topCilcle}>
      
        </ImageBackground>

       
        {/* <Image
          source={require('../../assets/images/name-img.png')}
          style={styles.nameImg}
        /> */}
            <TouchableOpacity
            hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}
            style={{marginBottom: wp(5.2),}}
            onPress={() => {
              navigation.goBack();
            }}>
                 <Image
                        source={require('../../assets/images/left.png')}
                        style={{height :45, width:45,marginHorizontal:20,}}
                      />
            {/* <AntDesign name={'arrowleft'} size={30} /> */}
          </TouchableOpacity>
    
        <AppText style={styles.hText}>
          Join Us Today
        </AppText>
        <AppText style={styles.details}>
          Lorem ipsum dolor sit amet consectetur. Tortor sed in in id donec.
          Auctor auctor enim aliquet dui ac scelerisque.
        </AppText>
        <View style={styles.inputContainer}>
          <View style={{marginTop: wp(10), marginBottom: wp(4), gap: 3}}>
               <LoginInput
              validation={false}
              label="Full Name"
              placeholder="Example: John Smith"
              value={name}
            
              onChangeText={text => {
                setName(text  )
        
              }}
            />
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
              // value={cred.pass}
              onChangeText={text => {
                setPassword(text)
              }}
            />
           
          </View>
        </View>
          {loading ? (
        <ActivityIndicator size="large" color="#2563eb" />
      ) : (<AppButton
          title="Sign Up"
          style={{alignSelf: 'center', marginTop: hp(4), marginBottom: hp(4)}}
          onPress={() => {
          signup(name, email, password)
          }}
        />)}
        
      </View>
    </KeyboardAwareScrollView>
  );
};



export default SignupScreen;
