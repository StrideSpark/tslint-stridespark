"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path = require('path');
var Lint = require('tslint');
var Formatter = (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        _super.apply(this, arguments);
    }
    Formatter.prototype.formatFailure = function (failure) {
        var fileName = path.relative(process.cwd(), failure.getFileName());
        var _a = failure.getStartPosition().getLineAndCharacter(), line = _a.line, character = _a.character;
        var message = failure.getFailure();
        var ruleName = failure.getRuleName();
        return "[tslint] " + fileName + ":" + (line + 1) + ":" + (character + 1) + ": " + message + " (" + ruleName + ")";
    };
    Formatter.prototype.format = function (failures) {
        return failures.map(this.formatFailure).join('\n') + '\n';
    };
    return Formatter;
}(Lint.Formatters.AbstractFormatter));
exports.Formatter = Formatter;