declare function initializeSubscriptionsProxy(): Promise<void>;
declare class SubscriptionsProxy {
    static add: (url: any, properties?: {}) => Promise<any>;
    static getSubscriptions: () => Promise<any>;
    static sync: (url: any) => Promise<any>;
    static remove: (url: any) => Promise<any>;
    static has: (url: any) => Promise<any>;
    static onAdded: ListenerSupport;
    static onChanged: ListenerSupport;
    static onRemoved: ListenerSupport;
}
