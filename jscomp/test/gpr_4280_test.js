'use strict';

var Mt = require("./mt.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

var u = {
  contents: 0
};

function div(children, param) {
  for(var i = 0; i <= 1; ++i){
    u.contents = 300;
    console.log("nonline");
  }
  
}

function string(s) {
  for(var i = 0; i <= 1; ++i){
    u.contents = 200;
    console.log("no");
  }
  
}

function fn(authState, route) {
  var exit = 0;
  var onboardingRoute;
  if (typeof authState === "number") {
    var exit$1 = 0;
    if (typeof route === "number") {
      if (route === /* PasswordReset */-799423340 || route === /* Invite */-730831383 || route === /* SignIn */-384135774 || route === /* SignUp */-384133096) {
        exit = 2;
      } else {
        exit$1 = 3;
      }
    } else if (route.HASH === /* Onboarding */378129979) {
      onboardingRoute = route.VAL;
      exit = 1;
    } else {
      exit$1 = 3;
    }
    if (exit$1 === 3) {
      div({
            hd: string("Redirect"),
            tl: /* [] */0
          }, undefined);
      return 3;
    }
    
  } else {
    var exit$2 = 0;
    if (typeof route === "number" || route.HASH !== /* Onboarding */378129979) {
      exit$2 = 3;
    } else {
      onboardingRoute = route.VAL;
      exit = 1;
    }
    if (exit$2 === 3) {
      console.log(authState.VAL);
      div({
            hd: string("VerifyEmail"),
            tl: /* [] */0
          }, undefined);
      return 2;
    }
    
  }
  switch (exit) {
    case 1 :
        console.log(onboardingRoute);
        div({
              hd: string("Onboarding"),
              tl: /* [] */0
            }, undefined);
        return 0;
    case 2 :
        div({
              hd: string("LoggedOut"),
              tl: /* [] */0
            }, undefined);
        return 1;
    
  }
}

eq("File \"gpr_4280_test.ml\", line 46, characters 6-13", fn(/* Unauthenticated */-54822762, /* Invite */-730831383), 1);

eq("File \"gpr_4280_test.ml\", line 47, characters 6-13", fn(/* Unauthenticated */-54822762, {
          HASH: /* Onboarding */378129979,
          VAL: 0
        }), 0);

eq("File \"gpr_4280_test.ml\", line 48, characters 6-13", fn({
          HASH: /* Unverified */254489473,
          VAL: 0
        }, /* Invite */-730831383), 2);

eq("File \"gpr_4280_test.ml\", line 49, characters 6-13", fn(/* Unauthenticated */-54822762, /* xx */26880), 3);

Mt.from_pair_suites("gpr_4280_test.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.u = u;
exports.div = div;
exports.string = string;
exports.fn = fn;
/*  Not a pure module */
