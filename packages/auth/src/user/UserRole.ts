import { RoleType } from "./RoleType";

export class UserRole{
    private name: string;
    private type: RoleType;
    namespace: string;

    constructor(name: string, type: RoleType, namespace: string){
        this.name = name;
        this.type = type;
        this.namespace = namespace;
    }

    get Name():string{
        return this.name;
    }

    get Type():RoleType{
        return this.type;
    }

    get Namespace():string{
        return this.namespace;
    }


}