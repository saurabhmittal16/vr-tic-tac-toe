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
