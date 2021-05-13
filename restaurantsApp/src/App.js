import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, StyleSheet} from 'react-native';
import RestaurantList from './restaurant/RestaurantList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <RestaurantList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
