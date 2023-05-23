import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RestaurantCard, ScreenLoader, ScreenSection } from '../../../components';
import { useGetAllRestaurants } from '../../../endpoints';
import { BrowseRoutes, BrowseStackScreenProps } from '../../../types';

export const CategoryScreen: FC<BrowseStackScreenProps<BrowseRoutes.CATEGORY>> = ({
  route: {
    params: { categoryId, categoryName },
  },
  navigation: { navigate },
}) => {
  const { isLoading, data: restaurantsByCategory = [] } = useGetAllRestaurants({ categoryId });

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <ScreenSection title={categoryName}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.section}
        data={restaurantsByCategory}
        renderItem={({ item: { name, id, image } }) => (
          <RestaurantCard
            label={name}
            url={image}
            onPress={() =>
              navigate(BrowseRoutes.RESTAURANT, {
                restaurantId: id,
                restaurantName: name,
                restaurantImage: image,
              })
            }
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
    alignItems: 'center',
    paddingBottom: 88,
  },
});
