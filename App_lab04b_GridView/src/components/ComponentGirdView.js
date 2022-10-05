import { View, Text, StatusBar, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from '../themes/styleGirdView';
import ComponentItem from './ComponentItem';

import database from '../databases/data';

const ComponentGirdView = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(database);
    }, [])


    // function renderItem({item}, index) {
        
    // }

    const renderItem = ( {item}, index ) => {
        // return <ComponentItem item={item} />
        return <ComponentItem  /> 
    }

    return (
        <View style={[styles.flex_1]}>
            <View style={[{}, styles.containerHeader, styles.row]}  >
                <Icon name='arrow-left' color={'#eee'} size={25} style={[{ marginTop: 2, marginLeft: 3 }]} />
                <Text style={[
                    {
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }, styles.flex_1]}  >Chat</Text>


                <IconMaterialIcons name='add-shopping-cart' color={'#eee'} size={25} style={[{ marginTop: 2, marginRight: 5, }]} />
                <Icon name='dots-horizontal' color={'#eee'} size={25} style={[{ marginTop: 2, marginRight: 5, }]} />

            </View>
            <View style={[{ height: 200 }, styles.containerCenter, styles.flex_1]} >
                <Text style={[{ padding: 15, paddingHorizontal: 20 }]}   >Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop</Text>

                <View style={[styles.row, styles.flex_1, { flexWrap: 'wrap',}]}     >

                    {/* <ComponentItem />
                    <ComponentItem />
                    <ComponentItem /> */}

                    <FlatList
                        data={data}
                        keyExtractor={(item) => "_"+item.id.toString()}
                        renderItem = {renderItem}
                        numColumns = {2}
                        key={2}
                    />

                </View>


            </View>
            <View style={[{ justifyContent: 'space-between' }, styles.containerfooter, styles.row]}  >
                <Icon name='menu' color={'#eee'} size={25} />
                <Icon name='home' color={'#eee'} size={25} />
                <Icon name='arrow-u-left-top' color={'#eee'} size={25} />


            </View>
            <StatusBar />
        </View>
    )
}

export default ComponentGirdView;