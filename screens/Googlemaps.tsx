import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';


const Googlemaps = () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: 31.32429868416628, 
                    longitude: 75.60135442352798,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default Googlemaps