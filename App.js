import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal
} from 'react-native';
import React, { useState, useEffect } from 'react';
//Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
//Permissions
import { requestUserPermission, notificationListener } from './src/services/fireMsg';
import { PermissionsAndroid } from 'react-native';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './src/store/themeSlice';

const DATA = [
  {
    id: 1,
    name: 'GOJO',
    Lname: 'SATORU',
    image: require('./src/assets/images/gojodp.png'),
    image1: require('./src/assets/images/gojopt.png'),
    text: '992k Likes.',
    txt: 'Yo-wai-mo!',
  },
  {
    id: 2,
    name: 'GETO',
    Lname: 'SUGURU',
    image: require('./src/assets/images/getodp.png'),
    image1: require('./src/assets/images/getopt.png'),
    text: '908k Likes.',
    txt: 'Sashi-na!',
  },
  {
    id: 3,
    name: 'TOJI',
    Lname: 'FUSHIGURO',
    image: require('./src/assets/images/tojidp.png'),
    image1: require('./src/assets/images/tojipt.png'),
    text: '989k Likes.',
    txt: 'Zenin Tojiiii..',
  },
  {
    id: 4,
    name: 'SUKUNA',
    Lname: 'RYOMEN',
    image: require('./src/assets/images/sukdp.png'),
    image1: require('./src/assets/images/sukpt.png'),
    text: '679k Likes.',
    txt: 'Ora Gambare Gambare!',
  },
  {
    id: 5,
    name: 'MAHITO',
    Lname: '',
    image: require('./src/assets/images/mahidp.png'),
    image1: require('./src/assets/images/mahipt.png'),
    text: '19k Likes.',
    txt: 'Ruunnn...',
  },
  {
    id: 6,
    name: 'NANAMI',
    Lname: 'KENTO',
    image: require('./src/assets/images/nanadp.png'),
    image1: require('./src/assets/images/nanapt.png'),
    text: '468k Likes.',
    txt: 'Everything Sucks..',
  },
  {
    id: 7,
    name: 'YUJI',
    Lname: 'ITADORI',
    image: require('./src/assets/images/yujidp.png'),
    image1: require('./src/assets/images/yujipt.png'),
    text: '263k Likes.',
    txt: 'Vessel..',
  },
  {
    id: 8,
    name: 'MEGUMI',
    Lname: 'FUSHIGURO',
    image: require('./src/assets/images/tojipt.png'),
    image1: require('./src/assets/images/megpt.png'),
    text: '108k Likes.',
    txt: 'Diee!',
  },
];
const App = ({ navigation }) => {
  const [name, setName] = useState('');
  const [isLoading, setisLoading] = useState(false);

  //Options Modal
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  //Saved Modal
  const [modal1Visible, setModal1Visible] = useState(false);
  const toggleModal1 = () => {
    setModal1Visible(!modal1Visible);
  };
  //Comments Modal
  const [modal2Visible, setModal2Visible] = useState(false);
  const toggleModal2 = () => {
    setModal2Visible(!modal2Visible);
  };
  //DarkMode
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  const themeMode = useSelector(state => state.theme.mode);
  const imageUrl = useSelector((state) => state.image.imageUrl)

  //Android 13 Permissions
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);


  const renderstory_ = ({ item, index }) => {
    return (
      <View
        style={{
          width: 80,
          height: 95,
          marginHorizontal: 5,
          marginVertical: 3,
        }}>
        <Image
          source={item.image}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            resizeMode: 'cover',
            borderWidth: 3,
            borderColor: 'green',
          }}></Image>

        <Text
          style={{
            fontSize: 13,
            justifyContent: 'flex-end',
            textAlign: 'center',
            color: themeMode.text,
            fontFamily: 'Nunito-Bold',
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  const renderpost_ = ({ item, index }) => {
    return (
      <View
        style={{
          width: '100%',
          height: 380,
        }}>
        <Modal
          transparent={true}
          visible={modalVisible}
          hardwareAccelerated={true}
          onRequestClose={toggleModal}>
          <View
            style={{
              height: '40%',
              width: '100%',
              backgroundColor: themeMode.primary,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: 452,
              elevation: 7,
            }}>
            <View
              style={{
                width: 30,
                height: 5,
                marginBottom: 20,
                borderRadius: 40,
                backgroundColor: themeMode.text,
                alignSelf: 'center',
              }}></View>
            <ScrollView>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  marginLeft: 15,
                  alignItems: 'center',
                }}>
                <Icon name={'edit'} size={24} color={themeMode.text} />
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    marginLeft: 17,
                    color: themeMode.text
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: themeMode.text,
                  opacity: 0.3,
                }}></View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  marginLeft: 15,
                  alignItems: 'center',
                }}>
                <Icon name={'trash-o'} size={24} color={themeMode.text} />
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    marginLeft: 20,
                    color: themeMode.text
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: themeMode.text,
                  opacity: 0.3,
                }}></View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  marginLeft: 15,
                  alignItems: 'center',
                }}>
                <Icon name={'download'} size={22} color={themeMode.text} />
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    marginLeft: 19,
                    color: themeMode.text
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: themeMode.text,
                  opacity: 0.3,
                }}></View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  marginLeft: 17,
                  alignItems: 'center',
                }}>
                <Icon name={'bookmark-o'} size={24} color={themeMode.text} />
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    marginLeft: 20,
                    color: themeMode.text
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: themeMode.text,
                  opacity: 0.3,
                }}></View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  marginLeft: 15,
                  alignItems: 'center',
                }}>
                <Icon name={'send-o'} size={20} color={themeMode.text} />
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    marginLeft: 19,
                    color: themeMode.text
                  }}>
                  Share
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: themeMode.text,
                  opacity: 0.3,
                }}></View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  marginLeft: 15,
                  alignItems: 'center',
                }}>
                <Icon name={'share-square-o'} size={22} color={themeMode.text} />
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    marginLeft: 18,
                    color: themeMode.text
                  }}>
                  Share Profile
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>

        <Modal
          transparent={true}
          visible={modal1Visible}
          hardwareAccelerated={true}
          onRequestClose={toggleModal1}>
          <View
            style={{
              height: '55%',
              width: '100%',
              backgroundColor: themeMode.background,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 370,
              elevation: 7,
            }}>
            <View
              style={{
                width: '100%',
                height: 150,
                backgroundColor: themeMode.primary,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 10,
                paddingLeft: 20,
              }}>
              <View
                style={{
                  width: 30,
                  height: 5,
                  borderRadius: 40,
                  backgroundColor: themeMode.text,
                  alignSelf: 'center',
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 45,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: themeMode.text,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 20,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: themeMode.text,
                      fontSize: 18,
                      fontFamily: 'Nunito-Medium',
                    }}>
                    Saved
                  </Text>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 14,
                      fontFamily: 'Nunito-Regular',
                    }}>
                    Private
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={toggleModal1}
                  style={{
                    position: 'absolute',
                    marginLeft: 260,
                    marginTop: 18,
                  }}>
                  <Icon name={'bookmark'} size={24} color={themeMode.text} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                margin: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: themeMode.text,
                }}></View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 20,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'Nunito-Medium',
                    fontSize: 18,
                    color: themeMode.text,
                  }}>
                  Collection's
                </Text>
                <Text
                  style={{
                    fontFamily: 'Nunito-Regular',
                    fontSize: 14,
                    color: 'grey',
                  }}>
                  56 Item's saved
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  position: 'absolute',
                  marginLeft: 256,
                  marginTop: 18,
                }}>
                <Icon name={'plus-square-o'} size={22} color={themeMode.text} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          visible={modal2Visible}
          hardwareAccelerated={true}
          onRequestClose={toggleModal2}>
          <View
            style={{
              height: '55%',
              width: '100%',
              backgroundColor: themeMode.primary,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginTop: 370,
              elevation: 7,
            }}>
            <View
              style={{
                width: 35,
                height: 5,
                backgroundColor: themeMode.text,
                alignSelf: 'center',
                marginTop: 9,
                borderRadius: 50,
              }}></View>
            <View
              style={{
                width: '100%',
                marginTop: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Nunito-Medium',
                  fontSize: 14,
                  color: themeMode.text,
                  textAlign: 'center',
                }}>
                Comments
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                opacity: 0.7,
                backgroundColor: themeMode.text,
                marginTop: 8,
              }}></View>
            <ScrollView>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: themeMode.text
                }}>
                ScrollView here
              </Text>
            </ScrollView>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={item.image}
            style={{
              width: 35,
              height: 35,
              borderRadius: 50,
              margin: 7,
            }}></Image>

          <Text
            style={{
              color: themeMode.text,
              fontSize: 13,
              fontFamily: 'Nunito-Bold',
              marginTop: 13,
            }}>
            {item.name}
          </Text>

          <Text
            style={{
              color: themeMode.text,
              fontSize: 13,
              fontFamily: 'Nunito-Bold',
              marginTop: 13,
              marginLeft: 4,
            }}>
            {item.Lname}
          </Text>

          <Pressable
            onPress={toggleModal}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              marginLeft: 321,
              marginTop: 10,
            }}>
            <Icons name={'dots-vertical'} size={28} color={themeMode.text} />
          </Pressable>
        </View>

        <Image
          source={item.image1}
          style={{
            width: '100%',
            height: 260,
            resizeMode: 'cover',
          }}></Image>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 30,
              height: 25,
              marginLeft: 14,
              marginTop: 6,
            }}>
            <Icon name={'heart-o'} size={22} color={themeMode.text} />
          </View>

          <Pressable
            onPress={toggleModal2}
            style={{
              width: 30,
              height: 25,
              marginLeft: 10,
              marginTop: 5,
            }}>
            <Icon name={'comment-o'} size={22} color={themeMode.text} />
          </Pressable>

          <View
            style={{
              width: 30,
              height: 25,
              marginLeft: 9,
              marginTop: 6,
            }}>
            <Icon name={'send-o'} size={20} color={themeMode.text} />
          </View>

          <Pressable
            onPress={toggleModal1}
            style={{
              position: 'absolute',
              width: 30,
              height: 30,
              marginLeft: 325,
              marginTop: 6,
            }}>
            <Icon name={'bookmark-o'} size={22} color={themeMode.text} />
          </Pressable>
        </View>

        <Text
          style={{
            color: themeMode.text,
            marginLeft: 12,
            fontSize: 13,
            fontFamily: 'Nunito-Medium',
          }}>
          {item.text}
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: themeMode.text,
              marginLeft: 12,
              fontSize: 13,
              fontFamily: 'Nunito-Bold',
            }}>
            {item.name}
          </Text>

          <Text
            style={{
              color: themeMode.text,
              marginLeft: 5,
              fontSize: 13,
              fontFamily: 'Nunito-Medium',
            }}>
            {item.txt}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeMode.background,
      }}>
      <FlatList
        data={DATA}
        refreshing={isLoading}
        showsHorizontalScrollIndicator={false}
        onRefresh={() => {
          setisLoading(true);
          setTimeout(() => {
            setisLoading(false);
          }, 1500);
        }}
        ListHeaderComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 51,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color: themeMode.text,
                  fontFamily: 'Grandista',
                  paddingLeft: 10,
                }}>
                Instagram
              </Text>
              <TouchableOpacity
                onPress={() => handleToggle()}
                style={{
                  width: 40,
                  height: 35,
                  position: 'absolute',
                  marginLeft: 210,
                  marginTop: 5,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: 'center'
                }}>
                {themeMode.mode === 'dark' ?
                  <>
                    <Icon name={'sun-o'} size={26} color="#fff" />
                  </>
                  :
                  <>
                    <Icon name={'moon-o'} size={26} color="#333333" />
                  </>}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Others', { screen: 'Noti' })}
                style={{
                  width: 35,
                  height: 35,
                  position: 'absolute',
                  marginLeft: 270,
                  marginTop: 10,
                }}>
                <Icon name={'heart-o'} size={24} color={themeMode.text} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Others', { screen: 'Chat' })}
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  marginLeft: 315,
                  marginTop: 10,
                }}>
                <Icons name={'facebook-messenger'} size={27} color={themeMode.text} />
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                data={DATA}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                horizontal
                ListHeaderComponent={() => (
                  <View
                    style={{
                      width: 80,
                      height: 95,
                      marginHorizontal: 5,
                      marginVertical: 3,
                    }}>

                    <Image
                      source={
                        imageUrl ? { uri: imageUrl } : require('./src/assets/images/user.jpeg')
                      }
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        borderWidth: 3,
                        borderColor: 'green',
                      }}
                      resizeMode="cover"
                    />

                    <Text
                      style={{
                        fontSize: 14,
                        color: themeMode.text,
                        textAlign: 'center',
                        fontFamily: 'Nunito-Medium',
                      }}>
                      Your story
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderstory_}
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderpost_}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: themeMode.text,
              opacity: 0.2,
            }}></View>
        )}

      />
    </View>
  );
};

export default App;
