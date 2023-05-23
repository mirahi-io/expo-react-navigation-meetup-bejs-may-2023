import React, { FC } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

import { PillButton, TextButton } from './buttons';
import { clearIdentity } from '../stores';
import { commonStyles, textStyles } from '../ui';

type LogoutModalProps = {
  visible: boolean;
  onClose: () => void;
};

export const LogoutModal: FC<LogoutModalProps> = ({ visible, onClose }) => {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={commonStyles.center}>
        <View style={styles.modalView}>
          <Text style={[textStyles.body, styles.modalText]}>Log out from Food Delivery App ?</Text>
          <View style={styles.buttonGroup}>
            <TextButton onPress={onClose}>Cancel</TextButton>
            <PillButton
              onPress={async () => {
                await clearIdentity();
                onClose();
              }}
            >
              Logout
            </PillButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 32,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 24,
  },
});
