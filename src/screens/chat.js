import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
//Icons
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';

const Chat = () => {
  const themeMode = useSelector(state => state.theme.mode);
  const userData = useSelector(state => state.user.Fullname)
  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      mediaType: 'any',
    })
      .then(res => {
        setimageRes(res.path);
      })
      .catch(err => {
        Alert.alert('Canceled', 'Image not captured');
      });
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: themeMode.background
    }}>
      <View
        style={{
          width: '100%',
          height: 45,
          backgroundColor: themeMode.background,
          flexDirection: 'row',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomColor: themeMode.text,
          borderBottomWidth: 2,
          borderRightWidth: 1,
          borderLeftWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Nunito-Bold',
            color: themeMode.text,
            marginTop: 6,
            marginLeft: 16,
          }}>
          {userData.Fullname}
        </Text>
        <TouchableOpacity
          style={{ width: 30, height: 20, marginTop: 15, marginLeft: 3 }}>
          <Icons name={'down'} size={15} color={themeMode.text} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            width: '90%',
            height: 40,
            marginLeft: 19,
            marginVertical: 10,
            paddingLeft: 50,
            backgroundColor: themeMode.primary,
            borderRadius: 30,
            color: themeMode.input,
            elevation: 6,
            fontSize: 16,
            fontFamily: 'Nunito-Regular',
          }}
          placeholder="Search"
          placeholderTextColor={themeMode.input}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            marginLeft: 35,
            marginTop: 19,
            width: 35,
            height: 35,
          }}>
          <Icon name={'search'} size={20} color={themeMode.input} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ paddingHorizontal: 2 }}>
        <View
          style={{
            width: '100%',
            height: 110,
            paddingHorizontal: 8,
          }}>
          <View
            style={{
              width: '100%',
              height: 30,
              paddingLeft: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{ fontSize: 19, fontFamily: 'Nunito-Bold', color: themeMode.text }}>
              Online
            </Text>
          </View>
          <ScrollView horizontal>
            <Image
              source={require('../assets/images/getodp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/gojodp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/mahidp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/yujidp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/nanadp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/tojidp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/tojipt.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/getodp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/gojodp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/mahidp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/yujidp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/nanadp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/tojidp.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />

            <Image
              source={require('../assets/images/tojipt.png')}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            />
          </ScrollView>
        </View>
        <View
          style={{
            width: '100%',
            height: 35,
            paddingLeft: 14,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{ fontSize: 19, fontFamily: 'Nunito-Bold', color: themeMode.text }}>
            Messeges
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#1b6ef5',
                marginLeft: 175,
                fontFamily: 'Nunito-Regular',
              }}>
              Requests
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/getodp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              GETO SUGURU
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/mahidp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              MAHITO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/gojodp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              GOJO SATORU
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/sukdp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              ROYMEN SUKUNA
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/tojidp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              ZEN'IN TOJI
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/nanadp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              NANAMI KENTO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/yujidp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              YUJI ITADORI
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/tojipt.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              MEGUMI FUSHIGURO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/getodp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              GETO SUGURU
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/mahidp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              MAHITO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/gojodp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              GOJO SATORU
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/sukdp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              ROYMEN SUKUNA
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/tojidp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              ZEN'IN TOJI
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/nanadp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              NANAMI KENTO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/yujidp.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              YUJI ITADORI
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
          <Image
            source={require('../assets/images/tojipt.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginHorizontal: 10,
              marginTop: 8,
            }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 14,
                color: themeMode.text,
                marginTop: 14,
                marginLeft: 5,
              }}>
              MEGUMI FUSHIGURO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 4,
                marginLeft: 5,
              }}>
              Seen
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCamera}
            style={{ position: 'absolute', marginLeft: 320, marginTop: 15 }}>
            <Icon name={'camera'} size={28} color={themeMode.text} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
