import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

interface ItemProps {
  id: string;
  image: any;
  content: string;
}

const { width, height } = Dimensions.get('window');
const itemSize = width ;

const Item = ({ id, image, content }: ItemProps) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: itemSize,
    height: itemSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    margin:4,
    borderRadius:20,
  },
  image: {
    width: '90%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius:20,
  },
  content: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color:'red',
  },
});

 export default Item;
