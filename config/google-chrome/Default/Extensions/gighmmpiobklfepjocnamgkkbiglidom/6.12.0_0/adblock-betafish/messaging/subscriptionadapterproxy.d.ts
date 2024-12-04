declare class SubscriptionAdapter {
    static getIdFromURL: (url: any) => Promise<any>;
    static getAllSubscriptionsMinusText: () => Promise<any>;
    static isLanguageSpecific: (adblockId: any) => Promise<any>;
    static getSubscriptionsMinusText: () => Promise<any>;
}
