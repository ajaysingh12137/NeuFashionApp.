import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Data from '../data/Data';
import Data3 from '../data/Data3';
import Data4 from '../data/Data4';

const Home = ({navigation}: {navigation: any}) => {
  const data = Data;
  const data3 = Data3;
  const data4 = Data4;

  const [color, setcolor] = useState(true);
  const active = () => {
    setcolor(!color);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <StatusBar
          hidden={false}
          showHideTransition={'fade'}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.2,
              marginBottom: 10,
              borderRadius: 10,
            }}>
            <View style={{height: 55, width: 55}}>
              <Image
                source={require('../image/logo.png')}
                style={{height: 50, width: 100}}
              />
            </View>

            <AntDesign
              name="bells"
              size={18}
              style={{color: 'black', left: 95}}
            />
            <TouchableOpacity onPress={active}>
              <AntDesign
                name="hearto"
                size={18}
                style={{color: color ? 'black' : 'red', left: 35}}
              />
            </TouchableOpacity>
            <SimpleLineIcons
              name="handbag"
              size={18}
              style={{color: 'black', right: 25}}
            />
          </View>
          <View
            style={{
              marginLeft: 8,
              borderRadius: 1,
              marginRight: 8,
              backgroundColor: '#EBEDEF',
              opacity: 0.8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <AntDesign
                name="search1"
                size={13}
                style={{paddingRight: 10, color: 'black'}}
              />
              <TextInput
                style={{fontSize: 17, width: '90%', height: 38, color: 'black'}}
                placeholder="Search for styles, brands & more"
              />
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: 'row',
            }}>
            {data3.map((item, index) => (
              <TouchableWithoutFeedback
                onPress={() => Alert.alert('Welcome Here !...')}
                key={index}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 200,
                      width: 350,
                      marginHorizontal: 4,
                      marginTop: 10,
                      borderRadius: 10,
                      marginLeft: 10,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
          }}>
          {data4.map((item, index) => (
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('Welcome Here !...')}
              key={index}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    marginHorizontal: 10,
                    marginTop: 15,
                  }}
                />

                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: '400',
                    color:'purple'
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
        <TouchableWithoutFeedback
          onPress={() => Alert.alert('Welcome Here !...')}
          style={{backgroundColor: 'white', marginLeft: 15}}>
          <Image
            source={require('../image/offer.png')}
            style={{
              height: 80,
              width: 360,
              backgroundColor: 'white',
              borderRadius: 10,
              marginLeft: 18,
              marginTop: 15,
            }}
          />
        </TouchableWithoutFeedback>
        <View style={{marginTop: 15, marginLeft: 15}}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'grey'}}>
            GRAB NOW OR GONE
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500', color: 'black'}}>
            Irresistible Offers to bag
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('Welcome Here !...')}
              key={index}>
              <View>
                <ImageBackground
                  borderRadius={10}
                  source={{uri: item.image}}
                  style={{
                    aspectRatio: 5 / 6,
                    width: 200,
                    marginLeft: 10,
                    marginTop: 15,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 5,
                      bottom: -5,
                      fontSize: 35,
                      fontWeight: 'bold',
                      color: 'gray',
                    }}>
                    {item.offer}.OFF
                  </Text>
                </ImageBackground>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  {item.name}
                </Text>

                <Text
                  style={{
                    textAlign: 'right',
                    color: 'purple',
                    fontSize: 15,
                    fontWeight: '500',
                    marginRight: 10,
                    marginBottom: 10,
                    marginTop: 10,
                  }}>
                  Rating {item.rating}
                </Text>
                <Image
                  source={require('../image/rating.png')}
                  style={{
                    height: 80,
                    width: 80,
                    position: 'absolute',
                    bottom: -50,
                    marginBottom: 30,
                    marginLeft: 10,
                    tintColor: 'purple',
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            marginLeft: 10,
            color: 'gray',
            marginTop: 10,
          }}>
          EXPLORE MORE
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            marginLeft: 10,
            color: 'black',
          }}>
          Trending styles at great discounts
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 5,
          }}>
          {data4.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Detail', item)}
                key={index}>
                <View style={{}}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 200,
                      width: 170,
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: 'purple',
                      fontWeight: '400',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
