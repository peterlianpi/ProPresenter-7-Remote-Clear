import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Vibration,
} from 'react-native';
import {useProPresenterData} from '../../libs/ProPresenterDataProvider';

function Clear({action, label, iconSource}) {
  const {sendRequest} = useProPresenterData();

  const handleClear = () => {
    // Send the command associated with the action
    const command = action;
    sendRequest(command);
    console.log('Command : ', command);
    console.log(`Command to send:\n${JSON.stringify(command)}`);

    // Vibrate device with short pattern
    Vibration.vibrate([15, 50, 15]); // Vibrate for 15ms, pause for 50ms, vibrate for 15ms
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleClear}>
      <Image source={iconSource} style={styles.icon} alt={label} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#888888',
    backgroundColor: '#ababab',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: -6,
      height: -20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 35,
    elevation: 10,
    transition: 'box-shadow 0.13s ease-in-out',
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontSize: 11,
    color: 'white',
    paddingTop: 5,
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    backgroundClip: 'text',
    textAlign: 'center',
  },

  icon: {
    width: 40,
    height: 40,
    tintColor: '#000', // Darken the icon
    shadowColor: '#000', // Darken the shadow
    shadowOffset: {
      width: -10,
      height: -20,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
});

export default Clear;
