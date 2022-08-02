

var cells = document.querySelectorAll(".cell")
var whitePieces = document.querySelectorAll(".white")
var blackPieces = document.querySelectorAll(".black")


// r=ROOK,n=Knight,i=Bishop,q=Queen,k=King,p=Pawn
var trackingArray = [
	{ id: 'br-a8' }, { id: 'bn-b8' }, { id: 'bi-c8' }, { id: 'bq-d8' },
	{ id: 'bk-e8' }, { id: 'bi-f8' }, { id: 'bn-g8' }, { id: 'br-h8' },

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

	{ id: 'wr-a1' }, { id: 'wn-b1' }, { id: 'wi-c1' }, { id: 'wq-d1' },
	{ id: 'wk-e1' }, { id: 'wi-f1' }, { id: 'wn-g1' }, { id: 'wr-h1' }

]

var bishopArr = [9, 18, 27, 36, 45, 54, 63, -9, -18, -27, -36, -45, -54, -63,
	7, 14, 21, 28, 35, 42, 49, -7, -14, -21, -28, -35, -42, -49]


var rows = [(-7), (-6), -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]
var cols = [8, 16, 24, 32, 40, 48, 56, -8, -16, -24, -32, -40, -48, -56]

var checkAgainst = structuredClone(trackingArray)



function trackingArrayFind(element) {
	// cells Event Listener id select
	let clickChessSquare = document.getElementById(element.target.id)
	let clickChessSquareID = clickChessSquare.id
console.log(clickChessSquareID)

	for (i in cells) {


		if (cells[i] === clickChessSquare) {
			var htmlPieceIndex = Number(i)


		}
	}


	let pieceTrackArr = trackingArray[htmlPieceIndex].id
	let rowLimit = clickChessSquareID[1]
	let colLimit = clickChessSquareID[0]





	selectedPiece(clickChessSquareID, clickChessSquare,
		htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
}








// calls to proper function for each piece
function selectedPiece(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {

	for (i in pieceTrackArr) {
		var parsePiece = pieceTrackArr[i]

		switch (parsePiece) {
			// pawn
			case "p":
				console.log("PAWN")
				pawn(clickChessSquareID, clickChessSquare,
					htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)

				break;

			//rook
			case "r":
				console.log("ROOK")
				rook(clickChessSquareID, clickChessSquare,
					htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
				break;

			//knight
			case "n":

				console.log("KNIGHT TIME")
				knight(clickChessSquareID, clickChessSquare,
					htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
				break;

			//bishop
			case "i":
				console.log("Bishop")
				bishop(clickChessSquareID, clickChessSquare,
					htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
				break;
			//queen
			case "q":
				console.log("QUEEN")
				queen(clickChessSquareID, clickChessSquare,
					htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
				break;
			//king
			case "k":
				console.log("King me!")
				king(clickChessSquareID, clickChessSquare,
					htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
				break;
		}

	}
}
function backgroundChange() {
	$().css("background-color", "green")

}
// Piece RULES!! //

function pawn(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {
	/// Main Variables
	let addOrDeleteHTML = document.getElementById(clickChessSquareID).innerHTML




	/* Rules for black Pawn need to practice DRY */

	if (pieceTrackArr.includes('b')) {
		let moveUpBlack = htmlPieceIndex + 8
		let blackMoveId = cells[moveUpBlack].id
		let blackAttack = [trackingArray[htmlPieceIndex + 7].id, trackingArray[htmlPieceIndex + 8].id]



		for (i in blackAttack) {
			for (j in blackAttack[i]) {
				win = (blackAttack[i][j])
				if (win.includes("w")) {

					document.getElementById(cells[moveUpBlack + 1].id).addEventListener('click', () => {
						document.getElementById(clickChessSquareID).innerHTML = " "
						document.getElementById(cells[moveUpBlack + 1].id).innerHTML = addOrDeleteHTML
						trackingArray[htmlPieceIndex] = { id: null }
						trackingArray[moveUpBlack + 1] = { id: pieceTrackArr }
					});

					document.getElementById(cells[moveUpBlack - 1].id).addEventListener('click', () => {
						document.getElementById(clickChessSquareID).innerHTML = " "
						document.getElementById(cells[moveUpBlack - 1].id).innerHTML = addOrDeleteHTML
						trackingArray[htmlPieceIndex] = { id: null }
						trackingArray[moveUpBlack - 11] = { id: pieceTrackArr }
					});



				}
			}
		}



		let blackMoveTwo = {
			index: trackingArray[htmlPieceIndex].id === checkAgainst[htmlPieceIndex].id,
			spaceFree: trackingArray[htmlPieceIndex + 8].id == null && trackingArray[htmlPieceIndex + 16].id == null
			//+8 and +plus 16 spaces are free
		}

		if (blackMoveTwo.index == true && blackMoveTwo.spaceFree == true) {

			document.getElementById(cells[moveUpBlack + 8].id).addEventListener('click', () => {
				document.getElementById(clickChessSquareID).innerHTML = " "
				cells[moveUpBlack + 8].innerHTML = addOrDeleteHTML

				trackingArray[htmlPieceIndex] = { id: null }
				trackingArray[moveUpBlack + 8] = { id: pieceTrackArr }

			});
		} if (trackingArray[moveUpBlack].id === null) {

			document.getElementById(blackMoveId).addEventListener('click', () => {
				document.getElementById(clickChessSquareID).innerHTML = " "
				cells[moveUpBlack].innerHTML = addOrDeleteHTML
				trackingArray[htmlPieceIndex] = { id: null }
				trackingArray[moveUpBlack] = { id: pieceTrackArr }

			});


		}
	} /* End BLACK moves */
	if (pieceTrackArr.includes('w')) {
		let moveUpWhite = htmlPieceIndex - 8
		let whiteMoveId = cells[moveUpWhite].id
		let whiteAttack = [trackingArray[htmlPieceIndex - 7].id, trackingArray[htmlPieceIndex - 9].id]

		for (i in whiteAttack) {

			for (j in whiteAttack[i]) {
				win = (whiteAttack[i][j])

				if (win.includes("b")) {

					document.getElementById(cells[moveUpWhite + 1].id).addEventListener('click', () => {
						document.getElementById(clickChessSquareID).innerHTML = " "
						document.getElementById(cells[moveUpWhite + 1].id).innerHTML = addOrDeleteHTML
						trackingArray[htmlPieceIndex] = { id: null }
						trackingArray[moveUpWhite + 1] = { id: pieceTrackArr }

					});

					document.getElementById(cells[moveUpWhite - 1].id).addEventListener('click', () => {
						document.getElementById(clickChessSquareID).innerHTML = " "
						document.getElementById(cells[moveUpWhite - 1].id).innerHTML = addOrDeleteHTML
						trackingArray[htmlPieceIndex] = { id: null }
						trackingArray[moveUpWhite - 11] = { id: pieceTrackArr }
					});



				} else {


				}
			}
		}

		let whiteMoveTwo = {
			index: trackingArray[htmlPieceIndex].id === checkAgainst[htmlPieceIndex].id,
			spaceFree: trackingArray[htmlPieceIndex - 8].id == null && trackingArray[htmlPieceIndex - 16].id == null
			//+8 and +plus 16 spaces are free
		}

		if (whiteMoveTwo.index === true && whiteMoveTwo.spaceFree === true) {

			document.getElementById(cells[moveUpWhite - 8].id).addEventListener('click', () => {
				document.getElementById(clickChessSquareID).innerHTML = " "
				cells[moveUpWhite - 8].innerHTML = addOrDeleteHTML

				trackingArray[htmlPieceIndex] = { id: null }
				trackingArray[moveUpWhite - 8] = { id: pieceTrackArr }

			});
		} if (trackingArray[moveUpWhite].id === null) {

			document.getElementById(whiteMoveId).addEventListener('click', () => {
				document.getElementById(clickChessSquareID).innerHTML = " "
				cells[moveUpWhite].innerHTML = addOrDeleteHTML
				trackingArray[htmlPieceIndex] = { id: null }
				trackingArray[moveUpWhite] = { id: pieceTrackArr }

			});


		}


	}
}



function rook(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {
	let addOrDeleteHTML = document.getElementById(clickChessSquareID).innerHTML
	console.log(clickChessSquareID,
		htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
	///////////////Will EVENTUALLY MAKE THIS A FUNCTION TO HANDLE ALL PIECE MOVES////
	// rowLimit is  the number of the row I'm currently on
	// colLimit is the letter of the column I'm on
	// USE ROW NUMBERS AND LETTERS TO SET LIMITS
	// eliminate illegal moves
	/*  This will eliminate moves involving player pieces*/

	for (r in rows) {
		let testAdd = [rows[r]]

		//Gets the pieces on the squares and the null spaces
		// use TrackArrIndex to compare to cell
		let trackArrIndex = Number(testAdd) + htmlPieceIndex
		
		let removeIllegalRows=cells[trackArrIndex]
		let possMoves = trackingArray[trackArrIndex]
		
		if(removeIllegalRows!=undefined){
				let rowCorrectMoves=removeIllegalRows
	console.log(rowCorrectMoves['id'])
			
for (rem in rowCorrectMoves) {
			//Based on Tracking ARRAY
			let ROOK_MOVES = rowCorrectMoves[rem]


		}
	
		
		}
		
		// If rows and cols are illegal to move to// 
		// Will make this the first function roo

	}




	}






/// Main Variables


function knight(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {

}
function bishop(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {

}
function queen(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {

}

function king(clickChessSquareID, clickChessSquare,
	htmlPieceIndex, pieceTrackArr, rowLimit, colLimit) {

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
		movingthroughCheck: tru


	}


}


cells.forEach(element => {

	element.addEventListener('click', trackingArrayFind)
});


