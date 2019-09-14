import { StyleSheet } from "react-360";

export const getStyles = index => {
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

export const styles = StyleSheet.create({
	wrapper: {
		width: 1000,
		height: 600,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "stretch"
	},
	side: {
		width: 250,
		height: 600,
		borderColor: "#303050",
		borderWidth: 4
	},
	main: {
		width: 400,
		height: 600,
		marginRight: 30,
		marginLeft: 30,
		borderColor: "#303050",
		borderWidth: 4
	},
	scoreboard: {
		flexDirection: "column"
	},
	container: {
		flexDirection: "column",
		justifyContent: "center",
		height: "100%"
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 50
	},
	button: {
		padding: 10,
		borderColor: "#303050",
		borderWidth: 3
	},
	btnText: {
		color: "white",
		fontWeight: "600"
	},
	heading: {
		fontSize: 54,
		textAlign: "center",
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 20
	},
	result: {
		fontSize: 36,
		textAlign: "center",
		fontWeight: "700",
		marginTop: 30
	},
	title: {
		fontSize: 36,
		textAlign: "center",
		fontWeight: "700"
	},
	subtitle: {
		fontSize: 54,
		textAlign: "center"
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
