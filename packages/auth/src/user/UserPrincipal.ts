import { UserRole } from "./UserRole";

export interface UserPrincipal{
    userName: String;
    firstName: String;
    lastName: String;
    email: String;
    roles: Array<UserRole>;
    identityToken: String;
    accessToken: String;
    refreshToken: String;
}