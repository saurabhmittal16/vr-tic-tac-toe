import React from "react";
import { Text, View, VrButton } from "react-360";
import { getStyles, styles } from "./Styles";
import { checkWin } from "./Utils";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(index) {
		if (this.state.val[index] == " ") {
			this.setState(
				prevState => {
					prevState.val[index] = prevState.userTurn ? "O" : "X";
					return {
						val: prevState.val,
						userTurn: !prevState.userTurn
					};
				},
				() => {
					let res = checkWin(this.state.val);
					this.setState({
						over: res != -1,
						winner: res
					});
				}
			);
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.side}>
					<Text>Room Details and menu options</Text>
				</View>
				<View style={styles.main}>
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
										disabled={this.state.over}
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
					{this.state.over && (
						<Text style={styles.title}>{this.state.winner} WON!</Text>
					)}
				</View>
				<View style={styles.side}>
					<Text>Current scoreboard</Text>
				</View>
			</View>
		);
	}
}

export default Main;
