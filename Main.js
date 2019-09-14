import React from "react";
import { Text, View, VrButton } from "react-360";
import { getStyles, styles } from "./src/Styles";
import { checkWin } from "./src/Utils";
import Scoreboard from "./src/Scoreboard";
import Menu from "./src/Menu";

// 1 Player Game
// User goes first and uses 'O'
// Game goes second and uses 'X'
// result = 0 -> Tie
// result = 1 -> Player won
// result = 2 -> Game won

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null,
			yourScore: 0,
			gameScore: 0
		};
		this.onClick = this.onClick.bind(this);
		this.newGame = this.newGame.bind(this);
		this.reset = this.reset.bind(this);
	}

	newGame() {
		this.setState({
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null
		});
	}

	reset() {
		this.setState({
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null,
			yourScore: 0,
			gameScore: 0
		});
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
					let result = checkWin(this.state.val);
					this.setState({
						over: result != -1,
						winner: result,
						yourScore: this.state.yourScore + (result == 1 || result == 0 ? 1 : 0),
						gameScore: this.state.gameScore + (result == 2 || result == 0 ? 1 : 0)
					});
				}
			);
		}
	}

	getWinnerText() {
		switch (this.state.winner) {
			case 0:
				return "Game Tied";
			case 1:
				return "You Won";
			case 2:
				return "You Lost";
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.side}>
					<Menu reset={this.reset} newGame={this.newGame} />
				</View>
				<View style={styles.main}>
					<Text style={styles.heading}>Tic Tac Toe</Text>
					<View style={styles.grid}>
						{[0, 1, 2].map(j => (
							<View style={styles.row} key={10 * j}>
								{[3 * j, 3 * j + 1, 3 * j + 2].map(i => (
									// i -> index of the cell in grid (0, 9)
									<VrButton key={i} style={getStyles(i)} onClick={() => this.onClick(i)} disabled={this.state.over}>
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
					{this.state.over && <Text style={styles.result}>{this.getWinnerText()}</Text>}
				</View>
				<View style={styles.side}>
					<Scoreboard your={this.state.yourScore} game={this.state.gameScore} />
				</View>
			</View>
		);
	}
}

export default Main;
