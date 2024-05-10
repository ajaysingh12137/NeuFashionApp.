import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');
const Main = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#C2D2D9', flex: 1}}>
      <StatusBar backgroundColor={'#C2D2D9'} barStyle={'light-content'} />
      <View>
        <Image
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            height: height - 600,
            width: width,
          }}
          source={require('../image/fash.png')}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image
          style={{
            position: 'absolute',
            alignItems: 'center',
            height: height - 400,
            width: width + 20,
          }}
          source={require('../image/model.png')}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'purple',
            margin: 7,
            padding: 7,
            borderRadius: 50,
            marginTop: 50,
            width: width - 60,
            borderWidth: 3,
            borderColor: 'purple',
            bottom: 30,
            left: 20,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#C2D2D9',
            margin: 7,
            padding: 7,
            borderRadius: 50,
            width: width - 60,
            borderWidth: 3,
            borderColor: '#C2D2D9',
            bottom: 30,
            left: 20,
          }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'purple'}}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
