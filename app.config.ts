import 'dotenv/config';

export default {
  expo: {
    owner: 'mirahi',
    name: 'expo-react-navigation-meetup',
    slug: 'mirahi-food-delivery',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.mirahi.foodDelivery',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      apiUrl: 'https://gzllfchvotzukpwyrrzp.supabase.co',
      apiKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6bGxmY2h2b3R6dWtwd3lycnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4ODA2MzgsImV4cCI6MTk5OTQ1NjYzOH0.SYzte8h_YnzGTUjLUx4Uk38DjuvqmRbKfQLtsuXfJvw',
    },
  },
};
