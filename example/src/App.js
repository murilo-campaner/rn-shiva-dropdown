import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ShivaDropdown from 'rn-shiva-dropdown';
export default function App() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, null, 'Example'),
    React.createElement(ShivaDropdown, null)
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
