module.exports = class BaseDecoder {
    /**
     * @param {String} charsets
     * @param {Number} shift - example start time for timestamp
     */
    constructor(charsets = '', shift = 0) {
        charsets = charsets || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charsets = charsets.split('');
        this.map = BaseDecoder.charsetsMap(this.charsets);
        this.count = this.charsets.length;
        this.shift = shift;
    }

    /**
     * @param {number} number
     * @param {number} direction
     * @returns {number}
     */
    withShift(number, direction = 1) {
        return this.shift ? number + direction * this.shift : number;
    }

    /**
     * @param {number} number
     * @returns {string}
     */
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

    /**
     * @param {string} string
     * @returns {number}
     */
    decode(string) {
        let result = 0;
        let length = string.length;
        let isNegative = string[length-1] === '-';
        isNegative && length--;

        for (let i = 0; i < length; i++) {
            let number = this.map.get(string[i]);
            result += number ? number * Math.pow(this.count, length - i - 1) : 0;
        }

        return this.withShift(isNegative ? -result : result, -1);
    }

    /**
     * @param {Array<string>} charsets
     * @returns {Map<string, number>}
     */
    static charsetsMap(charsets) {
        const map = new Map();
        charsets.map(map.set.bind(map));
        return map;
    };
};
