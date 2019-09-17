// result = 0 -> Tie
// result = 1 -> Player won
// result = 2 -> Game won
// result = -1 -> Game not over
export const findResult = state => {
	for (let i = 0; i < 9; i += 3) {
		if (state[i] == state[i + 1] && state[i + 1] == state[i + 2] && state[i] != "") {
			if (state[i] == "O") {
				return 1;
			} else if (state[i] == "X") {
				return 2;
			}
		}
	}

	// Check columns
	for (let i = 0; i < 3; i++) {
		if (state[i] == state[i + 3] && state[i + 3] == state[i + 6] && state[i] != "") {
			if (state[i] == "O") {
				return 1;
			} else if (state[i] == "X") {
				return 2;
			}
		}
	}

	// Check primary diagonal
	if (state[0] == state[4] && state[4] == state[8] && state[0] != "") {
		if (state[0] == "O") {
			return 1;
		} else if (state[0] == "X") {
			return 2;
		}
	}

	// Check secondary diagonal
	else if (state[2] == state[4] && state[4] == state[6] && state[2] != "") {
		if (state[2] == "O") {
			return 1;
		} else if (state[2] == "X") {
			return 2;
		}
	}

	// Check for empty spaces, if found -> game not over
	for (let i = 0; i < 9; i++) {
		if (state[i] == " ") return -1;
	}

	// If no empty spaces and no winner then state is tied
	return 0;
};

export const getWinnerText = result => {
	switch (result) {
		case 0:
			return "Game Tied";
		case 1:
			return "You Won";
		case 2:
			return "You Lost";
	}
};

class Move {
	constructor(score, index) {
		this.score = score;
		this.index = index;
	}
}

const isEndState = state => findResult(state) != -1;

const getScore = (state, depth) => {
	const res = findResult(state);
	if (res == 1) {
		return 10 + depth;
	} else if (res == 2) {
		return depth - 10;
	}
	return 0;
};

// use 100 as placeholder score
export const easyMove = state => {
	if (isEndState(state)) {
		return new Move(100, -1);
	}

	let half = Math.random();
	let finalMove;

	if (half > 0.5) {
		let possibleMoves = [];
		for (let i = 0; i < 9; i++) {
			if (state[i] == " ") possibleMoves.push(i);
		}
		let randInd = Math.floor(Math.random() * possibleMoves.length);

		finalMove = new Move(100, possibleMoves[randInd]);
	} else {
		finalMove = minimiser(state, 0);
	}

	return finalMove;
};

export const minimiser = (state, depth) => {
	if (isEndState(state)) {
		return new Move(getScore(state, depth), -1);
	}

	const min = new Move(1000, -1);
	for (let i = 0; i < 9; i++) {
		if (state[i] == " ") {
			state[i] = "X";

			const curr = maximiser(state, depth + 1);
			if (curr.score < min.score) {
				min.score = curr.score;
				min.index = i;
			}

			state[i] = " ";
		}
	}
	return min;
};

const maximiser = (state, depth) => {
	if (isEndState(state)) {
		return new Move(getScore(state, depth), -1);
	}

	const max = new Move(-1000, -1);
	for (let i = 0; i < 9; i++) {
		if (state[i] == " ") {
			state[i] = "O";

			const curr = minimiser(state, depth + 1);
			if (curr.score > max.score) {
				max.score = curr.score;
				max.index = i;
			}

			state[i] = " ";
		}
	}
	return max;
};
