import { useCallback, useEffect, useState } from 'react';

import { supabaseClient } from './supabaseClient';
import { Database } from '../types';

export type Category = Database['public']['Tables']['category']['Row'];
export type CategoryCollection = Category[];

const getAllCategories = async () => {
  return supabaseClient.from('category').select('*');
};

export const useGetAllCategories = () => {
  const [data, setData] = useState<CategoryCollection>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [isRefetching, setIsRefetching] = useState(false);

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getAllCategories();
      if (response.error) {
        return setError(response.error.message);
      }
      if (response.data) {
        return setData(response.data);
      }
    } catch {
      setError('Unable to fetch the categories');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refetch = () => {
    setIsRefetching(true);
    fetchCategories().finally(() => setIsRefetching(false));
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    isLoading,
    data,
    error,
    refetch,
    isRefetching,
  };
};
