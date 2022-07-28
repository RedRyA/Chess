
var whitePieces=document.querySelectorAll("p")
var blackPieces=document.querySelectorAll("span")
var table=document.querySelector("#chessBoard")
var cells=document.querySelectorAll(".cell")

var initial=[{index:0, id:'br-a8'}, {index:1, id:'bkn-b8'}, {index:2, id:'bb-c8'}, 
                {index:3,id:'bq-d8'},{index:4,id:'bk-e8'}, {index:5,id:'bb-f8'}, 
                {index:6,id:'bkn-g8'}, {index:7,id:'br-h8'},{index:8,id:'bp-a7'},{index:9,id:'bp-b7'},
                {index:10,id:'bp-c7'},{index:11,id:'bp-d7'},{index:12,id:'bp-e7'},{index:13,id:'bp-f7'},
                {index:14,id:'bp-g7'},{index:15,id:'bp-h7'},{index:16,id:null}, {index:17,id:null}, 
                {index:18,id:null}, {index:19,id:null}, {index:20,id:null}, {index:21,id:null}, 
                {index:22,id:null}, {index:23,id:null}, {index:24,id:null}, {index:25,id:null},
                {index:26,id:null},{index:27,id: null}, {index:28,id:null},{index:29,id: null}, 
                {index:30,id:null},{index:1,id:null}, {index:32,id:null}, {index:33,id:null}, 
                {index:34,id:null}, {index:35,id:null}, {index:36,id:null},{index:37,id: null},
                {index:38,id: null},{index:39,id: null},{index:40,id:null}, {index:41,id:null}, 
                {index:42,id:null}, {index:43,id:null}, {index:44,id:null}, {index:45,id:null}, 
                {index:47,id:null}, {index:48,id:null}, {index:49,id:'wp-a2'},{index:50,id:'wp-b2'},
                {index:51,id:'wp-c2'},{index:52,id:'wp-d2'},{index:53,id:'wp-e2'},{index:54,id:'wp-f2'},
                {index:55,id:'wp-g2'},{index:56,id:'wp-h2'}, {index:57,id:'wr-a1'},{index:58,id:'wkn-b1'},
                {index:59,id:'wb-c1'},{index:60,id:'wq-d1'},{index:61,id:'wk-e1'},{index:62,id:'wb-f1'},
                {index:63,id:'wkn-g1'},{index:64,id:'wr-h1' }]



 
      //initial dictionary will be updated in pieceUpdate()
var selectedPiece={
  index:0,
  id:"wb-c1"
  
  
}

function backgroundChange(){
  $().css("background-color","green")

}
// updates selectedPiece dict
function pieceUpdate(){
  const piece=event.target.id
 console.log(piece)
console.log(initial.find(element =>element.id===piece))
 
 

  }
  
   //console.log(initial.find(pieceUpdate))


 
  


function pieceContainsText(selectedPiece){
 if(selectedPiece.PIECE_ID.includes("bp")|| selectedPiece.PIECE_ID.includes("wp")){
   pawn(selectedPiece)
 }

}

  
  
  function pawn(selectedPiece){
  if (selectedPiece.PIECE_){
pass
  }

  }
blackPieces.forEach(function(){
 
  document.addEventListener("click",pieceUpdate)
  
  
});

whitePieces.forEach(function(){
  
  document.addEventListener("click",pieceUpdate)
  
 // document.addEventListener("mouseover",backgroundChange)//
 
});