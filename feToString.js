function exponentialNumToSting (num){
    let m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
    // (?:\.(\d*)) 匹配包含小数点后的数字 但不保存到match的数组中
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]))
}