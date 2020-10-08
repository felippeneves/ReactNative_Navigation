import React from 'react'
import TextCentral from '../components/TextCentral'

export default props => {
    const route = props.route
    const number = route && route.params && route.params.number ? route.params.number : 0 
    return (
        <TextCentral colorBackground='#9932cd'>
            Tela C - {number}
        </TextCentral>
    )
}