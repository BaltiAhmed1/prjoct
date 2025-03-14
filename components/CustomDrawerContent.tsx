import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Drawer, Switch, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { router } from 'expo-router';


// Define valid route names for type safety
type AppRoutes =

  | '/'
  | '/profile'
  | '/catalogue'
  | '/trainers'
  | '/certificate'
  | '/blog'
  | '/partners'
  | '/settings'
  | '/auth';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { colors } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigateTo = (routeName: AppRoutes) => {
    // Close drawer first
    props.navigation.closeDrawer();
    // Use router for navigation
    router.push(routeName as any);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfo}>
          <Avatar.Image source={{ uri: 'https://via.placeholder.com/80' }} size={80} />
          <Title style={styles.title}>محمد بلطي</Title>
          <Caption style={styles.caption}>mohamed.ali@example.com</Caption>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="home-outline" color={color} size={size} />}
            label="الرئيسية"
            onPress={() => navigateTo('/')}
          />
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="head-outline" color={color} size={size} />}
            label="حسابي"
            onPress={() => navigateTo('/profile')} 
          />

          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="book-outline" color={color} size={size} />}
            label="الكورسات"
            onPress={() => navigateTo('/catalogue')}
          />
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="account-group-outline" color={color} size={size} />}
            label="المدربين"
            onPress={() => navigateTo('/trainers')}
          />
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="certificate-outline" color={color} size={size} />}
            label="الشهادات"
            onPress={() => navigateTo('/certificate')}
          />
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="post-outline" color={color} size={size} />}
            label="المدونة"
            onPress={() => navigateTo('/blog')}
          />
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="handshake-outline" color={color} size={size} />}
            label="الشركاء"
            onPress={() => navigateTo('/partners')}
          />
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="cog-outline" color={color} size={size} />}
            label="الإعدادات"
            onPress={() => navigateTo('/settings')}
          />
        </Drawer.Section>

        <Drawer.Section title="الإعدادات">
          <TouchableOpacity style={styles.switchContainer} onPress={() => setIsDarkMode(!isDarkMode)}>
            <MaterialCommunityIcons name={isDarkMode ? 'weather-night' : 'white-balance-sunny'} size={26} color={colors.onSurface} />
            <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
          </TouchableOpacity>
        </Drawer.Section>
      </View>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <MaterialCommunityIcons name="logout" color={color} size={size} />}
          label="تسجيل خروج"
          onPress={() => navigateTo('/auth')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: { flex: 1 },
  userInfo: { alignItems: 'center', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  caption: { fontSize: 14, color: 'gray' },
  drawerSection: { marginTop: 10 },
  switchContainer: { flexDirection: 'row', alignItems: 'center', padding: 15, justifyContent: 'space-between' },
  bottomDrawerSection: { borderTopWidth: 1, borderTopColor: '#ccc', marginBottom: 10 },
});

export default CustomDrawerContent;