import React from "react";
import { View, Text, VrButton } from "react-360";
import { styles } from "./Styles";

const Scoreboard = props => (
	<View style={styles.container}>
		<View style={styles.buttonRow}>
			<VrButton
				style={[
					styles.button,
					{
						marginRight: 30,
						backgroundColor: props.difficulty == 0 ? "#11111c" : "transparent"
					}
				]}
				onClick={() => props.newGame(0)}
			>
				<Text style={styles.btnText}>{props.difficulty == 0 && props.over ? "Again" : "Easy"}</Text>
			</VrButton>
			<VrButton
				style={[styles.button, { backgroundColor: props.difficulty == 1 ? "#11111c" : "transparent" }]}
				onClick={() => props.newGame(1)}
			>
				<Text style={styles.btnText}>{props.difficulty == 1 && props.over ? "Again" : "Hard"}</Text>
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
