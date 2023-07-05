function firstTen() {
  
    let firstChar = Math.floor(Math.random() * 9) + 1;
    let secondChar= Math.floor(Math.random() * 10);
    let thirdChar= Math.floor(Math.random() * 10);
    let fourthChar=Math.floor(Math.random() * 10);
    let fifthChar= Math.floor(Math.random() * 10);
    let sixthChar= Math.floor(Math.random() * 10);
    let seventhChar= Math.floor(Math.random() * 10);
    let eighthChar= Math.floor(Math.random() * 10);
    let ninthChar= Math.floor(Math.random() * 10);
    let tenthChar= Math.floor(Math.random() * 10);
  

    // CHECKS TO BE IMPLEMTENTED:
    // Needs to contain at least one digit either 3 times or 2 times 
    // Cannot be repeated more then twice after eachother
    // All other digits can not be repeated
  

    let firstTenCharacters=firstChar.toString()+secondChar.toString()+thirdChar.toString()+fourthChar.toString()+fifthChar.toString()+sixthChar.toString()+seventhChar.toString()+eighthChar.toString()+ninthChar.toString()+tenthChar.toString();

    return firstTenCharacters;
  }
  
  function generate11thCharacter(firstTen) {

    let taxId = firstTen.split('');
    taxId = taxId.map(function(n) {
        return parseInt(n, 10);
    });
    var firstTen = taxId.slice(0, 10);
    var sum = 0;
            var product = 10;
            for (var i = 0; i <= 9; i++) {
                sum = (firstTen[i] + product) % 10;
                if (sum === 0) {
                    sum = 10;
                }
                product = (sum * 2) % 11;
            }

            var checksum = 11 - product;
            if (checksum === 10) {
                checksum = 0;
            }
    

    const eleventhCharacter = checksum
    return eleventhCharacter;
  }
  
  const firstTenDigits = firstTen();  
  const eleventhChar = generate11thCharacter(firstTenDigits);
  const germanIdNumber = firstTenDigits+ eleventhChar;
  console.log(germanIdNumber);
  var taxValidator = require('german-tax-id-validator');
  var isValid = taxValidator.validate(germanIdNumber);
  console.log(isValid)  