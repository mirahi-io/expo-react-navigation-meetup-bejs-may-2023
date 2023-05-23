import React, { FC } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import { ScreenLoader } from '../../../../components';
import { FoodCard } from '../../../../components/cards/FoodCard';
import { useGetAllFoods } from '../../../../endpoints';
import { addFoodToCart, reduceFoodAmount, removeFoodFromCart, useCart } from '../../../../stores';
import { BrowseRoutes, BrowseStackScreenProps } from '../../../../types';
import { commonStyles } from '../../../../ui';

export const RestaurantScreen: FC<BrowseStackScreenProps<BrowseRoutes.RESTAURANT>> = ({
  navigation: { navigate },
  route: {
    params: { restaurantId, restaurantImage },
  },
}) => {
  const { isLoading, data: foodsByRestaurant = [] } = useGetAllFoods({ restaurantId });
  const { cart } = useCart();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <View>
      <Image
        style={commonStyles.image}
        source={{ uri: restaurantImage, height: 200 }}
        resizeMode="cover"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.section}
        data={foodsByRestaurant}
        renderItem={({ item: { name, id, description, pricing, image } }) => (
          <FoodCard
            amount={cart.find((i) => i.id === id)?.amount}
            price={pricing}
            description={description}
            onAdd={() =>
              addFoodToCart({ id, description, pricing, name, restaurant_id: restaurantId, image })
            }
            onDelete={() => removeFoodFromCart(id)}
            onReduce={() => reduceFoodAmount({ foodId: id, restaurantId })}
            label={name}
            url={image}
            onPress={() =>
              navigate(BrowseRoutes.FOOD_DETAIL, {
                foodRestaurantId: restaurantId,
                foodId: id,
                foodPrice: pricing,
                foodDescription: description,
                foodName: name,
                amount: cart.find((i) => i.id === id)?.amount,
                foodImage: image,
              })
            }
          />
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    rowGap: 16,
    paddingBottom: 88,
    marginHorizontal: 24,
    marginTop: 24,
  },
});
