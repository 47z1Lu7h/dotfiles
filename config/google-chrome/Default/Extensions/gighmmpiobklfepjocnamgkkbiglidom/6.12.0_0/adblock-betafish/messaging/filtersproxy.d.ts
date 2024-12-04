declare function initializeFiltersProxy(): Promise<void>;
declare class FiltersProxy {
    static add: (text: any, origin: any) => Promise<any>;
    static remove: (filters: any) => Promise<any>;
    static validate: (text: any) => Promise<any>;
    static normalize: (text: any) => Promise<any>;
    static getUserFilters: () => Promise<any>;
    static onAdded: ListenerSupport;
    static onChanged: ListenerSupport;
    static onRemoved: ListenerSupport;
}
