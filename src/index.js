const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedString = '';
    for (let i = 0; i < expr.length; i += 10) {
        let binaryString = expr.slice(i, i + 10);
        if (binaryString == '**********') {
            decodedString += ' ';
            continue;
        }
        let morseString = '';
        for (let j = 0; j < binaryString.length; j += 2) {
            if (binaryString.slice(j, j + 2) == '10') {
                morseString += '.';
            }
            if (binaryString.slice(j, j + 2) == '11') {
                morseString += '-';
            }
        }
        decodedString += MORSE_TABLE[morseString];
    }
    return decodedString;
}

module.exports = {
    decode
}