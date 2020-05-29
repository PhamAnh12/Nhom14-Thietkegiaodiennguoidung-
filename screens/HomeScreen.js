import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function HomeScreen({navigation}){
    const menuItems = [
        {name: 'Chào hỏi', color: 'red', icon: 'home'},
        {name: 'Item 2', color: 'blue', icon: 'search'},
        {name: 'Item 3', color: 'green', icon: 'home'},
        {name: 'Item 4', color: 'yellow', icon: 'home'},
    ]

    return(
        <FlatList
            data = {menuItems}
            numColumns = {3}
            renderItem = {({item}) => (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Unit', item)}}
                    >
                        <View style={{
                            height: 60, 
                            width: 60, 
                            borderRadius: 60 / 2, 
                            backgroundColor: item.color,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Feather
                                name={item.icon}
                                size={24}
                                color={'black'}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text>{item.name}</Text>
                </View>
            )
            }
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'red'
    }
})