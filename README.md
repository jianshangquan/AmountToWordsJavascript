# Amount to words

Convert amount in letter. 

## About
This repository is combined 3 language converter into single package
For Chinese language: [number-to-chinese-words](https://www.npmjs.com/package/number-to-chinese-words)\
For English language: [amount-to-words](https://www.npmjs.com/package/amount-to-words)\
For Burmese language: [my own source code](https://github.com/jianshangquan/AmountToWordsJavascript)\

```javascript
    const {AmountToWords, AmountConversion} = require('./amount-to-words');
    
    const output = AmountToWords.convertTo(123456789, AmountConversion.BURMESE);
    // output => တစ်ထောင်နှစ်ရာသုံးဆယ့်လေးသိန်းငါးသောင်းခြှောက်ထောင်ခုနှစ်ရာရှစ်ဆယ့်ကိုးကျပ်
```

#### Max convertable amount in different language
| Language | Max convertable | Digit |
|--|--|--|
| Burmese | < 10000000000000 | 13 digit
| English | < 1000000000 | 9 digit |
| Chinese | < 100000000 | 8 digit |


### Ported languages
Java: https://github.com/jianshangquan/AmountToWordsJava \
Javascript: https://github.com/jianshangquan/AmountToWordsJavascript \
Dart: https://github.com/jianshangquan/AmountToWordsDart \
Rust: https://github.com/jianshangquan/AmountToWordsRust
