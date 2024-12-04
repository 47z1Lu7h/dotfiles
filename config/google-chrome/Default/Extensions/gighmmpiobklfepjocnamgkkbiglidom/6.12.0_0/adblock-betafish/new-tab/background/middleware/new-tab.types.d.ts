import { LicenseStateBehavior, Command } from "../../../ipm/background";
export declare enum CreationMethod {
    default = "default",
    force = "force"
}
export declare const defaultCreationMethod = CreationMethod.default;
export interface NewTabBehavior extends LicenseStateBehavior {
    target: string;
    method: CreationMethod;
}
export interface NewTabParams {
    url: string;
    license_state_list?: string;
    method?: `${CreationMethod}`;
}
export declare type NewTabCommand = Command & NewTabParams;
