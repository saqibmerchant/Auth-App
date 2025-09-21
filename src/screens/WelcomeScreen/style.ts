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
  eclipsTop: {
    width: wp('100%'),
    height: hp(25),
  },

  confettis: {
    width: wp('100%'),
    height: hp(45),
    bottom: hp(20),
  },
  welcomeImg: {
    width: wp('70%'),
    height: wp(50),
    position: 'absolute',
    alignSelf: 'center',
    top: hp('27%'),
  },
  hText: {
    fontSize: wp(6),
    alignSelf: 'center',
    maxWidth: wp(70),
   marginBottom : wp(4),
    marginTop : wp('10%'),
    textAlign: 'center',
    fontWeight: '700',
  },

  textwrap:{flex :1, justifyContent :'center'},
  details: {
    fontSize: wp(4),
    alignSelf: 'center',
    maxWidth: wp('77%'),
   marginBottom : wp(4),
    textAlign: 'center',
    color: '#989DA3',
  },
  btnCon: {alignSelf:'center', position :'absolute', bottom : wp('10%')},
  subline: {
    fontSize: wp(4),
    color: '#989DA3',
    fontWeight: '600',
  },
  subline2: {
    fontSize: wp(3.7),
    color: '#B1CEDC',
    fontWeight: '600',
  },
});

export default styles;
