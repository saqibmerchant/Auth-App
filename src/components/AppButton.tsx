import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


const AppButton = ({
  title,
  fill = true,
  style,
  loading,
  textStyle,
  onPress,
}: any) => {
  return fill ? (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btnContainer, style]}>
        {loading ? (
          <ActivityIndicator size={'large'} color={'#fff'} />
        ) : (
          <Text style={[styles.btnText, textStyle]} numberOfLines={1}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.fillbtnContainer, style]}>
        <Text style={styles.fillbtnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnContainer: {
    height: wp(12),
    width: wp('77%'),
    backgroundColor: '#B1CEDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    marginTop: wp(3),
  },
  btnText: {
    fontSize: wp(4.2),
    fontWeight: '800',
    color: '#FFFFFF',
  },
  fillbtnContainer: {
    height: wp(12),
    width: wp('77%'),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#B1CEDC',
    marginTop: wp(3),
  },
  fillbtnText: {
    fontSize: wp(4.2),
    fontWeight: '800',
    color: '#B1CEDC',
  },
});
