import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchPaige'>;

export default function SearchPaige({ navigation }: Props) {
  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Detailed Search</Text>
        <Text style={styles.paragraph}>Here you can view and manage your detailed bus routes.</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  paragraph: { fontSize: 16, color: '#555' },
});
