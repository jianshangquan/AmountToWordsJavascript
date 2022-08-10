const {AmountToWords, AmountConversion} = require('./amount-to-words');

const output = AmountToWords.convertTo(1000000000000, AmountConversion.BURMESE);
console.log(output)