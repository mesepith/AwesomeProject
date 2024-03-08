// RegistrationScreen.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f7f7f7',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
  },
  linkText: {
    marginTop: 15, // Adds space above the link
    color: '#007BFF', // Sets the link color to blue
    textAlign: 'center', // Centers the link text
  },
  errorText: {
    color: 'red', // Color for the error message
    marginTop: 10, // Space above the error message
    textAlign: 'center', // Center the text
  },  
});
