import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const GameCardItem = (item) => {
  let index = 2;
  return (
    <View style={styles.container1} key={index}>
      <TouchableHighlight style={styles.imageBox} underlayColor={'black'} onPress={() => console.log("Game Page redirect")}>
        <Image
          source={{ uri: item.item[String(index)]}}
          style={styles.image}
        />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    overflow: 'hidden',
    zIndex: 100,
    height: 200,
    right: 40,
    backgroundColor: 'white',
    borderRadius: 1,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  image: {
    position: 'relative',
    right: 10,
    width: ITEM_WIDTH + 22,
    height: 200,
    zIndex: 1
  },

  clock: {
    postion: 'absolute',
    marginTop: -150,
    zindex: 2,
    height: 17,
    width: 17,
    right: -15,
    top: 120,
    borderRadius: 70,
    backgroundColor: 'white',
    opacity: 0
  },

  dur:{
    postion: 'absolute',
    marginTop: -15,
    fontSize: 11,
    top: 76,
    left: 40,
    color: 'white',
    opacity: 0
  },

  type:{
    postion: 'absolute',
    marginTop: -15,
    fontSize: 11,
    top: 75,
    left: 15,
    color: 'white',
    fontWeight: 'bold'
  },

  body:{
    postion: 'absolute',
    marginTop: -15,
    fontSize: 15,
    top: 90,
    left: 15,
    color: 'white',
    fontWeight: 'bold'
  },

  imageBox:{
    zindex: 999,
    height: 200,
  }
})

export default GameCardItem