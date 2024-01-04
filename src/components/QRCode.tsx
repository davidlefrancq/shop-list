import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {QRCodeContexte} from '../contexts/QRCodeContext';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Le conteneur prendra toute la place disponible dans la colonne
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default function QRCode(): React.JSX.Element {
  const {setCode} = useContext(QRCodeContexte);
  return (
    <View style={styles.container}>
      <QRCodeScanner
        cameraStyle={{width: 'auto'}}
        onRead={({data}) => setCode(data)}
        flashMode={RNCamera.Constants.FlashMode.auto}
        showMarker={true}
        reactivate={true}
        reactivateTimeout={600}
      />
    </View>
  );
}
