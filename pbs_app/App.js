import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Image source={require('./assets/image/Delivery.PNG')} style={styles.image}/>
        <Image source={require('./assets/image/logos.PNG')} style={styles.imageone}/>
        <Text style={styles.text}>&copy;2024 Punjeree Publications Ltd. All Right Reserved.</Text>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    widdth: 412,
    height: 770,
    backgroundColor: '#cdcbcb',
    justifyContent: 'center',
    borderRadius: 20,
  },
  display: {
    flex: 1,
    width: 400,
    height: 750,
    backgroundColor: '#1c6fd1',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 20,
  },
  image:{
    width: 300,
    height: 300,
    marginLeft: 60,
  },
  imageone: {
    width: 200,
    height: 100,
    alignItems: 'center',
    marginTop: 120,
    marginLeft: 100,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 50,
  },
});