import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Tickets'>;

export default function TicketsScreen({ navigation }: Props) {
  const [fareTypeOpen, setFareTypeOpen] = useState(false);
  const [passTypeOpen, setPassTypeOpen] = useState(false);

  const fareTypes = ["Incline Only", "Bus + Incline Pass"];

  const passOptions: { [key: string]: { name: string; price: string }[] } = {
    "Incline Only": [
      { name: "3 Hr Round Trip", price: "$2.75" },
    ],
    "Bus + Incline Pass": [
      { name: "3 Hour Pass", price: "$2.75" },
      { name: "Day Pass", price: "$7.00" },
      { name: "7 Day Pass", price: "$25.00" },
      { name: "31 Day Pass", price: "$97.50" },
      { name: "Annual Pass", price: "$1,072.50" }
    ],
  };

  const [selectedFare, setSelectedFare] = useState<string | null>(null);
  const [selectedPass, setSelectedPass] = useState<string | null>(null);

  const currentPassList = selectedFare ? passOptions[selectedFare] : [];

  return (
    <Layout navigation={navigation}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flex: 1,
          paddingBottom: 120,
          justifyContent: 'center',
        }}
      >

        {/* Fare Type Dropdown */}
        <Pressable
          style={[styles.dropdown, fareTypeOpen && styles.dropdownActive]}
          onPress={() => setFareTypeOpen(!fareTypeOpen)}
        >
          <Text style={styles.dropdownLabel}>{selectedFare || "Fare Type"}</Text>
          <Text style={styles.arrow}>{fareTypeOpen ? "▲" : "▼"}</Text>
        </Pressable>

        {fareTypeOpen && (
          <View style={styles.dropdownContent}>
            {fareTypes.map((type) => (
              <Pressable
                key={type}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedFare(type);
                  setSelectedPass(null);  // Reset pass when fare changes
                  setFareTypeOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* Type of Pass Dropdown */}
        <Pressable
          style={[styles.dropdown, passTypeOpen && styles.dropdownActive]}
          onPress={() => {
            if (selectedFare) setPassTypeOpen(!passTypeOpen);
          }}
        >
          <Text style={styles.dropdownLabel}>
            {selectedPass || "Type of Pass"}
          </Text>
          <Text style={styles.arrow}>{passTypeOpen ? "▲" : "▼"}</Text>
        </Pressable>

        {passTypeOpen && selectedFare && (
          <View style={styles.dropdownContent}>
            {currentPassList.map((p) => (
              <Pressable
                key={p.name}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedPass(p.name);
                  setPassTypeOpen(false);
                }}
              >
                <View style={styles.passRow}>
                  <Text style={styles.dropdownItemText}>{p.name}</Text>
                  <Text style={styles.priceText}>{p.price}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}

        {/* Submit Button */}
        <Pressable
          style={[
            styles.submitButton,
            (!selectedFare || !selectedPass) && styles.submitButtonDisabled
          ]}
          disabled={!selectedFare || !selectedPass}
          onPress={() =>
            navigation.navigate('ConfirmTicket', {
              fare: selectedFare,
              pass: selectedPass,
            })
          }
        >
          <Text style={styles.submitButtonText}>Confirm Ticket</Text>
        </Pressable>

      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a56',
    padding: 20,
  },
  dropdown: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  dropdownActive: {
    borderColor: '#4CAF50',
  },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
  },
  arrow: {
    fontSize: 18,
    color: '#4CAF50',
  },
  dropdownContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  dropdownItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  passRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#a5d6a7',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
