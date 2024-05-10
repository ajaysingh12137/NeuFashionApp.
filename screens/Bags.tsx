import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../App'
import MapView from 'react-native-maps';

const Bags = () => {
  return (
    
      <MapView style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 28.68628167182765, 
          longitude: 77.22186395772125,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    

  )
}

export default Bags