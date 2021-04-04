# React Native Shiva Dropdown
Beautiful dropdown component for react native, with search feature and focused on better user experience

## Screenshots
![Default variation](https://www.giphy.com/gifs/XTiFVDvUbEGKRoBbov)
![Small variation](https://www.giphy.com/gifs/9KRGcDsmQ6h9pgb4eZ)


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


## Getting Started
### Installation
#### via NPM
```sh
npm install rn-shiva-dropdown
```
#### via Yarn
```sh
yarn add rn-shiva-dropdown
```
### Basic Usage
1. Import the package
2. Create your options array
3. Instantiate the component passing options as prop

```ts
import * as React from 'react';

import { StyleSheet, View, Image } from 'react-native';

import ShivaDropdown from 'rn-shiva-dropdown';

export default function App() {
  return (
    <View style={styles.container}>
      <ShivaDropdown options={dropdownOptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain' 
  },
});

const dropdownOptions = [
  {
    key: 0,
    label: 'Pizza',
    icon: (
      <Image source={{ uri: "https://pt.seaicons.com/wp-content/uploads/2015/10/Pizza-icon.png" }} style={styles.icon} />
    ),
    value: 'Pizza',
  },
  /* other options... */
];
```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
