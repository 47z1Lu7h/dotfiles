export const settingsNotifier: EventEmitter;
export const settings: Settings;
export function getSettings(): any;
export function setSetting(name: any, isEnabled: any, callback: any): void;
export function isValidTheme(themeName: any): boolean;
import { EventEmitter } from "../../../adblockplusui/adblockpluschrome/lib/events";
declare function Settings(): void;
declare class Settings {
    settingsKey: string;
    defaults: {
        debug_logging: boolean;
        youtube_channel_whitelist: boolean;
        youtube_manage_subscribed: boolean;
        show_advanced_options: boolean;
        show_block_counts_help_link: boolean;
        display_menu_stats: boolean;
        show_survey: boolean;
        picreplacement: boolean;
        twitch_hiding: boolean;
        onpageMessages: boolean;
        color_themes: {
            popup_menu: string;
            options_page: string;
        };
    };
    init: Promise<void>;
    set(name: any, isEnabled: any, callback: any): void;
    getAll(): any;
    onload(): Promise<void>;
}
export {};
