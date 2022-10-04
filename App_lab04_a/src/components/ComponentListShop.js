import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../themes/styleListShop';
import ComponentItem from './ComponentItem';
import dbProducts from '../database/products';

const ComponentListShop = () => {


  
    
    const [data, setData] = useState(dbProducts);

    const renderItem = ({item}, index) => {
        return (
            <ComponentItem key={index} item={item} />
        )
    }


    return (
        <View style={[{}, styles.flex_1]}>
            <View style={[{}, styles.containerHeader, styles.row]}  >
                <Icon name='arrow-left' color={'#eee'} size={20} style={[{ marginTop: 2, marginLeft: 3 }]} />
                <Text style={[{ textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold' }, styles.flex_1]}  >Chat</Text>
                <Icon name='shopping-cart' color={'#eee'} size={22} style={[{ marginTop: 2, marginRight: 5, }]} />

            </View>
            <View style={[{}, styles.containerCenter, styles.flex_1]} >
                <Text style={[{ padding: 15, paddingHorizontal: 20 }]}   >Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop</Text>

                <FlatList 
                    data={data}
                    keyExtractor = {(item) => {item.id.toString()}}
                    renderItem = {renderItem}
                />

            </View>
            <View style={[{ justifyContent: 'space-between' }, styles.containerfooter, styles.row]}  >
                <Icon name='home' color={'#eee'} size={22} style={[{ marginTop: 2, marginRight: 5, }]} />
                <Icon name='home' color={'#eee'} size={22} style={[{ marginTop: 2, marginRight: 5, }]} />
                <Icon name='home' color={'#eee'} size={22} style={[{ marginTop: 2, marginRight: 5, }]} />


            </View>



            <StatusBar />

        </View>
    )
}

export default ComponentListShop;