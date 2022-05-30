import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {TouchableOpacityButton} from 'components/shared';
import {colorConstants} from 'constants/index';

const {WHITE, GRAY, BLUE} = colorConstants;

interface GetStartedScreenProps {
  navigation: any;
}
const GetStartedScreen: React.FC<GetStartedScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <View style={styles.container}>
        <Text>Alo</Text>
        <View>
          <View>
            <Text style={styles.textTitle}>Create Collects,</Text>
            <Text style={styles.textTitle}>Timeless Artworks</Text>
            <Text style={styles.textDescription}>
              Browse and build your collection of world's most cutting-edge
              digital art
            </Text>
          </View>
          <TouchableOpacityButton
            text="Get Started"
            onPress={() => navigation.navigate('Login')}
            styles={{
              outline: styles.getStartedButtonWrapper,
              innerText: styles.getStartedTextButton,
            }}
          />
          <Text style={styles.baseText}>
            Have an account?
            <Text
              style={styles.innerText}
              onPress={() => navigation.navigate('Login')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    flex: 1,
    backgroundColor: WHITE,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDescription: {
    fontSize: 16,
    marginTop: 24,
    textAlign: 'center',
    color: '#828282',
    fontWeight: '400',
  },
  getStartedButtonWrapper: {
    width: '85%',
    backgroundColor: GRAY['800'],
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 24,
    alignSelf: 'center',
  },
  getStartedTextButton: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '600',
  },
  baseText: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    color: GRAY['600'],
  },
  innerText: {
    color: BLUE['500'],
  },
});

export default GetStartedScreen;
