/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/amount-to-words/BurmeseAmountToWords.js":
/*!*****************************************************!*\
  !*** ./src/amount-to-words/BurmeseAmountToWords.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n\r\nconst unit = [\"ခု\", \"ဆယ်\", \"ရာ\", \"ထောင်\", \"သောင်း\", \"သိန်း\", \"သန်း\", \"ကုဍ\"];\r\nconst numbers = [\"၁\", \"၂\", \"၃\", \"၄\", \"၅\", \"၆\", \"၇\", \"၈\", \"၉\", \"၀\"];\r\nconst words = [\"တစ်\", \"နှစ်\", \"သုံး\", \"လေး\", \"ငါး\", \"ခြှောက်\", \"ခုနှစ်\", \"ရှစ်\", \"ကိုး\", \"သုံည\"];\r\n\r\n\r\nfunction convert(amount){\r\n    let amtString = amount.toString();\r\n    let firstTheinAmt = amtString.length > 5 ? amtString.substring(0, amtString.length - 5) : \"\";\r\n    let lastTheinAmt = amtString.substring(amtString.length < 6 ? 0 : amtString.length - 6);\r\n    let result = \"\";\r\n\r\n    result = convertThein(lastTheinAmt);\r\n    if(firstTheinAmt.length != 0){\r\n        result = convertThein(firstTheinAmt) + result;\r\n    }\r\n    result = result + ((lastTheinAmt.charAt(lastTheinAmt.length - 1) != '0') ? lastTheinAmt.charAt(lastTheinAmt.length - 1) : \"\") + \"ကျပ်\";\r\n\r\n    return result;\r\n}\r\n\r\nfunction convertThein(theinAmt){\r\n    let result = \"\";\r\n    for (let i = 0; i < theinAmt.length - 1; i++){\r\n        if('0' != theinAmt.charAt(i)){\r\n            result = result + theinAmt.charAt(i) + unit[theinAmt.length - i - 1];\r\n            if(i == theinAmt.length - 2 && theinAmt.charAt(i + 1) != '0') {\r\n                result = result + \"့\";\r\n            }\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\n\r\n\r\nmodule.exports = {\r\n    convertInLetter: (value) => {\r\n        let result = convert(value);\r\n        for (let i = 0; i < 10; i++){\r\n            result = result.replaceAll((i + 1).toString(), words[i]);\r\n        }\r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack://amounttowordsjavascript/./src/amount-to-words/BurmeseAmountToWords.js?");

/***/ }),

/***/ "./src/amount-to-words/index.js":
/*!**************************************!*\
  !*** ./src/amount-to-words/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const BurmeseToWords = __webpack_require__(/*! ./BurmeseAmountToWords */ \"./src/amount-to-words/BurmeseAmountToWords.js\");\r\n\r\n\r\nconst AmountConversion = Object.freeze({\r\n    BURMESE: 'burmese',\r\n    ENGLISH: 'english',\r\n    CHINESE: 'chinese'\r\n});\r\n\r\n\r\nconst AmountToWords =  {\r\n    convertTo: (value, conversion) => {\r\n        switch (conversion){\r\n            case AmountConversion.BURMESE: return BurmeseToWords.convertInLetter(value);\r\n            case AmountConversion.CHINESE: return null;\r\n            case AmountConversion.ENGLISH: return null;\r\n        }\r\n        return null;\r\n    }\r\n}\r\n\r\nconst expo = module.exports = AmountToWords;\r\n\r\nexpo.AmountConversion = AmountConversion;\r\nexpo.AmountToWords = AmountToWords;\n\n//# sourceURL=webpack://amounttowordsjavascript/./src/amount-to-words/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {AmountToWords, AmountConversion} = __webpack_require__(/*! ./amount-to-words */ \"./src/amount-to-words/index.js\");\r\n\r\nconst output = AmountToWords.convertTo(123456789, AmountConversion.BURMESE);\r\nconsole.log(output);\n\n//# sourceURL=webpack://amounttowordsjavascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;