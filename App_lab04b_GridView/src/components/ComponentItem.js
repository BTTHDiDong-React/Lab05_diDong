import { View, Text, Image } from 'react-native'
import React from 'react'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from '../themes/styleGirdView'

const ComponentItem = (props) => {

    const item = props.item;
    // console.log("🚀 ~ file: ComponentItem.js ~ line 10 ~ ComponentItem ~ item", item)

  return (
    <View style={[, styles.view_centerTop, { width: "47%", backgroundColor: "#E5E6EA", margin: 5}]}     >
                        <Image source={item.linkImg} style={[{ height: 100, width: "100%" },]} />
                        <Text style={[,
                            {
                                marginTop: 5,
                                paddingHorizontal: 15,
                            }]}  >{item.name}</Text>
                        <View style={[styles.row, {marginTop: 5}]}  >
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#FBE41B'} size={22} style={[{}]} />
                            <IconMaterialIcons name='star' color={'#C4C4C4'} size={22} style={[{}]} />
                            <Text style={[{ marginTop: 1, fontSize: 14, marginLeft: 5 }]}  >(15)</Text>

                        </View>
                        <View style={[styles.row, { alignItems: 'flex-start', width: '77%' , paddingBottom:10, marginTop: 5}]}  >
                            <Text style={[{}]}  > {item.price}.000 đ</Text>
                            <Text style={[{ marginLeft: 15, color: "#969DAA" }]}  > 39%</Text>
                        </View>
                    </View>
  )
}

export default ComponentItem