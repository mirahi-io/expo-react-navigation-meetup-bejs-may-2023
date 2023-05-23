import { StatusBar, StatusBarProps, StatusBarStyle } from 'expo-status-bar';
import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

type SafeFullScreenViewProps = {
  children: ReactNode;
  containerStyle?: SafeAreaViewProps['style'];
  statusBar?: {
    style?: StatusBarStyle;
    backgroundColor?: StatusBarProps['backgroundColor'];
  };
};

export const SafeFullScreenView: FC<SafeFullScreenViewProps> = ({
  children,
  containerStyle,
  statusBar,
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {statusBar ? (
        <StatusBar style={statusBar.style} backgroundColor={statusBar.backgroundColor} />
      ) : undefined}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
