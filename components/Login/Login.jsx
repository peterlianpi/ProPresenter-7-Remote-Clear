import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useProPresenterData} from '../../libs/ProPresenterDataProvider';
import {connectWebSocket} from '../../libs/ProPresenterConnection';

const LoginPage = () => {
  const {
    host,
    setHost,
    password,
    setPassword,
    sendAuthentication,
    connected,
    message,
    setConnected,
    setWs,
    setMessage,
    handleAction,
    handleWebSocketClose,
  } = useProPresenterData();

  const [connectionError, setConnectionError] = useState(null);

  useEffect(() => {
    if (host && !connected) {
      connectWebSocket(
        host,
        setConnected,
        setWs,
        setMessage,
        handleAction,
        handleWebSocketClose,
      );
    }
  }, [host]);

  const handleAuthenticate = () => {
    if (connected) {
      sendAuthentication(password);
    }
    if (!connected) {
      setConnectionError(`WebSocket connection to ${host} is not established`);
      setTimeout(() => {
        setConnectionError(null);
      }, 2000);
    } else if (message && !message.authenticated) {
      setConnectionError(message.error);
      setTimeout(() => {
        setConnectionError(null);
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <View style={styles.notificationContainer}>
        {connected ? (
          <View style={[styles.notificationDot, {backgroundColor: 'green'}]} />
        ) : (
          <View style={[styles.notificationDot, {backgroundColor: 'red'}]} />
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="hostname or ip:port"
        value={host}
        onChangeText={setHost}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {connectionError && <Text style={styles.error}>{connectionError}</Text>}
      <Pressable style={styles.button} onPress={handleAuthenticate}>
        <Text style={styles.text}>Authenticate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: '#111aff',
  },
  container: {
    position: 'relative',
    flex: 1,
    maxWidth: 320,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  notificationContainer: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 8,
  },
  notificationDot: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20,
    top: 10,
    right: 10,
  },
  title: {
    width: 150,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  error: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginPage;
