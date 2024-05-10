import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';


const Detail = ({route}: {route: any}) => {
  const navigation = useNavigation();
  const details = route?.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../image/arrow.png')}
              style={{height: 20, width: 20, marginLeft: 15}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
            Detail
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../image/cart.png')}
              style={{
                height: 25,
                width: 25,
                marginRight: 20,
                tintColor: 'black',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Image
            style={{
              height: 400,
              width: 350,
              borderRadius: 20,
            }}
            source={{uri: details?.image}}
          />
        </View>
        <View style={{marginTop: 15, marginLeft: 20, marginRight: 18}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            {details.name}
          </Text>
          <Text style={{marginTop: 5,fontSize:15,fontWeight:'400',color:'black'}}>{details.description}</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../image/rating.png')}
            style={{
              height: 30,
              width: 100,
              tintColor: 'purple',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 5,
              textAlign: 'center',
              marginTop: 1,
              fontWeight: '500',
            }}>
            {details.rating}/5
          </Text>
          <Text
            style={{
              marginLeft: 4,
              fontSize: 18,
              textAlign: 'center',
              color: 'grey',
            }}>
            (Based on 20 Ratings)
          </Text>
        </View>
        <View
          style={{
            marginLeft: 15,

            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginLeft: 4,
              fontSize: 25,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
            }}>
            ₹{details.price}
          </Text>
          <Text style={{marginLeft: 4, fontSize: 15, color: 'grey'}}>MRP </Text>
          <Text
            style={{
              textDecorationLine: 'line-through',
              fontSize: 15,
              color: 'grey',
            }}>
            ₹3999
          </Text>
          <Text style={{marginLeft: 3, fontSize: 15, color: 'purple'}}>
            18% OFF
          </Text>
        </View>
        <Text style={{marginLeft: 20, color: 'grey'}}>
          Inclusive off all taxes
        </Text>
        <View
          style={{
            height: 1,
            width: 400,
            backgroundColor: 'black',
            opacity: 0.2,
            marginTop: 5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            Offers
          </Text>
          <View
            style={{
              height: 3,
              width: 3,
              backgroundColor: 'grey',
              marginLeft: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />

          <Text
            style={{
              textAlign: 'center',
              alignItems: 'center',
              marginLeft: 5,
              fontSize: 20,
              color: 'grey',
            }}>
            2 available
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              borderWidth: 0.3,
              borderColor: 'black',
              height: 70,
              width: 300,
              margin: 15,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../image/tag.png')}
              style={{height: 40, width: 40, margin: 10}}
            />
            <Text style={{fontSize: 20, fontWeight: '500', color: 'purple'}}>
              Extra 10% off on Paytm...
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.3,
              borderColor: 'black',
              height: 70,
              width: 340,
              margin: 15,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../image/tag.png')}
              style={{height: 40, width: 40, margin: 10}}
            />
             <Text style={{fontSize: 20, fontWeight: '500', color: 'purple'}}>
              Extra 30% off on Credit Card....
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
      onPress={()=>Alert.alert('Add to cart Sucessfully')}
        style={{
          flexDirection: 'row',
          borderColor: 'black',
          height: 40,
          width: 370,
          marginLeft: 10,
          alignItems: 'center',
          borderWidth: 0.5,
          marginBottom: 10,
          borderRadius:5
        }}>
        <Image
          source={require('../image/heart.png')}
          style={{height: 25, width: 25, tintColor: 'black', margin: 10}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius:5
          }}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: '400'}}>
            Add to Bag
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Detail;
