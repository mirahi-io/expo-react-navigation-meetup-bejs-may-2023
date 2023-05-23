import { FC } from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View, ViewStyle } from 'react-native';

import { commonStyles } from '../ui';

export const ScreenLoader: FC<ActivityIndicatorProps & { containerStyle?: ViewStyle }> = ({
  containerStyle,
  ...props
}) => {
  return (
    <View style={[commonStyles.center, containerStyle]}>
      <ActivityIndicator {...props} />
    </View>
  );
};
