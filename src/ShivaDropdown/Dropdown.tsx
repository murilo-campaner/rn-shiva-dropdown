import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { View as MotiView } from 'moti';
import { Colors, boxShadow } from './constants';

export type OptionType = {
  key: number;
  icon: React.ReactNode;
  label: string;
  value: any;
};

type Props = {
  options?: OptionType[];
  hideLabel?: boolean;
  initialSelectedKey?: any;
  onChange?: (option: OptionType) => void;
  isVisible?: boolean;
};

const Dropdown = ({
  options = [],
  onChange = () => {},
  hideLabel = false,
  initialSelectedKey,
  isVisible = false,
}: Props) => {
  const selected = initialSelectedKey || options.find((el) => !!el)?.key;
  const [selectedKey, setSelectedKey] = React.useState(selected);
  const [focusedKey, setFocusedKey] = React.useState(undefined);

  const runStyles = {
    backgroundColor: Colors.light,
  };

  const appearAnimation = !isVisible
    ? { display: 'none', maxHeight: 0, minHeight: 0 }
    : { display: 'flex', maxHeight: 2000, minHeight: 0 };

  const handleOptionPress = React.useCallback(
    (option) => {
      setSelectedKey((previousState: any) => {
        if (previousState === option.key) {
          return undefined;
        }
        return option.key;
      });
      onChange(option);
    },
    [onChange]
  );

  const handleOptionPressIn = React.useCallback((option) => {
    setFocusedKey(option.key);
  }, []);

  const handleOptionPressOut = React.useCallback((_option) => {
    setFocusedKey(undefined);
  }, []);

  return (
    <MotiView
      pointerEvents="box-none"
      style={[styles.container, runStyles, boxShadow]}
      animate={appearAnimation}
      transition={{ type: 'timing', duration: 400 }}
    >
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
        {options.map((option) => {
          const isSelected = option.key === selectedKey;
          const isFocused = option.key === focusedKey;
          const runtimeStyles = {
            ...styles.option,
            ...(isSelected ? styles.selectedOption : {}),
            ...(isFocused ? styles.focusedOption : {}),
          };
          return (
            <TouchableOpacity
              key={option.key}
              activeOpacity={0.8}
              onPress={() => handleOptionPress(option)}
              onPressIn={() => handleOptionPressIn(option)}
              onPressOut={() => handleOptionPressOut(option)}
              style={runtimeStyles}
            >
              {option.icon && <View style={styles.icon}>{option.icon}</View>}
              {!hideLabel && <Text style={styles.label}>{option.label}</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: 85,
    borderRadius: 4,
  },
  scrollView: {
    flex: 1,
    maxHeight: 300,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  icon: {
    flexBasis: 30,
    flex: 1,
    flexShrink: 0,
    flexGrow: 0,
    marginRight: 16,
    maxWidth: 55,
    maxHeight: 55,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: Colors.dark,
  },
  selectedOption: {
    borderLeftColor: Colors.dark,
    backgroundColor: '#FCE9ED',
  },
  focusedOption: {
    backgroundColor: '#fbf2f4',
  },
});

export default Dropdown;
