module.exports = {
  rulesDirectory: ["./src"],
  rules: {
    "no-var-keyword": true,
    "prefer-const": { severity: "warning" },
    "no-conditional-assignment": true,
    "no-shadowed-variable": { severity: "warning" },
    "no-switch-case-fall-through": { severity: "warning" },
    "no-string-throw": true,
    "no-angle-bracket-type-assertion": true,
    "no-default-export": { severity: "warning" },
    "no-falsey-zero": true,
    semicolon: {
      severity: "warning",
      options: ["always", "ignore-interfaces"]
    },
    "array-type": {
      severity: "warning",
      options: ["array"]
    },
    "triple-equals": [true, "allow-undefined-check"],
    ban: [true, ["it", "only"], ["describe", "only"]],
    "import-blacklist": [true, "mobx/lib/mobx"]
  }
};
