"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UserPrincipal_1 = require("./UserPrincipal");
var UserPrincipalImpl = /** @class */ (function (_super) {
    __extends(UserPrincipalImpl, _super);
    function UserPrincipalImpl(userName, firstName, lastName, email, roles, identityToken, accessToken, refreshToken) {
        var _this = _super.call(this) || this;
        _this.userName = userName;
        _this.lastName = lastName;
        _this.email = email;
        _this.roles = roles;
        _this.identityToken = identityToken;
        _this.accessToken = accessToken;
        _this.refreshToken = refreshToken;
        return _this;
    }
    Object.defineProperty(UserPrincipalImpl.prototype, "getUserName", {
        get: function () {
            return this.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setUserName", {
        set: function (userName) {
            this.userName = userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setFirstName", {
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setLastName", {
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getRoles", {
        get: function () {
            return this.roles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setRoles", {
        set: function (roles) {
            if (roles != null) {
                this.roles.push.apply(this.roles, roles);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getIdentityToken", {
        get: function () {
            return this.identityToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setIdentityToken", {
        set: function (identityToken) {
            this.identityToken = identityToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getAccessToken", {
        get: function () {
            return this.accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setAccessToken", {
        set: function (accessToken) {
            this.accessToken = accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "getRefreshToken", {
        get: function () {
            return this.refreshToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPrincipalImpl.prototype, "setRefreshToken", {
        set: function (refreshToken) {
            this.refreshToken = refreshToken;
        },
        enumerable: true,
        configurable: true
    });
    return UserPrincipalImpl;
}(UserPrincipal_1.UserPrincipal));
exports.UserPrincipalImpl = UserPrincipalImpl;
//# sourceMappingURL=UserPrincipalImpl.js.map