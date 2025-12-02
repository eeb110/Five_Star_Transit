import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Tickets'>;

type FareType = 'incline' | 'bus_incline';

type Pass = {
  id: string;
  name: string;
  price: number;
};

const fareData: Record<FareType, Pass[]> = {
  incline: [
    { id: '3hr_rt', name: '3 Hr Round Trip', price: 2.75 },
    { id: 'day', name: 'Day Pass', price: 7.0 },
  ],
  bus_incline: [
    { id: '3hr', name: '3 Hour Pass', price: 2.75 },
    { id: 'day', name: 'Day Pass', price: 7.0 },
    { id: '7day', name: '7 Day Pass', price: 25.0 },
    { id: '31day', name: '31 Day Pass', price: 97.5 },
    { id: 'annual', name: 'Annual Pass', price: 1072.5 },
  ],
};

export default function TicketsScreen({ navigation }: Props) {
  const [fareTypeOpen, setFareTypeOpen] = useState(false);
  const [passTypeOpen, setPassTypeOpen] = useState(false);
  const [selectedFareType, setSelectedFareType] = useState<FareType>('bus_incline');
  const [selectedPass, setSelectedPass] = useState<Pass | null>(null);

  const fareTypeLabel = selectedFareType === 'incline' ? 'Incline only' : 'Bus + Incline Pass';
  const passes = fareData[selectedFareType];

  const handleFareTypeSelect = (type: FareType) => {
    setSelectedFareType(type);
    setSelectedPass(null);
    setFareTypeOpen(false);
  };

  const handlePassSelect = (pass: Pass) => {
    setSelectedPass(pass);
    setPassTypeOpen(false);
  };

  return (
    <Layout navigation={navigation}>
      <ScrollView style={styles.container}>
        {/* Fare Type Dropdown */}
        <View style={styles.section}>
          <Text style={styles.label}>Fare Type</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setFareTypeOpen(!fareTypeOpen)}
          >
            <Text style={styles.dropdownText}>{fareTypeLabel}</Text>
            <Text style={styles.arrow}>{fareTypeOpen ? '▲' : '▼'}</Text>
          </TouchableOpacity>

          {fareTypeOpen && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleFareTypeSelect('incline')}
              >
                <Text style={styles.dropdownItemText}>Incline Pass</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleFareTypeSelect('bus_incline')}
              >
                <Text style={styles.dropdownItemText}>Bus + Incline Pass</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Type of Pass Dropdown */}
        <View style={styles.section}>
          <Text style={styles.label}>Type of Pass</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setPassTypeOpen(!passTypeOpen)}
          >
            <Text style={styles.dropdownText}>
              {selectedPass ? selectedPass.name : 'Select a pass'}
            </Text>
            <Text style={styles.arrow}>{passTypeOpen ? '▲' : '▼'}</Text>
          </TouchableOpacity>

          {passTypeOpen && (
            <View style={styles.dropdownMenu}>
              {passes.map((pass) => (
                <TouchableOpacity
                  key={pass.id}
                  style={styles.passItem}
                  onPress={() => handlePassSelect(pass)}
                >
                  <Text style={styles.passName}>{pass.name}</Text>
                  <Text style={styles.passPrice}>${pass.price.toFixed(2)}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Selected Pass Display */}
        {selectedPass && !passTypeOpen && (
          <View style={styles.selectedPassContainer}>
            <View style={styles.selectedPass}>
              <Text style={styles.selectedPassName}>{selectedPass.name}</Text>
              <Text style={styles.selectedPassPrice}>${selectedPass.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F405C',
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#4ade80',
    marginBottom: 8,
    fontWeight: '500',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 12,
    color: '#666',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 8,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  passItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  passName: {
    fontSize: 16,
    color: '#333',
  },
  passPrice: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  selectedPassContainer: {
    marginTop: 8,
  },
  selectedPass: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedPassName: {
    fontSize: 16,
    color: '#333',
  },
  selectedPassPrice: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
});