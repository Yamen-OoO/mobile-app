import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Colors} from '../constants/Colors.js'

const ThemedButton = ({style , ...props}) => {
  return (
    <Pressable style={({pressesd}) => [
        style.btn , pressesd && style.pressed , style]
    }
    {...props}
    />
  
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor: Colors.primary,
        padding: 12,
        borderwidth: 1,
        borderradius: 4,
    },
    preesed:{
        opacity: 0.75,
    }
})