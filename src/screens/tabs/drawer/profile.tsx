import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '../../../components';
import { useIdentity } from '../../../stores';
import { PrivateRoutes, PrivateStackScreenProps } from '../../../types';
import { commonStyles, textStyles } from '../../../ui';

export const ProfileScreen: FC<PrivateStackScreenProps<PrivateRoutes.PROFILE>> = () => {
  const { identity: { email = '', portrait = '' } = {} } = useIdentity();

  return (
    <View style={commonStyles.center}>
      <View style={styles.container}>
        <Avatar url={portrait} />
        <Text style={textStyles.h1}>{email}</Text>
      </View>
      <Image
        style={styles.pattern}
        source={require('../../../../assets/profile-pattern.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    alignItems: 'center',
    rowGap: 24,
    paddingHorizontal: 24,
  },
  pattern: {
    position: 'absolute',
    bottom: 0,
  },
});
