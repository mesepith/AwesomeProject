import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { securedApiCall } from '../services/ApiService';
import { removeToken } from '../utils/TokenService'; // Adjust the path as necessary


const HomeScreen = ({ route, navigation }) => {
  const { userName } = route.params;
  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await securedApiCall(); // Call your protected API
        setProtectedData(data); // Set the data received from the protected API
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch protected data:', error);
        Alert.alert('Error', 'Failed to fetch protected data');
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    await removeToken(); // Clear the stored JWT using TokenService
    navigation.replace('LoginScreen'); // Navigate to the login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={styles.protectedDataText}>Protected Dataz: {JSON.stringify(protectedData)}</Text>
      )}
      {/* <Button title="Logout" onPress={() => navigation.navigate('LoginScreen')} /> */}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  protectedDataText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
