import { useStore, UseStoreOptions } from '@nanostores/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom, WritableAtom } from 'nanostores';
import { useEffect, useState } from 'react';

import { StorageKeys } from '../types';

export type Identity =
  | {
      email: string;
      portrait: string;
    }
  | undefined;

const identity = atom<Identity>(undefined);

export const useIdentity = (options?: UseStoreOptions<WritableAtom<Identity>>) => {
  const [isLoading, setLoading] = useState(false);
  const store = useStore(identity, options);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem(StorageKeys.IDENTITY)
      .then((raw) => {
        if (!raw) {
          return;
        }
        const parsed = JSON.parse(raw);

        identity.set(parsed);
      })
      .finally(() => setLoading(false));
  }, []);

  return { identity: store, isLoading };
};

export const setIdentity = async (params: Identity) => {
  await AsyncStorage.setItem(StorageKeys.IDENTITY, JSON.stringify(params));
  identity.set(params);
};
export const clearIdentity = async () => {
  await AsyncStorage.removeItem(StorageKeys.IDENTITY);
  identity.set(undefined);
};
