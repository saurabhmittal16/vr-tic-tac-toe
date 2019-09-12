import * as React from "react";
import { StyleSheet, Text, View, VrButton } from "react-360";

const CurrentPost = props => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Tic Tac Toe</Text>
			<View style={styles.grid}>
				<View style={styles.row}>
					<VrButton style={[styles.box, styles.right, styles.bottom]}>
						<Text> </Text>
					</VrButton>
					<VrButton
						style={[styles.box, styles.left, styles.right, styles.bottom]}
					>
						<Text> </Text>
					</VrButton>
					<VrButton style={[styles.box, styles.left, styles.bottom]}>
						<Text> </Text>
					</VrButton>
				</View>
				<View style={styles.row}>
					<VrButton
						style={[styles.box, styles.right, styles.top, styles.bottom]}
					>
						<Text> </Text>
					</VrButton>
					<VrButton
						style={[
							styles.box,
							styles.left,
							styles.right,
							styles.top,
							styles.bottom
						]}
					>
						<Text> </Text>
					</VrButton>
					<VrButton
						style={[styles.box, styles.left, styles.top, styles.bottom]}
					>
						<Text> </Text>
					</VrButton>
				</View>
				<View style={styles.row}>
					<VrButton style={[styles.box, styles.right, styles.top]}>
						<Text> </Text>
					</VrButton>
					<VrButton style={[styles.box, styles.left, styles.right, styles.top]}>
						<Text> </Text>
					</VrButton>
					<VrButton style={[styles.box, styles.left, styles.top]}>
						<Text> </Text>
					</VrButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: 500,
		height: 600,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderColor: "#303050",
		borderWidth: 2,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch"
	},
	title: {
		fontSize: 36,
		textAlign: "center",
		fontWeight: "700",
		marginBottom: 20,
		marginTop: 20
	},
	grid: {
		marginTop: "11%"
	},
	row: {
		flexDirection: "row",
		justifyContent: "center"
	},
	box: {
		width: "30%",
		height: 112,
		borderColor: "white"
	},
	left: {
		borderLeftWidth: 2
	},
	right: {
		borderRightWidth: 2
	},
	top: {
		borderTopWidth: 2
	},
	bottom: {
		borderBottomWidth: 2
	}
});

export default CurrentPost;
