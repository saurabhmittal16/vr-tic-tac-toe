import React from "react";
import { Text, View, VrButton, asset, NativeModules } from "react-360";
import { getStyles, styles } from "./src/Styles";
import { findResult, getWinnerText, minimiser, easyMove } from "./src/Utils";
import Scoreboard from "./src/Scoreboard";
import Menu from "./src/Menu";
import Mute from "./src/Mute";

const { AudioModule } = NativeModules;

// 1 Player Game
// User goes first and uses 'O'
// Game goes second and uses 'X'
// result = 0 -> Tie
// result = 1 -> Player won
// result = 2 -> Game won
// difficulty = 0 -> Easy (random move)
// difficulty = 1 -> Hard (perfect move)

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null,
			yourScore: 0,
			gameScore: 0,
			difficulty: 0,
			mute: true
		};
		this.onClick = this.onClick.bind(this);
		this.newGame = this.newGame.bind(this);
		this.reset = this.reset.bind(this);
		this.handleMute = this.handleMute.bind(this);
	}

	handleMute() {
		this.setState(
			{
				mute: !this.state.mute
			},
			() => {
				if (!this.state.mute) {
					AudioModule.playEnvironmental({
						source: asset("./dreams.mp3"),
						volume: 0.5
					});
				} else {
					AudioModule.stopEnvironmental();
				}
			}
		);
	}

	newGame(diff) {
		this.setState({
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null,
			difficulty: diff
		});
	}

	reset() {
		this.setState({
			val: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			userTurn: true,
			over: false,
			winner: null,
			difficulty: 0,
			yourScore: 0,
			gameScore: 0
		});
	}

	onClick(index) {
		if (this.state.val[index] == " ") {
			this.setState(
				prevState => {
					prevState.val[index] = "O";
					return {
						val: prevState.val,
						userTurn: !prevState.userTurn
					};
				},
				() => {
					this.checkVictory(this.gameMove.bind(this));
				}
			);
		}
	}

	checkVictory(callback) {
		let result = findResult(this.state.val);
		this.setState(
			{
				over: result != -1,
				winner: result,
				yourScore: this.state.yourScore + (result == 1 || result == 0 ? 1 : 0),
				gameScore: this.state.gameScore + (result == 2 || result == 0 ? 1 : 0)
			},
			() => {
				if (typeof callback == "function") {
					setTimeout(callback, 200);
				}
			}
		);
	}

	gameMove() {
		if (!this.state.over) {
			let move;
			if (this.state.difficulty == 0) {
				move = easyMove(this.state.val);
			} else {
				move = minimiser(this.state.val, 0);
			}
			this.setState(
				prevState => {
					prevState.val[move.index] = "X";
					return {
						val: prevState.val,
						userTurn: !prevState.userTurn
					};
				},
				() => this.checkVictory(null)
			);
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.side}>
					<Menu reset={this.reset} newGame={this.newGame} over={this.state.over} difficulty={this.state.difficulty} />
				</View>
				<View style={styles.main}>
					<Text style={styles.heading}>Tic Tac Toe</Text>
					<View style={styles.grid}>
						{[0, 1, 2].map(j => (
							<View style={styles.row} key={10 * j}>
								{[3 * j, 3 * j + 1, 3 * j + 2].map(i => (
									// i -> index of the cell in grid (0, 9)
									<VrButton
										key={i}
										style={getStyles(i)}
										onClick={() => this.onClick(i)}
										disabled={this.state.over || !this.state.userTurn}
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
					{this.state.over && <Text style={styles.result}>{getWinnerText(this.state.winner)}</Text>}
				</View>
				<View style={styles.side}>
					<Mute mute={this.state.mute} handleMute={this.handleMute} />
					<Scoreboard your={this.state.yourScore} game={this.state.gameScore} />
				</View>
			</View>
		);
	}
}

export default Main;
