import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Home from './screens/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginTop:Contants.statusBarHeight,
    alignItems: 'center',
    // flexDirection:"row",
    // justifyContent: 'center',
  },
});
