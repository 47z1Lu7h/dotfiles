import { Tabs } from "webextension-polyfill";
import { EventEmitter } from "../../../adblockplusui/adblockpluschrome/lib/events";
import { type Dialog } from "./dialog.types";
import { ShowOnpageDialogResult } from "./tab-manager.types";
export declare const eventEmitter: EventEmitter;
export declare function showOnpageDialog(tabId: number, tab: Tabs.Tab, dialog: Dialog): Promise<ShowOnpageDialogResult>;
