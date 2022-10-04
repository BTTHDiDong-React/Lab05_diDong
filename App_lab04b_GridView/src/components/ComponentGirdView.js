import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from '../themes/styleGirdView';

const ComponentGirdView = () => {
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

                <View style={[styles.row, {}]}     >
                    <View style={[styles.flex_1, styles.view_centerTop, {}]}     >
                        <Image source={require('../images/4b_daynguon.png')} style={[{ height: 90 },]} />
                        <Text style={[,
                            {
                                marginTop: 5,
                                paddingHorizontal: 20,
                            }]}  >Cáp chuyển từ Cổng USB sang PS2...</Text>
                        <View style={[styles.row, {}]}  >
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#C4C4C4'} size={22} style={[{}]} />
                            <Text style={[{ marginTop: 1, fontSize: 14, marginLeft: 5 }]}  >(15)</Text>

                        </View>
                        <View style={[styles.row, { alignItems: 'flex-start', width: '77%' }]}  >
                            <Text style={[{}]}  > 69.000 đ</Text>
                            <Text style={[{ marginLeft: 15, color: "#969DAA" }]}  > 39%</Text>
                        </View>
                    </View>


                    <View style={[styles.flex_1, styles.view_centerTop, {}]}     >
                        <Image source={require('../images/4b_daynguon.png')} style={[{ height: 90 },]} />
                        <Text style={[,
                            {
                                marginTop: 5,
                                paddingHorizontal: 20,
                            }]}  >Cáp chuyển từ Cổng USB sang PS2...</Text>
                        <View style={[styles.row, {}]}  >
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#C4C4C4'} size={22} style={[{}]} />
                            <Text style={[{ marginTop: 1, fontSize: 14, marginLeft: 5 }]}  >(15)</Text>

                        </View>
                        <View style={[styles.row, { alignItems: 'flex-start', width: '77%' }]}  >
                            <Text style={[{}]}  > 69.000 đ</Text>
                            <Text style={[{ marginLeft: 15, color: "#969DAA" }]}  > 39%</Text>
                        </View>
                    </View>
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