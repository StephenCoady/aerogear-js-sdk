import { UserPrincipal } from "./UserPrincipal";
import { UserRole } from "./UserRole";


export class UserPrincipalImpl implements UserPrincipal{
    userName: String;
    firstName: String;
    lastName: String;
    email: String;
    roles: UserRole[];
    identityToken: String;
    accessToken: String;
    refreshToken: String;
    
    
    constructor(userName: string, firstName: string, lastName: string, email: string, roles: Array<UserRole>, identityToken: string, accessToken: string, refreshToken: string){
        this.userName = userName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.roles = roles;
        this.identityToken = identityToken;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    get getUserName(){
        return this.userName;
    }

    set setUserName(userName: string){
        this.userName = userName;
    }

    get getFirstName(){
        return this.firstName;
    }

    set setFirstName(firstName: string){
        this.firstName = firstName;
    }

    get getLastName(){
        return this.lastName;
    }

    set setLastName(lastName: string){
        this.lastName = lastName;
    }

    get getName(){
        return this.firstName + " " + this.lastName;
    }

    get getRoles(){
        return this.roles;
    }

    set setRoles(roles: Array<UserRole>){
        if(roles != null){
            this.roles.push.apply(this.roles, roles);
        }
    }

    get getEmail(){
        return this.email;
    }

    set setEmail(email: string){
        this.email = email;
    }

    get getIdentityToken(){
        return this.identityToken;
    }

    set setIdentityToken(identityToken: string){
        this.identityToken = identityToken;
    }

    get getAccessToken(){
        return this.accessToken;
    }

    set setAccessToken(accessToken: string){
        this.accessToken = accessToken;
    }

    get getRefreshToken(){
        return this.refreshToken;
    }

    set setRefreshToken(refreshToken: string){
        this.refreshToken = refreshToken;
    }

    hasResourceRole(role: string, resourceId: string): boolean{
        
        return false;
    }

    hasRealmRole(role: string): boolean{
        
        return false;
    }
}