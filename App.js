import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
	const [color, setColor] = useState('#f0f')

	function changeColor() {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16)
		setColor(`#${randomColor}`)
	}

	return (
		<View style={styles.container} backgroundColor={color}>
			<Text>Hello!</Text>
			<Text>Click on this button to change background color! XD</Text>
			<Button title="Change" onPress={() => changeColor()} color="black" />

			<Text>This color is {color}</Text>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
