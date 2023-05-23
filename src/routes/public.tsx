import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeFullScreenView } from '../components';
import { LoginScreen } from '../screens';
import { PublicRoutes, PublicStackParamsList } from '../types';
import { colors } from '../ui';

const Public = createNativeStackNavigator<PublicStackParamsList>();

export const PublicStack = () => {
  return (
    <SafeFullScreenView
      statusBar={{ backgroundColor: colors.palette.general.black, style: 'light' }}
    >
      <Public.Navigator initialRouteName={PublicRoutes.LOGIN}>
        <Public.Screen
          options={{ headerShown: false }}
          name={PublicRoutes.LOGIN}
          component={LoginScreen}
        />
      </Public.Navigator>
    </SafeFullScreenView>
  );
};
