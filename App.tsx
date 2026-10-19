/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import './global.css';
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
        <SafeAreaView className='flex-1 bg-white'>
          <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-2xl font-bold text-blue-600">
              NativeWind is working!
            </Text>
          </View>
          <View>
            <Text>Welcome to ReactNative!</Text>
            <Text> Login to get Destroyed By Us!!!</Text>
            <Text>Email Address</Text>
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor=""
              value="email"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text>Password</Text>
            <TextInput
              placeholder=""
              placeholderTextColor=""
              value="password"
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />

            <TouchableOpacity onPress={handleLogin}>
              <Text>Sign In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

export default App;

