import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { textStyles } from '../ui';

type ScreenSectionProps = PropsWithChildren<{
  title: string;
  end?: ReactNode;
}>;

export const ScreenSection: FC<ScreenSectionProps> = ({ end, title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyles.title}>{title}</Text>
        {end}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
