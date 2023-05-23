import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

import { Database } from '../types';

const API_URL = Constants.manifest?.extra?.apiUrl;
const API_KEY = Constants.manifest?.extra?.apiKey;

export const supabaseClient = createClient<Database>(API_URL, API_KEY);
