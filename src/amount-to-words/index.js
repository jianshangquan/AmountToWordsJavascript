const BurmeseToWords = require('./BurmeseAmountToWords');


const AmountConversion = Object.freeze({
    BURMESE: 'burmese',
    ENGLISH: 'english',
    CHINESE: 'chinese'
});


const AmountToWords =  {
    convertTo: (value, conversion) => {
        switch (conversion){
            case AmountConversion.BURMESE: return BurmeseToWords.convertInLetter(value);
            case AmountConversion.CHINESE: return null;
            case AmountConversion.ENGLISH: return null;
        }
        return null;
    }
}

const expo = module.exports = AmountToWords;

expo.AmountConversion = AmountConversion;
expo.AmountToWords = AmountToWords;