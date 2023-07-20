import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const IndexScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('Other'); // Điều hướng đến màn hình "Other"
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, fontWeight:'bold',color:'#307df0'}}>Welcome!!</Text>
      <Image
        source={require('../assets/logo.jpg')} // Thay đổi đường dẫn tới hình ảnh của bạn ở đây
        style={styles.image}
      />
      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
        <Text style={styles.buttonText}>Go to Other Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#93edda'
  },
  image: {
    width: 350,
    height: 500,
    resizeMode: 'contain', // Chỉnh sửa kiểu căn chỉnh của hình ảnh tùy ý
    marginBottom: 20, // Thêm khoảng cách giữa văn bản và hình ảnh (nếu cần thiết)
  },
  button: {
    backgroundColor: '#1174f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height:50,
    width:'100%'
  },
  buttonText: {
    color: '#434b57',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:70,
  },
});

export default IndexScreen;
