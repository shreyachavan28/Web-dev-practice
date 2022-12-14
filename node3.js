// Node.js program to demonstrate the
// dns.lookup() method

// Accessing dns module
const dns = require('dns');

// Setting options for dns.lookup()
// method, all as true
const options = {
	all:true,
};

// Calling dns.lookup() for hostname
// geeksforgeeks.org and displaying
// them in console as a callback
dns.lookup('geeksforgeeks.org', options, (err, addresses) =>
		console.log('addresses: %j', addresses));