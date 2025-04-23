import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>NEXA Translator</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="account-circle" size={28} color="#6C63FF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeHeading}>Hello!</Text>
          <Text style={styles.welcomeText}>
            Welcome to NEXA, your sign language companion
          </Text>
        </View>

        {/* Features Section */}
        <Text style={styles.sectionTitle}>Choose a Feature</Text>

        {/* Word to Sign Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('WordToSign')}>
          <View style={styles.cardHeader}>
            <Icon name="gesture" size={24} color="#6C63FF" />
            <Text style={styles.cardTitle}>Word to Sign</Text>
          </View>
          <Text style={styles.cardText}>
            Convert text into sign language visuals. Type a word and see its
            sign language representation.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.actionText}>Get Started</Text>
            <Icon name="chevron-right" size={20} color="#6C63FF" />
          </View>
        </TouchableOpacity>

        {/* Real-time Detection Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('RealTimeDetection')}>
          <View style={styles.cardHeader}>
            <Icon name="camera" size={24} color="#6C63FF" />
            <Text style={styles.cardTitle}>Real-time Detection</Text>
          </View>
          <Text style={styles.cardText}>
            Use your camera to detect and translate sign language gestures in
            real-time.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.actionText}>Get Started</Text>
            <Icon name="chevron-right" size={20} color="#6C63FF" />
          </View>
        </TouchableOpacity>

        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <Icon name="information" size={20} color="#6C63FF" />
          <Text style={styles.infoText}>
            Learn sign language faster with our AI-powered recognition system
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  appName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeHeading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionText: {
    color: '#6C63FF',
    fontWeight: '500',
    marginRight: 8,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f7ff',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 12,
    flex: 1,
  },
});

export default Home;
