/**
 * 20位一下的科学计数法转为字符串 node环境下toFixed 的 参数应该在0-20之间 所以为 e-20的时候 toFixed的参数为小数点后的数字位数加上e后的参数不能大与20
 * @param {*} num 
 */
function exponentialNumToSting (num){
    let m = num.toExponential().match(/(\d)(?:\.(\d*))?e([+-]\d+)/)
    // (?:\.(\d*)) 匹配包含小数点后的数字 但不保存到match的数组中
    let s = 0
    let repeatStr = '0'
    if(+m[3] > 20){// 兼容当大与20时toFixed返回的还是科学计数法
        s = +m[3] - 20
        return (m[1]+'.'+ (m[2] || 0)) * Math.pow(10,20) + repeatStr.repeat(s)
    }
    return num.toFixed(Math.max(0, (m[2] || '').length - m[3]))
}

console.log(exponentialNumToSting(1.2e-20))