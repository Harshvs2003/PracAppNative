/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(`Logging in with: \nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View >
            <Text >Welcome to ReactNative!</Text>
            <Text >
              {' '}
              Login to get Destroyed By Us!!!
            </Text>
            <Text >Email Address</Text>
            <TextInput
              
              placeholder="example@gmail.com"
              placeholderTextColor=""
              value="email"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text >Password</Text>
            <TextInput
              
              placeholder=""
              placeholderTextColor=""
              value="password"
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />

            <TouchableOpacity  onPress={handleLogin}>
              <Text >Sign In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1
  }
});