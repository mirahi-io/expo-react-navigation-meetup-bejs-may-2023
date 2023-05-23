import React, { FC } from 'react';
import { Text } from 'react-native';

import { ScreenSection } from '../../components';
import { useIdentity } from '../../stores';
import { TabsRoutes, TabsStackScreenProps } from '../../types';
import { textStyles } from '../../ui';

export const HomeScreen: FC<TabsStackScreenProps<TabsRoutes.HOME>> = () => {
  const { identity: { email = '' } = {} } = useIdentity();

  return (
    <ScreenSection title="Welcome">
      <Text style={textStyles.body}>Welcome {email}!</Text>
      <Text style={textStyles.body}>
        This is our Mirahi food-delivery application. You’ll be able to browse food here and put an
        order in. Enjoy!
      </Text>
    </ScreenSection>
  );
};
