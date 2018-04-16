import { UserPrincipal } from "./UserPrincipal";
import { UserRole } from "./UserRole";
export declare class UserPrincipalImpl extends UserPrincipal {
    constructor(userName: string, firstName: string, lastName: string, email: string, roles: Array<UserRole>, identityToken: string, accessToken: string, refreshToken: string);
    readonly getUserName: String;
    setUserName: string;
    readonly getFirstName: String;
    setFirstName: string;
    readonly getLastName: String;
    setLastName: string;
    readonly getName: string;
    readonly getRoles: UserRole[];
    setRoles: Array<UserRole>;
    readonly getEmail: String;
    setEmail: string;
    readonly getIdentityToken: String;
    setIdentityToken: string;
    readonly getAccessToken: String;
    setAccessToken: string;
    readonly getRefreshToken: String;
    setRefreshToken: string;
}
