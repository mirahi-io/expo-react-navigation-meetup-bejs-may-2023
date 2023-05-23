import { useStore, UseStoreOptions } from '@nanostores/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { action, atom, WritableAtom } from 'nanostores';
import { useEffect, useState } from 'react';

import { Food } from '../endpoints';
import { StorageKeys } from '../types';

type FoodInRestaurant = {
  restaurantId: number;
  foodId: number;
};

export type FoodWithAmount = Food & { amount?: number };

export type Cart = FoodWithAmount[];

const cart = atom<Cart>([]);

export const useCart = (options?: UseStoreOptions<WritableAtom<Cart>>) => {
  const [isLoading, setLoading] = useState(false);
  const store = useStore(cart, options);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem(StorageKeys.CART)
      .then((raw) => {
        if (!raw) {
          return;
        }
        const parsed = JSON.parse(raw);

        cart.set(parsed);
      })
      .finally(() => setLoading(false));
  }, []);

  return { cart: store, isLoading };
};

/**
 * ACTIONS
 */

const createCart = action(cart, 'create', async (store, cart: Cart) => {
  await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify(cart));
  store.set(cart);
});

export const addFoodToCart = action(cart, 'addFood', async (store, food: Food) => {
  if (cart.get().length === 0) {
    await createCart([{ ...food, amount: 1 }]);
  } else {
    const foodToModify = cart.get().find((i) => i.id === food.id);

    if (!foodToModify) {
      const newCart: Cart = [...store.get(), { ...food, amount: 1 }];

      await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify(newCart));
      store.set(newCart);
    } else {
      await incrementFoodAmount({ restaurantId: food.restaurant_id, foodId: food.id });
    }
  }
});

const incrementFoodAmount = action(
  cart,
  'incrementFood',
  async (store, { restaurantId, foodId }: FoodInRestaurant) => {
    const newCart: Cart = store.get().map((item) => {
      if (item.restaurant_id !== restaurantId || item.id !== foodId) {
        return item;
      }

      return {
        ...item,
        amount: (item.amount || 0) + 1,
      };
    });

    await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify(newCart));
    store.set(newCart);
  }
);

export const reduceFoodAmount = action(
  cart,
  'reduceFood',
  async (store, { restaurantId, foodId }: FoodInRestaurant) => {
    const newCart: Cart = store.get().reduce<Cart>((acc, item) => {
      if (item.restaurant_id === restaurantId && item.id === foodId) {
        if (!item.amount || item.amount <= 1) {
          return acc;
        }
        return [
          ...acc,
          {
            ...item,
            amount: item.amount - 1,
          },
        ];
      }
      return [...acc, item];
    }, []);

    await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify(newCart));
    store.set(newCart);
  }
);

export const removeFoodFromCart = action(cart, 'removeFood', async (store, foodId: number) => {
  const newCart: Cart = store.get().filter((item) => item.id !== foodId);

  await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify(newCart));
  store.set(newCart);
});

export const clearCart = action(cart, 'clear', async (store) => {
  await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify([]));
  store.set([]);
});
