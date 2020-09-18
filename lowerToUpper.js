/*
 * @Descripttion: 
 * @Author: ganbowen
 * @Date: 2020-09-18 15:49:46
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-09-18 15:50:03
 */
/**
 * 价格小写转大写
 * @param {String|Number} num 
 * @return {String} 大写 num
 */
export function amountLowerToUpper (num) {
    if (window.isNaN(num))
        return '无效数值！'
    var strPrefix = ''
    if (num < 0)
        strPrefix = '(负数)'
    num = Math.abs(num)
    if (num >= 1000000000000)
        return '无效数值！'
    var strOutput = ''
    var strUnit = '仟佰拾亿仟佰拾万仟佰拾圆角分'
    var strCapDgt = '零壹贰叁肆伍陆柒捌玖'
    num += '00'
    var intPos = num.indexOf('.')
    if (intPos >= 0) {
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2)
    }
    strUnit = strUnit.substr(strUnit.length - num.length)
    for (var i = 0; i < num.length; i++) {
        strOutput += strCapDgt.substr(num.substr(i, 1), 1) +
            strUnit.substr(i, 1)
    }
    return strPrefix +
        strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(
            /零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+圆/,
                '圆').replace(/亿零{0,3}万/, '亿').replace(/^圆/, '零圆')
}