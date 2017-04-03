import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Root extends React.Component<{}, {}> {
  render() {
    return (
      <View
        style={styles.container}>
        <Text
          style={styles.title}>
          { 'REACT NATIVE APP WITH TYPESCRIPT' }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e5fec',
    justifyContent: 'center' as any,
    alignItems: 'center' as any,
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 50,
    textAlign: 'center' as any,
  },
});

export default Root;
