import React from 'react';
import {StyleSheet, Text, InputText, Button} from 'react-native';
const Login = () =>{
    return(
        <View style={Styles.container}>
        <View style={Styles.display}>
        <View style={Styles.loginview}>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
            />
        </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            </View>
        
        </View>
        </View>
    );
};
export default Login;
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
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
      width: '80%',
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });