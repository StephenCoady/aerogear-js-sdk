
import { ServiceConfiguration } from "@aerogearservices/core";
import { URL } from "url";

/**
 * A class to represent the configuration options of the Keycloak singleThreadService
 */
export class KeycloakConfiguration {
    SERVER_URL_NAME: string = "auth-server-url";
    REALM_ID_NAME: string = "realm";
    RESOURCE_ID_NAME: string = "resource";
    TOKEN_HINT_FRAGMENT: string = "id_token_hint";
    REDIRECT_FRAGMENT: string = "redirect_uri";
    BASE_URL_TEMPLATE: string = "%s/realms/%s/protocol/openid-connect";
    LOGOUT_URL_TEMPLATE: string = "%s/logout?%s=%s&%s=%s";

    serverUrl: string;
    realmId: string;
    resourceId: string;
    baseUrl: string;

    /**
     * Create a new instance of the Keycloak configuration from the given instance of 
     * ServiceConfig
     */
    constructor(config: ServiceConfiguration){
        this.serverUrl = config.config.get(this.SERVER_URL_NAME) || "";
        this.realmId = config.config.get(this.REALM_ID_NAME) || "";
        this.resourceId = config.config.get(this.RESOURCE_ID_NAME) || "";
        this.baseUrl = `${this.BASE_URL_TEMPLATE}${this.serverUrl}${this.realmId}`;
    }

    /**
     * Get the URI for the Keycloak authentication endpoint
     */
    getAuthenticationEndpoint() : URL{
        return new URL(`${this.baseUrl}/auth`);
    }

    /**
     * Get the URI for the token exchange endpoint
     */
    getTokenEndpoint() : URL {
        return new URL(`${this.baseUrl}/token`);
    }
    
    /**
     * Get the resource id
     */
    get getResourceId(){
        return this.resourceId;
    }

    /**
     * Get the logout URL string
     */
    getLogoutUrl(identityToken: string, redirectUri: string) : string{
        return `${this.LOGOUT_URL_TEMPLATE}${this.baseUrl}${this.TOKEN_HINT_FRAGMENT}${identityToken}${this.REDIRECT_FRAGMENT}${redirectUri}`;
    }

    /**
     * Get the URL string of the Keycloak singleThreadService
     */
    get getHostUrl() :string{
        return this.serverUrl;
    }

    /**
     * Get the realm name of the Keycloak singleThreadService
     */
    get getRealmName(){
        return this.realmId;
    }

    /**
     * Returns the URL where keys can be retrieved.
     */
    getJwksUrl(): string{
        return `${this.baseUrl}/certs`;
    }

    /**
     * Returns the JWT Issuer
     */
    getIssuer(): string{
        return `%s/realms/%s${this.getHostUrl}${this.getRealmName}`
    }

}