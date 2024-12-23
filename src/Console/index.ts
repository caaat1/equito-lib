export type T = any;
export class GroupCollapsed {
    private readonly args: T[];
    public constructor(...args: T[]) {
        this.args = args;
    }
    public log(...funcs: (() => void)[]): void {
        console.groupCollapsed(...this.args);
        {
            funcs.forEach((func) => {
                func();
            });
        }
        console.groupEnd();
    }
}
export class Log {
    public static col(...args: T[]): typeof Log {
        args.forEach((arg) => {
            console.log(arg);
        });
        return this;
    }
    public static row(...args: T[]): typeof Log {
        console.log(...args);
        return this;
    }
    public static void(...args: T[]): typeof Log {
        args;
        return this;
    }
}
