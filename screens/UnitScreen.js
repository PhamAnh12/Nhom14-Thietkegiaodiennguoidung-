import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
import { AntDesign } from '@expo/vector-icons'

export default function UnitScreen(){
    const data = [
        {text: 'text'},
        {text: 'text'},
        {text: 'text'},
        {text: 'text'},
        {text: 'text'},
    ]

    const [save, setSave] = useState(false)

    return(
        <FlatList
            data = {
                data.map((item) => {
                    return {...item, saved: false}
                })
            }
            renderItem = {({item}) => (
                <Card>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.text + item.saved}</Text>
                        {(save === false)  
                            ? 
                            <TouchableOpacity
                                onPress = {() => setSave(!save)}
                            >
                                <AntDesign name='staro' size={24}/> 
                            </TouchableOpacity> 
                            : 
                            <TouchableOpacity
                                onPress = {() => setSave(!save)}
                            >
                                <AntDesign name='star' size={24}/> 
                            </TouchableOpacity> 
                        } 
                    </View> 
                </Card>
            )}
        >
        </FlatList>
    )
}