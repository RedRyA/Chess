


var whitePieces = document.querySelectorAll(".white")
var blackPieces = document.querySelectorAll(".black")

var cells = document.querySelectorAll(".cell")


var table = document.querySelector(".chessBoard")


var initial = [
	{ id: 'br-a8' }, { id: 'bkn-b8' }, { id: 'bb-c8' }, { id: 'bq-d8' },
	{ id: 'bk-e8' }, { id: 'bb-f8' }, { id: 'bkn-g8' }, { id: 'br-h8' },

	{ id: 'bp-a7' }, { id: 'bp-b7' }, { id: 'bp-c7' }, { id: 'bp-d7' },
	{ id: 'bp-e7' }, { id: 'bp-f7', }, { id: 'bp-g7' }, { id: 'bp-h7', },

	{ id: null }, { id: null }, { id: null }, { id: null },
	{ id: null }, { id: null }, { id: null }, { id: null },

	{ id: null }, { id: null }, { id: null }, { id: null },
	{ id: null }, { id: null }, { id: null }, { id: null },

	{ id: null }, { id: null }, { id: null }, { id: null },
	{ id: null }, { id: null }, { id: null }, { id: null },

	{ id: null }, { id: null }, { id: null }, { id: null },
	{ id: null }, { id: null }, { id: null }, { id: null },

	{ id: 'wp-a2' }, { id: 'wp-b2' }, { id: 'wp-c2' }, { id: 'wp-d2' },
	{ id: 'wp-e2' }, { id: 'wp-f2' }, { id: 'wp-g2' }, { id: 'wp-h2' },

	{ id: 'wr-a1' }, { id: 'wkn-b1' }, { id: 'wb-c1' }, { id: 'wq-d1' },
	{ id: 'wk-e1' }, { id: 'wb-f1' }, { id: 'wkn-g1' }, { id: 'wr-h1' }

]

let row = {
	row1: [0,  1, 2,  3,   4,   5, 6,  7],
	row2: [8, 9, 10,  11,  12, 13, 14, 15],
	row3: [16, 17, 18, 19, 20, 21, 22, 23],
	row4: [24, 25, 26, 27, 28, 29, 30, 31],
	row5: [32, 33, 34, 35, 36, 37, 38, 39],
	row6: [40, 41, 42, 43, 44, 45, 45, 47],
	row7: [48, 49, 50, 51, 52, 53, 54, 55],
	row8: [56, 57, 58, 59, 60, 61, 62, 63],
}
let col = {
	col1: [0, 8, 16, 24, 32, 40, 48, 56],
	col2: [1, 9, 17, 25, 33, 41, 49, 57,],
	col3: [2, 10, 18, 26, 34, 42, 50, 58,],
	col4: [3, 11, 19, 27, 35, 43, 51, 59],
	col5: [4, 12, 20, 28, 36, 44, 52, 60,],	
	col6: [ 5,13, 21, 29, 37, 45, 53, 61,], 
	col7: [6, 14, 22, 30, 38, 46, 54, 62,],
	col8: [7,15,23,31,39,47,55,63],
	
}

var checkAgainst = structuredClone(initial)



function initialFind(element) {
	// cells Event Listener id select
	let pieceId = document.getElementById(element.target.id)
	if (pieceId === null) {
		return null
	}

	let squareSelect = pieceId.id
	for (i in cells) {
		if (cells[i] === pieceId) {
			var pieceIndex = Number(i)


		}

	}

	let pieceSelect = initial[pieceIndex].id



	selectedPiece(pieceSelect, pieceIndex, squareSelect)
}

// calls to proper function for each piece
function selectedPiece(pieceSelect, pieceIndex, squareSelect) {
	(pieceSelect + " selectedPiece here!")

	if (pieceSelect.includes('wp') || pieceSelect.includes('bp')) {
		pawn(pieceIndex, pieceSelect, squareSelect)

	} else if (pieceSelect.includes('wr') || pieceSelect.includes('br')) {
		rook(pieceIndex, pieceSelect, squareSelect)

	} else if (pieceSelect.includes("wkn") || pieceSelect.includes('bkn')) {
		knight(pieceIndex, pieceSelect, squareSelect)

	} else if (pieceSelect.includes('wb') || pieceSelect.includes('bb')) {
		bishop(pieceIndex, pieceSelect, squareSelect)

	} else if (pieceSelect.includes('wq') || pieceSelect.includes('bq')) {
		queen(pieceIndex, pieceSelect, squareSelect)

	} else if (pieceSelect.includes("wk-") || pieceSelect.includes('bk-')) {
		king(pieceIndex, pieceSelect, squareSelect)

	} else {
		alert("That's not a piece")
	}



}
//initial dictionary will be updated in pieceUpdate()





function backgroundChange() {
	$().css("background-color", "green")

}
// Piece RULES!! //

function pawn(pieceIndex, pieceSelect, squareSelect) {
	/// Main Variables
	let addOrDeleteHTML = document.getElementById(squareSelect).innerHTML
	//// Black Variables 
	let moveUpBlack = pieceIndex + 8
	let blackMoveId = cells[moveUpBlack].id
	let blackAttack = [initial[pieceIndex + 7].id, initial[pieceIndex + 8].id]

	///White Variable

	let moveUpWhite = pieceIndex - 8
	let whiteMoveId = cells[moveUpWhite].id
	let whiteAttack = [initial[pieceIndex - 7].id, initial[pieceIndex - 9].id]


	/* Rules for black Pawn need to practice DRY */

	if (pieceSelect.includes('b')) {

		for (i in blackAttack) {
			
			for (j in blackAttack[i]) {
				win = (blackAttack[i][j])

				if (win.includes("w")) {
				
					document.getElementById(cells[moveUpBlack + 1].id).addEventListener('click', () => {
						document.getElementById(squareSelect).innerHTML = " "
						document.getElementById(cells[moveUpBlack + 1].id).innerHTML = addOrDeleteHTML
						initial[pieceIndex] = { id: null }
						initial[moveUpBlack + 1] = { id: pieceSelect }
					});

					document.getElementById(cells[moveUpBlack - 1].id).addEventListener('click', () => {
						document.getElementById(squareSelect).innerHTML = " "
						document.getElementById(cells[moveUpBlack - 1].id).innerHTML = addOrDeleteHTML
						initial[pieceIndex] = { id: null }
						initial[moveUpBlack - 11] = { id: pieceSelect }
					});



				} 
			}
		}



		let blackMoveTwo = {
			index: initial[pieceIndex].id === checkAgainst[pieceIndex].id,
			spaceFree: initial[pieceIndex + 8].id == null && initial[pieceIndex + 16].id == null
			//+8 and +plus 16 spaces are free
		}
		
		if (blackMoveTwo.index == true && blackMoveTwo.spaceFree == true) {

			document.getElementById(cells[moveUpBlack + 8].id).addEventListener('click', () => {
				document.getElementById(squareSelect).innerHTML = " "
				cells[moveUpBlack + 8].innerHTML = addOrDeleteHTML
				
				initial[pieceIndex] = { id: null }
				initial[moveUpBlack + 8] = { id: pieceSelect }

			});
		} if (initial[moveUpBlack].id === null) {

			document.getElementById(blackMoveId).addEventListener('click', () => {
				document.getElementById(squareSelect).innerHTML = " "
				cells[moveUpBlack].innerHTML = addOrDeleteHTML
				initial[pieceIndex] = { id: null }
				initial[moveUpBlack] = { id: pieceSelect }

			});


		}
	} /* End BLACK moves */  if (pieceSelect.includes('w')) {

		for (i in whiteAttack) {
			
			for (j in whiteAttack[i]) {
				win = (whiteAttack[i][j])

				if (win.includes("b")) {
					
					document.getElementById(cells[moveUpWhite + 1].id).addEventListener('click', () => {
						document.getElementById(squareSelect).innerHTML = " "
						document.getElementById(cells[moveUpWhite + 1].id).innerHTML = addOrDeleteHTML
						initial[pieceIndex] = { id: null }
						initial[moveUpWhite + 1] = { id: pieceSelect }

					});

					document.getElementById(cells[moveUpWhite - 1].id).addEventListener('click', () => {
						document.getElementById(squareSelect).innerHTML = " "
						document.getElementById(cells[moveUpWhite - 1].id).innerHTML = addOrDeleteHTML
						initial[pieceIndex] = { id: null }
						initial[moveUpWhite - 11] = { id: pieceSelect }
					});



				} else {
					

				}
			}
		}



		let whiteMoveTwo = {
			index: initial[pieceIndex].id === checkAgainst[pieceIndex].id,
			spaceFree: initial[pieceIndex - 8].id == null && initial[pieceIndex - 16].id == null
			//+8 and +plus 16 spaces are free
		}
		
		if (whiteMoveTwo.index == true && whiteMoveTwo.spaceFree == true) {

			document.getElementById(cells[moveUpWhite - 8].id).addEventListener('click', () => {
				document.getElementById(squareSelect).innerHTML = " "
				cells[moveUpWhite - 8].innerHTML = addOrDeleteHTML
				
				initial[pieceIndex] = { id: null }
				initial[moveUpWhite - 8] = { id: pieceSelect }

			});
		} if (initial[moveUpWhite].id === null) {
			
			document.getElementById(whiteMoveId).addEventListener('click', () => {
				document.getElementById(squareSelect).innerHTML = " "
				cells[moveUpWhite].innerHTML = addOrDeleteHTML
				initial[pieceIndex] = { id: null }
				initial[moveUpWhite] = { id: pieceSelect }

			});


		}


	}
}



function rook(pieceIndex, pieceSelect, squareSelect) {

	if (pieceSelect.includes("b")){
		console.log(pieceSelect)
		console.log(pieceIndex)
		console.log(squareSelect)
		// +-8 for up down
		//+-1 for side to side

/// Main Variables
let addOrDeleteHTML = document.getElementById(squareSelect).innerHTML
//// Black Variables 
/*let moveUpBlack = pieceIndex //make move many spaces in straight line
let blackMoveId = cells[moveUpBlack].id
let blackAttack = [initial[pieceIndex].id, initial[pieceIndex].id]

///White Variable

let moveUpWhite = pieceIndex - 8
let whiteMoveId = cells[moveUpWhite].id
let whiteAttack = [initial[pieceIndex - 7].id, initial[pieceIndex - 9].id]*/













	}


}
function knight(pieceIndex) {

	console.log('knight ' + pieceIndex)
}
function bishop(pieceIndex) {

	console.log('bishop' + pieceIndex)
}
function queen(pieceIndex) {

	console.log('queen ' + pieceIndex)
}

function king(pieceIndex) {

	console.log('king ' + pieceIndex)
}


// Special moves

function enPassant() {
	let enPassant = {
		attackingPawn: "on 4 or 5"
	}

}



function castle() {
	let castle = {
		hasRookMoved: "counter", //true false counter,
		hasKingmobed: true,
		inCheck: true,
		movingthroughCheck: true
	}


}

function touchdown() {

}


cells.forEach(element => {

	element.addEventListener('click', initialFind)
});


