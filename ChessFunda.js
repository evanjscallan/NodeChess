
const b = 'black'
const w = 'white' 
const pawn = 'pawn'
const queen = 'queen'
const king = 'king'
const rook = 'rook'
const knight = 'knight'
const bishop = 'bishop'

//basic movements -- may ditch for restrict/unrestrict idea
let forward = 2
let left = 1
let right = 1
let down = 1
let forward2 = 2

//SUPERCLASS
//has color assign, movement methods
class Piece{
	constructor(inputValue, name, placeVal){
		this.movementF = forward
		this.movementL = left
		this.color = inputValue
		this.placement = placeVal
		this.type = name
	}
	hasColor(){
		console.log('Color of piece: '  + this.color.toUpperCase())
	}
	hasType(){
		console.log('Type of piece: ' + this.type.toUpperCase())
	}
	hasPlacement(){
		console.log('Placement:', this.placement)
	}
	hasBlack(){
		console.log('black piece: ', this.color === 'black')
	}
	hasWhite(){
		console.log('white piece: ',this.color === 'white')
	}
	moveForward(){
		if (this.type === 'pawn'){
			console.log(`The ${this.type} moves forward ${this.movementF} ${this.movementF === 1 ? 'space' : 'spaces'}.`)
		} else {
			console.log(`You cannot make this move with piece type: ${this.pieceName}`)
		}
	}
	moveDiagonal(){
		console.log(`the piece moves ${this.movementD}.`)
	}
}

///////////////////////////////////////////////////////////////////

//extends piece, shows attributes
class Pawn extends Piece{
	constructor(...vals){
		super(...vals);
	}
	forward(){
			return this.moveForward()
	}
} 

//PIECE CREATION
//arguments: color, column space in array, piece name
let p1w = new Pawn(w, pawn, 1)
let p2w = new Pawn(b, pawn, 2)
let p3w = new Pawn(w, pawn, 3)
let p4w = new Pawn(w, pawn, 4)
let p5w = new Pawn(w, pawn, 5)
let p6w = new Pawn(w, pawn, 6)
let p7w = new Pawn(w, pawn, 7)

p2w.hasColor()
p2w.hasType()
p2w.hasPlacement()
p2w.hasBlack()
p2w.hasWhite()
p2w.forward()





////////////////////////////////////////////////////

/* How can I simulate an x - y axis within nested arrays? */

//Should be before the piece. Gives the piece its quality. Also should keep track of how many pieces.
class WhiteTeam{

}


class BlackTeam{

}


class ChessBoard {
	constructor(data){

	this.board = 
				[
			/*a*/ [[],[],[],[],[],[],[],[]],
			/*b*/ [[],[],[],[],[],[],[],[]],
			/*c*/ [[],[],[],[],[],[],[],[]],
			/*d*/ [[],[],[],[],[],[],[],[]],
			/*e*/ [[],[],[],[],[],[],[],[]],
			/*f*/ [[],[],[],[],[],[],[],[]],
			/*g*/ [[],[],[],[],[],[],[],[]],
			/*h*/ [[],[],[],[],[],[],[],[]],
			]
	}


	printBoard(){
		console.log(this.board)
	}


}

let myChess = new ChessBoard()
myChess.printBoard()



/*
//left and right movement on array; user argument chooses the 'magnitude' of movement.
Idea: start all pieces with fully unrestricted board movement and then add restrictions based on piece.

function leftRight(mag){
	let arr = [[''], ['x'], ['']]
	//function used to find index of item
	let findPieceIndex = arr.findIndex((item) => item[0] === 'x')
	let piece = arr[findPieceIndex]
	if (mag === 0) {
		console.log('same array: ', arr)
	}
	else if (mag < arr.length - findPieceIndex){
		arr[findPieceIndex + mag] = piece
		arr[findPieceIndex] = ['']
		console.log('new array: ', arr)
	} 
}



leftRight(-1)

*/