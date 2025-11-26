import React from 'react';
import { View, Text, StyleSheet, Pressable, Button, ImageBackground, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  return (
    <Layout navigation={navigation}>
      <ImageBackground
        source={require('./assets/Map.png')}
        style={styles.background}
        resizeMode="cover"
        >
        <View style={styles.routeImageWrapper}>
          <Image
            source={require('./assets/BusRoute.png')}
            style={{ width: 250, height: 450 }}
          />
        </View>


        <View style={styles.middleBar}>
            <Pressable style={styles.item} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/car.png')} style={styles.icon} />
              <Text style={styles.text}>Drive</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/busicon.png')} style={styles.icon} />
              <Text style={styles.text}>Bus</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={() => navigation.navigate('Settings')}>
              <Image source={require('./assets/walk.png')} style={styles.icon} />
              <Text style={styles.text}>Walk</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={() => navigation.navigate('Bookmarks')}>
              <Image source={require('./assets/bike.png')} style={styles.icon} />
              <Text style={styles.text}>Bike</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={() => navigation.navigate('Tickets')}>
              <Image source={require('./assets/uber.png')} style={styles.icon} />
              <Text style={styles.text}>Uber</Text>
            </Pressable>
          </View>

          <View style={styles.searchButtonWrapper}>
            <Button
              title="Go to SearchPaige"
              onPress={() => navigation.navigate('SearchPaige')}
            />
          </View>
          <View style={styles.fillerBox} />



      </ImageBackground>
    </Layout>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  middleBar: {
    position: 'absolute',
    top: '60%',               // ⬅ moves it to the middle of the screen
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 5,             // Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.15,      // iOS shadow
    shadowRadius: 6,
  },

  item: {
    flex: 1,
    alignItems: 'center',      // centers children horizontally
    justifyContent: 'center',  // optional: centers vertically
    flexDirection: 'column',   // stack image above text
    paddingVertical: 6,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  fillerBox: {
    position: 'absolute',
    top: '67%',        // just below middleBar
    bottom: 60,        // leave space for bottom bar from Layout
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    // remove zIndex
  },
  icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
      },
  routeImageWrapper: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 5,
  },
  searchButtonWrapper: {
    position: 'absolute',
    top: '75%',    // adjust as needed
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,    // ⬅ makes it appear in front of fillerBox
  },

});
