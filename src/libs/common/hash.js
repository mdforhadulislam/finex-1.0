const bcrypt = require("bcrypt")

// working string convat hashing
const convartHash = (string) => {
  return bcrypt.hashSync(string, 2);
};

// working hashing to convart string
const compareHash = (string, hashString) => {
  return bcrypt.compareSync(string, hashString);
};


console.log();


module.exports={convartHash,compareHash}

