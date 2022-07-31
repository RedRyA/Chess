var whitePieces = document.querySelectorAll(".white")
var blackPieces = document.querySelectorAll(".black")

var cells = document.querySelectorAll(".cell")





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


var checkAgainst = structuredClone(initial)

console.log(initial)
console.log(checkAgainst)
function initialFind(element) {
// cells Event Listener id select
	let pieceId = document.getElementById(element.target.id)
	if(pieceId===null){
		return null
	}
	
	let squareSelect = pieceId.id
	for (i in cells) {
		if (cells[i] === pieceId) {
			var pieceIndex = Number(i)


		}

	}

	let pieceSelect = initial[pieceIndex].id

	console.log(initial[pieceIndex])
	console.log(checkAgainst[pieceIndex])
	
	
	selectedPiece(pieceSelect, pieceIndex, squareSelect)
}

// calls to proper function for each piece
function selectedPiece(pieceSelect, pieceIndex, squareSelect) {
	(pieceSelect+" selectedPiece here!")

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


	let moveUpBlack = pieceIndex + 8
	let blackMoveId = cells[moveUpBlack].id
	let blackAttack = pieceIndex + 7 || pieceIndex + 9

	let moveUpWhite = pieceIndex - 8
	let whiteMoveId = cells[moveUpWhite.id]
	let whiteAttack = pieceIndex - 7 || pieceIndex - 9

	// object literal to test arguments
		let blackMoveTwo={
			index: initial[pieceIndex].id===checkAgainst[pieceIndex].id,
			spaceFree: initial[pieceIndex+8].id ==null && initial[pieceIndex+16].id==null
			//+8 and +plus 16 spaces are free
		}
		console.log(Object.values(blackMoveTwo))
		if(blackMoveTwo.index==true&& blackMoveTwo.spaceFree==true){
			console.log("move two bitches")
		}
			
	let addOrDeleteHTML = document.getElementById(squareSelect).innerHTML
	

	
	if (pieceSelect.includes('b') && initial[moveUpBlack].id === null) {
		document.getElementById(blackMoveId).addEventListener('click', () => {
			document.getElementById(squareSelect).innerHTML=" "
			cells[moveUpBlack].innerHTML = addOrDeleteHTML
			initial[pieceIndex] = { id: null }
			initial[moveUpBlack] = { id: pieceSelect }
		
		});

	}
}
function rook(pieceIndex, pieceSelect) {

	console.log('rook' + pieceIndex + pieceSelect)
}

function knight(pieceIndex) {

	console.log('knight ' + pieceIndex)
}
function bishop(pieceIndex) {

	console.log('bishop' + pieceIndex)
}
function queen(pI) {

	console.log('queen ' + pieceIndex)
}

function king(pI) {

	console.log('king ' + pieceIndex)
}


// Special moves

function enPassant() {

}



function castle() {

}

function touchdown() {

}


cells.forEach(element => {

	element.addEventListener('click', initialFind)
});

	
