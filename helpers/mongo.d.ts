import { Collection } from 'mongodb';
export declare class DB {
    private _db;
    private _persons;
    readonly persons: Collection;
    connect(): Promise<void>;
    close(): void;
}
