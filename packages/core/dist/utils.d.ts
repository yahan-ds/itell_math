import { ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare const keyof: <T extends Object>(obj: T) => (keyof T)[];
export declare const groupby: <TData extends Object, TTransformer extends (arg: TData) => any = (arg: TData) => TData>(data: TData[], selector: (item: TData) => string | number, transformer?: TTransformer | undefined) => Record<string, ReturnType<TTransformer>[]>;
export declare const isObject: (obj: Record<string, any>, key: string) => boolean;
