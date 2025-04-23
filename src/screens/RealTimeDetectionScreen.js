import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const RealTimeDetectionScreen = ({navigation}) => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [detectedSign, setDetectedSign] = useState(null);
  const [flashMode, setFlashMode] = useState('off');
  const [cameraType, setCameraType] = useState('back');

  // Placeholder states for actual ML implementation
  const [confidence, setConfidence] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulating sign detection with some example data
  const simulatedSigns = [
    'HELLO',
    'THANK YOU',
    'PLEASE',
    'GOOD',
    'BAD',
    'YES',
    'NO',
    'HELP',
    'SORRY',
    'LEARN',
  ];

  const simulateDetection = () => {
    if (isRecording) {
      // Simulate ML model processing
      setIsProcessing(true);

      // Randomly select a sign from the simulated data
      const randomInterval = Math.floor(Math.random() * 3000) + 1000; // 1-4 seconds
      const randomConfidence = Math.floor(Math.random() * 30) + 70; // 70-99%

      setTimeout(() => {
        if (isRecording) {
          const randomSign =
            simulatedSigns[Math.floor(Math.random() * simulatedSigns.length)];
          setDetectedSign(randomSign);
          setConfidence(randomConfidence);
          setIsProcessing(false);

          // Continue the simulation loop
          simulateDetection();
        }
      }, randomInterval);
    }
  };

  const toggleRecording = () => {
    const newRecordingState = !isRecording;
    setIsRecording(newRecordingState);

    if (newRecordingState) {
      // Start the detection simulation
      simulateDetection();
    } else {
      // Stop the simulation
      setDetectedSign(null);
      setConfidence(0);
    }
  };

  const toggleFlash = () => {
    setFlashMode(flashMode === 'off' ? 'on' : 'off');
  };

  const toggleCameraType = () => {
    setCameraType(cameraType === 'back' ? 'front' : 'back');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      {/* Camera View Placeholder */}
      <View style={styles.cameraContainer}>
        <View style={styles.cameraPlaceholder}>
          <Icon name="camera" size={50} color="#fff" />
          <Text style={styles.cameraPlaceholderText}>Camera Preview</Text>
          {isProcessing && (
            <View style={styles.processingIndicator}>
              <Text style={styles.processingText}>Processing...</Text>
            </View>
          )}
        </View>

        {/* Top Controls */}
        <View style={styles.topControls}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color="#fff" />
          </TouchableOpacity>

          <View style={styles.cameraControls}>
            <TouchableOpacity
              style={styles.cameraControlButton}
              onPress={toggleFlash}>
              <Icon
                name={flashMode === 'on' ? 'flash' : 'flash-off'}
                size={22}
                color="#fff"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cameraControlButton}
              onPress={toggleCameraType}>
              <Icon name="camera-switch" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Detection Results */}
        {detectedSign && (
          <View style={styles.detectionResults}>
            <Text style={styles.detectedSignText}>{detectedSign}</Text>
            <View style={styles.confidenceContainer}>
              <View style={[styles.confidenceBar, {width: `${confidence}%`}]} />
              <Text style={styles.confidenceText}>
                {confidence}% confidence
              </Text>
            </View>
          </View>
        )}

        {/* Bottom Controls */}
        <View style={styles.bottomControls}>
          <TouchableOpacity
            style={[styles.recordButton, isRecording && styles.recordingButton]}
            onPress={toggleRecording}>
            {isRecording ? (
              <Icon name="stop" size={30} color="#fff" />
            ) : (
              <View style={styles.recordButtonInner} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Instructions Panel */}
      <View style={styles.instructionsPanel}>
        <View style={styles.instructionsHeader}>
          <Text style={styles.instructionsTitle}>Instructions</Text>
          <TouchableOpacity>
            <Icon name="help-circle-outline" size={22} color="#666" />
          </TouchableOpacity>
        </View>

        <Text style={styles.instructionText}>
          1. Position your hand clearly in frame
        </Text>
        <Text style={styles.instructionText}>
          2. Make sure there's good lighting
        </Text>
        <Text style={styles.instructionText}>
          3. Hold each sign for 1-2 seconds
        </Text>
        <Text style={styles.instructionText}>
          4. Try to avoid background movement
        </Text>

        <TouchableOpacity style={styles.historyButton}>
          <Icon name="history" size={18} color="#6C63FF" />
          <Text style={styles.historyButtonText}>View Detection History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 3,
    position: 'relative',
  },
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraPlaceholderText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  processingIndicator: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  processingText: {
    color: '#fff',
    fontSize: 14,
  },
  topControls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraControls: {
    flexDirection: 'row',
  },
  cameraControlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  detectionResults: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 15,
    borderRadius: 10,
  },
  detectedSignText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  confidenceContainer: {
    height: 10,
    backgroundColor: '#444',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  confidenceBar: {
    height: '100%',
    backgroundColor: '#6C63FF',
    borderRadius: 5,
  },
  confidenceText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF6584',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  recordingButton: {
    backgroundColor: '#FF3B30',
  },
  recordButtonInner: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  instructionsPanel: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  instructionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  historyButtonText: {
    color: '#6C63FF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default RealTimeDetectionScreen;
