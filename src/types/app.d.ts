/// <reference types="node" />
import { EventEmitter } from "events";
import { DbCollectionOptions, DeleteWriteOpResultObject, MongoClientCommonOption, MongoClientOptions, UpdateWriteOpResult } from "mongodb";
interface KeyvMongoDbOptions {
    collection?: string;
    dbName?: string;
    ttl?: number;
    dbCollectionOptions?: DbCollectionOptions;
    mongoClientCommonOption?: MongoClientCommonOption;
    mongoClientOptions?: MongoClientOptions;
}
declare class KeyvMongoDb extends EventEmitter {
    collectionThunk: any;
    namespace: string;
    options: KeyvMongoDbOptions;
    constructor(uri: string, options: KeyvMongoDbOptions);
    clear: () => Promise<DeleteWriteOpResultObject>;
    delete: (key: any) => Promise<boolean>;
    get: (key: any) => Promise<any>;
    set: (key: any, value: any, ttl: number) => Promise<UpdateWriteOpResult>;
}
export { KeyvMongoDb as default };
//# sourceMappingURL=app.d.ts.map