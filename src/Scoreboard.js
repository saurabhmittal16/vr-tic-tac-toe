import React from "react";
import { View, Text } from "react-360";
import { styles } from "./Styles";

const Scoreboard = props => (
	<View style={styles.scoreboard}>
		<Text style={styles.title}>YOU</Text>
		<Text style={styles.subtitle}>{props.your}</Text>
		<Text
			style={[styles.title, { marginTop: 30, marginBottom: 30, fontSize: 24 }]}
		>
			VS
		</Text>
		<Text style={styles.title}>GAME</Text>
		<Text style={styles.subtitle}>{props.game}</Text>
	</View>
);

export default Scoreboard;
