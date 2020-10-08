import React from 'react'
import { View, Button } from 'react-native'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.back 
                ?   <Button 
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}  
                    
                    />
                : false
            }
            {props.next 
                ?   <Button 
                        title='Avançar'
                        onPress={() => {
                            //No navigate se na pilha já possuir a tela, a tela não é aberta novamente
                            // props.navigation.navigate(props.next)
                            //No push mesemo se na pilha já possuir a tela, a tela é aberta novamente
                            props.navigation.push(props.next, 
                                {
                                    number: parseInt(Math.random() * 100)
                                }
                            )
                            // props.navigation.push(props.next, props.nextParams)
                        }}  
                    
                    />
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)