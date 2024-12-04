declare function setDataCollectionOptionsVisibility(visibility: any): void;
declare function addUIChangeListeners(): void;
declare function initialize(): Promise<void>;
declare function showSeparators(): void;
declare function onSettingsChanged(name: any, currentValue: any, previousValue: any): void;
declare function toggleDataCollectionOptPref(value: any): void;
declare function onPrefsChanged(name: any, currentValue: any): void;
declare function onSubAdded(items: any): void;
declare function onSubRemoved(items: any): Promise<void>;
