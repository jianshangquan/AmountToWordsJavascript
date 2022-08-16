const {AmountToWords, AmountConversion} = require('amount-to-words-js');

const output = AmountToWords.convertTo(123456798, AmountConversion.BURMESE);
console.log(output);