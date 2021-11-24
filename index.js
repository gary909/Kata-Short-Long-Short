function solution(a, b){
    if (a.length > b.legnth) {
        return b + a + b;
    } else {
        return a + b + a;
    }
}


console.log(solution('45', '1')); // return '1451'
console.log(solution('13', '200')); // return '1320013'
console.log(solution('Soon', 'Me')); // return 'MeSoonMe'
console.log(solution('U', 'False')); // return 'UFalseU'