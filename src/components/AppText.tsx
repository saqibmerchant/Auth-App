import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppText = ({children, style}: any) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
  },
  text: {
    color: '#000000',
    fontFamily: 'Nunito Sans',
  },
});
