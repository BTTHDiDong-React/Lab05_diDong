import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../themes/styleItem';

const ComponentItem = (props) => {

    const item = props.item;


    return (
        <View style={[{
            backgroundColor: '#fff',
            minHeight: 50,
            marginTop: 1,
        }, styles.row,]}   >
            <Image source={item.linkAnh} style={[styles.imgItem]} />
            <View style={[{ padding: 5, width: '50%' }]}   >
                <Text style={[{}, styles.txtName]} >{item.name}</Text>
                <Text style={[{ color: '#AF9E9E', marginTop: 8 }]} >Shop <Text style={[{}, styles.txtShop]} >{item.shop}</Text></Text>

            </View>
            <TouchableOpacity style={[styles.view_center]}
                onPress={() => {}}
            ><Text style={[{}, styles.btnClick]}>Chat</Text></TouchableOpacity>
        </View>
    )
}

export default ComponentItem