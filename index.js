module.exports = class BaseDecoder {
    /**
     * @param {String|undefined} charsets
     * @param {Number} shift
     */
    constructor(charsets = undefined, shift = 0) {
        charsets = charsets || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charsets = charsets.split('');
        this.map = BaseDecoder.charsetsMap(this.charsets);
        this.count = charsets.split('').length;
        this.shift = shift;
    }

    withShift(number, direction = 1) {
        return this.shift ? number + direction * this.shift : number;
    }

    encode(number) {
        number = this.withShift(number, 1);
        if (number === 0) {
            return this.charsets[0];
        }

        let string = number < 0 ? '-' : '';
        number = Math.abs(number);

        while (number > 0) {
            string = this.charsets[number % this.count] + string;
            number = Math.floor(number / this.count);
        }

        return string;
    }

    decode(string) {
        let result = 0;
        let i;
        let length = string.length;
        let isNegative = string[length-1] === '-';
        isNegative && length--;

        for (i = 0; i < length; i++) {
            let number = this.map.get(string[i]);
            result += number ? number * Math.pow(this.count, length - i - 1) : 0;
        }

        return this.withShift(isNegative ? -result : result, -1);
    }

    static charsetsMap(charsets) {
        let map = new Map;
        charsets.map((char, i) => {
            map.set(char, i);
        });

        return map;
    };
};
