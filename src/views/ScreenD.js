import React from 'react'
import { Button, View } from 'react-native'
import TextCentral from '../components/TextCentral'

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button 
                title='Abrir'
                onPress={() => {
                    props.navigation.openDrawer()
                    setTimeout(() => {
                        props.navigation.closeDrawer()
                        // setInterval(() => {
                        //     props.navigation.toggleDrawer()
                        // }, 1000)
                    }, 3000)
                }} />
            {/* <Button 
                title='Fechar'
                onPress={() => props.navigation.closeDrawer()} /> */}
        </View>
        <View style={{ flex: 1 }}>
            <TextCentral colorBackground='#33fa72' colorText='#000'>
                Tela D
            </TextCentral>
        </View>
    </View>
)