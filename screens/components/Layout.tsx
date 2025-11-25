import React from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';

type LayoutProps = {
  children: React.ReactNode;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function Layout({ children, navigation }: LayoutProps) {
  return (
    <View style={{ flex: 1 }}>
      {children}

      {/* Persistent Bottom Bar */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Bookmarks')}>
          <Image source={require('../assets/bookmark.png')} style={styles.icon} />
          <Text style={styles.text}>Bookmarks</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Tickets')}>
          <Image source={require('../assets/ticket.png')} style={styles.icon} />
          <Text style={styles.text}>Tickets</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Settings')}>
           <Image source={require('../assets/settings.png')} style={styles.icon} />
           <Text style={styles.text}>Settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  item: { flex: 1, alignItems: 'center' },
  text: { color: '#333', fontWeight: '500' },
  icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain'
    },
});
