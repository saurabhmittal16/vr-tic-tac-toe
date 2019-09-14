import React from "react";
import { Text, VrButton } from "react-360";

const Mute = props => (
	<VrButton onClick={props.handleMute} style={{ marginLeft: 8 }}>
		<Text style={{ fontSize: 16 }}>{props.mute ? "Unmute" : "Mute"}</Text>
	</VrButton>
);

export default Mute;
