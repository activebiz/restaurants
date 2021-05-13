import React from 'react';
import {StyleSheet, View, Linking, Alert} from 'react-native';
import {Card} from 'react-native-elements';
import {Chip} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Address from './Address';

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: 'row',
  },
  addressItem: {
    marginLeft: 'auto',
  },
  addressAction: {
    marginLeft: 'auto',
  },
});

const RestaurantCard = props => {
  const {name, url, geo: {address = {}} = {}} = props;

  const openUrl = async value => {
    try {
      const supported = await Linking.canOpenURL(value);
      if (!supported) {
        return Promise.reject(new Error('opening url is not supported'));
      }
      return await Linking.openURL(value);
    } catch (err) {
      console.log(`Error opening url ${err}`);
      Alert.alert('could not open url');
    }
  };

  return (
    <Card>
      <Card.Title>
        <Chip
          title={name}
          icon={{
            name: 'restaurant',
            type: 'MaterialIcons',
            size: 24,
            color: 'white',
          }}
          iconRight
        />
      </Card.Title>
      <Card.Divider />
      <View style={styles.addressContainer}>
        <Address style={styles.addressItem} {...address} />
        <Icon
          style={styles.addressAction}
          reverse
          name="launch"
          size={24}
          onPress={() => openUrl(url)}
        />
      </View>
    </Card>
  );
};

export default RestaurantCard;
