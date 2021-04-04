import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View as MotiView } from 'moti';

type Props = {
  size?: number;
  isFocused?: boolean;
  color?: string;
  containerStyle?: any;
  onPress?: () => void;
};

const MenuIcon = ({
  color = '#D62049',
  size = 26,
  isFocused = true,
  containerStyle = {},
  onPress = () => {},
  ...props
}: Props) => {
  const lineStyle = {
    marginTop: size * 0.2,
    backgroundColor: color,
    height: Math.round(size * 0.1),
  };

  const wrapperStyle = { width: size, height: size, ...containerStyle };
  const centerLineAnimation = isFocused ? { opacity: 0 } : { opacity: 1 };
  const centerDelay = isFocused ? 0 : 200;
  const sideDelay = isFocused ? 200 : 0;

  const firstLineAnimation = isFocused
    ? {
        rotate: '120deg',
        translateY: (size + size * 0.1) / 4,
        translateX: size / 2,
        width: size * 0.5,
      }
    : { rotate: '0deg', translateY: 0, translateX: 0, width: size };
  const lastLineAnimation = isFocused
    ? {
        rotate: '60deg',
        translateY: -(size + size * 0.1) / 4,
        translateX: size / 4,
        width: size * 0.5,
      }
    : { rotate: '0deg', translateY: 0, translateX: 0, width: size };

  const transitionConfig: any = {
    opacity: {
      delay: centerDelay,
    },
    width: {
      delay: centerDelay,
    },
    translateX: {
      type: 'timing',
      delay: sideDelay,
    },
    translateY: {
      type: 'timing',
      delay: sideDelay,
    },
    rotate: {
      type: 'timing',
      delay: sideDelay,
    },
  };

  return (
    <TouchableOpacity style={wrapperStyle} onPress={onPress} {...props}>
      <MotiView
        style={[styles.line, lineStyle]}
        animate={firstLineAnimation}
        transition={transitionConfig}
      />
      <MotiView
        style={[styles.line, lineStyle]}
        animate={centerLineAnimation}
        transition={transitionConfig}
      />
      <MotiView
        style={[styles.line, lineStyle]}
        animate={lastLineAnimation}
        transition={transitionConfig}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    borderRadius: 1,
  },
});

export default MenuIcon;
