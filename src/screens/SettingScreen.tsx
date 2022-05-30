import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SettingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
    </View>
  );
};

export default SettingScreen;
