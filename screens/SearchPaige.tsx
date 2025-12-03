import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchPaige'>;

export default function SearchPaige({ navigation }: Props) {
  const routeData = {
    startTime: '3:30 PM',
    endTime: '3:54 PM',
    busRoute: '71C',
    walk1: 8,
    walk2: 3,
    ETA: '15 min',
    leaveTime: '3:34 PM',
  };

  return (
    <Layout navigation={navigation}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1, 2]}
      >
        {/* Map Header with Route Overlay */}
        <View style={styles.mapContainer}>
          <Image
            source={require('./assets/Map.png')}
            style={styles.mapImage}
            resizeMode="cover"
          />

          {/* Specific Route Overlay */}
          <View style={styles.routeImageWrapper}>
            <Image
              source={require('./assets/SpecificRoute.png')}
              style={styles.routeImage}
              resizeMode="contain"
            />
          </View>

          {/* Location Badge with Bookmark */}
          <View style={styles.locationBadge}>
            <View style={styles.locationIcon} />
            <Text style={styles.locationText} numberOfLines={1}>
              Target, Penn Ave - Cathedral of Learning
            </Text>
            <Pressable style={styles.bookmarkButton}>
              <Image source={require('./assets/bookmark.png')} style={styles.bookmarkIcon} />
            </Pressable>
          </View>
        </View>

        {/* Top Summary Bar - Sticky */}
        <View style={styles.topSummary}>
          <View style={styles.summaryIcons}>
            <Image source={require('./assets/busicon.png')} style={styles.topIcon} />
            <Text style={styles.topBusText}>{routeData.busRoute}</Text>
            <Image source={require('./assets/walk.png')} style={styles.topIcon} />
          </View>
          <Text style={styles.topTime}>{routeData.ETA}</Text>
        </View>

        {/* Leave/Arrive Info - Sticky */}
        <View style={styles.infoBar}>
          <Text style={styles.infoText}>Leave within {routeData.walk1} min</Text>
          <Text style={styles.infoText}>Arrive {routeData.endTime}</Text>
        </View>

        {/* Route Details */}
        <View style={styles.routesContent}>
          {/* Walk to bus stop */}
          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.stepContent}>
              <View style={styles.stepHeader}>
                <Image source={require('./assets/walk.png')} style={styles.stepIcon} />
                <Text style={styles.stepTitle}>Walk to</Text>
                <View style={styles.stopBadge}>
                  <Text style={styles.stopBadgeText}>Forbes Ave / Craft Ave</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 71C - Oakland */}
          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={[styles.timelineDot, styles.busStop]} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.stepContent}>
              <View style={styles.routeCard}>
                <View style={styles.busHeader}>
                  <Image source={require('./assets/busicon.png')} style={styles.busIcon} />
                  <Text style={styles.busRouteText}>71C - Oakland</Text>
                </View>
                <View style={styles.timeInfo}>
                  <Text style={styles.timeLabel}>at 3:32 PM</Text>
                  <Text style={styles.scheduledText}>Scheduled</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Oakland stop */}
          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={[styles.timelineDot, styles.smallDot]} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.stepContent}>
              <View style={styles.stopRow}>
                <Text style={styles.stopText}>Board Bus at Forbes Ave/Craft Ave</Text>
                <Text style={styles.stopTime}>at 3:32 PM</Text>
              </View>
            </View>
          </View>



          {/* Transfer stops */}
          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={[styles.timelineDot, styles.smallDot]} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.stepContent}>
              <View style={styles.transferRow}>
                <View style={styles.transferDot} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.transferText}>Next Stop: Penn Ave at Sheridan Ave</Text>
                  <View style={styles.stopsLabel}>
                    <Text style={styles.stopsLabelText}>Ride for 20 stops</Text>
                  </View>
                </View>
                <Text style={styles.transferTime}>3:39 PM</Text>
              </View>

            </View>
          </View>

          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={[styles.timelineDot, styles.smallDot]} />
              <View style={styles.timelineLine} />
            </View>

          </View>

          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={[styles.timelineDot, styles.smallDot]} />
              <View style={styles.timelineLine} />
            </View>

            <View style={styles.stepContent}>
              <View style={styles.routeCard}>
                <View style={styles.busHeader}>
                  <Image
                    source={require('./assets/busicon.png')}
                    style={styles.busIcon}
                  />
                  <Text style={styles.busRouteText}>
                    Get off at Forbes Ave at Halket Ave
                  </Text>
                </View>
              </View>
            </View>
          </View>


          {/* Walk to destination */}
          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={styles.timelineDot} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.stepContent}>
              <View style={styles.stepHeader}>
                <Image source={require('./assets/walk.png')} style={styles.stepIcon} />
                <Text style={styles.stepTitle}>Walk to destination</Text>
                <Text style={styles.walkTime}>{routeData.walk2} min</Text>
              </View>
            </View>
          </View>

          {/* Final Destination */}
          <View style={styles.stepContainer}>
            <View style={styles.timeline}>
              <View style={[styles.timelineDot, styles.destinationDot]} />
            </View>
            <View style={styles.stepContent}>
              <View style={styles.destinationCard}>
                <View style={styles.destinationHeader}>
                  <View style={styles.greenDot} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.destinationName}>Cathedral of Learning</Text>
                    <Text style={styles.destinationAddress}>4200 Fifth Ave, Pittsburgh, PA</Text>
                    <Text style={styles.destinationAddress}>15260, USA</Text>
                  </View>
                  <Text style={styles.destinationTime}>3:54</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom padding for navigation bar */}
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mapContainer: {
    height: 300,
    position: 'relative',
    backgroundColor: '#1a3a52',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  routeImageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeImage: {
    width: 250,
    height: 280,
  },
  locationBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },
  locationIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    marginRight: 8,
  },
  locationText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  bookmarkButton: {
    padding: 4,
    marginLeft: 8,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  topSummary: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    zIndex: 10,
  },
  summaryIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topIcon: {
    width: 18,
    height: 18,
    marginRight: 12,
    tintColor: '#2e7d32',
  },
  topBusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginRight: 12,
  },
  topTime: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  infoBar: {
    backgroundColor: '#1e4d5e',
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
  },
  routesContent: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  timeline: {
    width: 30,
    alignItems: 'center',
    marginRight: 12,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: 'white',
    zIndex: 2,
  },
  busStop: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: 'white',
  },
  smallDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
  },
  destinationDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
  },
  timelineLine: {
    width: 3,
    flex: 1,
    backgroundColor: '#4CAF50',
    marginTop: -6,
    marginBottom: -6,
  },
  stepContent: {
    flex: 1,
    paddingBottom: 12,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e5266',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  stepIcon: {
    width: 16,
    height: 16,
    tintColor: 'white',
    marginRight: 8,
    resizeMode: 'contain',
  },
  stepTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  stopBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flex: 1,
  },
  stopBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  walkTime: {
    color: 'white',
    fontSize: 14,
    marginLeft: 'auto',
  },
  routeCard: {
    backgroundColor: '#2e5266',
    padding: 12,
    borderRadius: 8,
  },
  busHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  busIcon: {
    width: 18,
    height: 18,
    tintColor: '#4CAF50',
    marginRight: 8,
    resizeMode: 'contain',
  },
  busRouteText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLabel: {
    color: '#a0c4d4',
    fontSize: 12,
  },
  scheduledText: {
    color: '#a0c4d4',
    fontSize: 11,
  },
  stopRow: {
    backgroundColor: '#2e5266',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stopText: {
    color: 'white',
    fontSize: 14,
  },
  stopTime: {
    color: '#a0c4d4',
    fontSize: 13,
  },
  allDeparturesRow: {
    backgroundColor: '#2e5266',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allDeparturesText: {
    color: 'white',
    fontSize: 14,
  },
  arrow: {
    color: 'white',
    fontSize: 20,
  },
  transferRow: {
    backgroundColor: '#2e5266',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transferDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 8,
  },
  transferText: {
    color: 'white',
    fontSize: 13,
    flex: 1,
  },
  transferTime: {
    color: '#a0c4d4',
    fontSize: 13,
    marginLeft: 8,
  },
  stopsLabel: {
    backgroundColor: '#5a7a8a',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  stopsLabelText: {
    color: 'white',
    fontSize: 10,
  },
  destinationCard: {
    backgroundColor: '#2e5266',
    padding: 12,
    borderRadius: 8,
  },
  destinationHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    marginRight: 12,
    marginTop: 4,
  },
  destinationName: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  destinationAddress: {
    color: '#a0c4d4',
    fontSize: 12,
  },
  destinationTime: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});