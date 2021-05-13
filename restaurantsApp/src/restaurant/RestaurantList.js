import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  RefreshControl,
  View,
  Alert,
} from 'react-native';
import RestaurantCard from './RestaurantCard';
import {getRestaurants} from '../service';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const RestaurantList = () => {
  const [state, setState] = useState({
    data: undefined,
    loading: true,
  });

  const {data: {restaurant: {items = []} = {}} = {}, loading} = state;

  useEffect(() => {
    const populate = async () => {
      try {
        const data = await getRestaurants();
        setState(prevState => ({
          ...prevState,
          loading: false,
          data: data ? data.data : {},
        }));
      } catch (e) {
        console.log(e);
        setState(prevState => ({
          ...prevState,
          loading: false,
          data: undefined,
        }));
        Alert.alert('Opps something went wrong!');
      }
    };
    if (loading === true) {
      populate();
    }
  }, [loading]);

  const onRefresh = () => {
    setState(prevState => ({
      ...prevState,
      data: undefined,
      loading: true,
    }));
  };

  const renderItem = ({item}) => (
    <View>
      <RestaurantCard {...item} />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default RestaurantList;
