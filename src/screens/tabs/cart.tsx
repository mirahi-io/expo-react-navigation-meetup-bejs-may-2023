import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { IconButton, ScreenLoader, ScreenSection } from '../../components';
import { FoodCard } from '../../components/cards/FoodCard';
import {
  addFoodToCart,
  clearCart,
  reduceFoodAmount,
  removeFoodFromCart,
  useCart,
} from '../../stores';
import { TabsRoutes, TabsStackScreenProps } from '../../types';
import { colors, textStyles } from '../../ui';

export const CartScreen: FC<TabsStackScreenProps<TabsRoutes.CART>> = () => {
  const { cart, isLoading } = useCart();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <ScreenSection
      title="Cart"
      end={
        cart.length > 0 ? (
          <IconButton
            textStyle={styles.deleteButtonText}
            icon={
              <MaterialIcons
                name="delete-outline"
                size={20}
                color={colors.palette.neutral.neutral_65}
              />
            }
            onPress={clearCart}
          >
            Clear
          </IconButton>
        ) : null
      }
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.section}
        data={cart}
        renderItem={({ item: { restaurant_id, name, id, description, pricing, image } }) => (
          <FoodCard
            amount={cart.find((i) => i.id === id)?.amount}
            price={pricing}
            description={description}
            onAdd={() => addFoodToCart({ id, description, pricing, name, restaurant_id, image })}
            onDelete={() => removeFoodFromCart(id)}
            onReduce={() => reduceFoodAmount({ foodId: id, restaurantId: restaurant_id })}
            label={name}
            url={image}
          />
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </ScreenSection>
  );
};

const styles = StyleSheet.create({
  section: {
    rowGap: 16,
    paddingBottom: 96,
    marginTop: 24,
  },
  deleteButtonText: {
    ...textStyles.body,
    color: colors.palette.neutral.neutral_65,
  },
});
