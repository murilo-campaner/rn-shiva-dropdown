import * as React from 'react';

import { StyleSheet, View, Image } from 'react-native';

/* @ts-ignore */
import ShivaDropdown from 'rn-shiva-dropdown';

export default function App() {
  return (
    <View style={styles.container}>
      <ShivaDropdown options={dropdownOptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { width: '100%', height: '100%', resizeMode: 'contain' },
  container: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Icon = ({ uri }: any) => <Image source={{ uri }} style={styles.icon} />;

const dropdownOptions = [
  {
    key: 0,
    label: 'Pizza',
    icon: (
      <Icon uri="https://pt.seaicons.com/wp-content/uploads/2015/10/Pizza-icon.png" />
    ),
    value: 'Pizza',
  },
  {
    key: 1,
    label: 'Hamburguer',
    icon: <Icon uri="https://img.icons8.com/emoji/452/hamburger-emoji.png" />,
    value: 'Hamburguer',
  },
  {
    key: 3,
    label: 'Salad',
    icon: (
      <Icon uri="https://image.flaticon.com/icons/png/512/184/184559.png" />
    ),
    value: 'Salad',
  },
  {
    key: 4,
    label: 'Japanese Food',
    icon: (
      <Icon uri="https://cdn0.iconfinder.com/data/icons/fast-food-35/512/fast_food_menu_restaurant-05-512.png" />
    ),
    value: 'Japanese',
  },
  {
    key: 5,
    label: 'Arab Food',
    icon: (
      <Icon uri="https://cdn4.iconfinder.com/data/icons/fast-food-item-cartoon-style/32/fast-food-shawarma-turkey-food-512.png" />
    ),
    value: 'Arab',
  },
  {
    key: 6,
    label: 'Brazilian Food',
    icon: (
      <Icon uri="https://images.emojiterra.com/google/android-pie/512px/1f35b.png" />
    ),
    value: 'Brazilian',
  },
  {
    key: 7,
    label: 'Chinese Food',
    icon: (
      <Icon uri="https://image.flaticon.com/icons/png/512/1046/1046842.png" />
    ),
    value: 'Chinese Food',
  },
  {
    key: 8,
    label: 'Asian Food',
    icon: (
      <Icon uri="https://image.flaticon.com/icons/png/512/123/123292.png" />
    ),
    value: 'Asian Food',
  },
];
