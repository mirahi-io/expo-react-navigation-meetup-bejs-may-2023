import { NavigationContainer } from '@react-navigation/native';

import { DrawerStack } from './private/drawer';
import { PublicStack } from './public';
import { ScreenLoader } from '../components';
import { useIdentity } from '../stores';

export const RootStack = () => {
  const { identity, isLoading } = useIdentity();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return <NavigationContainer>{identity ? <DrawerStack /> : <PublicStack />}</NavigationContainer>;
};
