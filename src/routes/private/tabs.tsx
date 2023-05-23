import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import { BrowseStack } from './browse';
import { CartScreen, HomeScreen } from '../../screens';
import { TabsRoutes, TabsStackParamsList } from '../../types';
import { colors, commonStyles } from '../../ui';

const Tab = createBottomTabNavigator<TabsStackParamsList>();

export const TabsStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{ backgroundColor: colors.palette.white }}
    >
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={commonStyles.iconSize_sm}
              resizeMode="contain"
              source={require('../../../assets/home.png')}
            />
          ),
        }}
        name={TabsRoutes.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={commonStyles.iconSize_sm}
              resizeMode="contain"
              source={require('../../../assets/browse.png')}
            />
          ),
        }}
        name={TabsRoutes.BROWSE}
        component={BrowseStack}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              style={commonStyles.iconSize_sm}
              resizeMode="contain"
              source={require('../../../assets/cart.png')}
            />
          ),
        }}
        name={TabsRoutes.CART}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};
