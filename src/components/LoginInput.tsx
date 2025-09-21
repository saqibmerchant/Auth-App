import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const LoginInput = ({
  value,
  label,
  validationTitle,
  placeholder,
  validationData,
  onChangeText,
  validation = true,
  valid = true,
  password,
  ...props
}: {
  value?: string;
  label?: string;
  validationTitle?: string;
  placeholder?: string;
  validationData?: [] | any;
  onChangeText?: (text: string) => void;
  validation?: boolean;
  valid?: boolean;
  password?: boolean;
  props?: TextInputProps;
}) => {
  const [isSecure, setIsSecure] = React.useState(true);
  return (
    <View style={{marginBottom: 20}}>
      <View style={styles.input}>
        <View style={styles.labelCon}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#979DA3"
          secureTextEntry={password && isSecure}
          placeholder={placeholder}
          {...props}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
          {password ? (
            <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
              {isSecure ? (   <Image
                        source={require('../assets/images/eye.png')}
                        style={{height :wp(5), width:wp(5),}}
                      />) :(  
                         <Image
                        source={require('../assets/images/hidden.png')}
                        style={{height :wp(5), width:wp(5),}}
                      />
                      )}
            
            
            </TouchableOpacity>
          ) : null}
          {value && valid ? (
           
              <Image
                        source={require('../assets/images/check.png')}
                        style={{height :wp(4), width:wp(4),}}
                      />
          ) : value && !valid ? (
              <Image
                        source={require('../assets/images/cross.png')}
                        style={{height :wp(4), width:wp(4),}}
                      />
          ) : null}
        </View>
      </View>

      {validation ? (
        <View style={{marginLeft: wp(5), marginTop: wp(4)}}>
          <Text style={styles.validityLabel}>{validationTitle}</Text>
          {validationData?.map((item: any, index: number) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 7,
                  marginTop: 10,
                }}>
                <View style={styles.radioBtn}>
                  <View
                    style={[
                      styles.radioBtnIn,
                      {backgroundColor: valid ? "#B1CEDC" : "#000"},
                    ]}
                  />
                </View>
                <Text style={styles.validText}>{item}</Text>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  input: {
    height: wp(11),
    width: wp('70%'),
    borderWidth: 1.5,
    borderRadius: 999,
    borderColor: '#EAE9E9',
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: wp(2.2),
    fontWeight: '800',
    color: '#B1CEDC',
  },
  labelCon: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    left: wp(5.5),
    top: -wp(2.3),
    paddingHorizontal: 3,
  },
  inputStyle: {
    flex: 1,
    fontSize: wp(4),
    color: '#979DA3',
  },
  validityLabel: {
    fontSize: wp(3),
    color: '#979DA3',
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  radioBtn: {
    height: wp(3.5),
    width: wp(3.5),
    backgroundColor: '#EEEEEE',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBtnIn: {
    height: wp(2),
    width: wp(2),
    backgroundColor: '#B1CEDC',
    borderRadius: 999,
  },
  validText: {
    fontSize: wp(3.7),
    fontWeight: '600',
    color: '#989DA3',
  },
});
