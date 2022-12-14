const BurmeseToWords = require('./BurmeseAmountToWords');
const ChineseToWords = require('number-to-chinese-words');
const EnglishToWords = require('amount-to-words');


const AmountConversion = Object.freeze({
    BURMESE: 'burmese',
    ENGLISH: 'english',
    CHINESE: 'chinese'
});


const AmountToWords =  {
    convertTo: (value, conversion) => {
        switch (conversion){
            case AmountConversion.BURMESE: return BurmeseToWords.convertInLetter(value);
            case AmountConversion.CHINESE: return ChineseToWords.toWords(value);
            case AmountConversion.ENGLISH: return EnglishToWords.numberToWords(value);
        }
        return null;
    }
}

const expo = module.exports = AmountToWords;

expo.AmountConversion = AmountConversion;
expo.AmountToWords = AmountToWords;