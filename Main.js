import React from "react";
import { StyleSheet, Text, View, VrButton } from "react-360";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: ["X", "O", "X", "O", "X", "X", "X", "X", "O"]
		};
	}
	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>Tic Tac Toe</Text>
				<View style={styles.grid}>
					{[0, 1, 2].map(j => (
						<View style={styles.row}>
							{[3 * j, 3 * j + 1, 3 * j + 2].map(i => (
								// i -> index of the cell in grid (0, 9)
								<VrButton style={getStyles(i)}>
									<Text style={styles.item}>{this.state.val[i]}</Text>
								</VrButton>
							))}
						</View>
					))}
				</View>
			</View>
		);
	}
}

const getStyles = index => {
	switch (index) {
		case 0:
			return [styles.box, styles.right, styles.bottom];
		case 1:
			return [styles.box, styles.left, styles.right, styles.bottom];
		case 2:
			return [styles.box, styles.left, styles.bottom];
		case 3:
			return [styles.box, styles.right, styles.top, styles.bottom];
		case 4:
			return [styles.box, styles.left, styles.right, styles.top, styles.bottom];
		case 5:
			return [styles.box, styles.left, styles.top, styles.bottom];
		case 6:
			return [styles.box, styles.right, styles.top];
		case 7:
			return [styles.box, styles.left, styles.right, styles.top];
		case 8:
			return [styles.box, styles.left, styles.top];
	}
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
	item: {
		fontSize: 72,
		fontWeight: "700",
		textAlign: "center",
		color: "white"
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

export default Main;
