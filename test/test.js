// /* let memory = "..x..x..xx..."
// let cnt = 2 //x该出现的次数
// let xCnt = 0

// let xA = 0 //x已经出现的次数
// let memoryArr = memory.split('')
// for (let item of memoryArr) {
//     if (item == 'x')
//         xCnt++
// }
// let chuliCnt = Math.floor(xCnt / cnt) + 1

// for (let i = 0; i < chuliCnt; i++) {
//     //i 扫描之前x出现的次数
//     let yijinCnt = i
//     let yunxuX = i + cnt
//     let resArr = memoryArr
//     for (let j = 0; j < resArr.length; j++) {
//         if (resArr[j] == 'x' && xA < yunxuX && xA >= yijinCnt) {
//             //console.log(i)
//             //console.log(j)
//             resArr[j] = '.'
//             xA++

//         }
//     }
//     console.log(resArr)
// }


// //console.log(chuliCnt) */

// var romanToInt = function (s) {
//     let sArr = s.split('')
//     let res = 0
//     for (let i = 0; i < sArr.length; i++) {
//         console.log(i , res)
//         if (sArr[i] == 'I') {
//             if (sArr[i + 1] == 'V') {
//                 res += 4
//                 i++
//                 continue
//             } else if (sArr[i + 1] == 'X') {
//                 res += 9
//                 i++
//                 continue
//             } else {
//                 res += 1
//                 continue
//             }
//         }
//         if (sArr[i] == 'V') {
//             res += 5
//             continue
//         }
//         if (sArr[i] == 'X') {
//             if (sArr[i + 1] == 'L') {
//                 res += 40
//                 i++
//                 continue
//             } else if (sArr[i + 1] == 'C') {
//                 res += 90
//                 i++
//                 continue
//             } else {
//                 res += 10
//                 continue
//             }
//         }
//         if (sArr[i] == 'L') {
//             res += 50
//             continue
//         }
//         if (sArr[i] == 'C') {
//             if (sArr[i + 1] == 'D') {
//                 res += 400
//                 i++
//                 continue
//             } else if (sArr[i + 1] == 'M') {
//                 res += 900
//                 i++
//                 continue
//             } else {
//                 res += 100
//                 continue
//             }
//         }
//         if (sArr[i] == 'D') {
//             res += 500
//             continue
//         }
//         if (sArr[i] == 'M') {
//             res += 1000
//             continue
//         }
        
//     }
//     return res
// };
// console.log(romanToInt("MCMXCIV"))
let s = 'LVIIII'
let obj = {
    "M": 1000,
    //"CM": 900,
    "D": 500,
    //"CD": 400,
    "C": 100,
    //"XC": 90,
    "L": 50,
    //"XL": 40,
    "X": 10,
    //"IX": 9,
    "V": 5,
    //"IV": 4,
    "I": 1,
    default: 0
}
// let res = 0
// for (let item in obj){
//     while(s.startsWith(item)) {
//         res+=obj[item]
//         s = s.slice(item.length)
//     }
// }
// return res
let res = 0
let perNum = 0
for(let i = 0; i < s.length; i++) {
    let num = getValue(s[i])
    if(perNum <= num) {
        res += num
    }else {
        res -= num
    }
    console.log(s[i] , res, perNum , num)
    perNum = num
}

//return res

function getValue(a){
    return obj[a]
}