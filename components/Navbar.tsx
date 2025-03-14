import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Bell, User, Menu,Link } from 'lucide-react-native';
import { useNavigation, DrawerActions, ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// Define your navigation type without requiring @react-navigation/stack
type NavbarNavigationProp = DrawerNavigationProp<ParamListBase>;

interface NavbarProps {
  userName?: string;
  onNotificationPress?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  userName = 'Balti Chef',
  onNotificationPress = () => {},
}) => {
  // Use the proper navigation type
  const navigation = useNavigation<NavbarNavigationProp>();

  const handleProfilePress = () => {
    // Type-safe navigation
    navigation.navigate('/profile');
  };

  return (
    <View style={styles.container}>
      {/* Sidebar Menu Button */}
      <TouchableOpacity 
        style={styles.menuButton} 
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        accessibilityLabel="Open menu"
        accessibilityRole="button"
      >
        <Menu size={28} color="#1e293b" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Plasturgie</Text>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://www.entreprises-magazine.com/wp-content/uploads/2022/02/utica-696.png' }} 
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Company Logo"
        />
      </View>

      {/* Right Side: Notification and Profile */}
      <View style={styles.rightContainer}>
        {/* Notification Button */}
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={onNotificationPress}
          accessibilityLabel="Notifications"
          accessibilityRole="button"
        >
          <Bell size={24} color="#1e293b" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>3</Text>
          </View>
        </TouchableOpacity>
        
        {/* Profile Button */}
        <TouchableOpacity 
          style={styles.profileButton} 
          onPress={handleProfilePress}
          accessibilityLabel="Profile"
          accessibilityRole="button"
        >
          <User size={24} color="#1e293b" />
          <Text style={styles.profileName} numberOfLines={1} ellipsizeMode="tail">
            {userName}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 12 : 16,
    paddingBottom: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  menuButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    flex: 1, 
    textAlign: 'left',
  },
  logoContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ffffff',
  },
  notificationCount: {
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    maxWidth: 140, 
  },
  profileName: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#1e293b',
    flexShrink: 1,
  },
});

export default Navbar;