import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketConfirmed'>;

export default function TicketConfirmedScreen({ navigation, route }: Props) {
  const { fareType, passType, price, ticketId, purchaseDate, purchaseTime } = route.params;
  const [addedToWallet, setAddedToWallet] = useState(false);

  const handleAddToWallet = () => {
    // In a real app, this would integrate with Apple Wallet or Google Pay
    Alert.alert(
      'Add to Wallet',
      'In a production app, this would add your ticket to Apple Wallet or Google Pay.',
      [
        {
          text: 'OK',
          onPress: () => setAddedToWallet(true)
        }
      ]
    );
  };

  return (
    <Layout navigation={navigation}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Success Message */}
        <View style={styles.successBanner}>
          <Text style={styles.successIcon}>✓</Text>
          <Text style={styles.successTitle}>Purchase Complete!</Text>
          <Text style={styles.successSubtitle}>Your ticket is ready to use</Text>
        </View>

        {/* Ticket Card */}
        <View style={styles.ticketCard}>
          {/* Header */}
          <View style={styles.ticketHeader}>
            <Text style={styles.ticketTitle}>Pittsburgh Incline</Text>
            <Text style={styles.ticketId}>#{ticketId}</Text>
          </View>

          {/* QR Code Placeholder */}
          <View style={styles.qrCodeContainer}>
            <View style={styles.qrCode}>
              <Text style={styles.qrText}>QR CODE</Text>
              <Text style={styles.qrSubtext}>{ticketId}</Text>
            </View>
          </View>

          {/* Ticket Details */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Fare Type</Text>
              <Text style={styles.detailValue}>{fareType}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Pass Type</Text>
              <Text style={styles.detailValue}>{passType}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Amount Paid</Text>
              <Text style={[styles.detailValue, styles.priceValue]}>{price}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Purchase Date</Text>
              <Text style={styles.detailValue}>{purchaseDate}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Purchase Time</Text>
              <Text style={styles.detailValue}>{purchaseTime}</Text>
            </View>
          </View>

          {/* Instructions */}
          <View style={styles.instructionsBox}>
            <Text style={styles.instructionsTitle}>How to Use:</Text>
            <Text style={styles.instructionsText}>
              Present this QR code to the operator when boarding the incline or bus.
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.walletButton, addedToWallet && styles.walletButtonAdded]}
            onPress={handleAddToWallet}
            disabled={addedToWallet}
          >
            <Text style={styles.walletButtonIcon}>
              {addedToWallet ? '✓' : '👛'}
            </Text>
            <Text style={styles.walletButtonText}>
              {addedToWallet ? 'Added to Wallet' : 'Add to Wallet'}
            </Text>
          </Pressable>

          <Pressable
            style={styles.doneButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a56',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 120,
  },
  successBanner: {
    backgroundColor: '#4CAF50',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  successIcon: {
    fontSize: 48,
    color: 'white',
    marginBottom: 8,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  successSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  ticketCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  ticketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  ticketId: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  qrSubtext: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailLabel: {
    fontSize: 15,
    color: '#666',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '600',
  },
  priceValue: {
    color: '#4CAF50',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginVertical: 12,
  },
  instructionsBox: {
    backgroundColor: '#f0f7ff',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 12,
  },
  walletButton: {
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  walletButtonAdded: {
    backgroundColor: '#e8f5e9',
  },
  walletButtonIcon: {
    fontSize: 24,
  },
  walletButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});