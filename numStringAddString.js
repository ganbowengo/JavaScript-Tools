/**
 * 两个数字类型的字符串相加的和的字符串
 * @param {string} a 
 * @param {string} b 
 * @return {string} res
 */
function add(a, b) {
    var res = '',
        c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
        console.log('c', c)
    }
    return res
}

console.log(add('1235','1236'))