import React from "react";
import { Text, View, VrButton } from "react-360";
import { getStyles, styles } from "./Styles";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			count: 0
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(index) {
		this.setState(prevState => {
			prevState.val[index] = prevState.userTurn ? "O" : "X";
			return {
				val: prevState.val,
				userTurn: !prevState.userTurn,
				count: prevState.count + 1
			};
		});
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>Tic Tac Toe</Text>
				<View style={styles.grid}>
					{[0, 1, 2].map(j => (
						<View style={styles.row} key={10 * j}>
							{[3 * j, 3 * j + 1, 3 * j + 2].map(i => (
								// i -> index of the cell in grid (0, 9)
								<VrButton
									key={i}
									style={getStyles(i)}
									onClick={() => this.onClick(i)}
								>
									<Text
										style={[
											styles.item,
											{
												color: this.state.val[i] == "O" ? "white" : "yellow"
											}
										]}
									>
										{this.state.val[i]}
									</Text>
								</VrButton>
							))}
						</View>
					))}
				</View>
			</View>
		);
	}
}

export default Main;
