import {StyleSheet, View} from 'react-native';
import {ProPresenterDataContextProvider} from './libs/ProPresenterDataProvider';
import Inits from './libs/Inits';
import Center from './components/Center';

export default function App() {
  return (
    <ProPresenterDataContextProvider>
      <View style={styles.container}>
        <Center>
          <Inits />
        </Center>
      </View>
    </ProPresenterDataContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
