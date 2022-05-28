import React from 'react';
import {AppRegistry} from 'react-native';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {name as appName} from './app.json';
import App from './App';

const AppWrapper = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
