export const optionsData: ({
    name: string;
    onChange: (evt: any) => void;
    textKey: string;
    helpLink: string;
    subOptions: {
        name: string;
        onChange: (evt: any) => void;
        textKey: string;
        helpLink: string;
    }[];
    extraInfo?: undefined;
} | {
    name: string;
    onChange: (evt: any) => void;
    textKey: string;
    extraInfo: string;
    subOptions: {
        name: string;
        onChange: (evt: any) => void;
        textKey: string;
        helpLink: string;
        additionalInfoLink: {
            textKey: string;
            href: string;
        };
    }[];
    helpLink: string;
} | {
    name: string;
    onChange: (evt: any) => void;
    textKey: string;
    extraInfo: string;
    helpLink: string;
    subOptions?: undefined;
} | {
    name: string;
    onChange: (evt: any) => void;
    textKey: string;
    helpLink?: undefined;
    subOptions?: undefined;
    extraInfo?: undefined;
} | {
    name: string;
    onChange: (evt: any) => void;
    textKey: string;
    subOptions: ({
        name: string;
        onChange: (evt: any) => void;
        textKey: string;
        helpLink: string;
    } | {
        name: string;
        onChange: (evt: any) => void;
        textKey: string;
        helpLink?: undefined;
    })[];
    helpLink?: undefined;
    extraInfo?: undefined;
} | {
    name: string;
    onChange: (evt: any) => void;
    textKey: string;
    extraInfo: string;
    helpLink?: undefined;
    subOptions?: undefined;
})[];
