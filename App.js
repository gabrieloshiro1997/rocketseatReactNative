import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native App</Text>
				<View style={styles.box} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	box: {
		width: 50,
		height: 50,
		backgroundColor: 'red'
	}
});