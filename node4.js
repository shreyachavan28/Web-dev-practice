// Node.js program to demonstrate the
// Buffer.copy() Method

var buffer2 = Buffer.allocUnsafe(5);

var buffer1 = Buffer.from('Geeks');

for (let i = 0; i < 5; i++) {

	// Adds: 'a b c d e' as 97 98 99 100 101
	// are their respective ASCII values
	buffer2[i] = i + 97;
}

buffer2.copy(buffer1, 2);

// Prints 'Geabc' as the input buffer1
// carries 'Geeks' and we provided the
// targetStart index as 2
// so elements will replace the values in
// buffer1 starting from index 2

console.log(buffer1.toString());