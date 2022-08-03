

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

// CELLS IS HARDCODED TO THE DISPLAY I.E. A DIFFERENT 
// FUNCTION WILL RUN WHEN I CLICK ON A SQUARE THAN THE HTML PIECE.
// TRY TO CHANGE THE HTML WITH DOM. 



function trackingArrayFind(element) {
	// cells Event Listener id select
	let clickChessSquare=[]
	let clickChessSquareID=""
	let htmlPieceIndex=1
	let pieceTrackArr=[]
	let rowLimit=1
	let colLimit=""

	 clickChessSquare = (document.getElementById(element.target['id']))
	 clickChessSquareID = clickChessSquare['id']



// Turn into it's on function///////////////////////////////////
	for (i in cells) {

		if (cells[i] === clickChessSquare) {
			 htmlPieceIndex = Number(i)
		}
	}


	 pieceTrackArr = trackingArray[htmlPieceIndex]['id']
	 rowLimit = clickChessSquareID[1]
	 colLimit = clickChessSquareID[0]
////////////////////////////////////////////////////////////////////

	selectedPiece(clickChessSquareID, clickChessSquare,
		htmlPieceIndex, pieceTrackArr, rowLimit, colLimit)
}




/* calls to proper function for each piece*/

function selectedPiece(cCSID, cCS,htmlNDex, pTrackr, rowLimit, colLimit) {

	let parsePiece = 1
	for (i in pTrackr) {
		parsePiece = pTrackr[i]

		switch (parsePiece) {
			// pawn
			case "p":
				console.log("PAWN")
				pawn(cCSID, cCS,
					htmlNDex, pTrackr, rowLimit, colLimit)

				break;

			//rook
			case "r":
				console.log("ROOK")
				rook(cCSID, cCS,
					htmlNDex, pTrackr, rowLimit, colLimit)
				break;

			//knight
			case "n":

				console.log("KNIGHT TIME")
				knight(cCSID, cCS,
					htmlNDex, pTrackr, rowLimit, colLimit)
				break;

			//bishop
			case "i":
				console.log("Bishop")
				bishop(cCSID, cCS,
					htmlNDex, pTrackr, rowLimit, colLimit)
				break;
			//queen
			case "q":
				console.log("QUEEN")
				queen(cCSID, cCS,
					htmlNDex, pTrackr, rowLimit, colLimit)
				break;
			//king
			case "k":
				console.log("King me!")
				king(cCSID, cCS,
					htmlNDex, pTrackr, rowLimit, colLimit)
				break;
		}

	}
}




function PIECEMOVR() {
	for (i in cells) {
		console.log(cells[i]['id'])


	}
}
function backgroundChange() {
	$().css("background-color", "green")

}
// Piece RULES!! //

function pawn(cCSID, cCS,htmlNDex, pTrackr, rowLimit, colLimit) {

	console.log("Main Piece ID: " + cCSID, " Tracking Array: " + pTrackr
		, " Row Limit: " + rowLimit, " Col Limit: " + colLimit)
	/// Main Variables
	let addOrDeleteHTML=[]
	//// TOO MANy!!!
	let moveUpBlack=1
	let blackMoveId=""
	let blackAttack=""

	let moveUpWhite = 1
	let whiteMoveId =""
	let whiteAttack=""


	addOrDeleteHTML = document.getElementById(cCSID).innerHTML
		


/* Rules for black Pawn need to practice DRY */
	if (pTrackr.includes('b')) {

		moveUpBlack = htmlNDex + 8
		 blackMoveId = cells[moveUpBlack]['id']
		blackAttack = [trackingArray[htmlNDex + 7]['id'], trackingArray[htmlNDex + 8]['id']]



		for (i in blackAttack) {
			for (j in blackAttack[i]) {
				win = (blackAttack[i][j])
				if (win.includes("w")) {

					document.getElementById(cells[moveUpBlack + 1]['id']).addEventListener('click', () => {
						document.getElementById(cCSID).innerHTML = " "
						document.getElementById(cells[moveUpBlack + 1]['id']).innerHTML = addOrDeleteHTML
						trackingArray[htmlNDex] = { id: null }
						trackingArray[moveUpBlack + 1] = { id: pTrackr }
					});

					document.getElementById(cells[moveUpBlack - 1]['id']).addEventListener('click', () => {
						document.getElementById(cCSID).innerHTML = " "
						document.getElementById(cells[moveUpBlack - 1]['id']).innerHTML = addOrDeleteHTML
						trackingArray[htmlNDex] = { id: null }
						trackingArray[moveUpBlack - 11] = { id: pTrackr }
					});



				}
			}
		}



		let blackMoveTwo = {
			index: trackingArray[htmlNDex]['id'] === checkAgainst[htmlNDex]['id'],
			spaceFree: trackingArray[htmlNDex + 8]['id'] == null && trackingArray[htmlNDex + 16]['id'] == null
			//+8 and +plus 16 spaces are free
		}

		if (blackMoveTwo.index == true && blackMoveTwo.spaceFree == true) {

			document.getElementById(cells[moveUpBlack + 8]['id']).addEventListener('click', () => {
				document.getElementById(cCSID).innerHTML = " "
				cells[moveUpBlack + 8].innerHTML = addOrDeleteHTML

				trackingArray[htmlNDex] = { id: null }
				trackingArray[moveUpBlack + 8] = { id: pTrackr }

			});
		} if (trackingArray[moveUpBlack]['id'] === null) {

			document.getElementById(blackMoveId).addEventListener('click', () => {
				document.getElementById(cCSID).innerHTML = " "
				cells[moveUpBlack].innerHTML = addOrDeleteHTML
				trackingArray[htmlNDex] = { id: null }
				trackingArray[moveUpBlack] = { id: pTrackr }

			});


		}
	} /* End BLACK moves */
	if (pTrackr.includes('w')) {
		moveUpWhite = htmlNDex - 8
		 whiteMoveId = cells[moveUpWhite]['id']
		whiteAttack = [trackingArray[htmlNDex - 7]['id'], trackingArray[htmlNDex - 9]['id']]

		for (i in whiteAttack) {

			for (j in whiteAttack[i]) {
				win = (whiteAttack[i][j])

				if (win.includes("b")) {

					document.getElementById(cells[moveUpWhite + 1]['id']).addEventListener('click', () => {
						document.getElementById(cCSID).innerHTML = " "
						document.getElementById(cells[moveUpWhite + 1]['id']).innerHTML = addOrDeleteHTML
						trackingArray[htmlNDex] = { id: null }
						trackingArray[moveUpWhite + 1] = { id: pTrackr }

					});

					document.getElementById(cells[moveUpWhite - 1]['id']).addEventListener('click', () => {
						document.getElementById(cCSID).innerHTML = " "
						document.getElementById(cells[moveUpWhite - 1]['id']).innerHTML = addOrDeleteHTML
						trackingArray[htmlNDex] = { id: null }
						trackingArray[moveUpWhite - 11] = { id: pTrackr }
						whiteMoveId
					});



				} else {


				}
			}
		}

		let whiteMoveTwo = {
			index: trackingArray[htmlNDex]['id'] === checkAgainst[htmlNDex]['id'],
			spaceFree: trackingArray[htmlNDex - 8]['id'] == null && trackingArray[htmlNDex - 16]['id'] == null
			//+8 and +plus 16 spaces are free
		}

		if (whiteMoveTwo.index === true && whiteMoveTwo.spaceFree === true) {

			document.getElementById(cells[moveUpWhite - 8]['id']).addEventListener('click', () => {
				document.getElementById(cCSID).innerHTML = " "
				cells[moveUpWhite - 8].innerHTML = addOrDeleteHTML

				trackingArray[htmlNDex] = { id: null }
				trackingArray[moveUpWhite - 8] = { id: pTrackr }


			});
		} if (trackingArray[moveUpWhite]['id'] === null) {

			document.getElementById(whiteMoveId).addEventListener('click', () => {
				document.getElementById(cCSID).innerHTML = " "
				cells[moveUpWhite].innerHTML = addOrDeleteHTML
				trackingArray[htmlNDex] = { id: null }
				trackingArray[moveUpWhite] = { id: pTrackr }

			});


		}


	}
}



function rook(cCSID, cCS,
	htmlNDex, pTrackr, rowLimit, colLimit) {

/// CrEATE ADD AND DELETE HTML FUNCTION
	let addOrDeleteHTML = document.getElementById(cCSID).innerHTML
	let trackArrIndex=[]
	let removeIllegalRows=[]
	let possMoves=[]
	let rowCorrectMoves




	console.log("Main Piece ID: "+cCSID," Tracking Array: "+ pTrackr
	  ," Row Limit: " +rowLimit ," Col Limit: "+ colLimit)
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
		 trackArrIndex = Number(testAdd) + htmlNDex

		 removeIllegalRows = cells[trackArrIndex]
		 possMoves = trackingArray[trackArrIndex]

		if (removeIllegalRows != undefined) {
			 rowCorrectMoves = removeIllegalRows
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


function knight(cCSID, cCS,
	htmlNDex, pTrackr, rowLimit, colLimit) {

}
function bishop(cCSID, cCS,
	htmlNDex, pTrackr, rowLimit, colLimit) {

}
function queen(cCSID, cCS,
	htmlNDex, pTrackr, rowLimit, colLimit) {

}

function king(cCSID, cCS,
	htmlNDex,  pTrackr, rowLimit, colLimit) {

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


cells.forEach(element => {

	element.addEventListener('click', trackingArrayFind)
});


