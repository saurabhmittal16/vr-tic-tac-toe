import React from "react";
import { View, Text, VrButton } from "react-360";
import { styles } from "./Styles";

const Scoreboard = props => (
	<View style={styles.container}>
		<View style={styles.buttonRow}>
			<VrButton style={styles.button} onClick={props.newGame}>
				<Text style={styles.btnText}>New Game</Text>
			</VrButton>
		</View>
		<View style={styles.buttonRow}>
			<VrButton style={styles.button} onClick={props.reset}>
				<Text style={styles.btnText}>Reset</Text>
			</VrButton>
		</View>
	</View>
);

export default Scoreboard;
