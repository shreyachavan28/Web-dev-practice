// Node.js program to demonstrate the 
// dns.lookup() method 
   
// Accessing dns module
const dns = require('dns');
  
// Setting options for dns.lookup() method
const options = {
      
    // Setting family as 6 i.e. IPv6
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
  
// Calling dns.lookup() for hostname geeksforgeeks.org
// and displaying them in console as a callback
dns.lookup('geeksforgeeks.org', options, (err, address, family) =>
        console.log('address: %j family: IPv%s', address, family));