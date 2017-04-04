module.exports = {
    "rules": {
        "no-var-keyword": true,
        "prefer-const": true,
        "no-conditional-assignment": true,
        "no-shadowed-variable": true,
        "no-switch-case-fall-through": true,
        "no-string-throw": true,
        "no-angle-bracket-type-assertion": true,
        "no-trailing-whitespace": true,
        "no-unused-new": true,
        "no-unused-expression": true,
        "no-unused-variable": [
            true,
        ],
        "semicolon": [
            true,
            "always",
            "ignore-interfaces"
        ],
        "array-type": [
            true,
            "array"
        ],
        "triple-equals": [
            true,
            "allow-undefined-check"
        ],
        "trailing-comma": [
            true,
            {
                "multiline": "always",
                "singleline": "never"
            }
        ],
        "ban": [
            true,
            [
                "it",
                "only"
            ],
            [
                "describe",
                "only"
            ]
        ]
    }
}