import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Item, { ItemData } from './Item';

const data: ItemData[] = [
  { id: '1', image: require('../assets/mon1.jpg'), content: 'Hải sản tự chọn' },
  { id: '2', image: require('../assets/mon2.jpg'), content: 'Hàu nướng' },
  { id: '3', image: require('../assets/mon3.jpg'), content: 'Set hải sản' },
  { id: '4', image: require('../assets/mon4.jpg'), content: 'Hải sản sốt chua cay' },
  { id: '5', image: require('../assets/mon5.jpg'), content: 'Tôm hùm' },
  { id: '6', image: require('../assets/mon6.jpg'), content: 'Mực nướng ớt' }, 
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleItemPress = (item: ItemData) => {
    navigation.navigate('Chitietsp', { item }); // Chuyển đến màn hình 'Dathang'
  };

  const renderItem = ({ item }: { item: ItemData }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <Item id={item.id} image={item.image} content={item.content} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ebbf5',
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
