import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CategoryCard, ScreenLoader, ScreenSection } from '../../../components';
import { useGetAllCategories } from '../../../endpoints';
import { BrowseRoutes, BrowseStackScreenProps } from '../../../types';

export const CategoriesScreen: FC<BrowseStackScreenProps<BrowseRoutes.CATEGORIES>> = ({
  navigation: { navigate },
}) => {
  const { isLoading, data: categories = [] } = useGetAllCategories();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <ScreenSection title="Categories">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.section}
        numColumns={2}
        columnWrapperStyle={styles.column}
        data={categories}
        renderItem={({ item: { name, id, image } }) => (
          <CategoryCard
            label={name}
            url={image}
            onPress={() =>
              navigate(BrowseRoutes.CATEGORY, {
                categoryId: id,
                categoryName: name,
                categoryImage: image,
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
  column: {
    columnGap: 16,
  },
});
