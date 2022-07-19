import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacityButton} from 'components/shared';
import {colorConstants} from 'constants/index';

const {RED} = colorConstants;

interface LoginScreenProps {
  navigation: any;
}
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TouchableOpacityButton
        onPress={() => navigation.navigate('Home')}
        text="Go to home page"
      />
      <TouchableOpacityButton
        text="Go to register"
        onPress={() => navigation.navigate('Register')}
        styles={{
          outline: {
            backgroundColor: RED['600'],
          },
          innerText: {
            textTransform: 'uppercase',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
