import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';

import { useFonts } from '@expo-google-fonts/ibm-plex-mono';

import { RootStack } from './exercices';
import { ScreenLoader } from './src/components';
import { commonStyles, fonts } from './src/ui';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <ScreenLoader containerStyle={commonStyles.darkBackground} color="white" />;
  }

  return <RootStack />;
}
