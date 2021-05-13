import React from 'react';
import PropTypes from 'prop-types';
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

Address.propTypes = {
  streetAddress: PropTypes.string,
  addressLocality: PropTypes.string,
  postalCode: PropTypes.string,
};

Address.defaultProps = {
  streetAddress: undefined,
  addressLocality: undefined,
  postalCode: undefined,
};

export default Address;
