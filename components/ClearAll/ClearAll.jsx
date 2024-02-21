import React from 'react';
import {View, StyleSheet} from 'react-native';
import Clear from './Clear';

// Define an array of objects containing action, label, and iconSource for Clear components
const clearAll = [
  {
    action: 'clearAll',
    label: 'Clear All',
    iconSource: require('../../assets/img/clear_all.png'),
  },
  {
    action: 'clearText',
    label: 'Clear Slide',
    iconSource: require('../../assets/img/clear_slide.png'),
  },
  {
    action: 'clearProps',
    label: 'Clear Props',
    iconSource: require('../../assets/img/clear_props.png'),
  },
  {
    action: 'clearAudio',
    label: 'Clear Audio',
    iconSource: require('../../assets/img/clear_audio.png'),
  },
  {
    action: 'clearVideo',
    label: 'Clear Video',
    iconSource: require('../../assets/img/clear_media.png'),
  },
  {
    action: 'clearMedia',
    label: 'Clear Media',
    iconSource: require('../../assets/img/clear_media.png'),
  },
  {
    action: 'clearVideo_input',
    label: 'Clear Video Input',
    iconSource: require('../../assets/img/clear_video_input.png'),
  },
  {
    action: 'clearMessages',
    label: 'Clear Messages',
    iconSource: require('../../assets/img/clear_message.png'),
  },
  {
    action: 'clearAnnouncements',
    label: 'Clear Announcements',
    iconSource: require('../../assets/img/clear_announcements.png'),
  },
  {action: '', label: '', iconSource: ''}, // Empty action and label
  {action: 'clearToLogo', label: 'Clear To Logo', iconSource: ''},
];

function ClearAll() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {clearAll.map((item, i) => (
          <Clear
            key={i}
            action={item.action}
            label={item.label}
            iconSource={item.iconSource}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default ClearAll;
