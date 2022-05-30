import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colorConstants} from 'constants/index';

const {GRAY, WHITE} = colorConstants;

interface TouchableOpacityButtonProps {
  text: string;
  styles?: {
    outline?: object;
    innerText?: object;
  };
  onPress?: () => void;
}
const TouchableOpacityButton: React.FC<TouchableOpacityButtonProps> = props => {
  const {text, styles, onPress} = props;
  return (
    <TouchableOpacity
      style={{
        ...defaultStyles.outline,
        ...styles?.outline,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...defaultStyles.innerText,
          ...styles?.innerText,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  outline: {
    backgroundColor: GRAY['800'],
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  innerText: {
    fontSize: 16,
    color: WHITE,
    alignSelf: 'center',
    fontWeight: '600',
  },
});

export default TouchableOpacityButton;
