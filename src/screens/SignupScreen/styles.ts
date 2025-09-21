import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topCilcle: {
    height: hp(20),
    width: wp('33%'),
    resizeMode: 'contain',
    right: wp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  indiCon: {position: 'absolute', alignSelf: 'center', marginTop: hp(6.5)},
  indicator: {
    fontSize: wp(3),
    fontWeight: '800',
    color: '#989DA3',
  },
  nameImg: {
    height: hp(24),
    width: wp('80%'),
    alignSelf: 'center',
    resizeMode: 'contain',
    bottom: hp(6.5),
  },
  shadowLine: {
    height: 11,
    width: wp('57%'),
    alignSelf: 'center',
    bottom: hp(6),
    marginLeft: wp(10),
  },
  inputContainer: {
    width: wp('80%'),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  hText: {
    fontSize: wp(6),
    alignSelf: 'center',
    maxWidth: wp(70),
    bottom: hp('4%'),
    textAlign: 'center',
    marginTop : 10,
    fontWeight: '700',
  },
  details: {
    fontSize: wp(4),
    alignSelf: 'center',
    maxWidth: wp('77%'),
    bottom: hp('3%'),
    textAlign: 'center',
    color: '#989DA3',
  },
});
export default styles;
