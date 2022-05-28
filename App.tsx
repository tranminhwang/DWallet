import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useI18nextTranslation} from './src/hooks';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

const App = () => {
  const {t, changeLanguage} = useI18nextTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('Hello')}</Text>
      <Button title="VI" onPress={() => changeLanguage('vi')} />
      <Button title="EN" onPress={() => changeLanguage('en')} />
    </View>
  );
};

export default App;
