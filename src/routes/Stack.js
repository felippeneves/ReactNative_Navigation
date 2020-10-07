import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import ScreenC from '../views/ScreenC'
import StepStack from '../components/StepStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="ScreenA"
        screenOptions={{headerShown: true}}>

        <Stack.Screen name="ScreenA" options={{title: 'Tela A'}} >
            {props => (
                <StepStack {...props} next="ScreenB">
                    <ScreenA />
                </StepStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="ScreenB" options={{title: 'Tela B'}} >
            {props => (
                <StepStack {...props} next="ScreenC">
                    <ScreenB />
                </StepStack>
            )}     
        </Stack.Screen>

        <Stack.Screen name="ScreenC" component={ScreenC} > 
        
        </Stack.Screen>
    </Stack.Navigator>
)