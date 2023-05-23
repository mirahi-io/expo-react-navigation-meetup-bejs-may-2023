import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { routesStyles } from '../routes.styles';

export const BackButton = () => {
  const { goBack } = useNavigation();

  return (
    <MaterialIcons
      onPress={goBack}
      name="arrow-back"
      size={24}
      style={routesStyles.headerIconSpacing}
    />
  );
};
