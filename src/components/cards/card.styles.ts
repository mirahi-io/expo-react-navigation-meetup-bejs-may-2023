import { StyleSheet } from 'react-native';

import { colors, textStyles } from '../../ui';

export const cardStyles = StyleSheet.create({
  pressed_container: {
    opacity: 0.75,
  },
  container: {
    borderColor: colors.palette.blue.blue_65,
    borderWidth: 1,
    borderRadius: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.palette.white,
    elevation: 8,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: colors.palette.blue.blue_65,
    shadowOpacity: 1,
    shadowRadius: 0,
    rowGap: 8,
  },
  label: {
    ...textStyles.cardTitle,
    color: colors.title.primary,
  },
  image: {
    backgroundColor: colors.palette.neutral.neutral_65,
    borderRadius: 8,
  },
});
