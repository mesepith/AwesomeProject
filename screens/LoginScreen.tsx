// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styles from './LoginScreen.styles'; // You'll create this style file in the next step
import { login } from '../services/AuthService'; // Import the login function

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await login({ email, password });
      setLoading(false);
      navigation.navigate('HomeScreen', { userName: data.name });
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error.response?.data?.error || 'An unexpected error occurred');
      Alert.alert("Login Error", error.response?.data?.error || 'An unexpected error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default LoginScreen;
