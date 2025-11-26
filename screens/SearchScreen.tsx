import React from 'react';
import { View, Text, StyleSheet, Pressable, Button, ImageBackground, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';
import BusInfoBox from './components/BusInfoBox';
import RouteCard from "./components/RouteCard";

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
        <BusInfoBox
          text1="71A/71B/71C"
          text2="in 10 mins"
          top={490}
          left={50}
          color="green"
        />

        <BusInfoBox
          text1="81/83"
          text2="in 12 mins"
          top={500}
          left={235}
          color="red"
        />

        <View style={styles.middleBar}>
          <View style={styles.item}>
            <Image source={require('./assets/car.png')} style={styles.icon} />
            <Text style={styles.text}>Drive</Text>
            <Text style={styles.smalltext}>9 mins</Text>
          </View>

          <View style={styles.item}>
            <Image
              source={require('./assets/busicon.png')}
              style={[styles.icon, { tintColor: 'green' }]}
            />
            <Text style={[styles.text, { color: 'green' }]}>Bus</Text>
            <Text style={[styles.smalltext, { color: 'green'}]}>15 mins</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/walk.png')} style={styles.icon} />
            <Text style={styles.text}>Walk</Text>
            <Text style={styles.smalltext}>45 mins</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/bike.png')} style={styles.icon} />
            <Text style={styles.text}>Bike</Text>
            <Text style={styles.smalltext}>14 mins</Text>
          </View>

          <View style={styles.item}>
            <Image source={require('./assets/uber.png')} style={styles.icon} />
            <Text style={styles.text}>Uber</Text>
            <Text style={styles.smalltext}>10 mins</Text>
          </View>
        </View>

          <View style={styles.searchButtonWrapper}>
            <Button
              title="Go to SearchPaige"
              onPress={() => navigation.navigate('SearchPaige')}
            />
          </View>

          
          <View style={styles.fillerBox}>
            <RouteCard
              startTime="3:30 PM"
              endTime="3:45 PM"
              walk1={2}
              walk2={3}
              busRoute="71A/71B/71C"
              leaveTime="3:32 PM"
              status="On time"
            />

            <RouteCard
              startTime="3:45 PM"
              endTime="4:10 PM"
              walk1={4}
              walk2={5}
              busRoute="81/83"
              leaveTime="3:47 PM"
              status="On time"
            />
          </View>



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
    position: "absolute",
    top: "68.75%",
    bottom: 60, // keeps space for bottom nav
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  smalltext: {
      fontSize: 12,
      fontWeight: '400',
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
    zIndex: 10,
  },


});
