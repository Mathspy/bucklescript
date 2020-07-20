'use strict';


function f(x) {
  if (x === /* b */98) {
    return "b";
  } else if (x === /* c */99) {
    return "c";
  } else {
    return "a";
  }
}

function ff(x) {
  switch (x) {
    case "a" :
        return /* a */97;
    case "b" :
        return /* b */98;
    case "c" :
        return /* c */99;
    default:
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "bb.ml",
              17,
              9
            ],
            Error: new Error()
          };
  }
}

function test(x) {
  var match;
  switch (x) {
    case "a" :
        match = /* a */97;
        break;
    case "b" :
        match = /* b */98;
        break;
    case "c" :
        match = /* c */99;
        break;
    default:
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "bb.ml",
              26,
              13
            ],
            Error: new Error()
          };
  }
  if (match === /* b */98) {
    return "b";
  } else if (match === /* c */99) {
    return "c";
  } else {
    return "a";
  }
}

var test_poly = "a";

var c = f(/* a */97);

var d = f(/* b */98);

var e = f(/* c */99);

exports.f = f;
exports.ff = ff;
exports.test = test;
exports.test_poly = test_poly;
exports.c = c;
exports.d = d;
exports.e = e;
/* c Not a pure module */
