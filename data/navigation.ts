import { router, useNavigation } from 'expo-router';

// Define your route paths
export type AppRoutePath =
  | '/'
  | '/profile'
  | '/catalogue'
  | '/trainers'
  | '/certificate'
  | '/blog'
  | '/partners'
  | '/settings'
  | '/auth'
  | '/(tabs)'
  | '/(tabs)/index'
  | '/(tabs)/catalogue'
  | '/(tabs)/trainers'
  | '/(tabs)/blog'
  | '/search';

// Make AppRoutes compatible with router.push
export type AppRoutes = AppRoutePath | { pathname: AppRoutePath; params?: Record<string, string> };

export const navigateTo = (route: AppRoutes) => {
  router.push(route as any);
};

export const goBack = () => {
  const navigation = useNavigation();
  if (navigation.canGoBack()) {
    navigation.goBack();
  } else {
    // Fallback to home if can't go back
    router.replace('/(tabs)');
  }
};

// Update the tab navigation function to use the AppRoutes type
export const navigateToTab = (tabName: 'index' | 'catalogue' | 'trainers' | 'blog') => {
  const route = `/(tabs)/${tabName}` as AppRoutePath;
  router.push(route as any);
};