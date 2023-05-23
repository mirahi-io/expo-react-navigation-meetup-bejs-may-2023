import { StyleSheet } from 'react-native';

import { colors } from './colors.theme';

export const commonStyles = StyleSheet.create({
  darkBackground: {
    backgroundColor: colors.palette.general.black,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flex: 1,
    alignItems: 'center',
  },
  iconSize_sm: {
    width: 24,
    height: 24,
  },
  iconSize_md: {
    width: 40,
    height: 40,
  },
  image: {
    backgroundColor: colors.palette.neutral.neutral_65,
  },
});
