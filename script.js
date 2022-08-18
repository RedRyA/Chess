

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


	


	// Validates initial 2 space jump for pawns
	

	pawnMove = [8]
	// Sets move and attack rules for black pawn
for (p in pawnMove) {

		let  pawnIndex = Number(pawnMove[p] + htmlNdex)
		let pawnTrackArr = trackingArray[pawnIndex]
		let pawnCell = cells[pawnIndex]
		console.log(pawnCell['id'] +' pawnCell')
		console.log(pawnTrackArr['id'] +' track array')
		for ( i in pawnTrackArr['id']){
			if (pawnTrackArr['id'][i] !=null){
				console.log("Can't move here ")
				pawnCell=0
				console.log(pawnMove)
			}
		}
		for (p in pawnCell) {

			pawnCell.addEventListener('click', () => {
				pawnCell.innerHTML = " "

				pawnCell.appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[pawnIndex] = { id: chessSquareID }
			})

		}

	}


var blackMoveTwo = {
	index: trackingArray[htmlNdex]['id'] === checkAgainst[htmlNdex]['id'],

	spaceFree: trackingArray[htmlNdex + 8]['id'] === null && trackingArray
	[htmlNdex + 16]['id'] === null
}

		if (blackMoveTwo.index === true && blackMoveTwo.spaceFree === true) {
			document.getElementById(cells[htmlNdex+16]['id']).addEventListener('click', () => {

				cells[htmlNdex+16].appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[htmlNdex+16] = { id: chessSquareID }


			})
		}

	possAttack = [7,9]

			for (p in possAttack) {
				let pawnAttackIndex = Number(possAttack[p] + htmlNdex)
				let pawnAttackTrackArr = trackingArray[pawnAttackIndex]
				
				let pawnAttackCell = cells[pawnAttackIndex]


				for (i in pawnAttackTrackArr){
					for (p in pawnAttackCell) {
					console.log(pawnAttackTrackArr[i][1] +" PAA!!")
					if (pawnAttackTrackArr[i]===null){
						pawnAttackCell[i]=0
					}
					else if( pawnAttackTrackArr[i][1]==="k"){
							console.log('Check')
						pawnAttackCell=0

						}else{
					
				

					pawnAttackCell.addEventListener('click', () => {
						pawnAttackCell.innerHTML = " "

						pawnAttackCell.appendChild(chessSquare)

						trackingArray[htmlNdex] = { id: null }
						trackingArray[pawnAttackIndex] = { id: chessSquareID }
					})

				}

			}
		
		}
	}

		/*	cells[attack].addEventListener('click', () => {
				cells[attack].innerHTML = ""
				cells[attack].appendChild(chessSquare)


					} else if (possAttack[i].includes("w")) {
						cells[attack].addEventListener('click', () => {
							cells[attack].innerHTML = ""
							cells[attack].appendChild(chessSquare)

							trackingArray[htmlNdex] = { id: null }
							trackingArray[attack] = { id: chessSquareID }

						})
					} else {
						console.log("Null")
					}


				}
			}
		}


	}*/





}


function rook(chessSquareID, chessSquare,
	htmlNdex, rowLimit, colLimit) {


	console.log("Main Piece ID: " + chessSquareID, " Row Limit: " + rowLimit, " Col Limit: " + colLimit)


	/// CrEATE ADD AND DELETE HTML FUNCTION
	let possRowMoves = []
	let possColMoves = []
	let rowIndex = []
	let colIndex = []
	let rows = [-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]
	let cols = [8, 16, 24, 32, 40, 48, 56, -8, -16, -24, -32, -40, -48, -56]
	///////////////Will EVENTUALLY MAKE THIS A FUNCTION TO HANDLE ALL PIECE MOVES////
	// rowLimit is  the number of the row I'm currently on
	// colLimit is the letter of the column I'm on
	// USE ROW NUMBERS AND LETTERS TO SET LIMITS
	// eliminate illegal moves
	/*  This will eliminate moves involving  friendly pieces*/
	for (index in rows) {
		rowIndex = Number(rows[index] + htmlNdex)
		console.log(rowIndex)
		possRowMoves = trackingArray[rowIndex]
		cellRowMoves = cells[rowIndex]
		console.log(chessSquareID[0])
		// deletes moves that are the same color
		for (i in possRowMoves) {
			if (possRowMoves[i][0] === chessSquareID[0])
				delete possRowMoves[i]
			delete cellRowMoves[i]
			console.log(possRowMoves[i], cellRowMoves[i])
		}
		for (ndex in cols) {
			colIndex = [cols[ndex] + htmlNdex]
			possColMoves = trackingArray[colIndex]



			let rookMoves = [possColMoves, possRowMoves]
			let rookIndex = [colIndex, rowIndex]
			for (r in rookIndex) {
				let cellTest = cells[rookIndex[r]]

				if (cellTest != undefined) {

					cellTest.addEventListener('click', () => {
						cellTest.innerHTML = " "

						cellTest.appendChild(chessSquare)

						trackingArray[htmlNdex] = { id: null }
						trackingArray[rookIndex[r]] = { id: chessSquareID }
					})


				}



			}
		}


	}



}





function knight(chessSquareID, chessSquare,
	htmlNdex, rowLimit, colLimit) {
	console.log(chessSquareID, chessSquare,
		htmlNdex)
	// places knight can move
	let knightMoves = [15, 17, 10, 6, -6, -10, -15, -17]
	// iterates through knightMoves and correlates wuth trackingArray index and Cells index
	for (k in knightMoves) {
		let knightIndex = Number(knightMoves[k] + htmlNdex)

		let knightRider = trackingArray[knightIndex]

		let knightRiderCell = cells[knightIndex]

		console.log(knightRider, knightRiderCell)

		for (kn in knightRiderCell) {

			knightRiderCell.addEventListener('click', () => {
				knightRiderCell.innerHTML = " "

				knightRiderCell.appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[knightIndex] = { id: chessSquareID }
			})

		}

	}



}
function bishop(chessSquareID, chessSquare,
	htmlNdex, rowLimit, colLimit) {
	console.log(chessSquareID, chessSquare,
		htmlNdex)
	// places knight can move
	let bishopMove = [7, 14, 21, 28, 35, 42, 49, -7, -14, -21, -28, -35, -42, -49,
		9, 18, 27, 36, 45, 54, 63, -9, -18, -27, -36, -45, -54, -63]
	// iterates through knightMoves and correlates wuth trackingArray index and Cells index
	for (b in bishopMove) {
		let bIndex = Number(bishopMove[b] + htmlNdex)

		let bRider = trackingArray[bIndex]

		let bRiderCell = cells[bIndex]

		console.log(bRider, bRiderCell)

		for (bi in bRiderCell) {

			bRiderCell.addEventListener('click', () => {
				bRiderCell.innerHTML = " "

				bRiderCell.appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[bIndex] = { id: chessSquareID }
			})

		}

	}



}

function queen(chessSquareID, chessSquare,
	htmlNdex, rowLimit, colLimit) {

	console.log(chessSquareID, chessSquare, htmlNdex)

	let queenMove = [7, 14, 21, 28, 35, 42, 49, -7, -14, -21, -28, -35, -42, -49,
		9, 18, 27, 36, 45, 54, 63, -9, -18, -27, -36, -45, -54, -63,
		-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7,
		8, 16, 24, 32, 40, 48, 56, -8, -16, -24, -32, -40, -48, -56]

	for (q in queenMove) {
		let qIndex = Number(queenMove[q] + htmlNdex)

		let qRider = trackingArray[qIndex]

		let qRiderCell = cells[qIndex]

		console.log(qRider, qRiderCell)

		for (q in qRiderCell) {

			qRiderCell.addEventListener('click', () => {
				qRiderCell.innerHTML = " "

				qRiderCell.appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[qIndex] = { id: chessSquareID }
			})

		}

	}


}

function king(chessSquareID, chessSquare,
	htmlNdex, rowLimit, colLimit) {
	console.log(chessSquareID, chessSquare,
		htmlNdex)

	let kingMove = [1, 7, 8, 9, -1, -7, -8, -9]

	for (b in kingMove) {
		let kIndex = Number(kingMove[b] + htmlNdex)

		let kRider = trackingArray[kIndex]

		let kRiderCell = cells[kIndex]

		console.log(kRider, kRiderCell)

		for (bi in kRiderCell) {

			kRiderCell.addEventListener('click', () => {
				kRiderCell.innerHTML = " "

				kRiderCell.appendChild(chessSquare)

				trackingArray[htmlNdex] = { id: null }
				trackingArray[kIndex] = { id: chessSquareID }
			})

		}

	}


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




