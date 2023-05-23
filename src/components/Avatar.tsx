import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { colors } from '../ui';

type AvatarProps = {
  url?: string;
};

export const Avatar: FC<AvatarProps> = ({ url }) => {
  if (url) {
    return (
      <Image
        resizeMode="cover"
        style={styles.container}
        source={{ uri: url, height: 64, width: 64 }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <MaterialIcons name="person-outline" size={48} color={colors.palette.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.neutral.neutral_65,
    borderRadius: 100,
    padding: 8,
  },
});
