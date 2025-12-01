import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Bookmarks'>;

export default function BookmarksScreen({ navigation }: Props) {
  const bookmarkedLocations = [
    {
      id: 1,
      name: 'Bakery',
      time: '5 min',
      icon: require('./assets/Bakery.png'),
    },
    {
      id: 2,
      name: 'Work',
      time: '12 min',
      icon: require('./assets/Work.png'),
    },
    {
      id: 3,
      name: 'School',
      time: '45 min',
      icon: require('./assets/School.png'),
    },
    {
      id: 4,
      name: 'Target, Penn Ave',
      time: '15 min',
      icon: require('./assets/bookmark.png'),
    },
  ];

  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        {/* Map Header */}
        <View style={styles.mapContainer}>
          <Image
            source={require('./assets/Map.png')}
            style={styles.mapImage}
            resizeMode="cover"
          />

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Pressable style={styles.settingsButton}>
              <Image source={require('./assets/settings.png')} style={styles.settingsIcon} />
            </Pressable>
            <View style={styles.searchInput}>
              <Text style={styles.searchPlaceholder}>Search</Text>
              <Image source={require('./assets/busicon.png')} style={styles.micIcon} />
            </View>
          </View>

          {/* Current Location Indicator */}
          <View style={styles.locationIndicator}>
            <View style={styles.locationCircle}>
              <View style={styles.locationDot} />
            </View>
          </View>
        </View>

        {/* Bookmarked Locations */}
        <ScrollView
          style={styles.bookmarksContainer}
          contentContainerStyle={styles.bookmarksContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Your Bookmarks</Text>

          <View style={styles.bookmarksGrid}>
            {bookmarkedLocations.map((location) => (
              <Pressable
                key={location.id}
                style={styles.bookmarkCard}
                onPress={() => {
                  // Navigate to search/route for this location
                  console.log('Navigate to:', location.name);
                }}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={location.icon}
                    style={styles.locationIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationTime}>{location.time}</Text>
              </Pressable>
            ))}
          </View>

          {/* Bottom padding for navigation bar */}
          <View style={{ height: 100 }} />
        </ScrollView>

        {/* Floating Add Button */}
        <Pressable
          style={styles.addButton}
          onPress={() => {
            console.log('Add new bookmark');
            // You can navigate to a search screen or show a modal
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mapContainer: {
    height: 400,
    position: 'relative',
    backgroundColor: '#1a3a52',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  searchBar: {
    position: 'absolute',
    top: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  settingsButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  settingsIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#999',
  },
  micIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  locationIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -40 }, { translateY: -40 }],
  },
  locationCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: 'white',
  },
  bookmarksContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  bookmarksContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  bookmarksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookmarkCard: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#1e4d5e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationIcon: {
    width: 32,
    height: 32,
  },
  locationName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  locationTime: {
    color: '#a0c4d4',
    fontSize: 14,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 90, // Above the bottom navigation bar
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  addButtonText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '300',
  },
});