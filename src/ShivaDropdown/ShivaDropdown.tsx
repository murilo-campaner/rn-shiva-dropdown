import 'react-native-reanimated';

import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import MenuIcon from './MenuIcon';
import Dropdown, { OptionType } from './Dropdown';
import { Colors, boxShadow } from './constants';

export enum DROPDOWN_VARIATION {
  SMALL = 'small',
  DEFAULT = 'default',
}

type Props = {
  options?: OptionType[];
  variation?: DROPDOWN_VARIATION.SMALL | DROPDOWN_VARIATION.DEFAULT;
  closeOnTap?: boolean;
};

const ShivaDropdown = ({
  options = [],
  variation = DROPDOWN_VARIATION.DEFAULT,
  closeOnTap = true,
}: Props) => {
  const styles = variantStyles[variation];
  const [isOpened, setIsOpened] = React.useState(false);
  const [visibleOptions, setVisibileOptions] = React.useState(options);
  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>(
    null
  );
  const [inputText, setInputText] = React.useState('');

  const handleInputFocus = React.useCallback(() => {
    setIsOpened(true);
  }, []);

  const handleInputBlur = React.useCallback(() => {
    // setIsOpened(false);
  }, []);

  const handleOptionChange = React.useCallback(
    (option: OptionType) => {
      const selectedValue =
        option && option.key !== selectedOption?.key ? option : null;
      const text = option ? option.label : '';

      setSelectedOption(selectedValue);
      setInputText(text);

      if (closeOnTap) {
        setIsOpened(false);
        setTimeout(() => setVisibileOptions(options), 600);
      }
    },
    [closeOnTap, options, selectedOption]
  );

  const handleInputChange = React.useCallback(
    (text) => {
      setInputText(text);
      const filteredOptions = options.filter(
        (el) => el.label.search(text) !== -1
      );
      setVisibileOptions(filteredOptions);
      setIsOpened(true);
    },
    [options]
  );

  return (
    <View style={[styles.inputWrapper, boxShadow]}>
      <View style={[styles.container]}>
        {variation === DROPDOWN_VARIATION.DEFAULT && (
          <TextInput
            placeholder="Search your food..."
            style={styles.textInput}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={handleInputChange}
            value={inputText}
          />
        )}
        {variation === DROPDOWN_VARIATION.SMALL && selectedOption?.icon ? (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setIsOpened(!isOpened)}
          >
            {selectedOption.icon}
          </TouchableOpacity>
        ) : (
          <MenuIcon
            size={30}
            containerStyle={styles.icon}
            isFocused={isOpened}
            color={Colors.primary}
            onPress={() => setIsOpened(!isOpened)}
          />
        )}
      </View>
      <Dropdown
        options={visibleOptions}
        hideLabel={variation === DROPDOWN_VARIATION.SMALL}
        onChange={handleOptionChange}
        isVisible={isOpened}
      />
    </View>
  );
};

const sharedStyles: any = {
  inputWrapper: {
    backgroundColor: Colors.light,
    borderRadius: 4,
    position: 'relative',

    width: 300,
    height: 70,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    height: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
};

const variantStyles = {
  [DROPDOWN_VARIATION.SMALL]: StyleSheet.create({
    ...sharedStyles,
    inputWrapper: {
      ...sharedStyles.inputWrapper,
      width: 70,
      height: 70,
    },
  }),
  [DROPDOWN_VARIATION.DEFAULT]: StyleSheet.create({
    ...sharedStyles,
    container: {
      ...sharedStyles.container,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
};

export default ShivaDropdown;
