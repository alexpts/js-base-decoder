let Decoder = require('../../index');
let extendChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдежзиклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

test('decode base62', () => {
    let decoder = new Decoder;
    expect(decoder.decode('rwjxiKo')).toBe(1563211298668);
});

test('decode base62 + shift', () => {
    let decoder = new Decoder(null, -1563211200000);
    expect(decoder.decode('pFq')).toBe(1563211298668);
});

test('decode base62+ru62', () => {
    let decoder = new Decoder(extendChars);
    expect(decoder.decode('RDЬPno')).toBe(1563211298668);
});

test('decode base62+ru62 + shift', () => {
    let decoder = new Decoder(extendChars, -1563211200000);
    expect(decoder.decode('6Pы')).toBe(1563211298668);
});

test('decode base62 - negative result', () => {
    let decoder = new Decoder;
    expect(decoder.decode('g8-')).toBe(-1000);
});

test('decode base62 + shift - negative result', () => {
    let decoder = new Decoder(null, -1000);
    expect(decoder.decode('fY-')).toBe(10);
});