import { View, Text, Image } from 'react-native'
import React from 'react'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from '../themes/styleGirdView'

const ComponentItem = (props) => {

    // const item = props.item;
    // console.log("🚀 ~ file: ComponentItem.js ~ line 10 ~ ComponentItem ~ item", item)

  return (
    <View style={[, styles.view_centerTop, { width: "47%", backgroundColor: "#E5E6EA", margin: 5}]}     >
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
  )
}

export default ComponentItem