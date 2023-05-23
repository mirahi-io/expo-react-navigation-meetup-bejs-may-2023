import { useCallback, useEffect, useState } from 'react';

import { supabaseClient } from './supabaseClient';
import { Database } from '../types';

export type Restaurant = Database['public']['Tables']['restaurants']['Row'];
export type RestaurantCollection = Restaurant[];
type Params = {
  categoryId?: number;
};

const getAllRestaurants = async ({ categoryId }: Params) => {
  if (categoryId) {
    return supabaseClient.from('restaurants').select('*').eq('category_id', categoryId);
  } else {
    return supabaseClient.from('restaurants').select('*');
  }
};

export const useGetAllRestaurants = (params: Params) => {
  const [data, setData] = useState<RestaurantCollection>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefetching, setIsRefetching] = useState(false);

  const fetchRestaurants = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getAllRestaurants(params);
      if (response.error) {
        return setError(response.error.message);
      }
      if (response.data) {
        return setData(response.data);
      }
    } catch {
      setError('Unable to fetch restaurants');
    } finally {
      setIsLoading(false);
    }
  }, [getAllRestaurants]);

  const refetch = () => {
    setIsRefetching(true);
    fetchRestaurants().finally(() => setIsRefetching(false));
  };

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return {
    isLoading,
    data,
    error,
    refetch,
    isRefetching,
  };
};
