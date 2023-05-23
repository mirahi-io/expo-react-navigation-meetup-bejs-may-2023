import React, { FC } from 'react';
import { Switch, SwitchProps } from 'react-native';

import { colors } from '../../ui';

export const PrimarySwitch: FC<SwitchProps> = (props) => {
  return (
    <Switch
      trackColor={{
        true: colors.palette.blue.blue_40,
        false: colors.palette.neutral.neutral_65,
      }}
      style={{
        transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
      }}
      thumbColor={colors.palette.white}
      {...props}
    />
  );
};
