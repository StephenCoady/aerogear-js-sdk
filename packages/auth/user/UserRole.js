"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole = /** @class */ (function () {
    function UserRole(name, type, namespace) {
        this.name = name;
        this.type = type;
        this.namespace = namespace;
    }
    Object.defineProperty(UserRole.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRole.prototype, "Type", {
        get: function () {
            return this.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRole.prototype, "Namespace", {
        get: function () {
            return this.namespace;
        },
        enumerable: true,
        configurable: true
    });
    return UserRole;
}());
exports.UserRole = UserRole;
//# sourceMappingURL=UserRole.js.map