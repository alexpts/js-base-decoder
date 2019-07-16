let Decoder = require('../../index');
let extendChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдежзиклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

test('encode base62', () => {
    let decoder = new Decoder;
    expect(decoder.encode(1563211298668)).toBe('rwjxiKo');
});

test('encode base62 + shift', () => {
    let decoder = new Decoder(null, -1563211200000);
    expect(decoder.encode(1563211298668)).toBe('pFq');
});

test('encode base62+ru62', () => {
    let decoder = new Decoder(extendChars);
    expect(decoder.encode(1563211298668)).toBe('RDЬPno');
});

test('encode base62+ru62 + shift', () => {
    let decoder = new Decoder(extendChars, -1563211200000);
    expect(decoder.encode(1563211298668)).toBe('6Pы');
});

test('encode base16', () => {
    let decoder = new Decoder('0123456789abcdef');
    expect(decoder.encode(1563211298668)).toBe('16bf6a7776c');
});

test('encode base62 - negative result', () => {
    let decoder = new Decoder;
    expect(decoder.encode(-1000)).toBe('g8-');
});

test('encode base62 + shift - negative result', () => {
    let decoder = new Decoder(null, -1000);
    expect(decoder.encode(10)).toBe('fY-');
});