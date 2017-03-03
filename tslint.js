module.exports = {
    "rules": {
        "no-var-keyword": true,
        "prefer-const": true,
        "no-conditional-assignment": true,
        "no-shadowed-variable": true,
        "no-switch-case-fall-through": true,
        "no-string-throw": true,
        "no-for-in-array": true,
        "no-angle-bracket-type-assertion": true,
        "no-trailing-whitespace": true,
        "semicolon": [
            true,
            "always",
            "ignore-interfaces"
        ],
        "array-type": [
            true,
            "array"
        ],
        "strict-boolean-expressions": [
            true,
            "allow-string",
            "allow-undefined-union",
            "allow-mix"
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