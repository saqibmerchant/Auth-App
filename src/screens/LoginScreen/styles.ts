import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // padding: 12,
  },
  header: {
    marginTop: hp(5),
  },
   eclipsTop: {
    width: wp('100%'),
    height: hp(25),
  },
  inputContainer: {
    width: wp('80%'),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 25,
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

  indicator: {
    fontSize: 15,
    fontWeight: '800',
    color: '#989DA3',
  },
  imgContainer: {
    width: wp(80),
    height: hp(27),
    alignSelf: 'center',
    // marginTop: hp(1),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  hText: {
    fontSize: wp(6),
    alignSelf: 'center',
    maxWidth: wp(75),
    textAlign: 'center',
    fontWeight: '700',
    marginTop: hp(1.5),
  },
  details: {
    fontSize: wp(4),
    alignSelf: 'center',
    maxWidth: wp('73.6%'),
    marginTop: 15,
    textAlign: 'center',
    color: '#989DA3',
  },
  skipText: {
    fontSize: wp(4),
    fontWeight: '800',
    color: '#989DA3',
    marginTop: hp(1.8),
  },

  forgotText: {
    fontSize: wp(3),
    fontWeight: '900',
    color: '#B1CEDC',
  },
});

export default styles;
