export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          id: number;
          image: string;
          name: string;
        };
        Insert: {
          id?: number;
          image: string;
          name: string;
        };
        Update: {
          id?: number;
          image?: string;
          name?: string;
        };
      };
      foods: {
        Row: {
          description: string;
          id: number;
          image: string;
          name: string;
          pricing: number;
          restaurant_id: number;
        };
        Insert: {
          description: string;
          id?: number;
          image: string;
          name: string;
          pricing: number;
          restaurant_id: number;
        };
        Update: {
          description?: string;
          id?: number;
          image?: string;
          name?: string;
          pricing?: number;
          restaurant_id?: number;
        };
      };
      restaurant_category: {
        Row: {
          category_id: number;
          id: number;
          restaurant_id: number;
        };
        Insert: {
          category_id: number;
          id?: number;
          restaurant_id: number;
        };
        Update: {
          category_id?: number;
          id?: number;
          restaurant_id?: number;
        };
      };
      restaurants: {
        Row: {
          address: string;
          category_id: number;
          delivery_time: number;
          id: number;
          image: string;
          name: string;
          rating: number;
        };
        Insert: {
          address: string;
          category_id: number;
          delivery_time: number;
          id?: number;
          image?: string;
          name: string;
          rating: number;
        };
        Update: {
          address?: string;
          category_id?: number;
          delivery_time?: number;
          id?: number;
          image?: string;
          name?: string;
          rating?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
