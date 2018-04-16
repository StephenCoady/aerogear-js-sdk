import { UserRole } from "./UserRole";
export declare class UserPrincipal {
    userName: String;
    firstName: String;
    lastName: String;
    email: String;
    roles: Array<UserRole>;
    identityToken: String;
    accessToken: String;
    refreshToken: String;
}
