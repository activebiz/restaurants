import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginRight: 50,
  },
});

const Address = props => {
  const {streetAddress, addressLocality, postalCode} = props;
  return (
    <View style={styles.container}>
      <Text>{streetAddress}</Text>
      <Text>{addressLocality}</Text>
      <Text>{postalCode}</Text>
    </View>
  );
};

export default Address;
