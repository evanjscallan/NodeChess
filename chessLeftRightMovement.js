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