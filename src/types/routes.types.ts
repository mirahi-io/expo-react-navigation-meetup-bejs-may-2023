import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum PrivateRoutes {
  PROFILE = 'profile',
  TABS = 'tabs',
}

export enum BrowseRoutes {
  CATEGORIES = 'categories',
  CATEGORY = 'category',
  RESTAURANT = 'restaurant',
  FOOD_DETAIL = 'food-detail',
}

export enum TabsRoutes {
  BROWSE = 'browse',
  HOME = 'home',
  CART = 'cart',
}

export enum PublicRoutes {
  LOGIN = 'login',
}

export type PrivateStackParamList = TabsStackParamsList & {
  [PrivateRoutes.TABS]: undefined;
  [PrivateRoutes.PROFILE]: undefined;
};

export type TabsStackParamsList = BrowseStackParamList & {
  [TabsRoutes.BROWSE]: undefined;
  [TabsRoutes.HOME]: undefined;
  [TabsRoutes.CART]: undefined;
};

export type BrowseStackParamList = {
  [BrowseRoutes.CATEGORIES]: undefined;
  [BrowseRoutes.CATEGORY]: {
    categoryId: number;
    categoryName: string;
    categoryImage: string;
  };
  [BrowseRoutes.RESTAURANT]: {
    restaurantId: number;
    restaurantName: string;
    restaurantImage: string;
  };
  [BrowseRoutes.FOOD_DETAIL]: {
    foodRestaurantId: number;
    foodId: number;
    foodName: string;
    foodPrice: number;
    foodDescription: string;
    foodImage: string;
    amount?: number;
  };
};

export type PublicStackParamsList = {
  [PublicRoutes.LOGIN]: undefined;
};

export type PublicStackScreenProps<T extends PublicRoutes> = NativeStackScreenProps<
  PublicStackParamsList,
  T
>;

export type PrivateStackScreenProps<T extends PrivateRoutes> = NativeStackScreenProps<
  PrivateStackParamList,
  T
>;

export type TabsStackScreenProps<T extends TabsRoutes> = NativeStackScreenProps<
  TabsStackParamsList,
  T
>;

export type BrowseStackScreenProps<T extends BrowseRoutes> = NativeStackScreenProps<
  BrowseStackParamList,
  T
>;
