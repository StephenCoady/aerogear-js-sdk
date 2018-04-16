import { KeycloakConfiguration } from "./configuration";
import Keycloak from 'keycloak-js';
import { ServiceConfiguration } from "@aerogearservices/core";


export class AuthService{
    private keycloakConfig: KeycloakConfiguration;
    static auth: any = {};

    constructor(serviceConfig: ServiceConfiguration){
        this.keycloakConfig = new KeycloakConfiguration(serviceConfig);
    } 

    currentUser(){
        AuthService.auth.authz.loadUserProfile();
        AuthService.auth.authz.loadUserProfile().then(function(profile: any) {
            return profile;
                }).catch(function() {
                return('Failed to load user profile');
            });
    }

    login(){
        AuthService.auth.authz.login();
    }

    logout(){
        AuthService.auth.authz.logout();
    }

    init(keycloakConfig: any) : Promise<any> {
        if(keycloakConfig){
        let keycloak = Keycloak(keycloakConfig);

        return new Promise((resolve, reject) => {
            keycloak.init({ onLoad: 'login-required', flow: 'implicit' }).success(() => {
              AuthService.auth.authz = keycloak;
              AuthService.auth.logoutUrl = keycloak.authServerUrl + "/realms/" + keycloakConfig.realm + "/protocol/openid-connect/logout?redirect_uri=/";
              resolve();
            }).error((err) => {
              reject(err);
            });
          });
        }
        return new Promise((resolve, reject) => { return resolve() });
    }
}