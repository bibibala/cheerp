"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var m = Math.imul;
var n = Math.fround;
var oSlot = 0;
var nullArray = [null];
var nullObj = {d: nullArray, o: 0};

function M(p) {
    return (typeof self === 'object') ? fetch(p).then(r => r.arrayBuffer()) : new Promise((y, n) => {
        import('fs').then(r => r.readFile(p, (e, d) => {
            if (e) n(e); else y(d);
        }));
    });
}

function g() {
}

var __asm = null, __heap = null;

function J() {
    throw new Error('this should be unreachable');
};var i = null;
var add = J;
export default function (j) {
    return (j && j.buffer) ? Promise.resolve(j.buffer) : M((j && j.absPath) ? j.absPath : new URL('hello.wasm', import.meta.url)).then(j => WebAssembly.instantiate(j, {i: {}})).then(j => {
        __asm = j.instance.exports;
        __heap = __asm.N.buffer;
        i = __asm.i;
        add = i;
        g();
        return {add: add,};
    });
}

function I(j) {
}