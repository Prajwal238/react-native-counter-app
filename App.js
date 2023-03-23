import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { AppBar } from "@react-native-material/core";
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

export default function App() {

  const [currentNumber, setNumber] = useState(0)

  const onIncrement = (value) => {
    setNumber(++value)
    console.log(currentNumber)
  }

  return (
    <SafeAreaView style={styles.scaffold}>
    <AppBar title='React-Native Demo App' color='skyblue' titleStyle={styles.appBarTitleStyle} />
    <View style={styles.container}>
      <Text>You have pushed the button this many times:</Text>
      <Text>{currentNumber}</Text>
      <Pressable style={styles.floatingActionButtonStyle} onPress={() => onIncrement(currentNumber)}>
        <Text style={styles.fabTextStyle}>+</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scaffold: {
    flex: 1
  },
  appBarTitleStyle: {
    color: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingActionButtonStyle: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'skyblue',
    position: 'absolute',
    bottom: 40,
    elevation: 5,
    right: 30
  },
  fabTextStyle: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  }
});
