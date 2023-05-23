import React, { FC, useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { PrimaryButton, PrimaryTextInput } from '../components';
import { setIdentity } from '../stores';
import { PublicRoutes, PublicStackScreenProps } from '../types';
import { colors, commonStyles } from '../ui';
import { getRandomProfilePicture, isEmailValid } from '../utils';

export const LoginScreen: FC<PublicStackScreenProps<PublicRoutes.LOGIN>> = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    if (isEmailValid(email)) {
      setIdentity({
        email,
        portrait: getRandomProfilePicture(),
      });
    } else {
      setError('Invalid email address');
    }
  };

  return (
    <View style={commonStyles.darkBackground}>
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../../assets/login-pattern.png')}
      >
        <View style={[commonStyles.horizontal, styles.screenContainer]}>
          <Image
            source={require('../../assets/main-logo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'position' : undefined}
              style={styles.fullWidth}
            >
              <View style={[commonStyles.darkBackground, styles.formContainer]}>
                <PrimaryTextInput
                  label="Email"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="user@email.com"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  error={error}
                />
                <View style={styles.button}>
                  <PrimaryButton dark onPress={handleLogin}>
                    Login
                  </PrimaryButton>
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  screenContainer: { marginHorizontal: 24 },
  button: {
    alignSelf: 'center',
  },
  inputDark: {
    height: 46,
    borderRadius: 4,
    borderWidth: 1.6,
    borderColor: colors.palette.white,
    color: colors.text.secondary,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  background: { height: '100%', width: '100%' },
  logo: { height: 136, width: 136, marginTop: 64 },
  formContainer: {
    width: '100%',
    marginTop: 87,
    paddingHorizontal: 24,
    paddingVertical: 53,
    borderRadius: 8,
  },
});
