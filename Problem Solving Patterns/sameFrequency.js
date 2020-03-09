function sameFrequency(num1, num2) {
        if (num1.length !== num2.length) return false;
        else {
            let symbol = {};
            for (let i = 0; i < num1.length; i++) {
                let number = num1[i]
                if (symbol[number]) {symbol[number] += 1;}
                else {symbol[number] = 1;}
            }
            for (let i = 0; i < num2.length; i++) {
                let number = num2[i]
                if (!symbol[number]) return false;
                else { symbol[number] -= 1; }
            }
            return true;
        }
    }
console.log(sameFrequency("182", "281"));
console.log(sameFrequency("34", "14"));
console.log(sameFrequency("3589578", "5879385"));
console.log(sameFrequency("22", "222"));
  