export const checkWin = state => {
	for (let i = 0; i < 9; i += 3) {
		if (
			state[i] == state[i + 1] &&
			state[i + 1] == state[i + 2] &&
			state[i] != ""
		) {
			if (state[i] == "O") {
				return 1;
			} else if (state[i] == "X") {
				return 2;
			}
		}
	}

	// Check columns
	for (let i = 0; i < 3; i++) {
		if (
			state[i] == state[i + 3] &&
			state[i + 3] == state[i + 6] &&
			state[i] != ""
		) {
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
