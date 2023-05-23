import { useCallback, useEffect, useState } from 'react';

import { supabaseClient } from './supabaseClient';
import { Database } from '../types';

export type Food = Database['public']['Tables']['foods']['Row'];
export type FoodCollection = Food[];
type Params = {
  restaurantId?: number;
};

const getAllFoods = async ({ restaurantId }: Params) => {
  if (restaurantId) {
    return supabaseClient.from('foods').select('*').eq('restaurant_id', restaurantId);
  } else {
    return supabaseClient.from('foods').select('*');
  }
};

export const useGetAllFoods = (params: Params) => {
  const [data, setData] = useState<FoodCollection>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefetching, setIsRefetching] = useState(false);

  const fetchFoods = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getAllFoods(params);
      if (response.error) {
        return setError(response.error.message);
      }
      if (response.data) {
        return setData(response.data);
      }
    } catch {
      setError('Unable to fetch the foods');
    } finally {
      setIsLoading(false);
    }
  }, [getAllFoods]);

  const refetch = () => {
    setIsRefetching(true);
    fetchFoods().finally(() => setIsRefetching(false));
  };

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  return {
    isLoading,
    data,
    error,
    refetch,
    isRefetching,
  };
};
