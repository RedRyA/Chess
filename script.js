var whitePieces = document.querySelectorAll(".white")
var blackPieces = document.querySelectorAll(".black")
var table = document.querySelectorAll("td")
var cells = document.querySelectorAll(".cell")




var initial = [
{ id: 'br-a8' }, { id: 'bkn-b8' }, { id: 'bb-c8' },{ id: 'bq-d8' }, 
{ id: 'bk-e8' }, { id: 'bb-f8' },{ id: 'bkn-g8' }, { id: 'br-h8' }, 

{ id: 'bp-a7' }, { id: 'bp-b7' }, { id: 'bp-c7' },{ id: 'bp-d7' }, 
{ id: 'bp-e7' }, { id: 'bp-f7', },{ id: 'bp-g7' }, { id: 'bp-h7', },

{ id: null }, { id: null }, { id: null }, { id: null },
 { id: null }, { id: null },{ id: null }, { id: null },

  { id: null }, { id: null }, { id: null }, { id: null }, 
{ id: null },{ id: null },{ id: null },{ id: null },

{ id: null },{ id: null },{ id: null },{ id: null },
{ id: null },{ id: null },{ id: null },{ id: null },

{ id: null },{ id: null },{ id: null },{ id: null },
{ id: null },{ id: null },{ id: null },{id: null},

{ id: 'wp-a2' },{ id: 'wp-b2' },{ id: 'wp-c2' },{ id: 'wp-d2' },
{ id: 'wp-e2' },{ id: 'wp-f2' },{ id: 'wp-g2' },{ id: 'wp-h2' },

{ id: 'wr-a1' },{ id: 'wkn-b1' },{ id: 'wb-c1' },{ id: 'wq-d1' },
{ id: 'wk-e1' },{ id: 'wb-f1' },{ id: 'wkn-g1' }, { id: 'wr-h1' }

]
var cellArray=[cells]

var checkAgainst=structuredClone(initial)

console.log(table)



function initialFind(element) {
	let pieceSelect = element.target.id
	console.log(pieceSelect)
	let initialFind = initial.find(initial => initial.id === pieceSelect);
	let pieceIndex = initial.indexOf(initialFind)

	let pI = pieceIndex
	let pS=pieceSelect
	selectedPiece(pS, pI)
}
// calls to proper function for each piece
function selectedPiece(pieceSelect, pI) {
	let pS=pieceSelect
	if (pieceSelect.includes('wp') || pieceSelect.includes('bp')) {
		pawn(pI, pS)

	} else if (pieceSelect.includes('wr') || pieceSelect.includes('br')) {
		rook(pI, pS)

	} else if (pieceSelect.includes("wkn") || pieceSelect.includes('bkn')) {
		knight(pI, pS)

	} else if (pieceSelect.includes('wb') || pieceSelect.includes('bb')) {
		bishop(pI, pS)

	} else if (pieceSelect.includes('wq') || pieceSelect.includes('bq')) {
		queen(pI, pS)

	} else if (pieceSelect.includes("wk-") || pieceSelect.includes('bk-')) {
		king(pI, pS)

	} else {
		alert("That's not a piece")
	}



}
//initial dictionary will be updated in pieceUpdate()





function backgroundChange() {
	$().css("background-color", "green")

}
// Piece RULES!! //

function pawn(pI, pS) {

	
	console.log(pS,pI)
	//selects actual HTML element //
		let deletePiece=document.getElementById(pS)
		let pieceToMove=document.getElementById(pS).innerHTML
		for (i in pieceToMove){
			console.log(pieceToMove[i])
		}
		console.log(deletePiece)
		console.log(pieceToMove)
		
		// checks if piece is black or white
	if (pS.includes('b')) {
		// variable to store space in front of 
		let moveUp = pI + 8
		//will eventually make takePiece
		let takePiece = [7, 9]
		//
		if (initial[moveUp].id === null) {
			cells[moveUp].addEventListener('click',()=>{
				
				cells[moveUp].innerHTML=deletePiece
				initial[pI]={id:null}
				initial[moveUp]={id:pS}
				console.log(initial)
			}
			)
			
			
				
			}else if (pS.includes('w')) {

			}

		
	}

	function rook(pI, pS) {

		console.log('rook' + pI + pS)
	}

	function knight(pI) {

		console.log('knight ' + pI)
	}
	function bishop(pI) {

		console.log('bishop' + pI)
	}
	function queen(pI) {

		console.log('queen ' + pI)
	}

	function king(pI) {

		console.log('king ' + pI)
	}


	// Special moves

	function enPassant() {

	}

	function castle() {

	}

	function touchdown() {

	}
}

blackPieces.forEach(element => {
	element.addEventListener('click', initialFind)
})



whitePieces.forEach(element => { element.addEventListener("click", initialFind) });





