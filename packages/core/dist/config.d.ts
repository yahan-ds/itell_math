export type ItellThemeColors = {
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    popover: string;
    popoverForeground: string;
    card: string;
    cardForeground: string;
    border: string;
    input: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    ring: string;
    radius: string;
    info: string;
    warning: string;
};
type ItellConfig = {
    theme: {
        light: ItellThemeColors;
        dark: ItellThemeColors;
    };
};
export declare const ItellDefaultConfig: ItellConfig;
export declare const getItellConfig: (userConfig: Record<string, any>) => ItellConfig;
export {};
