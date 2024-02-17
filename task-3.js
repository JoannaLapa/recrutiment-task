'use strict'

const checkElementsOccurence = (elements, elemToFind, minOccurences) => {
	let occurences = 0
	let array = elements.split(',')
	for (let i = 0; i < array.length; i++) {
		if (array[i] === elemToFind) {
			occurences++
		}
	}
	return occurences === minOccurences
}
