


const unit = ["ခု", "ဆယ်", "ရာ", "ထောင်", "သောင်း", "သိန်း", "သန်း", "ကုဍ"];
const numbers = ["၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉", "၀"];
const words = ["တစ်", "နှစ်", "သုံး", "လေး", "ငါး", "ခြှောက်", "ခုနှစ်", "ရှစ်", "ကိုး", "သုံည"];


function convert(amount){
    let amtString = amount.toString();
    let firstTheinAmt = amtString.length > 5 ? amtString.substring(0, amtString.length - 5) : "";
    let lastTheinAmt = amtString.substring(amtString.length < 6 ? 0 : amtString.length - 6);
    let result = "";

    result = convertThein(lastTheinAmt);
    if(firstTheinAmt.length != 0){
        result = convertThein(firstTheinAmt) + result;
    }
    result = result + ((lastTheinAmt.charAt(lastTheinAmt.length - 1) != '0') ? lastTheinAmt.charAt(lastTheinAmt.length - 1) : "") + "ကျပ်";

    return result;
}

function convertThein(theinAmt){
    let result = "";
    for (let i = 0; i < theinAmt.length - 1; i++){
        if('0' != theinAmt.charAt(i)){
            result = result + theinAmt.charAt(i) + unit[theinAmt.length - i - 1];
            if(i == theinAmt.length - 2 && theinAmt.charAt(i + 1) != '0') {
                result = result + "့";
            }
        }
    }
    return result;
}



module.exports = {
    convertInLetter: (value) => {
        let result = convert(value);
        for (let i = 0; i < 10; i++){
            result = result.replaceAll((i + 1).toString(), words[i]);
        }
        return result;
    }
}