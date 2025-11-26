import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/common/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to CPAN 213!</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  description: {
    color: '#7f8c8d',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  welcomeText: {
    color: '#2c3e50',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
