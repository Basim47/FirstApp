import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
//Icons
import Icons from 'react-native-vector-icons/Feather';

const Noti = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomColor: '#000',
          borderBottomWidth: 2,
          borderRightWidth: 1,
          borderLeftWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily:'Nunito-Bold',
            color: '#000',
            marginLeft: 14,
          }}>
          Notifications
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            marginLeft: 315,
            width: 30,
            height: 30,
          }}>
          <Icons name={'user-plus'} size={30} color={'#000'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{width: '100%', height: 100, padding: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily:'Nunito-Medium',
              marginLeft: 4,
              color: '#000',
            }}>
            New Activity :
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
        </View>
        <View style={{width: '100%', padding: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily:'Nunito-Medium',
              marginLeft: 4,
              color: '#000',
            }}>
            This Week :
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
        </View>
        <View style={{width: '100%', padding: 10}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily:'Nunito-Medium',
              marginLeft: 4,
              color: '#000',
            }}>
            This Month :
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{width: 40, height: 40, borderRadius: 50, marginTop: 17}}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 7,
                marginTop: 31,
                color: '#000',
              }}>
              GETO liked your post.
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: 'grey',
                marginLeft: 6,
                marginTop: 35,
              }}>
              12h ago
            </Text>
            <Image
              source={require('../assets/images/gojopt.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginLeft: 50,
                marginTop: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              opacity: 0.5,
              marginTop: 5,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Noti;

const styles = StyleSheet.create({});
