import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AppInput = ({
  value,
  label,
  placeholder,
  onChangeText,
  iStyle,
  multiline,
  ...props
}: {
  value?: string;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  iStyle: any;
  multiline: boolean;
  props?: TextInputProps;
}) => {
  return (
    <View>
      <View style={[styles.input, {height: multiline ? 120 : wp(11)}, iStyle]}>
        <View style={styles.labelCon}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TextInput
          style={[styles.inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#979DA3"
          placeholder={placeholder}
          // textAlignVertical="top"
          {...props}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    height: wp(11),
    width: wp('90%'),
    borderWidth: 1.5,
    borderRadius: 26,
    borderColor: '#EAE9E9',
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: wp(2.3),
    fontWeight: '800',
    color: '#B1CEDC',
  },
  labelCon: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    left: wp(5.5),
    top: -wp(2.2),
    paddingHorizontal: 3,
  },
  inputStyle: {
    fontSize: wp(3),
    color: '#979DA3',
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
    textAlignVertical: 'top',
  },
});
