declare function initializeLocalDataCollection(): Promise<void>;
declare class LocalDataCollection {
    static start: () => Promise<any>;
    static end: () => Promise<any>;
    static clearCache: () => Promise<any>;
    static saveCacheData: () => Promise<any>;
}
