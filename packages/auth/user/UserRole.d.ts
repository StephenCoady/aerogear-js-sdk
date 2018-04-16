import { RoleType } from "./RoleType";
export declare class UserRole {
    private name;
    private type;
    namespace: string;
    constructor(name: string, type: RoleType, namespace: string);
    readonly Name: string;
    readonly Type: RoleType;
    readonly Namespace: string;
}
