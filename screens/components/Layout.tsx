import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
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
          <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.text}>Settings</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Bookmarks')}>
          <Text style={styles.text}>Bookmarks</Text>
        </Pressable>
        <Pressable style={styles.item} onPress={() => navigation.navigate('Tickets')}>
          <Text style={styles.text}>Tickets</Text>
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
});
