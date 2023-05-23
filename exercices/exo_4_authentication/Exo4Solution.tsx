import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeFullScreenView, ScreenLoader } from '../../src/components';
import { LoginScreen } from '../../src/screens';
import { useIdentity } from '../../src/stores';
import { colors } from '../../src/ui';
import { Exo3ChallengesSolution } from '../exo_3_drawer_challenges';

enum PublicRoutes {
  LOGIN = 'login',
}

type PublicStackParamsList = {
  [PublicRoutes.LOGIN]: undefined;
};

const Public = createNativeStackNavigator<PublicStackParamsList>();

export const Exo4Solution = () => {
  // We get the identity from the store
  const { identity, isLoading } = useIdentity();

  // Return a loading screen during the authentication process
  if (isLoading) {
    return <ScreenLoader />;
  }

  // If the user is authenticated, we return the private stack
  if (identity) {
    return <Exo3ChallengesSolution />;
  }

  // Else we return the public stack
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
