import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { NumberInput, PrimaryButton } from '../../../../components';
import { addFoodToCart, reduceFoodAmount, useCart } from '../../../../stores';
import { BrowseRoutes, BrowseStackScreenProps } from '../../../../types';
import { commonStyles, textStyles } from '../../../../ui';

export const FoodDetailScreen: FC<BrowseStackScreenProps<BrowseRoutes.FOOD_DETAIL>> = ({
  route: {
    params: { foodRestaurantId, foodId, foodDescription, foodPrice, foodName, foodImage },
  },
}) => {
  const { cart } = useCart();
  const amount = cart.find((i) => i.id === foodId)?.amount;

  return (
    <View>
      <Image
        style={commonStyles.image}
        source={{ uri: foodImage, height: 200 }}
        resizeMode="cover"
      />
      <View style={styles.body}>
        <View>
          <Text style={textStyles.cardTitle}>{foodName}</Text>
          <Text style={textStyles.cardSubtitle}>€{foodPrice.toFixed(2)}</Text>
          <Text style={textStyles.cardSubtitle}>{foodDescription}</Text>
        </View>
        {amount ? (
          <View style={styles.footer}>
            <NumberInput
              value={amount}
              add={() =>
                addFoodToCart({
                  id: foodId,
                  description: foodDescription,
                  restaurant_id: foodRestaurantId,
                  pricing: foodPrice,
                  name: foodName,
                  image: foodImage,
                })
              }
              reduce={() => reduceFoodAmount({ foodId, restaurantId: foodRestaurantId })}
            />
          </View>
        ) : null}
        <View style={styles.footerAction}>
          <PrimaryButton
            onPress={() =>
              addFoodToCart({
                id: foodId,
                description: foodDescription,
                restaurant_id: foodRestaurantId,
                pricing: foodPrice,
                name: foodName,
                image: foodImage,
              })
            }
          >
            Add to cart
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    rowGap: 16,
    marginHorizontal: 24,
    marginTop: 24,
    height: '68%',
  },
  footer: {
    rowGap: 4,
    justifyContent: 'flex-end',
  },
  footerAction: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
