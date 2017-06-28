module.exports = {
    "rules": {
        "no-var-keyword": true,
        "prefer-const": { severity: 'warning' },
        "no-conditional-assignment": true,
        "no-shadowed-variable": { severity: 'warning' },
        "no-switch-case-fall-through": { severity: 'warning' },
        "no-string-throw": true,
        "no-angle-bracket-type-assertion": true,
        "no-trailing-whitespace": { severity: 'warning' },
        "semicolon": {
            severity: 'warning',
            options: [
                "always",
                "ignore-interfaces"
            ]
        },
        "array-type": {
            severity: 'warning',
            options: [
                "array"
            ]
        },
        "triple-equals": [
            true,
            "allow-undefined-check"
        ],
        "trailing-comma": {
            severity: 'warning',
            options: [
                {
                    "multiline": "always",
                    "singleline": "never"
                }
            ]
        },
        "ban": [
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