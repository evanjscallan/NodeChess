

//CHESS//

/* Basic Logic 



Layout/Components - - 

Board - 8x8 Nested Array to form a grid. Alternating black and white grid.
Piece - Takes up a space on the Board. 
Can move, and be removed by an opposing Color piece.
Color - Determines which Player the Piece belongs to


Pawn - Can move forward, diagonal


If a Piece moves into a space onto the board occupied by a different
colored Piece, the opposing Piece is removed from the array and pushed to a 'lost pieces' stack.



PROGRESS --

Have been able to place piece on board and move forward, diag left
	-Movement: need to detect if the piece cannot move left or right on diag (reach end or beginning of array)

NEXT: find out how to place all 8 pawns on the board, each acting as a new individual instance, refactor placePiece
	AFTER: detection of black or white piece

*/

class Movements{
	
}


class Pawn extends Movements{
	constructor(rows, value, pieceNum){
		attributes = 
		this.name = 'p'
		this.selector = pieceNum
		this.placementRow = rows
		this.placementCol = value
		this.placement = [this.placementRow, this.placementCol]
	}
	moveForward(){
		this.placementRow--
	}
	
}



let p = new Pawn(6)



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

	placePawnsW(data){
		for (let i=0; i<8; i++){
			this.board[p.placementRow][i] = p.name
		}
	}

	printBoard(){
		console.log(this.board)
	}


}

let myChess = new ChessBoard()
myChess.placePawnsW()
console.log(myChess.printBoard())





//need board infraStructure
/*

Original uses a grid with letters and numbers (a1, b1, a2, b2, etc)

how to label my grid rows?
row placement = the index of the nested lists .... [0][1] would be a2

*/









