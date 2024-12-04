declare function initializeSettings(): Promise<void>;
declare const settingsNotifier: EventEmitter;
declare let localsettings: {};
declare let settings: {};
declare function isValidTheme(name: any): Promise<any>;
declare const settingsPort: browser.Runtime.Port;
