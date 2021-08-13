const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count = 0;
    let arrayStr = []; 
    while(expr.length >= count) {
        let charBinary = expr.slice(count, count + 10);
        arrayStr.push(getChar(charBinary));
        count += 10;
    }

    
   
    function getChar(binary){
        let charMorze = [];

        if (binary === '**********') {
            return ' ';
        }

        for(let i = 0; i<5; i++) {
            let code = binary.slice(0 + 2*i, 2 + 2*i);
            switch(code) {
                case '10': {charMorze.push('.'); break;}
                case '11': {charMorze.push('-'); break;}
                default: charMorze.push('');
            }
        }
        let morzeCode = charMorze.join('');

        return MORSE_TABLE[morzeCode];
    }

    return arrayStr.join('')
}

module.exports = {
    decode
}