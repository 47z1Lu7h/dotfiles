import { PayloadData } from "./data-collection.types";
export declare function getPayload(): Promise<PayloadData>;
export declare function clearEvents(): Promise<void>;
export declare function storeEvent(ipmId: string, commandName: string, commandVersion: number, name: string): Promise<void>;
