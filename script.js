

var cells = document.querySelectorAll(".cell")
var whitePieces = document.querySelectorAll(".white")

var blackPieces = document.querySelectorAll(".black")

// r=ROOK,n=Knight,i=Bishop,q=Queen,k=King,p=Pawn
// Abstraction of cells
var trackingArray =

	[
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


var rows = [-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]
var cols = [8, 16, 24, 32, 40, 48, 56, -8, -16, -24, -32, -40, -48, -56]

// Used for validation of certain moves
var checkAgainst = structuredClone(trackingArray)


// Adds "select" class name 
function removeAddClass(element) {

	let chessSquare = ""
	let chessSquareID = ""
	let removeClass = ""

	chessSquare = (document.getElementById(element.target['id']))

	chessSquareID = chessSquare['id']






	trackingArrayFind(chessSquare, chessSquareID)

}


// Find element in array and get the row and coluimn info from the original html cell
function trackingArrayFind(chessSquare, chessSquareID) {

	let htmlNdex = 1
	let = []
	let rowLimit = 1
	let colLimit = ""



	for (i in trackingArray) {
		if (trackingArray[i]['id'] == chessSquareID) {
			console.log()
			htmlNdex = Number([i])

		}
	}
console.log(htmlNdex)
	rowLimit = cells[htmlNdex]['id'][1]
	colLimit = cells[htmlNdex]['id'][0]
	////////////////////////////////////////////////////////////////////

	selectedPiece(chessSquareID, chessSquare, htmlNdex, rowLimit, colLimit)
}




/* calls the proper function for each piece*/

function selectedPiece(chessSquareID, chessSquare, htmlNdex, rowLimit, colLimit) {

	let parsePiece = ""
	for (i in chessSquareID) {
		parsePiece = chessSquareID[i]



		switch (parsePiece) {
			// pawn
			case "p":
				pawn(chessSquareID, chessSquare,
					htmlNdex, rowLimit, colLimit)

				break;

			//rook
			case "r":
				console.log("ROOK")
				rook(chessSquareID, chessSquare,
					htmlNdex, rowLimit, colLimit)
				break;

			//knight
			case "n":

				console.log("KNIGHT TIME")
				knight(chessSquareID, chessSquare,
					htmlNdex, rowLimit, colLimit)
				break;

			//bishop
			case "i":
				console.log("Bishop")
				bishop(chessSquareID, chessSquare,
					htmlNdex, rowLimit, colLimit)
				break;
			//queen
			case "q":
				console.log("QUEEN")
				queen(chessSquareID, chessSquare,
					htmlNdex, rowLimit, colLimit)
				break;
			//king
			case "k":
				console.log("King me!")
				king(chessSquareID, chessSquare,
					htmlNdex, rowLimit, colLimit)
				break;
		}

	}
}






function pawn(chessSquareID, chessSquare, htmlNdex, rowLimit, colLimit) {
	console.log("Main Piece ID: " + chessSquareID,
		" Row Limit: " + rowLimit, " Col Limit: " + colLimit, " htmlNdex: " + htmlNdex)

	/// Main Variables


	let moveUpBlack = 1
	let possAttack = ""
	let blackAttack = ""

	let moveUpWhite = 1
	let whiteMoveId = ""
	let whiteAttack = ""


	// Validates initial 2 space jump for pawns
	let blackMoveTwo = {
		index: trackingArray[htmlNdex]['id'] === checkAgainst[htmlNdex]['id'],

		spaceFree: trackingArray[htmlNdex + 8]['id'] === null && trackingArray
		[htmlNdex + 16]['id'] === null
	}
console.log(blackMoveTwo)


	console.log(cells[htmlNdex + 8]['id'] + " CElls ",htmlNdex)

	moveUpBlack = htmlNdex + 8
	// Sets move and attack rules for black pawn

	if (chessSquareID.includes('b')) {
		if (blackMoveTwo.index === true && blackMoveTwo.spaceFree === true) {
			document.getElementById(cells[ moveUpBlack]['id']).addEventListener('click', () => {

				cells[ moveUpBlack].appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[moveUpBlack] = { id: chessSquareID }


			})
		
			document.getElementById(cells[htmlNdex + 16]['id']).addEventListener('click', () => {

				cells[moveUpBlack+8].appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[moveUpBlack + 8] = { id: chessSquareID }


			})
		
	}else if (trackingArray[moveUpBlack]['id'] === null) {

			(cells[moveUpBlack]).addEventListener('click', () => {
				cells[moveUpBlack].innerHTML = ""
				cells[moveUpBlack].appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[moveUpBlack] = { id: chessSquareID }

			})

		} else {
			console.log("Can't go that way!!!")
		
			}
		
	possAttack = [trackingArray[htmlNdex + 7]['id'], trackingArray[htmlNdex + 9]['id']]

		for (i in possAttack) {
			console.log(possAttack)
			

		}

			if(possAttack[i].includes("w")){
		document.getElementById(cells[trackingArray.indexOf(possAttack[i])]).addEventListener('click', () => {
		
			cells[trackingArray.indexOf(possAttack[i])].appendChild(chessSquare)
		
				trackingArray[htmlNdex] = { id: null }
				trackingArray[possAttack[i]] = { id: chessSquareID }
		
			})
		} else{
			console.log("Null")
		}
		
	}
			if (possAttack['id'].includes('w')) {
				blackAttack = document.getElementById(cells[moveUpBlack + 1]['id']).addEventListener('click', () => {
		
		
				})
		
			}


		
	}


}


	function rook(chessSquareID, chessSquare,
		htmlNdex, rowLimit, colLimit) {


		console.log("Main Piece ID: " + chessSquareID, " Row Limit: " + rowLimit, " Col Limit: " + colLimit)


		/// CrEATE ADD AND DELETE HTML FUNCTION
		let addOrDeleteHTML = document.getElementById(chessSquareID).innerHTML
		let trackArrIndex = []
		let removeIllegalRows = []
		let possMoves = []
		let rowCorrectMoves



		///////////////Will EVENTUALLY MAKE THIS A FUNCTION TO HANDLE ALL PIECE MOVES////
		// rowLimit is  the number of the row I'm currently on
		// colLimit is the letter of the column I'm on
		// USE ROW NUMBERS AND LETTERS TO SET LIMITS
		// eliminate illegal moves
		/*  This will eliminate moves involving  friendly pieces*/

		for (r in rows) {
			possMoves = trackingArray[Number([rows[r]]) + htmlNdex]

			//Gets the pieces on the squares and the null spaces
			// use TrackArrIndex to compare to cell



			removeIllegalRows = cells[trackArrIndex]
			possMoves = trackingArray[trackArrIndex]

			//  }



		}


		// If rows and cols are illegal to move to// 
		// Will make this the first function roo






	}




	/// Main Variables


	function knight(chessSquareID, chessSquare,
		htmlNdex, rowLimit, colLimit) {

	}
	function bishop(chessSquareID, chessSquare,
		htmlNdex, rowLimit, colLimit) {

	}
	function queen(chessSquareID, chessSquare,
		htmlNdex, rowLimit, colLimit) {

	}

	function king(chessSquareID, chessSquare,
		htmlNdex, rowLimit, colLimit) {

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
	let playerTurn = true

	if (playerTurn == true) {
		blackPieces.forEach(element => {

			element.addEventListener('click', removeAddClass)
		})
	} else {
		whitePieces.forEach(element => {
			element.addEventListener('click', removeAddClass)
		})
	}


/*cells.forEach(element => {

	element.addEventListener('click', trackingArrayFind)
});


*/