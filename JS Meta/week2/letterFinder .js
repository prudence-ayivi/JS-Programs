function letterFinder(word, match) {
	for (var i = 0; i<word.length; i++) {
		if (word[i] == word) {
			console.log('Found the', match, 'at', i);
		} else {
				console.log('---No match found at', i)
		}

	}
}

letterFinder ("test", "t") 

// letterfinder defensive program 
function letterFinder(word, match) { 
    var condition1 = typeof(word) == 'string' && word.length >= 2 
    var condition2 = typeof(match) == 'string' && match.length == 1
    if (condition1 && condition2) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    } 
    } else {
        console.log("Please pass correct arguments to the function.")
    }
} 
letterFinder("ballon", "b")


// object declaretion and manipulation
var clothes = [];
clothes.push('Jeans');
clothes.push('T-shirt');
clothes.push('Jogging');
clothes.push('Bomba');
clothes.push('Shirt');
clothes.pop();
clothes.push('Jacket');
console.log(clothes[2]);

var favCar = {}; 
favCar.color = 'grey';
favCar.covertible = true; 
console.log(favCar);

// Error function
function addTwoNums(a, b) {
	try { 
		if (typeof(a) != 'number') {
			throw new ReferenceError('the first argument is not a number')
		}	else if (typeof(b) != 'number') {
			throw new ReferenceError('the second argument is not a number')
		}
		else {
			console.log(a + b)
		}
	} catch(err) {
		console.log("Error!", err)
	}

}
addTwoNums(5, "5")
console.log("It still works")