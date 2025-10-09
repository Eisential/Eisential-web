
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model notification
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model notification_delivery_log
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type notification_delivery_log = $Result.DefaultSelection<Prisma.$notification_delivery_logPayload>
/**
 * Model push_subscription
 * 
 */
export type push_subscription = $Result.DefaultSelection<Prisma.$push_subscriptionPayload>
/**
 * Model session
 * 
 */
export type session = $Result.DefaultSelection<Prisma.$sessionPayload>
/**
 * Model task
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification_delivery_log`: Exposes CRUD operations for the **notification_delivery_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notification_delivery_logs
    * const notification_delivery_logs = await prisma.notification_delivery_log.findMany()
    * ```
    */
  get notification_delivery_log(): Prisma.notification_delivery_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.push_subscription`: Exposes CRUD operations for the **push_subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Push_subscriptions
    * const push_subscriptions = await prisma.push_subscription.findMany()
    * ```
    */
  get push_subscription(): Prisma.push_subscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account: 'account',
    category: 'category',
    notification: 'notification',
    notification_delivery_log: 'notification_delivery_log',
    push_subscription: 'push_subscription',
    session: 'session',
    task: 'task',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "category" | "notification" | "notification_delivery_log" | "push_subscription" | "session" | "task" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      notification_delivery_log: {
        payload: Prisma.$notification_delivery_logPayload<ExtArgs>
        fields: Prisma.notification_delivery_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notification_delivery_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notification_delivery_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>
          }
          findFirst: {
            args: Prisma.notification_delivery_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notification_delivery_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>
          }
          findMany: {
            args: Prisma.notification_delivery_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>[]
          }
          create: {
            args: Prisma.notification_delivery_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>
          }
          createMany: {
            args: Prisma.notification_delivery_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notification_delivery_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>[]
          }
          delete: {
            args: Prisma.notification_delivery_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>
          }
          update: {
            args: Prisma.notification_delivery_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>
          }
          deleteMany: {
            args: Prisma.notification_delivery_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notification_delivery_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notification_delivery_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>[]
          }
          upsert: {
            args: Prisma.notification_delivery_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notification_delivery_logPayload>
          }
          aggregate: {
            args: Prisma.Notification_delivery_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification_delivery_log>
          }
          groupBy: {
            args: Prisma.notification_delivery_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Notification_delivery_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.notification_delivery_logCountArgs<ExtArgs>
            result: $Utils.Optional<Notification_delivery_logCountAggregateOutputType> | number
          }
        }
      }
      push_subscription: {
        payload: Prisma.$push_subscriptionPayload<ExtArgs>
        fields: Prisma.push_subscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.push_subscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.push_subscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>
          }
          findFirst: {
            args: Prisma.push_subscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.push_subscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>
          }
          findMany: {
            args: Prisma.push_subscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>[]
          }
          create: {
            args: Prisma.push_subscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>
          }
          createMany: {
            args: Prisma.push_subscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.push_subscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>[]
          }
          delete: {
            args: Prisma.push_subscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>
          }
          update: {
            args: Prisma.push_subscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>
          }
          deleteMany: {
            args: Prisma.push_subscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.push_subscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.push_subscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>[]
          }
          upsert: {
            args: Prisma.push_subscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionPayload>
          }
          aggregate: {
            args: Prisma.Push_subscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePush_subscription>
          }
          groupBy: {
            args: Prisma.push_subscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Push_subscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.push_subscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<Push_subscriptionCountAggregateOutputType> | number
          }
        }
      }
      session: {
        payload: Prisma.$sessionPayload<ExtArgs>
        fields: Prisma.sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findFirst: {
            args: Prisma.sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findMany: {
            args: Prisma.sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          create: {
            args: Prisma.sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          createMany: {
            args: Prisma.sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          delete: {
            args: Prisma.sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          update: {
            args: Prisma.sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          deleteMany: {
            args: Prisma.sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          upsert: {
            args: Prisma.sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.taskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.taskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: accountOmit
    category?: categoryOmit
    notification?: notificationOmit
    notification_delivery_log?: notification_delivery_logOmit
    push_subscription?: push_subscriptionOmit
    session?: sessionOmit
    task?: taskOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    task: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | CategoryCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    notification_delivery_log: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification_delivery_log?: boolean | NotificationCountOutputTypeCountNotification_delivery_logArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountNotification_delivery_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notification_delivery_logWhereInput
  }


  /**
   * Count Type Push_subscriptionCountOutputType
   */

  export type Push_subscriptionCountOutputType = {
    notification_delivery_log: number
  }

  export type Push_subscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification_delivery_log?: boolean | Push_subscriptionCountOutputTypeCountNotification_delivery_logArgs
  }

  // Custom InputTypes
  /**
   * Push_subscriptionCountOutputType without action
   */
  export type Push_subscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Push_subscriptionCountOutputType
     */
    select?: Push_subscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Push_subscriptionCountOutputType without action
   */
  export type Push_subscriptionCountOutputTypeCountNotification_delivery_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notification_delivery_logWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    notification: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | TaskCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    account: number
    category: number
    push_subscription: number
    session: number
    task: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | UserCountOutputTypeCountAccountArgs
    category?: boolean | UserCountOutputTypeCountCategoryArgs
    push_subscription?: boolean | UserCountOutputTypeCountPush_subscriptionArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
    task?: boolean | UserCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPush_subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: push_subscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    provider: string | null
    provider_account_id: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    provider: string | null
    provider_account_id: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    provider: number
    provider_account_id: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    provider?: true
    provider_account_id?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    provider?: true
    provider_account_id?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    provider?: true
    provider_account_id?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    user_id: string | null
    type: string | null
    provider: string | null
    provider_account_id: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | account$userArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    provider?: boolean
    provider_account_id?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type" | "provider" | "provider_account_id" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | account$userArgs<ExtArgs>
  }
  export type accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | account$userArgs<ExtArgs>
  }
  export type accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | account$userArgs<ExtArgs>
  }

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      type: string | null
      provider: string | null
      provider_account_id: string | null
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountCreateManyAndReturnArgs>(args?: SelectSubset<T, accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountUpdateManyAndReturnArgs>(args: SelectSubset<T, accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends account$userArgs<ExtArgs> = {}>(args?: Subset<T, account$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'String'>
    readonly user_id: FieldRef<"account", 'String'>
    readonly type: FieldRef<"account", 'String'>
    readonly provider: FieldRef<"account", 'String'>
    readonly provider_account_id: FieldRef<"account", 'String'>
    readonly refresh_token: FieldRef<"account", 'String'>
    readonly access_token: FieldRef<"account", 'String'>
    readonly expires_at: FieldRef<"account", 'Int'>
    readonly token_type: FieldRef<"account", 'String'>
    readonly scope: FieldRef<"account", 'String'>
    readonly id_token: FieldRef<"account", 'String'>
    readonly session_state: FieldRef<"account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account createManyAndReturn
   */
  export type accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account updateManyAndReturn
   */
  export type accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account.user
   */
  export type account$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    user_id: number
    created_at: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    user_id?: true
    created_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    user_id?: true
    created_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    color: string | null
    user_id: string | null
    created_at: Date | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | category$userArgs<ExtArgs>
    task?: boolean | category$taskArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "user_id" | "created_at", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | category$userArgs<ExtArgs>
    task?: boolean | category$taskArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | category$userArgs<ExtArgs>
  }
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | category$userArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      user_id: string | null
      created_at: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends category$userArgs<ExtArgs> = {}>(args?: Subset<T, category$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    task<T extends category$taskArgs<ExtArgs> = {}>(args?: Subset<T, category$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'String'>
    readonly name: FieldRef<"category", 'String'>
    readonly color: FieldRef<"category", 'String'>
    readonly user_id: FieldRef<"category", 'String'>
    readonly created_at: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.user
   */
  export type category$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * category.task
   */
  export type category$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    task_id: string | null
    type: string | null
    send_at: Date | null
    title: string | null
    message: string | null
    read: boolean | null
    read_at: Date | null
    created_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    task_id: string | null
    type: string | null
    send_at: Date | null
    title: string | null
    message: string | null
    read: boolean | null
    read_at: Date | null
    created_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    task_id: number
    type: number
    send_at: number
    title: number
    message: number
    read: number
    read_at: number
    created_at: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    task_id?: true
    type?: true
    send_at?: true
    title?: true
    message?: true
    read?: true
    read_at?: true
    created_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    task_id?: true
    type?: true
    send_at?: true
    title?: true
    message?: true
    read?: true
    read_at?: true
    created_at?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    task_id?: true
    type?: true
    send_at?: true
    title?: true
    message?: true
    read?: true
    read_at?: true
    created_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    task_id: string | null
    type: string | null
    send_at: Date
    title: string
    message: string
    read: boolean | null
    read_at: Date | null
    created_at: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    type?: boolean
    send_at?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
    task?: boolean | notification$taskArgs<ExtArgs>
    notification_delivery_log?: boolean | notification$notification_delivery_logArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    type?: boolean
    send_at?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
    task?: boolean | notification$taskArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    type?: boolean
    send_at?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
    task?: boolean | notification$taskArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    task_id?: boolean
    type?: boolean
    send_at?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    read_at?: boolean
    created_at?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "type" | "send_at" | "title" | "message" | "read" | "read_at" | "created_at", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | notification$taskArgs<ExtArgs>
    notification_delivery_log?: boolean | notification$notification_delivery_logArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | notification$taskArgs<ExtArgs>
  }
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | notification$taskArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      task: Prisma.$taskPayload<ExtArgs> | null
      notification_delivery_log: Prisma.$notification_delivery_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      task_id: string | null
      type: string | null
      send_at: Date
      title: string
      message: string
      read: boolean | null
      read_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends notification$taskArgs<ExtArgs> = {}>(args?: Subset<T, notification$taskArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notification_delivery_log<T extends notification$notification_delivery_logArgs<ExtArgs> = {}>(args?: Subset<T, notification$notification_delivery_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'String'>
    readonly task_id: FieldRef<"notification", 'String'>
    readonly type: FieldRef<"notification", 'String'>
    readonly send_at: FieldRef<"notification", 'DateTime'>
    readonly title: FieldRef<"notification", 'String'>
    readonly message: FieldRef<"notification", 'String'>
    readonly read: FieldRef<"notification", 'Boolean'>
    readonly read_at: FieldRef<"notification", 'DateTime'>
    readonly created_at: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification.task
   */
  export type notification$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
  }

  /**
   * notification.notification_delivery_log
   */
  export type notification$notification_delivery_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    where?: notification_delivery_logWhereInput
    orderBy?: notification_delivery_logOrderByWithRelationInput | notification_delivery_logOrderByWithRelationInput[]
    cursor?: notification_delivery_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Notification_delivery_logScalarFieldEnum | Notification_delivery_logScalarFieldEnum[]
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Model notification_delivery_log
   */

  export type AggregateNotification_delivery_log = {
    _count: Notification_delivery_logCountAggregateOutputType | null
    _min: Notification_delivery_logMinAggregateOutputType | null
    _max: Notification_delivery_logMaxAggregateOutputType | null
  }

  export type Notification_delivery_logMinAggregateOutputType = {
    id: string | null
    notification_id: string | null
    subscription_id: string | null
    delivery_channel: string | null
    status: string | null
    error_message: string | null
    sent_at: Date | null
    delivered_at: Date | null
    clicked_at: Date | null
    created_at: Date | null
  }

  export type Notification_delivery_logMaxAggregateOutputType = {
    id: string | null
    notification_id: string | null
    subscription_id: string | null
    delivery_channel: string | null
    status: string | null
    error_message: string | null
    sent_at: Date | null
    delivered_at: Date | null
    clicked_at: Date | null
    created_at: Date | null
  }

  export type Notification_delivery_logCountAggregateOutputType = {
    id: number
    notification_id: number
    subscription_id: number
    delivery_channel: number
    status: number
    error_message: number
    sent_at: number
    delivered_at: number
    clicked_at: number
    created_at: number
    _all: number
  }


  export type Notification_delivery_logMinAggregateInputType = {
    id?: true
    notification_id?: true
    subscription_id?: true
    delivery_channel?: true
    status?: true
    error_message?: true
    sent_at?: true
    delivered_at?: true
    clicked_at?: true
    created_at?: true
  }

  export type Notification_delivery_logMaxAggregateInputType = {
    id?: true
    notification_id?: true
    subscription_id?: true
    delivery_channel?: true
    status?: true
    error_message?: true
    sent_at?: true
    delivered_at?: true
    clicked_at?: true
    created_at?: true
  }

  export type Notification_delivery_logCountAggregateInputType = {
    id?: true
    notification_id?: true
    subscription_id?: true
    delivery_channel?: true
    status?: true
    error_message?: true
    sent_at?: true
    delivered_at?: true
    clicked_at?: true
    created_at?: true
    _all?: true
  }

  export type Notification_delivery_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification_delivery_log to aggregate.
     */
    where?: notification_delivery_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_delivery_logs to fetch.
     */
    orderBy?: notification_delivery_logOrderByWithRelationInput | notification_delivery_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notification_delivery_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_delivery_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_delivery_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notification_delivery_logs
    **/
    _count?: true | Notification_delivery_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Notification_delivery_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Notification_delivery_logMaxAggregateInputType
  }

  export type GetNotification_delivery_logAggregateType<T extends Notification_delivery_logAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification_delivery_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification_delivery_log[P]>
      : GetScalarType<T[P], AggregateNotification_delivery_log[P]>
  }




  export type notification_delivery_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notification_delivery_logWhereInput
    orderBy?: notification_delivery_logOrderByWithAggregationInput | notification_delivery_logOrderByWithAggregationInput[]
    by: Notification_delivery_logScalarFieldEnum[] | Notification_delivery_logScalarFieldEnum
    having?: notification_delivery_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Notification_delivery_logCountAggregateInputType | true
    _min?: Notification_delivery_logMinAggregateInputType
    _max?: Notification_delivery_logMaxAggregateInputType
  }

  export type Notification_delivery_logGroupByOutputType = {
    id: string
    notification_id: string | null
    subscription_id: string | null
    delivery_channel: string | null
    status: string | null
    error_message: string | null
    sent_at: Date | null
    delivered_at: Date | null
    clicked_at: Date | null
    created_at: Date | null
    _count: Notification_delivery_logCountAggregateOutputType | null
    _min: Notification_delivery_logMinAggregateOutputType | null
    _max: Notification_delivery_logMaxAggregateOutputType | null
  }

  type GetNotification_delivery_logGroupByPayload<T extends notification_delivery_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Notification_delivery_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Notification_delivery_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Notification_delivery_logGroupByOutputType[P]>
            : GetScalarType<T[P], Notification_delivery_logGroupByOutputType[P]>
        }
      >
    >


  export type notification_delivery_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notification_id?: boolean
    subscription_id?: boolean
    delivery_channel?: boolean
    status?: boolean
    error_message?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    clicked_at?: boolean
    created_at?: boolean
    notification?: boolean | notification_delivery_log$notificationArgs<ExtArgs>
    push_subscription?: boolean | notification_delivery_log$push_subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["notification_delivery_log"]>

  export type notification_delivery_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notification_id?: boolean
    subscription_id?: boolean
    delivery_channel?: boolean
    status?: boolean
    error_message?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    clicked_at?: boolean
    created_at?: boolean
    notification?: boolean | notification_delivery_log$notificationArgs<ExtArgs>
    push_subscription?: boolean | notification_delivery_log$push_subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["notification_delivery_log"]>

  export type notification_delivery_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notification_id?: boolean
    subscription_id?: boolean
    delivery_channel?: boolean
    status?: boolean
    error_message?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    clicked_at?: boolean
    created_at?: boolean
    notification?: boolean | notification_delivery_log$notificationArgs<ExtArgs>
    push_subscription?: boolean | notification_delivery_log$push_subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["notification_delivery_log"]>

  export type notification_delivery_logSelectScalar = {
    id?: boolean
    notification_id?: boolean
    subscription_id?: boolean
    delivery_channel?: boolean
    status?: boolean
    error_message?: boolean
    sent_at?: boolean
    delivered_at?: boolean
    clicked_at?: boolean
    created_at?: boolean
  }

  export type notification_delivery_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notification_id" | "subscription_id" | "delivery_channel" | "status" | "error_message" | "sent_at" | "delivered_at" | "clicked_at" | "created_at", ExtArgs["result"]["notification_delivery_log"]>
  export type notification_delivery_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | notification_delivery_log$notificationArgs<ExtArgs>
    push_subscription?: boolean | notification_delivery_log$push_subscriptionArgs<ExtArgs>
  }
  export type notification_delivery_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | notification_delivery_log$notificationArgs<ExtArgs>
    push_subscription?: boolean | notification_delivery_log$push_subscriptionArgs<ExtArgs>
  }
  export type notification_delivery_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | notification_delivery_log$notificationArgs<ExtArgs>
    push_subscription?: boolean | notification_delivery_log$push_subscriptionArgs<ExtArgs>
  }

  export type $notification_delivery_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification_delivery_log"
    objects: {
      notification: Prisma.$notificationPayload<ExtArgs> | null
      push_subscription: Prisma.$push_subscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notification_id: string | null
      subscription_id: string | null
      delivery_channel: string | null
      status: string | null
      error_message: string | null
      sent_at: Date | null
      delivered_at: Date | null
      clicked_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["notification_delivery_log"]>
    composites: {}
  }

  type notification_delivery_logGetPayload<S extends boolean | null | undefined | notification_delivery_logDefaultArgs> = $Result.GetResult<Prisma.$notification_delivery_logPayload, S>

  type notification_delivery_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notification_delivery_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Notification_delivery_logCountAggregateInputType | true
    }

  export interface notification_delivery_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification_delivery_log'], meta: { name: 'notification_delivery_log' } }
    /**
     * Find zero or one Notification_delivery_log that matches the filter.
     * @param {notification_delivery_logFindUniqueArgs} args - Arguments to find a Notification_delivery_log
     * @example
     * // Get one Notification_delivery_log
     * const notification_delivery_log = await prisma.notification_delivery_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notification_delivery_logFindUniqueArgs>(args: SelectSubset<T, notification_delivery_logFindUniqueArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification_delivery_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notification_delivery_logFindUniqueOrThrowArgs} args - Arguments to find a Notification_delivery_log
     * @example
     * // Get one Notification_delivery_log
     * const notification_delivery_log = await prisma.notification_delivery_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notification_delivery_logFindUniqueOrThrowArgs>(args: SelectSubset<T, notification_delivery_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification_delivery_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_delivery_logFindFirstArgs} args - Arguments to find a Notification_delivery_log
     * @example
     * // Get one Notification_delivery_log
     * const notification_delivery_log = await prisma.notification_delivery_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notification_delivery_logFindFirstArgs>(args?: SelectSubset<T, notification_delivery_logFindFirstArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification_delivery_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_delivery_logFindFirstOrThrowArgs} args - Arguments to find a Notification_delivery_log
     * @example
     * // Get one Notification_delivery_log
     * const notification_delivery_log = await prisma.notification_delivery_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notification_delivery_logFindFirstOrThrowArgs>(args?: SelectSubset<T, notification_delivery_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notification_delivery_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_delivery_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notification_delivery_logs
     * const notification_delivery_logs = await prisma.notification_delivery_log.findMany()
     * 
     * // Get first 10 Notification_delivery_logs
     * const notification_delivery_logs = await prisma.notification_delivery_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notification_delivery_logWithIdOnly = await prisma.notification_delivery_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notification_delivery_logFindManyArgs>(args?: SelectSubset<T, notification_delivery_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification_delivery_log.
     * @param {notification_delivery_logCreateArgs} args - Arguments to create a Notification_delivery_log.
     * @example
     * // Create one Notification_delivery_log
     * const Notification_delivery_log = await prisma.notification_delivery_log.create({
     *   data: {
     *     // ... data to create a Notification_delivery_log
     *   }
     * })
     * 
     */
    create<T extends notification_delivery_logCreateArgs>(args: SelectSubset<T, notification_delivery_logCreateArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notification_delivery_logs.
     * @param {notification_delivery_logCreateManyArgs} args - Arguments to create many Notification_delivery_logs.
     * @example
     * // Create many Notification_delivery_logs
     * const notification_delivery_log = await prisma.notification_delivery_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notification_delivery_logCreateManyArgs>(args?: SelectSubset<T, notification_delivery_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notification_delivery_logs and returns the data saved in the database.
     * @param {notification_delivery_logCreateManyAndReturnArgs} args - Arguments to create many Notification_delivery_logs.
     * @example
     * // Create many Notification_delivery_logs
     * const notification_delivery_log = await prisma.notification_delivery_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notification_delivery_logs and only return the `id`
     * const notification_delivery_logWithIdOnly = await prisma.notification_delivery_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notification_delivery_logCreateManyAndReturnArgs>(args?: SelectSubset<T, notification_delivery_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification_delivery_log.
     * @param {notification_delivery_logDeleteArgs} args - Arguments to delete one Notification_delivery_log.
     * @example
     * // Delete one Notification_delivery_log
     * const Notification_delivery_log = await prisma.notification_delivery_log.delete({
     *   where: {
     *     // ... filter to delete one Notification_delivery_log
     *   }
     * })
     * 
     */
    delete<T extends notification_delivery_logDeleteArgs>(args: SelectSubset<T, notification_delivery_logDeleteArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification_delivery_log.
     * @param {notification_delivery_logUpdateArgs} args - Arguments to update one Notification_delivery_log.
     * @example
     * // Update one Notification_delivery_log
     * const notification_delivery_log = await prisma.notification_delivery_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notification_delivery_logUpdateArgs>(args: SelectSubset<T, notification_delivery_logUpdateArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notification_delivery_logs.
     * @param {notification_delivery_logDeleteManyArgs} args - Arguments to filter Notification_delivery_logs to delete.
     * @example
     * // Delete a few Notification_delivery_logs
     * const { count } = await prisma.notification_delivery_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notification_delivery_logDeleteManyArgs>(args?: SelectSubset<T, notification_delivery_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notification_delivery_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_delivery_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notification_delivery_logs
     * const notification_delivery_log = await prisma.notification_delivery_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notification_delivery_logUpdateManyArgs>(args: SelectSubset<T, notification_delivery_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notification_delivery_logs and returns the data updated in the database.
     * @param {notification_delivery_logUpdateManyAndReturnArgs} args - Arguments to update many Notification_delivery_logs.
     * @example
     * // Update many Notification_delivery_logs
     * const notification_delivery_log = await prisma.notification_delivery_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notification_delivery_logs and only return the `id`
     * const notification_delivery_logWithIdOnly = await prisma.notification_delivery_log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notification_delivery_logUpdateManyAndReturnArgs>(args: SelectSubset<T, notification_delivery_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification_delivery_log.
     * @param {notification_delivery_logUpsertArgs} args - Arguments to update or create a Notification_delivery_log.
     * @example
     * // Update or create a Notification_delivery_log
     * const notification_delivery_log = await prisma.notification_delivery_log.upsert({
     *   create: {
     *     // ... data to create a Notification_delivery_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification_delivery_log we want to update
     *   }
     * })
     */
    upsert<T extends notification_delivery_logUpsertArgs>(args: SelectSubset<T, notification_delivery_logUpsertArgs<ExtArgs>>): Prisma__notification_delivery_logClient<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notification_delivery_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_delivery_logCountArgs} args - Arguments to filter Notification_delivery_logs to count.
     * @example
     * // Count the number of Notification_delivery_logs
     * const count = await prisma.notification_delivery_log.count({
     *   where: {
     *     // ... the filter for the Notification_delivery_logs we want to count
     *   }
     * })
    **/
    count<T extends notification_delivery_logCountArgs>(
      args?: Subset<T, notification_delivery_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Notification_delivery_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification_delivery_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_delivery_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Notification_delivery_logAggregateArgs>(args: Subset<T, Notification_delivery_logAggregateArgs>): Prisma.PrismaPromise<GetNotification_delivery_logAggregateType<T>>

    /**
     * Group by Notification_delivery_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notification_delivery_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notification_delivery_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notification_delivery_logGroupByArgs['orderBy'] }
        : { orderBy?: notification_delivery_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notification_delivery_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotification_delivery_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification_delivery_log model
   */
  readonly fields: notification_delivery_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification_delivery_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notification_delivery_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends notification_delivery_log$notificationArgs<ExtArgs> = {}>(args?: Subset<T, notification_delivery_log$notificationArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    push_subscription<T extends notification_delivery_log$push_subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, notification_delivery_log$push_subscriptionArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification_delivery_log model
   */
  interface notification_delivery_logFieldRefs {
    readonly id: FieldRef<"notification_delivery_log", 'String'>
    readonly notification_id: FieldRef<"notification_delivery_log", 'String'>
    readonly subscription_id: FieldRef<"notification_delivery_log", 'String'>
    readonly delivery_channel: FieldRef<"notification_delivery_log", 'String'>
    readonly status: FieldRef<"notification_delivery_log", 'String'>
    readonly error_message: FieldRef<"notification_delivery_log", 'String'>
    readonly sent_at: FieldRef<"notification_delivery_log", 'DateTime'>
    readonly delivered_at: FieldRef<"notification_delivery_log", 'DateTime'>
    readonly clicked_at: FieldRef<"notification_delivery_log", 'DateTime'>
    readonly created_at: FieldRef<"notification_delivery_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification_delivery_log findUnique
   */
  export type notification_delivery_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * Filter, which notification_delivery_log to fetch.
     */
    where: notification_delivery_logWhereUniqueInput
  }

  /**
   * notification_delivery_log findUniqueOrThrow
   */
  export type notification_delivery_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * Filter, which notification_delivery_log to fetch.
     */
    where: notification_delivery_logWhereUniqueInput
  }

  /**
   * notification_delivery_log findFirst
   */
  export type notification_delivery_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * Filter, which notification_delivery_log to fetch.
     */
    where?: notification_delivery_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_delivery_logs to fetch.
     */
    orderBy?: notification_delivery_logOrderByWithRelationInput | notification_delivery_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notification_delivery_logs.
     */
    cursor?: notification_delivery_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_delivery_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_delivery_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notification_delivery_logs.
     */
    distinct?: Notification_delivery_logScalarFieldEnum | Notification_delivery_logScalarFieldEnum[]
  }

  /**
   * notification_delivery_log findFirstOrThrow
   */
  export type notification_delivery_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * Filter, which notification_delivery_log to fetch.
     */
    where?: notification_delivery_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_delivery_logs to fetch.
     */
    orderBy?: notification_delivery_logOrderByWithRelationInput | notification_delivery_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notification_delivery_logs.
     */
    cursor?: notification_delivery_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_delivery_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_delivery_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notification_delivery_logs.
     */
    distinct?: Notification_delivery_logScalarFieldEnum | Notification_delivery_logScalarFieldEnum[]
  }

  /**
   * notification_delivery_log findMany
   */
  export type notification_delivery_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * Filter, which notification_delivery_logs to fetch.
     */
    where?: notification_delivery_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notification_delivery_logs to fetch.
     */
    orderBy?: notification_delivery_logOrderByWithRelationInput | notification_delivery_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notification_delivery_logs.
     */
    cursor?: notification_delivery_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notification_delivery_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notification_delivery_logs.
     */
    skip?: number
    distinct?: Notification_delivery_logScalarFieldEnum | Notification_delivery_logScalarFieldEnum[]
  }

  /**
   * notification_delivery_log create
   */
  export type notification_delivery_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * The data needed to create a notification_delivery_log.
     */
    data: XOR<notification_delivery_logCreateInput, notification_delivery_logUncheckedCreateInput>
  }

  /**
   * notification_delivery_log createMany
   */
  export type notification_delivery_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notification_delivery_logs.
     */
    data: notification_delivery_logCreateManyInput | notification_delivery_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification_delivery_log createManyAndReturn
   */
  export type notification_delivery_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * The data used to create many notification_delivery_logs.
     */
    data: notification_delivery_logCreateManyInput | notification_delivery_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification_delivery_log update
   */
  export type notification_delivery_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * The data needed to update a notification_delivery_log.
     */
    data: XOR<notification_delivery_logUpdateInput, notification_delivery_logUncheckedUpdateInput>
    /**
     * Choose, which notification_delivery_log to update.
     */
    where: notification_delivery_logWhereUniqueInput
  }

  /**
   * notification_delivery_log updateMany
   */
  export type notification_delivery_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notification_delivery_logs.
     */
    data: XOR<notification_delivery_logUpdateManyMutationInput, notification_delivery_logUncheckedUpdateManyInput>
    /**
     * Filter which notification_delivery_logs to update
     */
    where?: notification_delivery_logWhereInput
    /**
     * Limit how many notification_delivery_logs to update.
     */
    limit?: number
  }

  /**
   * notification_delivery_log updateManyAndReturn
   */
  export type notification_delivery_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * The data used to update notification_delivery_logs.
     */
    data: XOR<notification_delivery_logUpdateManyMutationInput, notification_delivery_logUncheckedUpdateManyInput>
    /**
     * Filter which notification_delivery_logs to update
     */
    where?: notification_delivery_logWhereInput
    /**
     * Limit how many notification_delivery_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification_delivery_log upsert
   */
  export type notification_delivery_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * The filter to search for the notification_delivery_log to update in case it exists.
     */
    where: notification_delivery_logWhereUniqueInput
    /**
     * In case the notification_delivery_log found by the `where` argument doesn't exist, create a new notification_delivery_log with this data.
     */
    create: XOR<notification_delivery_logCreateInput, notification_delivery_logUncheckedCreateInput>
    /**
     * In case the notification_delivery_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notification_delivery_logUpdateInput, notification_delivery_logUncheckedUpdateInput>
  }

  /**
   * notification_delivery_log delete
   */
  export type notification_delivery_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    /**
     * Filter which notification_delivery_log to delete.
     */
    where: notification_delivery_logWhereUniqueInput
  }

  /**
   * notification_delivery_log deleteMany
   */
  export type notification_delivery_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification_delivery_logs to delete
     */
    where?: notification_delivery_logWhereInput
    /**
     * Limit how many notification_delivery_logs to delete.
     */
    limit?: number
  }

  /**
   * notification_delivery_log.notification
   */
  export type notification_delivery_log$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
  }

  /**
   * notification_delivery_log.push_subscription
   */
  export type notification_delivery_log$push_subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    where?: push_subscriptionWhereInput
  }

  /**
   * notification_delivery_log without action
   */
  export type notification_delivery_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
  }


  /**
   * Model push_subscription
   */

  export type AggregatePush_subscription = {
    _count: Push_subscriptionCountAggregateOutputType | null
    _min: Push_subscriptionMinAggregateOutputType | null
    _max: Push_subscriptionMaxAggregateOutputType | null
  }

  export type Push_subscriptionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    user_agent: string | null
    is_active: boolean | null
    created_at: Date | null
    last_used_at: Date | null
  }

  export type Push_subscriptionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    user_agent: string | null
    is_active: boolean | null
    created_at: Date | null
    last_used_at: Date | null
  }

  export type Push_subscriptionCountAggregateOutputType = {
    id: number
    user_id: number
    endpoint: number
    p256dh: number
    auth: number
    user_agent: number
    is_active: number
    created_at: number
    last_used_at: number
    _all: number
  }


  export type Push_subscriptionMinAggregateInputType = {
    id?: true
    user_id?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    user_agent?: true
    is_active?: true
    created_at?: true
    last_used_at?: true
  }

  export type Push_subscriptionMaxAggregateInputType = {
    id?: true
    user_id?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    user_agent?: true
    is_active?: true
    created_at?: true
    last_used_at?: true
  }

  export type Push_subscriptionCountAggregateInputType = {
    id?: true
    user_id?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    user_agent?: true
    is_active?: true
    created_at?: true
    last_used_at?: true
    _all?: true
  }

  export type Push_subscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which push_subscription to aggregate.
     */
    where?: push_subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionOrderByWithRelationInput | push_subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: push_subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned push_subscriptions
    **/
    _count?: true | Push_subscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Push_subscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Push_subscriptionMaxAggregateInputType
  }

  export type GetPush_subscriptionAggregateType<T extends Push_subscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePush_subscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePush_subscription[P]>
      : GetScalarType<T[P], AggregatePush_subscription[P]>
  }




  export type push_subscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: push_subscriptionWhereInput
    orderBy?: push_subscriptionOrderByWithAggregationInput | push_subscriptionOrderByWithAggregationInput[]
    by: Push_subscriptionScalarFieldEnum[] | Push_subscriptionScalarFieldEnum
    having?: push_subscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Push_subscriptionCountAggregateInputType | true
    _min?: Push_subscriptionMinAggregateInputType
    _max?: Push_subscriptionMaxAggregateInputType
  }

  export type Push_subscriptionGroupByOutputType = {
    id: string
    user_id: string | null
    endpoint: string
    p256dh: string
    auth: string
    user_agent: string | null
    is_active: boolean | null
    created_at: Date | null
    last_used_at: Date | null
    _count: Push_subscriptionCountAggregateOutputType | null
    _min: Push_subscriptionMinAggregateOutputType | null
    _max: Push_subscriptionMaxAggregateOutputType | null
  }

  type GetPush_subscriptionGroupByPayload<T extends push_subscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Push_subscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Push_subscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Push_subscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], Push_subscriptionGroupByOutputType[P]>
        }
      >
    >


  export type push_subscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    user_agent?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    notification_delivery_log?: boolean | push_subscription$notification_delivery_logArgs<ExtArgs>
    user?: boolean | push_subscription$userArgs<ExtArgs>
    _count?: boolean | Push_subscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["push_subscription"]>

  export type push_subscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    user_agent?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    user?: boolean | push_subscription$userArgs<ExtArgs>
  }, ExtArgs["result"]["push_subscription"]>

  export type push_subscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    user_agent?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
    user?: boolean | push_subscription$userArgs<ExtArgs>
  }, ExtArgs["result"]["push_subscription"]>

  export type push_subscriptionSelectScalar = {
    id?: boolean
    user_id?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    user_agent?: boolean
    is_active?: boolean
    created_at?: boolean
    last_used_at?: boolean
  }

  export type push_subscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "endpoint" | "p256dh" | "auth" | "user_agent" | "is_active" | "created_at" | "last_used_at", ExtArgs["result"]["push_subscription"]>
  export type push_subscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification_delivery_log?: boolean | push_subscription$notification_delivery_logArgs<ExtArgs>
    user?: boolean | push_subscription$userArgs<ExtArgs>
    _count?: boolean | Push_subscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type push_subscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | push_subscription$userArgs<ExtArgs>
  }
  export type push_subscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | push_subscription$userArgs<ExtArgs>
  }

  export type $push_subscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "push_subscription"
    objects: {
      notification_delivery_log: Prisma.$notification_delivery_logPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      endpoint: string
      p256dh: string
      auth: string
      user_agent: string | null
      is_active: boolean | null
      created_at: Date | null
      last_used_at: Date | null
    }, ExtArgs["result"]["push_subscription"]>
    composites: {}
  }

  type push_subscriptionGetPayload<S extends boolean | null | undefined | push_subscriptionDefaultArgs> = $Result.GetResult<Prisma.$push_subscriptionPayload, S>

  type push_subscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<push_subscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Push_subscriptionCountAggregateInputType | true
    }

  export interface push_subscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['push_subscription'], meta: { name: 'push_subscription' } }
    /**
     * Find zero or one Push_subscription that matches the filter.
     * @param {push_subscriptionFindUniqueArgs} args - Arguments to find a Push_subscription
     * @example
     * // Get one Push_subscription
     * const push_subscription = await prisma.push_subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends push_subscriptionFindUniqueArgs>(args: SelectSubset<T, push_subscriptionFindUniqueArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Push_subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {push_subscriptionFindUniqueOrThrowArgs} args - Arguments to find a Push_subscription
     * @example
     * // Get one Push_subscription
     * const push_subscription = await prisma.push_subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends push_subscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, push_subscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Push_subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionFindFirstArgs} args - Arguments to find a Push_subscription
     * @example
     * // Get one Push_subscription
     * const push_subscription = await prisma.push_subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends push_subscriptionFindFirstArgs>(args?: SelectSubset<T, push_subscriptionFindFirstArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Push_subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionFindFirstOrThrowArgs} args - Arguments to find a Push_subscription
     * @example
     * // Get one Push_subscription
     * const push_subscription = await prisma.push_subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends push_subscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, push_subscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Push_subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Push_subscriptions
     * const push_subscriptions = await prisma.push_subscription.findMany()
     * 
     * // Get first 10 Push_subscriptions
     * const push_subscriptions = await prisma.push_subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const push_subscriptionWithIdOnly = await prisma.push_subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends push_subscriptionFindManyArgs>(args?: SelectSubset<T, push_subscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Push_subscription.
     * @param {push_subscriptionCreateArgs} args - Arguments to create a Push_subscription.
     * @example
     * // Create one Push_subscription
     * const Push_subscription = await prisma.push_subscription.create({
     *   data: {
     *     // ... data to create a Push_subscription
     *   }
     * })
     * 
     */
    create<T extends push_subscriptionCreateArgs>(args: SelectSubset<T, push_subscriptionCreateArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Push_subscriptions.
     * @param {push_subscriptionCreateManyArgs} args - Arguments to create many Push_subscriptions.
     * @example
     * // Create many Push_subscriptions
     * const push_subscription = await prisma.push_subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends push_subscriptionCreateManyArgs>(args?: SelectSubset<T, push_subscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Push_subscriptions and returns the data saved in the database.
     * @param {push_subscriptionCreateManyAndReturnArgs} args - Arguments to create many Push_subscriptions.
     * @example
     * // Create many Push_subscriptions
     * const push_subscription = await prisma.push_subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Push_subscriptions and only return the `id`
     * const push_subscriptionWithIdOnly = await prisma.push_subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends push_subscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, push_subscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Push_subscription.
     * @param {push_subscriptionDeleteArgs} args - Arguments to delete one Push_subscription.
     * @example
     * // Delete one Push_subscription
     * const Push_subscription = await prisma.push_subscription.delete({
     *   where: {
     *     // ... filter to delete one Push_subscription
     *   }
     * })
     * 
     */
    delete<T extends push_subscriptionDeleteArgs>(args: SelectSubset<T, push_subscriptionDeleteArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Push_subscription.
     * @param {push_subscriptionUpdateArgs} args - Arguments to update one Push_subscription.
     * @example
     * // Update one Push_subscription
     * const push_subscription = await prisma.push_subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends push_subscriptionUpdateArgs>(args: SelectSubset<T, push_subscriptionUpdateArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Push_subscriptions.
     * @param {push_subscriptionDeleteManyArgs} args - Arguments to filter Push_subscriptions to delete.
     * @example
     * // Delete a few Push_subscriptions
     * const { count } = await prisma.push_subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends push_subscriptionDeleteManyArgs>(args?: SelectSubset<T, push_subscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Push_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Push_subscriptions
     * const push_subscription = await prisma.push_subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends push_subscriptionUpdateManyArgs>(args: SelectSubset<T, push_subscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Push_subscriptions and returns the data updated in the database.
     * @param {push_subscriptionUpdateManyAndReturnArgs} args - Arguments to update many Push_subscriptions.
     * @example
     * // Update many Push_subscriptions
     * const push_subscription = await prisma.push_subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Push_subscriptions and only return the `id`
     * const push_subscriptionWithIdOnly = await prisma.push_subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends push_subscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, push_subscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Push_subscription.
     * @param {push_subscriptionUpsertArgs} args - Arguments to update or create a Push_subscription.
     * @example
     * // Update or create a Push_subscription
     * const push_subscription = await prisma.push_subscription.upsert({
     *   create: {
     *     // ... data to create a Push_subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Push_subscription we want to update
     *   }
     * })
     */
    upsert<T extends push_subscriptionUpsertArgs>(args: SelectSubset<T, push_subscriptionUpsertArgs<ExtArgs>>): Prisma__push_subscriptionClient<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Push_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionCountArgs} args - Arguments to filter Push_subscriptions to count.
     * @example
     * // Count the number of Push_subscriptions
     * const count = await prisma.push_subscription.count({
     *   where: {
     *     // ... the filter for the Push_subscriptions we want to count
     *   }
     * })
    **/
    count<T extends push_subscriptionCountArgs>(
      args?: Subset<T, push_subscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Push_subscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Push_subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Push_subscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Push_subscriptionAggregateArgs>(args: Subset<T, Push_subscriptionAggregateArgs>): Prisma.PrismaPromise<GetPush_subscriptionAggregateType<T>>

    /**
     * Group by Push_subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends push_subscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: push_subscriptionGroupByArgs['orderBy'] }
        : { orderBy?: push_subscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, push_subscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPush_subscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the push_subscription model
   */
  readonly fields: push_subscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for push_subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__push_subscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification_delivery_log<T extends push_subscription$notification_delivery_logArgs<ExtArgs> = {}>(args?: Subset<T, push_subscription$notification_delivery_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notification_delivery_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends push_subscription$userArgs<ExtArgs> = {}>(args?: Subset<T, push_subscription$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the push_subscription model
   */
  interface push_subscriptionFieldRefs {
    readonly id: FieldRef<"push_subscription", 'String'>
    readonly user_id: FieldRef<"push_subscription", 'String'>
    readonly endpoint: FieldRef<"push_subscription", 'String'>
    readonly p256dh: FieldRef<"push_subscription", 'String'>
    readonly auth: FieldRef<"push_subscription", 'String'>
    readonly user_agent: FieldRef<"push_subscription", 'String'>
    readonly is_active: FieldRef<"push_subscription", 'Boolean'>
    readonly created_at: FieldRef<"push_subscription", 'DateTime'>
    readonly last_used_at: FieldRef<"push_subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * push_subscription findUnique
   */
  export type push_subscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which push_subscription to fetch.
     */
    where: push_subscriptionWhereUniqueInput
  }

  /**
   * push_subscription findUniqueOrThrow
   */
  export type push_subscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which push_subscription to fetch.
     */
    where: push_subscriptionWhereUniqueInput
  }

  /**
   * push_subscription findFirst
   */
  export type push_subscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which push_subscription to fetch.
     */
    where?: push_subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionOrderByWithRelationInput | push_subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for push_subscriptions.
     */
    cursor?: push_subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of push_subscriptions.
     */
    distinct?: Push_subscriptionScalarFieldEnum | Push_subscriptionScalarFieldEnum[]
  }

  /**
   * push_subscription findFirstOrThrow
   */
  export type push_subscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which push_subscription to fetch.
     */
    where?: push_subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionOrderByWithRelationInput | push_subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for push_subscriptions.
     */
    cursor?: push_subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of push_subscriptions.
     */
    distinct?: Push_subscriptionScalarFieldEnum | Push_subscriptionScalarFieldEnum[]
  }

  /**
   * push_subscription findMany
   */
  export type push_subscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which push_subscriptions to fetch.
     */
    where?: push_subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionOrderByWithRelationInput | push_subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing push_subscriptions.
     */
    cursor?: push_subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    distinct?: Push_subscriptionScalarFieldEnum | Push_subscriptionScalarFieldEnum[]
  }

  /**
   * push_subscription create
   */
  export type push_subscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a push_subscription.
     */
    data: XOR<push_subscriptionCreateInput, push_subscriptionUncheckedCreateInput>
  }

  /**
   * push_subscription createMany
   */
  export type push_subscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many push_subscriptions.
     */
    data: push_subscriptionCreateManyInput | push_subscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * push_subscription createManyAndReturn
   */
  export type push_subscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many push_subscriptions.
     */
    data: push_subscriptionCreateManyInput | push_subscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * push_subscription update
   */
  export type push_subscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a push_subscription.
     */
    data: XOR<push_subscriptionUpdateInput, push_subscriptionUncheckedUpdateInput>
    /**
     * Choose, which push_subscription to update.
     */
    where: push_subscriptionWhereUniqueInput
  }

  /**
   * push_subscription updateMany
   */
  export type push_subscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update push_subscriptions.
     */
    data: XOR<push_subscriptionUpdateManyMutationInput, push_subscriptionUncheckedUpdateManyInput>
    /**
     * Filter which push_subscriptions to update
     */
    where?: push_subscriptionWhereInput
    /**
     * Limit how many push_subscriptions to update.
     */
    limit?: number
  }

  /**
   * push_subscription updateManyAndReturn
   */
  export type push_subscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * The data used to update push_subscriptions.
     */
    data: XOR<push_subscriptionUpdateManyMutationInput, push_subscriptionUncheckedUpdateManyInput>
    /**
     * Filter which push_subscriptions to update
     */
    where?: push_subscriptionWhereInput
    /**
     * Limit how many push_subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * push_subscription upsert
   */
  export type push_subscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the push_subscription to update in case it exists.
     */
    where: push_subscriptionWhereUniqueInput
    /**
     * In case the push_subscription found by the `where` argument doesn't exist, create a new push_subscription with this data.
     */
    create: XOR<push_subscriptionCreateInput, push_subscriptionUncheckedCreateInput>
    /**
     * In case the push_subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<push_subscriptionUpdateInput, push_subscriptionUncheckedUpdateInput>
  }

  /**
   * push_subscription delete
   */
  export type push_subscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    /**
     * Filter which push_subscription to delete.
     */
    where: push_subscriptionWhereUniqueInput
  }

  /**
   * push_subscription deleteMany
   */
  export type push_subscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which push_subscriptions to delete
     */
    where?: push_subscriptionWhereInput
    /**
     * Limit how many push_subscriptions to delete.
     */
    limit?: number
  }

  /**
   * push_subscription.notification_delivery_log
   */
  export type push_subscription$notification_delivery_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification_delivery_log
     */
    select?: notification_delivery_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification_delivery_log
     */
    omit?: notification_delivery_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notification_delivery_logInclude<ExtArgs> | null
    where?: notification_delivery_logWhereInput
    orderBy?: notification_delivery_logOrderByWithRelationInput | notification_delivery_logOrderByWithRelationInput[]
    cursor?: notification_delivery_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Notification_delivery_logScalarFieldEnum | Notification_delivery_logScalarFieldEnum[]
  }

  /**
   * push_subscription.user
   */
  export type push_subscription$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * push_subscription without action
   */
  export type push_subscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
  }


  /**
   * Model session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    session_token: string | null
    user_id: string | null
    expires: Date | null
    created_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    session_token: string | null
    user_id: string | null
    expires: Date | null
    created_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    session_token: number
    user_id: number
    expires: number
    created_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires?: true
    created_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires?: true
    created_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires?: true
    created_at?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session to aggregate.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithAggregationInput | sessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    session_token: string | null
    user_id: string | null
    expires: Date | null
    created_at: Date | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    user?: boolean | session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    user?: boolean | session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
    user?: boolean | session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type sessionSelectScalar = {
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires?: boolean
    created_at?: boolean
  }

  export type sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_token" | "user_id" | "expires" | "created_at", ExtArgs["result"]["session"]>
  export type sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | session$userArgs<ExtArgs>
  }
  export type sessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | session$userArgs<ExtArgs>
  }
  export type sessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | session$userArgs<ExtArgs>
  }

  export type $sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session_token: string | null
      user_id: string | null
      expires: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = $Result.GetResult<Prisma.$sessionPayload, S>

  type sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session'], meta: { name: 'session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {sessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionFindUniqueArgs>(args: SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionFindFirstArgs>(args?: SelectSubset<T, sessionFindFirstArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionFindManyArgs>(args?: SelectSubset<T, sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {sessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends sessionCreateArgs>(args: SelectSubset<T, sessionCreateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionCreateManyArgs>(args?: SelectSubset<T, sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {sessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends sessionDeleteArgs>(args: SelectSubset<T, sessionDeleteArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {sessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionUpdateArgs>(args: SelectSubset<T, sessionUpdateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionDeleteManyArgs>(args?: SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionUpdateManyArgs>(args: SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sessionUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {sessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends sessionUpsertArgs>(args: SelectSubset<T, sessionUpsertArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionCountArgs>(
      args?: Subset<T, sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionGroupByArgs['orderBy'] }
        : { orderBy?: sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session model
   */
  readonly fields: sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends session$userArgs<ExtArgs> = {}>(args?: Subset<T, session$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the session model
   */
  interface sessionFieldRefs {
    readonly id: FieldRef<"session", 'String'>
    readonly session_token: FieldRef<"session", 'String'>
    readonly user_id: FieldRef<"session", 'String'>
    readonly expires: FieldRef<"session", 'DateTime'>
    readonly created_at: FieldRef<"session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * session findUnique
   */
  export type sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findUniqueOrThrow
   */
  export type sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findFirst
   */
  export type sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findFirstOrThrow
   */
  export type sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findMany
   */
  export type sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session create
   */
  export type sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a session.
     */
    data: XOR<sessionCreateInput, sessionUncheckedCreateInput>
  }

  /**
   * session createMany
   */
  export type sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session createManyAndReturn
   */
  export type sessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * session update
   */
  export type sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a session.
     */
    data: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
    /**
     * Choose, which session to update.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session updateMany
   */
  export type sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * session updateManyAndReturn
   */
  export type sessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * session upsert
   */
  export type sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the session to update in case it exists.
     */
    where: sessionWhereUniqueInput
    /**
     * In case the session found by the `where` argument doesn't exist, create a new session with this data.
     */
    create: XOR<sessionCreateInput, sessionUncheckedCreateInput>
    /**
     * In case the session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
  }

  /**
   * session delete
   */
  export type sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter which session to delete.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session deleteMany
   */
  export type sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * session.user
   */
  export type session$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * session without action
   */
  export type sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    position: number | null
  }

  export type TaskSumAggregateOutputType = {
    position: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    due_date: Date | null
    quadrant: string | null
    position: number | null
    completed: boolean | null
    completed_at: Date | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    due_date: Date | null
    quadrant: string | null
    position: number | null
    completed: boolean | null
    completed_at: Date | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    due_date: number
    quadrant: number
    position: number
    completed: number
    completed_at: number
    user_id: number
    category_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    position?: true
  }

  export type TaskSumAggregateInputType = {
    position?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    due_date?: true
    quadrant?: true
    position?: true
    completed?: true
    completed_at?: true
    user_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    due_date?: true
    quadrant?: true
    position?: true
    completed?: true
    completed_at?: true
    user_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    due_date?: true
    quadrant?: true
    position?: true
    completed?: true
    completed_at?: true
    user_id?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    due_date: Date | null
    quadrant: string | null
    position: number | null
    completed: boolean | null
    completed_at: Date | null
    user_id: string | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    quadrant?: boolean
    position?: boolean
    completed?: boolean
    completed_at?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    notification?: boolean | task$notificationArgs<ExtArgs>
    category?: boolean | task$categoryArgs<ExtArgs>
    user?: boolean | task$userArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    quadrant?: boolean
    position?: boolean
    completed?: boolean
    completed_at?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | task$categoryArgs<ExtArgs>
    user?: boolean | task$userArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    quadrant?: boolean
    position?: boolean
    completed?: boolean
    completed_at?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | task$categoryArgs<ExtArgs>
    user?: boolean | task$userArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type taskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    due_date?: boolean
    quadrant?: boolean
    position?: boolean
    completed?: boolean
    completed_at?: boolean
    user_id?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "due_date" | "quadrant" | "position" | "completed" | "completed_at" | "user_id" | "category_id" | "created_at" | "updated_at", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | task$notificationArgs<ExtArgs>
    category?: boolean | task$categoryArgs<ExtArgs>
    user?: boolean | task$userArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type taskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | task$categoryArgs<ExtArgs>
    user?: boolean | task$userArgs<ExtArgs>
  }
  export type taskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | task$categoryArgs<ExtArgs>
    user?: boolean | task$userArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      notification: Prisma.$notificationPayload<ExtArgs>[]
      category: Prisma.$categoryPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      due_date: Date | null
      quadrant: string | null
      position: number | null
      completed: boolean | null
      completed_at: Date | null
      user_id: string | null
      category_id: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {taskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends taskCreateManyAndReturnArgs>(args?: SelectSubset<T, taskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {taskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends taskUpdateManyAndReturnArgs>(args: SelectSubset<T, taskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends task$notificationArgs<ExtArgs> = {}>(args?: Subset<T, task$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends task$categoryArgs<ExtArgs> = {}>(args?: Subset<T, task$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends task$userArgs<ExtArgs> = {}>(args?: Subset<T, task$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<"task", 'String'>
    readonly title: FieldRef<"task", 'String'>
    readonly description: FieldRef<"task", 'String'>
    readonly due_date: FieldRef<"task", 'DateTime'>
    readonly quadrant: FieldRef<"task", 'String'>
    readonly position: FieldRef<"task", 'Int'>
    readonly completed: FieldRef<"task", 'Boolean'>
    readonly completed_at: FieldRef<"task", 'DateTime'>
    readonly user_id: FieldRef<"task", 'String'>
    readonly category_id: FieldRef<"task", 'String'>
    readonly created_at: FieldRef<"task", 'DateTime'>
    readonly updated_at: FieldRef<"task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task createManyAndReturn
   */
  export type taskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task updateManyAndReturn
   */
  export type taskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.notification
   */
  export type task$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * task.category
   */
  export type task$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * task.user
   */
  export type task$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    notification_time_before: number | null
  }

  export type UserSumAggregateOutputType = {
    notification_time_before: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: Date | null
    image: string | null
    notification_enabled: boolean | null
    notification_time_before: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    email_verified: Date | null
    image: string | null
    notification_enabled: boolean | null
    notification_time_before: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified: number
    image: number
    notification_enabled: number
    notification_time_before: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    notification_time_before?: true
  }

  export type UserSumAggregateInputType = {
    notification_time_before?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    image?: true
    notification_enabled?: true
    notification_time_before?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    image?: true
    notification_enabled?: true
    notification_time_before?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified?: true
    image?: true
    notification_enabled?: true
    notification_time_before?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    email_verified: Date | null
    image: string | null
    notification_enabled: boolean | null
    notification_time_before: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    image?: boolean
    notification_enabled?: boolean
    notification_time_before?: boolean
    created_at?: boolean
    updated_at?: boolean
    account?: boolean | user$accountArgs<ExtArgs>
    category?: boolean | user$categoryArgs<ExtArgs>
    push_subscription?: boolean | user$push_subscriptionArgs<ExtArgs>
    session?: boolean | user$sessionArgs<ExtArgs>
    task?: boolean | user$taskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    image?: boolean
    notification_enabled?: boolean
    notification_time_before?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    image?: boolean
    notification_enabled?: boolean
    notification_time_before?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified?: boolean
    image?: boolean
    notification_enabled?: boolean
    notification_time_before?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified" | "image" | "notification_enabled" | "notification_time_before" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | user$accountArgs<ExtArgs>
    category?: boolean | user$categoryArgs<ExtArgs>
    push_subscription?: boolean | user$push_subscriptionArgs<ExtArgs>
    session?: boolean | user$sessionArgs<ExtArgs>
    task?: boolean | user$taskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>[]
      category: Prisma.$categoryPayload<ExtArgs>[]
      push_subscription: Prisma.$push_subscriptionPayload<ExtArgs>[]
      session: Prisma.$sessionPayload<ExtArgs>[]
      task: Prisma.$taskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      email_verified: Date | null
      image: string | null
      notification_enabled: boolean | null
      notification_time_before: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends user$accountArgs<ExtArgs> = {}>(args?: Subset<T, user$accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends user$categoryArgs<ExtArgs> = {}>(args?: Subset<T, user$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    push_subscription<T extends user$push_subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, user$push_subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends user$sessionArgs<ExtArgs> = {}>(args?: Subset<T, user$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends user$taskArgs<ExtArgs> = {}>(args?: Subset<T, user$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly email_verified: FieldRef<"user", 'DateTime'>
    readonly image: FieldRef<"user", 'String'>
    readonly notification_enabled: FieldRef<"user", 'Boolean'>
    readonly notification_time_before: FieldRef<"user", 'Int'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.account
   */
  export type user$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    where?: accountWhereInput
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    cursor?: accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * user.category
   */
  export type user$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * user.push_subscription
   */
  export type user$push_subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscription
     */
    select?: push_subscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscription
     */
    omit?: push_subscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: push_subscriptionInclude<ExtArgs> | null
    where?: push_subscriptionWhereInput
    orderBy?: push_subscriptionOrderByWithRelationInput | push_subscriptionOrderByWithRelationInput[]
    cursor?: push_subscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Push_subscriptionScalarFieldEnum | Push_subscriptionScalarFieldEnum[]
  }

  /**
   * user.session
   */
  export type user$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    cursor?: sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * user.task
   */
  export type user$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    provider: 'provider',
    provider_account_id: 'provider_account_id',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    type: 'type',
    send_at: 'send_at',
    title: 'title',
    message: 'message',
    read: 'read',
    read_at: 'read_at',
    created_at: 'created_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const Notification_delivery_logScalarFieldEnum: {
    id: 'id',
    notification_id: 'notification_id',
    subscription_id: 'subscription_id',
    delivery_channel: 'delivery_channel',
    status: 'status',
    error_message: 'error_message',
    sent_at: 'sent_at',
    delivered_at: 'delivered_at',
    clicked_at: 'clicked_at',
    created_at: 'created_at'
  };

  export type Notification_delivery_logScalarFieldEnum = (typeof Notification_delivery_logScalarFieldEnum)[keyof typeof Notification_delivery_logScalarFieldEnum]


  export const Push_subscriptionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    user_agent: 'user_agent',
    is_active: 'is_active',
    created_at: 'created_at',
    last_used_at: 'last_used_at'
  };

  export type Push_subscriptionScalarFieldEnum = (typeof Push_subscriptionScalarFieldEnum)[keyof typeof Push_subscriptionScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    session_token: 'session_token',
    user_id: 'user_id',
    expires: 'expires',
    created_at: 'created_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    due_date: 'due_date',
    quadrant: 'quadrant',
    position: 'position',
    completed: 'completed',
    completed_at: 'completed_at',
    user_id: 'user_id',
    category_id: 'category_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified: 'email_verified',
    image: 'image',
    notification_enabled: 'notification_enabled',
    notification_time_before: 'notification_time_before',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: StringFilter<"account"> | string
    user_id?: StringNullableFilter<"account"> | string | null
    type?: StringNullableFilter<"account"> | string | null
    provider?: StringNullableFilter<"account"> | string | null
    provider_account_id?: StringNullableFilter<"account"> | string | null
    refresh_token?: StringNullableFilter<"account"> | string | null
    access_token?: StringNullableFilter<"account"> | string | null
    expires_at?: IntNullableFilter<"account"> | number | null
    token_type?: StringNullableFilter<"account"> | string | null
    scope?: StringNullableFilter<"account"> | string | null
    id_token?: StringNullableFilter<"account"> | string | null
    session_state?: StringNullableFilter<"account"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    provider_account_id?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_account_id?: string
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    user_id?: StringNullableFilter<"account"> | string | null
    type?: StringNullableFilter<"account"> | string | null
    provider?: StringNullableFilter<"account"> | string | null
    refresh_token?: StringNullableFilter<"account"> | string | null
    access_token?: StringNullableFilter<"account"> | string | null
    expires_at?: IntNullableFilter<"account"> | number | null
    token_type?: StringNullableFilter<"account"> | string | null
    scope?: StringNullableFilter<"account"> | string | null
    id_token?: StringNullableFilter<"account"> | string | null
    session_state?: StringNullableFilter<"account"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "provider_account_id">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    provider_account_id?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: accountCountOrderByAggregateInput
    _avg?: accountAvgOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
    _sum?: accountSumOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account"> | string
    user_id?: StringNullableWithAggregatesFilter<"account"> | string | null
    type?: StringNullableWithAggregatesFilter<"account"> | string | null
    provider?: StringNullableWithAggregatesFilter<"account"> | string | null
    provider_account_id?: StringNullableWithAggregatesFilter<"account"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"account"> | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: StringFilter<"category"> | string
    name?: StringFilter<"category"> | string
    color?: StringNullableFilter<"category"> | string | null
    user_id?: StringNullableFilter<"category"> | string | null
    created_at?: DateTimeNullableFilter<"category"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    task?: TaskListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    task?: taskOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    color?: StringNullableFilter<"category"> | string | null
    user_id?: StringNullableFilter<"category"> | string | null
    created_at?: DateTimeNullableFilter<"category"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    task?: TaskListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category"> | string
    name?: StringWithAggregatesFilter<"category"> | string
    color?: StringNullableWithAggregatesFilter<"category"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"category"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"category"> | Date | string | null
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: StringFilter<"notification"> | string
    task_id?: StringNullableFilter<"notification"> | string | null
    type?: StringNullableFilter<"notification"> | string | null
    send_at?: DateTimeFilter<"notification"> | Date | string
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    read?: BoolNullableFilter<"notification"> | boolean | null
    read_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    task?: XOR<TaskNullableScalarRelationFilter, taskWhereInput> | null
    notification_delivery_log?: Notification_delivery_logListRelationFilter
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    send_at?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrderInput | SortOrder
    read_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    task?: taskOrderByWithRelationInput
    notification_delivery_log?: notification_delivery_logOrderByRelationAggregateInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    task_id?: StringNullableFilter<"notification"> | string | null
    type?: StringNullableFilter<"notification"> | string | null
    send_at?: DateTimeFilter<"notification"> | Date | string
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    read?: BoolNullableFilter<"notification"> | boolean | null
    read_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    task?: XOR<TaskNullableScalarRelationFilter, taskWhereInput> | null
    notification_delivery_log?: Notification_delivery_logListRelationFilter
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    send_at?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrderInput | SortOrder
    read_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notificationCountOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notification"> | string
    task_id?: StringNullableWithAggregatesFilter<"notification"> | string | null
    type?: StringNullableWithAggregatesFilter<"notification"> | string | null
    send_at?: DateTimeWithAggregatesFilter<"notification"> | Date | string
    title?: StringWithAggregatesFilter<"notification"> | string
    message?: StringWithAggregatesFilter<"notification"> | string
    read?: BoolNullableWithAggregatesFilter<"notification"> | boolean | null
    read_at?: DateTimeNullableWithAggregatesFilter<"notification"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notification"> | Date | string | null
  }

  export type notification_delivery_logWhereInput = {
    AND?: notification_delivery_logWhereInput | notification_delivery_logWhereInput[]
    OR?: notification_delivery_logWhereInput[]
    NOT?: notification_delivery_logWhereInput | notification_delivery_logWhereInput[]
    id?: StringFilter<"notification_delivery_log"> | string
    notification_id?: StringNullableFilter<"notification_delivery_log"> | string | null
    subscription_id?: StringNullableFilter<"notification_delivery_log"> | string | null
    delivery_channel?: StringNullableFilter<"notification_delivery_log"> | string | null
    status?: StringNullableFilter<"notification_delivery_log"> | string | null
    error_message?: StringNullableFilter<"notification_delivery_log"> | string | null
    sent_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    clicked_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    notification?: XOR<NotificationNullableScalarRelationFilter, notificationWhereInput> | null
    push_subscription?: XOR<Push_subscriptionNullableScalarRelationFilter, push_subscriptionWhereInput> | null
  }

  export type notification_delivery_logOrderByWithRelationInput = {
    id?: SortOrder
    notification_id?: SortOrderInput | SortOrder
    subscription_id?: SortOrderInput | SortOrder
    delivery_channel?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    clicked_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    notification?: notificationOrderByWithRelationInput
    push_subscription?: push_subscriptionOrderByWithRelationInput
  }

  export type notification_delivery_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notification_delivery_logWhereInput | notification_delivery_logWhereInput[]
    OR?: notification_delivery_logWhereInput[]
    NOT?: notification_delivery_logWhereInput | notification_delivery_logWhereInput[]
    notification_id?: StringNullableFilter<"notification_delivery_log"> | string | null
    subscription_id?: StringNullableFilter<"notification_delivery_log"> | string | null
    delivery_channel?: StringNullableFilter<"notification_delivery_log"> | string | null
    status?: StringNullableFilter<"notification_delivery_log"> | string | null
    error_message?: StringNullableFilter<"notification_delivery_log"> | string | null
    sent_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    clicked_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    notification?: XOR<NotificationNullableScalarRelationFilter, notificationWhereInput> | null
    push_subscription?: XOR<Push_subscriptionNullableScalarRelationFilter, push_subscriptionWhereInput> | null
  }, "id">

  export type notification_delivery_logOrderByWithAggregationInput = {
    id?: SortOrder
    notification_id?: SortOrderInput | SortOrder
    subscription_id?: SortOrderInput | SortOrder
    delivery_channel?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    clicked_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notification_delivery_logCountOrderByAggregateInput
    _max?: notification_delivery_logMaxOrderByAggregateInput
    _min?: notification_delivery_logMinOrderByAggregateInput
  }

  export type notification_delivery_logScalarWhereWithAggregatesInput = {
    AND?: notification_delivery_logScalarWhereWithAggregatesInput | notification_delivery_logScalarWhereWithAggregatesInput[]
    OR?: notification_delivery_logScalarWhereWithAggregatesInput[]
    NOT?: notification_delivery_logScalarWhereWithAggregatesInput | notification_delivery_logScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notification_delivery_log"> | string
    notification_id?: StringNullableWithAggregatesFilter<"notification_delivery_log"> | string | null
    subscription_id?: StringNullableWithAggregatesFilter<"notification_delivery_log"> | string | null
    delivery_channel?: StringNullableWithAggregatesFilter<"notification_delivery_log"> | string | null
    status?: StringNullableWithAggregatesFilter<"notification_delivery_log"> | string | null
    error_message?: StringNullableWithAggregatesFilter<"notification_delivery_log"> | string | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"notification_delivery_log"> | Date | string | null
    delivered_at?: DateTimeNullableWithAggregatesFilter<"notification_delivery_log"> | Date | string | null
    clicked_at?: DateTimeNullableWithAggregatesFilter<"notification_delivery_log"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notification_delivery_log"> | Date | string | null
  }

  export type push_subscriptionWhereInput = {
    AND?: push_subscriptionWhereInput | push_subscriptionWhereInput[]
    OR?: push_subscriptionWhereInput[]
    NOT?: push_subscriptionWhereInput | push_subscriptionWhereInput[]
    id?: StringFilter<"push_subscription"> | string
    user_id?: StringNullableFilter<"push_subscription"> | string | null
    endpoint?: StringFilter<"push_subscription"> | string
    p256dh?: StringFilter<"push_subscription"> | string
    auth?: StringFilter<"push_subscription"> | string
    user_agent?: StringNullableFilter<"push_subscription"> | string | null
    is_active?: BoolNullableFilter<"push_subscription"> | boolean | null
    created_at?: DateTimeNullableFilter<"push_subscription"> | Date | string | null
    last_used_at?: DateTimeNullableFilter<"push_subscription"> | Date | string | null
    notification_delivery_log?: Notification_delivery_logListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type push_subscriptionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    user_agent?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    notification_delivery_log?: notification_delivery_logOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type push_subscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpoint?: string
    AND?: push_subscriptionWhereInput | push_subscriptionWhereInput[]
    OR?: push_subscriptionWhereInput[]
    NOT?: push_subscriptionWhereInput | push_subscriptionWhereInput[]
    user_id?: StringNullableFilter<"push_subscription"> | string | null
    p256dh?: StringFilter<"push_subscription"> | string
    auth?: StringFilter<"push_subscription"> | string
    user_agent?: StringNullableFilter<"push_subscription"> | string | null
    is_active?: BoolNullableFilter<"push_subscription"> | boolean | null
    created_at?: DateTimeNullableFilter<"push_subscription"> | Date | string | null
    last_used_at?: DateTimeNullableFilter<"push_subscription"> | Date | string | null
    notification_delivery_log?: Notification_delivery_logListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "endpoint">

  export type push_subscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    user_agent?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    _count?: push_subscriptionCountOrderByAggregateInput
    _max?: push_subscriptionMaxOrderByAggregateInput
    _min?: push_subscriptionMinOrderByAggregateInput
  }

  export type push_subscriptionScalarWhereWithAggregatesInput = {
    AND?: push_subscriptionScalarWhereWithAggregatesInput | push_subscriptionScalarWhereWithAggregatesInput[]
    OR?: push_subscriptionScalarWhereWithAggregatesInput[]
    NOT?: push_subscriptionScalarWhereWithAggregatesInput | push_subscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"push_subscription"> | string
    user_id?: StringNullableWithAggregatesFilter<"push_subscription"> | string | null
    endpoint?: StringWithAggregatesFilter<"push_subscription"> | string
    p256dh?: StringWithAggregatesFilter<"push_subscription"> | string
    auth?: StringWithAggregatesFilter<"push_subscription"> | string
    user_agent?: StringNullableWithAggregatesFilter<"push_subscription"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"push_subscription"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"push_subscription"> | Date | string | null
    last_used_at?: DateTimeNullableWithAggregatesFilter<"push_subscription"> | Date | string | null
  }

  export type sessionWhereInput = {
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    id?: StringFilter<"session"> | string
    session_token?: StringNullableFilter<"session"> | string | null
    user_id?: StringNullableFilter<"session"> | string | null
    expires?: DateTimeNullableFilter<"session"> | Date | string | null
    created_at?: DateTimeNullableFilter<"session"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type sessionOrderByWithRelationInput = {
    id?: SortOrder
    session_token?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    session_token?: string
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    user_id?: StringNullableFilter<"session"> | string | null
    expires?: DateTimeNullableFilter<"session"> | Date | string | null
    created_at?: DateTimeNullableFilter<"session"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "session_token">

  export type sessionOrderByWithAggregationInput = {
    id?: SortOrder
    session_token?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: sessionCountOrderByAggregateInput
    _max?: sessionMaxOrderByAggregateInput
    _min?: sessionMinOrderByAggregateInput
  }

  export type sessionScalarWhereWithAggregatesInput = {
    AND?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    OR?: sessionScalarWhereWithAggregatesInput[]
    NOT?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"session"> | string
    session_token?: StringNullableWithAggregatesFilter<"session"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"session"> | string | null
    expires?: DateTimeNullableWithAggregatesFilter<"session"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"session"> | Date | string | null
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    id?: StringFilter<"task"> | string
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    quadrant?: StringNullableFilter<"task"> | string | null
    position?: IntNullableFilter<"task"> | number | null
    completed?: BoolNullableFilter<"task"> | boolean | null
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    user_id?: StringNullableFilter<"task"> | string | null
    category_id?: StringNullableFilter<"task"> | string | null
    created_at?: DateTimeNullableFilter<"task"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"task"> | Date | string | null
    notification?: NotificationListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type taskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    quadrant?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    notification?: notificationOrderByRelationAggregateInput
    category?: categoryOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    quadrant?: StringNullableFilter<"task"> | string | null
    position?: IntNullableFilter<"task"> | number | null
    completed?: BoolNullableFilter<"task"> | boolean | null
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    user_id?: StringNullableFilter<"task"> | string | null
    category_id?: StringNullableFilter<"task"> | string | null
    created_at?: DateTimeNullableFilter<"task"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"task"> | Date | string | null
    notification?: NotificationListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    quadrant?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"task"> | string
    title?: StringWithAggregatesFilter<"task"> | string
    description?: StringNullableWithAggregatesFilter<"task"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    quadrant?: StringNullableWithAggregatesFilter<"task"> | string | null
    position?: IntNullableWithAggregatesFilter<"task"> | number | null
    completed?: BoolNullableWithAggregatesFilter<"task"> | boolean | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    user_id?: StringNullableWithAggregatesFilter<"task"> | string | null
    category_id?: StringNullableWithAggregatesFilter<"task"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    email_verified?: DateTimeNullableFilter<"user"> | Date | string | null
    image?: StringNullableFilter<"user"> | string | null
    notification_enabled?: BoolNullableFilter<"user"> | boolean | null
    notification_time_before?: IntNullableFilter<"user"> | number | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    account?: AccountListRelationFilter
    category?: CategoryListRelationFilter
    push_subscription?: Push_subscriptionListRelationFilter
    session?: SessionListRelationFilter
    task?: TaskListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    email_verified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    notification_enabled?: SortOrderInput | SortOrder
    notification_time_before?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    account?: accountOrderByRelationAggregateInput
    category?: categoryOrderByRelationAggregateInput
    push_subscription?: push_subscriptionOrderByRelationAggregateInput
    session?: sessionOrderByRelationAggregateInput
    task?: taskOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    email_verified?: DateTimeNullableFilter<"user"> | Date | string | null
    image?: StringNullableFilter<"user"> | string | null
    notification_enabled?: BoolNullableFilter<"user"> | boolean | null
    notification_time_before?: IntNullableFilter<"user"> | number | null
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    account?: AccountListRelationFilter
    category?: CategoryListRelationFilter
    push_subscription?: Push_subscriptionListRelationFilter
    session?: SessionListRelationFilter
    task?: TaskListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    email_verified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    notification_enabled?: SortOrderInput | SortOrder
    notification_time_before?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    email_verified?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    notification_enabled?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    notification_time_before?: IntNullableWithAggregatesFilter<"user"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type accountCreateInput = {
    id: string
    type?: string | null
    provider?: string | null
    provider_account_id?: string | null
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user?: userCreateNestedOneWithoutAccountInput
  }

  export type accountUncheckedCreateInput = {
    id: string
    user_id?: string | null
    type?: string | null
    provider?: string | null
    provider_account_id?: string | null
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountCreateManyInput = {
    id: string
    user_id?: string | null
    type?: string | null
    provider?: string | null
    provider_account_id?: string | null
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type accountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateInput = {
    id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    user?: userCreateNestedOneWithoutCategoryInput
    task?: taskCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id: string
    name: string
    color?: string | null
    user_id?: string | null
    created_at?: Date | string | null
    task?: taskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutCategoryNestedInput
    task?: taskUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id: string
    name: string
    color?: string | null
    user_id?: string | null
    created_at?: Date | string | null
  }

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateInput = {
    id: string
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
    task?: taskCreateNestedOneWithoutNotificationInput
    notification_delivery_log?: notification_delivery_logCreateNestedManyWithoutNotificationInput
  }

  export type notificationUncheckedCreateInput = {
    id: string
    task_id?: string | null
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type notificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUpdateOneWithoutNotificationNestedInput
    notification_delivery_log?: notification_delivery_logUpdateManyWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type notificationCreateManyInput = {
    id: string
    task_id?: string | null
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logCreateInput = {
    id: string
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
    notification?: notificationCreateNestedOneWithoutNotification_delivery_logInput
    push_subscription?: push_subscriptionCreateNestedOneWithoutNotification_delivery_logInput
  }

  export type notification_delivery_logUncheckedCreateInput = {
    id: string
    notification_id?: string | null
    subscription_id?: string | null
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notification_delivery_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateOneWithoutNotification_delivery_logNestedInput
    push_subscription?: push_subscriptionUpdateOneWithoutNotification_delivery_logNestedInput
  }

  export type notification_delivery_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logCreateManyInput = {
    id: string
    notification_id?: string | null
    subscription_id?: string | null
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notification_delivery_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification_id?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionCreateInput = {
    id: string
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logCreateNestedManyWithoutPush_subscriptionInput
    user?: userCreateNestedOneWithoutPush_subscriptionInput
  }

  export type push_subscriptionUncheckedCreateInput = {
    id: string
    user_id?: string | null
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedCreateNestedManyWithoutPush_subscriptionInput
  }

  export type push_subscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUpdateManyWithoutPush_subscriptionNestedInput
    user?: userUpdateOneWithoutPush_subscriptionNestedInput
  }

  export type push_subscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedUpdateManyWithoutPush_subscriptionNestedInput
  }

  export type push_subscriptionCreateManyInput = {
    id: string
    user_id?: string | null
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
  }

  export type push_subscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionCreateInput = {
    id: string
    session_token?: string | null
    expires?: Date | string | null
    created_at?: Date | string | null
    user?: userCreateNestedOneWithoutSessionInput
  }

  export type sessionUncheckedCreateInput = {
    id: string
    session_token?: string | null
    user_id?: string | null
    expires?: Date | string | null
    created_at?: Date | string | null
  }

  export type sessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutSessionNestedInput
  }

  export type sessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionCreateManyInput = {
    id: string
    session_token?: string | null
    user_id?: string | null
    expires?: Date | string | null
    created_at?: Date | string | null
  }

  export type sessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskCreateInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notification?: notificationCreateNestedManyWithoutTaskInput
    category?: categoryCreateNestedOneWithoutTaskInput
    user?: userCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    user_id?: string | null
    category_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notification?: notificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateManyWithoutTaskNestedInput
    category?: categoryUpdateOneWithoutTaskNestedInput
    user?: userUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskCreateManyInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    user_id?: string | null
    category_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountCreateNestedManyWithoutUserInput
    category?: categoryCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    category?: categoryUncheckedCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUpdateManyWithoutUserNestedInput
    category?: categoryUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    category?: categoryUncheckedUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type accountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    provider_account_id?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TaskNullableScalarRelationFilter = {
    is?: taskWhereInput | null
    isNot?: taskWhereInput | null
  }

  export type Notification_delivery_logListRelationFilter = {
    every?: notification_delivery_logWhereInput
    some?: notification_delivery_logWhereInput
    none?: notification_delivery_logWhereInput
  }

  export type notification_delivery_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    type?: SortOrder
    send_at?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    type?: SortOrder
    send_at?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    type?: SortOrder
    send_at?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    read_at?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NotificationNullableScalarRelationFilter = {
    is?: notificationWhereInput | null
    isNot?: notificationWhereInput | null
  }

  export type Push_subscriptionNullableScalarRelationFilter = {
    is?: push_subscriptionWhereInput | null
    isNot?: push_subscriptionWhereInput | null
  }

  export type notification_delivery_logCountOrderByAggregateInput = {
    id?: SortOrder
    notification_id?: SortOrder
    subscription_id?: SortOrder
    delivery_channel?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrder
    clicked_at?: SortOrder
    created_at?: SortOrder
  }

  export type notification_delivery_logMaxOrderByAggregateInput = {
    id?: SortOrder
    notification_id?: SortOrder
    subscription_id?: SortOrder
    delivery_channel?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrder
    clicked_at?: SortOrder
    created_at?: SortOrder
  }

  export type notification_delivery_logMinOrderByAggregateInput = {
    id?: SortOrder
    notification_id?: SortOrder
    subscription_id?: SortOrder
    delivery_channel?: SortOrder
    status?: SortOrder
    error_message?: SortOrder
    sent_at?: SortOrder
    delivered_at?: SortOrder
    clicked_at?: SortOrder
    created_at?: SortOrder
  }

  export type push_subscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    user_agent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
  }

  export type push_subscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    user_agent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
  }

  export type push_subscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    user_agent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    last_used_at?: SortOrder
  }

  export type sessionCountOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
  }

  export type sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
  }

  export type sessionMinOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires?: SortOrder
    created_at?: SortOrder
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
    quadrant?: SortOrder
    position?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
    quadrant?: SortOrder
    position?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    due_date?: SortOrder
    quadrant?: SortOrder
    position?: SortOrder
    completed?: SortOrder
    completed_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: accountWhereInput
    some?: accountWhereInput
    none?: accountWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: categoryWhereInput
    some?: categoryWhereInput
    none?: categoryWhereInput
  }

  export type Push_subscriptionListRelationFilter = {
    every?: push_subscriptionWhereInput
    some?: push_subscriptionWhereInput
    none?: push_subscriptionWhereInput
  }

  export type SessionListRelationFilter = {
    every?: sessionWhereInput
    some?: sessionWhereInput
    none?: sessionWhereInput
  }

  export type accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type push_subscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    image?: SortOrder
    notification_enabled?: SortOrder
    notification_time_before?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    notification_time_before?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    image?: SortOrder
    notification_enabled?: SortOrder
    notification_time_before?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    image?: SortOrder
    notification_enabled?: SortOrder
    notification_time_before?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    notification_time_before?: SortOrder
  }

  export type userCreateNestedOneWithoutAccountInput = {
    create?: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
    connectOrCreate?: userCreateOrConnectWithoutAccountInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneWithoutAccountNestedInput = {
    create?: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
    connectOrCreate?: userCreateOrConnectWithoutAccountInput
    upsert?: userUpsertWithoutAccountInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAccountInput, userUpdateWithoutAccountInput>, userUncheckedUpdateWithoutAccountInput>
  }

  export type userCreateNestedOneWithoutCategoryInput = {
    create?: XOR<userCreateWithoutCategoryInput, userUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: userCreateOrConnectWithoutCategoryInput
    connect?: userWhereUniqueInput
  }

  export type taskCreateNestedManyWithoutCategoryInput = {
    create?: XOR<taskCreateWithoutCategoryInput, taskUncheckedCreateWithoutCategoryInput> | taskCreateWithoutCategoryInput[] | taskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCategoryInput | taskCreateOrConnectWithoutCategoryInput[]
    createMany?: taskCreateManyCategoryInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<taskCreateWithoutCategoryInput, taskUncheckedCreateWithoutCategoryInput> | taskCreateWithoutCategoryInput[] | taskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCategoryInput | taskCreateOrConnectWithoutCategoryInput[]
    createMany?: taskCreateManyCategoryInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<userCreateWithoutCategoryInput, userUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: userCreateOrConnectWithoutCategoryInput
    upsert?: userUpsertWithoutCategoryInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCategoryInput, userUpdateWithoutCategoryInput>, userUncheckedUpdateWithoutCategoryInput>
  }

  export type taskUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<taskCreateWithoutCategoryInput, taskUncheckedCreateWithoutCategoryInput> | taskCreateWithoutCategoryInput[] | taskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCategoryInput | taskCreateOrConnectWithoutCategoryInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutCategoryInput | taskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: taskCreateManyCategoryInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutCategoryInput | taskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: taskUpdateManyWithWhereWithoutCategoryInput | taskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<taskCreateWithoutCategoryInput, taskUncheckedCreateWithoutCategoryInput> | taskCreateWithoutCategoryInput[] | taskUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: taskCreateOrConnectWithoutCategoryInput | taskCreateOrConnectWithoutCategoryInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutCategoryInput | taskUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: taskCreateManyCategoryInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutCategoryInput | taskUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: taskUpdateManyWithWhereWithoutCategoryInput | taskUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type taskCreateNestedOneWithoutNotificationInput = {
    create?: XOR<taskCreateWithoutNotificationInput, taskUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: taskCreateOrConnectWithoutNotificationInput
    connect?: taskWhereUniqueInput
  }

  export type notification_delivery_logCreateNestedManyWithoutNotificationInput = {
    create?: XOR<notification_delivery_logCreateWithoutNotificationInput, notification_delivery_logUncheckedCreateWithoutNotificationInput> | notification_delivery_logCreateWithoutNotificationInput[] | notification_delivery_logUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutNotificationInput | notification_delivery_logCreateOrConnectWithoutNotificationInput[]
    createMany?: notification_delivery_logCreateManyNotificationInputEnvelope
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
  }

  export type notification_delivery_logUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<notification_delivery_logCreateWithoutNotificationInput, notification_delivery_logUncheckedCreateWithoutNotificationInput> | notification_delivery_logCreateWithoutNotificationInput[] | notification_delivery_logUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutNotificationInput | notification_delivery_logCreateOrConnectWithoutNotificationInput[]
    createMany?: notification_delivery_logCreateManyNotificationInputEnvelope
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type taskUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<taskCreateWithoutNotificationInput, taskUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: taskCreateOrConnectWithoutNotificationInput
    upsert?: taskUpsertWithoutNotificationInput
    disconnect?: taskWhereInput | boolean
    delete?: taskWhereInput | boolean
    connect?: taskWhereUniqueInput
    update?: XOR<XOR<taskUpdateToOneWithWhereWithoutNotificationInput, taskUpdateWithoutNotificationInput>, taskUncheckedUpdateWithoutNotificationInput>
  }

  export type notification_delivery_logUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<notification_delivery_logCreateWithoutNotificationInput, notification_delivery_logUncheckedCreateWithoutNotificationInput> | notification_delivery_logCreateWithoutNotificationInput[] | notification_delivery_logUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutNotificationInput | notification_delivery_logCreateOrConnectWithoutNotificationInput[]
    upsert?: notification_delivery_logUpsertWithWhereUniqueWithoutNotificationInput | notification_delivery_logUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: notification_delivery_logCreateManyNotificationInputEnvelope
    set?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    disconnect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    delete?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    update?: notification_delivery_logUpdateWithWhereUniqueWithoutNotificationInput | notification_delivery_logUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: notification_delivery_logUpdateManyWithWhereWithoutNotificationInput | notification_delivery_logUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: notification_delivery_logScalarWhereInput | notification_delivery_logScalarWhereInput[]
  }

  export type notification_delivery_logUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<notification_delivery_logCreateWithoutNotificationInput, notification_delivery_logUncheckedCreateWithoutNotificationInput> | notification_delivery_logCreateWithoutNotificationInput[] | notification_delivery_logUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutNotificationInput | notification_delivery_logCreateOrConnectWithoutNotificationInput[]
    upsert?: notification_delivery_logUpsertWithWhereUniqueWithoutNotificationInput | notification_delivery_logUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: notification_delivery_logCreateManyNotificationInputEnvelope
    set?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    disconnect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    delete?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    update?: notification_delivery_logUpdateWithWhereUniqueWithoutNotificationInput | notification_delivery_logUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: notification_delivery_logUpdateManyWithWhereWithoutNotificationInput | notification_delivery_logUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: notification_delivery_logScalarWhereInput | notification_delivery_logScalarWhereInput[]
  }

  export type notificationCreateNestedOneWithoutNotification_delivery_logInput = {
    create?: XOR<notificationCreateWithoutNotification_delivery_logInput, notificationUncheckedCreateWithoutNotification_delivery_logInput>
    connectOrCreate?: notificationCreateOrConnectWithoutNotification_delivery_logInput
    connect?: notificationWhereUniqueInput
  }

  export type push_subscriptionCreateNestedOneWithoutNotification_delivery_logInput = {
    create?: XOR<push_subscriptionCreateWithoutNotification_delivery_logInput, push_subscriptionUncheckedCreateWithoutNotification_delivery_logInput>
    connectOrCreate?: push_subscriptionCreateOrConnectWithoutNotification_delivery_logInput
    connect?: push_subscriptionWhereUniqueInput
  }

  export type notificationUpdateOneWithoutNotification_delivery_logNestedInput = {
    create?: XOR<notificationCreateWithoutNotification_delivery_logInput, notificationUncheckedCreateWithoutNotification_delivery_logInput>
    connectOrCreate?: notificationCreateOrConnectWithoutNotification_delivery_logInput
    upsert?: notificationUpsertWithoutNotification_delivery_logInput
    disconnect?: notificationWhereInput | boolean
    delete?: notificationWhereInput | boolean
    connect?: notificationWhereUniqueInput
    update?: XOR<XOR<notificationUpdateToOneWithWhereWithoutNotification_delivery_logInput, notificationUpdateWithoutNotification_delivery_logInput>, notificationUncheckedUpdateWithoutNotification_delivery_logInput>
  }

  export type push_subscriptionUpdateOneWithoutNotification_delivery_logNestedInput = {
    create?: XOR<push_subscriptionCreateWithoutNotification_delivery_logInput, push_subscriptionUncheckedCreateWithoutNotification_delivery_logInput>
    connectOrCreate?: push_subscriptionCreateOrConnectWithoutNotification_delivery_logInput
    upsert?: push_subscriptionUpsertWithoutNotification_delivery_logInput
    disconnect?: push_subscriptionWhereInput | boolean
    delete?: push_subscriptionWhereInput | boolean
    connect?: push_subscriptionWhereUniqueInput
    update?: XOR<XOR<push_subscriptionUpdateToOneWithWhereWithoutNotification_delivery_logInput, push_subscriptionUpdateWithoutNotification_delivery_logInput>, push_subscriptionUncheckedUpdateWithoutNotification_delivery_logInput>
  }

  export type notification_delivery_logCreateNestedManyWithoutPush_subscriptionInput = {
    create?: XOR<notification_delivery_logCreateWithoutPush_subscriptionInput, notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput> | notification_delivery_logCreateWithoutPush_subscriptionInput[] | notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput | notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput[]
    createMany?: notification_delivery_logCreateManyPush_subscriptionInputEnvelope
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutPush_subscriptionInput = {
    create?: XOR<userCreateWithoutPush_subscriptionInput, userUncheckedCreateWithoutPush_subscriptionInput>
    connectOrCreate?: userCreateOrConnectWithoutPush_subscriptionInput
    connect?: userWhereUniqueInput
  }

  export type notification_delivery_logUncheckedCreateNestedManyWithoutPush_subscriptionInput = {
    create?: XOR<notification_delivery_logCreateWithoutPush_subscriptionInput, notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput> | notification_delivery_logCreateWithoutPush_subscriptionInput[] | notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput | notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput[]
    createMany?: notification_delivery_logCreateManyPush_subscriptionInputEnvelope
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
  }

  export type notification_delivery_logUpdateManyWithoutPush_subscriptionNestedInput = {
    create?: XOR<notification_delivery_logCreateWithoutPush_subscriptionInput, notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput> | notification_delivery_logCreateWithoutPush_subscriptionInput[] | notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput | notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput[]
    upsert?: notification_delivery_logUpsertWithWhereUniqueWithoutPush_subscriptionInput | notification_delivery_logUpsertWithWhereUniqueWithoutPush_subscriptionInput[]
    createMany?: notification_delivery_logCreateManyPush_subscriptionInputEnvelope
    set?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    disconnect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    delete?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    update?: notification_delivery_logUpdateWithWhereUniqueWithoutPush_subscriptionInput | notification_delivery_logUpdateWithWhereUniqueWithoutPush_subscriptionInput[]
    updateMany?: notification_delivery_logUpdateManyWithWhereWithoutPush_subscriptionInput | notification_delivery_logUpdateManyWithWhereWithoutPush_subscriptionInput[]
    deleteMany?: notification_delivery_logScalarWhereInput | notification_delivery_logScalarWhereInput[]
  }

  export type userUpdateOneWithoutPush_subscriptionNestedInput = {
    create?: XOR<userCreateWithoutPush_subscriptionInput, userUncheckedCreateWithoutPush_subscriptionInput>
    connectOrCreate?: userCreateOrConnectWithoutPush_subscriptionInput
    upsert?: userUpsertWithoutPush_subscriptionInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPush_subscriptionInput, userUpdateWithoutPush_subscriptionInput>, userUncheckedUpdateWithoutPush_subscriptionInput>
  }

  export type notification_delivery_logUncheckedUpdateManyWithoutPush_subscriptionNestedInput = {
    create?: XOR<notification_delivery_logCreateWithoutPush_subscriptionInput, notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput> | notification_delivery_logCreateWithoutPush_subscriptionInput[] | notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput[]
    connectOrCreate?: notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput | notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput[]
    upsert?: notification_delivery_logUpsertWithWhereUniqueWithoutPush_subscriptionInput | notification_delivery_logUpsertWithWhereUniqueWithoutPush_subscriptionInput[]
    createMany?: notification_delivery_logCreateManyPush_subscriptionInputEnvelope
    set?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    disconnect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    delete?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    connect?: notification_delivery_logWhereUniqueInput | notification_delivery_logWhereUniqueInput[]
    update?: notification_delivery_logUpdateWithWhereUniqueWithoutPush_subscriptionInput | notification_delivery_logUpdateWithWhereUniqueWithoutPush_subscriptionInput[]
    updateMany?: notification_delivery_logUpdateManyWithWhereWithoutPush_subscriptionInput | notification_delivery_logUpdateManyWithWhereWithoutPush_subscriptionInput[]
    deleteMany?: notification_delivery_logScalarWhereInput | notification_delivery_logScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSessionInput = {
    create?: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
    connectOrCreate?: userCreateOrConnectWithoutSessionInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneWithoutSessionNestedInput = {
    create?: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
    connectOrCreate?: userCreateOrConnectWithoutSessionInput
    upsert?: userUpsertWithoutSessionInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSessionInput, userUpdateWithoutSessionInput>, userUncheckedUpdateWithoutSessionInput>
  }

  export type notificationCreateNestedManyWithoutTaskInput = {
    create?: XOR<notificationCreateWithoutTaskInput, notificationUncheckedCreateWithoutTaskInput> | notificationCreateWithoutTaskInput[] | notificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutTaskInput | notificationCreateOrConnectWithoutTaskInput[]
    createMany?: notificationCreateManyTaskInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type categoryCreateNestedOneWithoutTaskInput = {
    create?: XOR<categoryCreateWithoutTaskInput, categoryUncheckedCreateWithoutTaskInput>
    connectOrCreate?: categoryCreateOrConnectWithoutTaskInput
    connect?: categoryWhereUniqueInput
  }

  export type userCreateNestedOneWithoutTaskInput = {
    create?: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskInput
    connect?: userWhereUniqueInput
  }

  export type notificationUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<notificationCreateWithoutTaskInput, notificationUncheckedCreateWithoutTaskInput> | notificationCreateWithoutTaskInput[] | notificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutTaskInput | notificationCreateOrConnectWithoutTaskInput[]
    createMany?: notificationCreateManyTaskInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type notificationUpdateManyWithoutTaskNestedInput = {
    create?: XOR<notificationCreateWithoutTaskInput, notificationUncheckedCreateWithoutTaskInput> | notificationCreateWithoutTaskInput[] | notificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutTaskInput | notificationCreateOrConnectWithoutTaskInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutTaskInput | notificationUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: notificationCreateManyTaskInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutTaskInput | notificationUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutTaskInput | notificationUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type categoryUpdateOneWithoutTaskNestedInput = {
    create?: XOR<categoryCreateWithoutTaskInput, categoryUncheckedCreateWithoutTaskInput>
    connectOrCreate?: categoryCreateOrConnectWithoutTaskInput
    upsert?: categoryUpsertWithoutTaskInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutTaskInput, categoryUpdateWithoutTaskInput>, categoryUncheckedUpdateWithoutTaskInput>
  }

  export type userUpdateOneWithoutTaskNestedInput = {
    create?: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskInput
    upsert?: userUpsertWithoutTaskInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTaskInput, userUpdateWithoutTaskInput>, userUncheckedUpdateWithoutTaskInput>
  }

  export type notificationUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<notificationCreateWithoutTaskInput, notificationUncheckedCreateWithoutTaskInput> | notificationCreateWithoutTaskInput[] | notificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutTaskInput | notificationCreateOrConnectWithoutTaskInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutTaskInput | notificationUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: notificationCreateManyTaskInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutTaskInput | notificationUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutTaskInput | notificationUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type accountCreateNestedManyWithoutUserInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type categoryCreateNestedManyWithoutUserInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type push_subscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<push_subscriptionCreateWithoutUserInput, push_subscriptionUncheckedCreateWithoutUserInput> | push_subscriptionCreateWithoutUserInput[] | push_subscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: push_subscriptionCreateOrConnectWithoutUserInput | push_subscriptionCreateOrConnectWithoutUserInput[]
    createMany?: push_subscriptionCreateManyUserInputEnvelope
    connect?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
  }

  export type sessionCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type taskCreateNestedManyWithoutUserInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type accountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type push_subscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<push_subscriptionCreateWithoutUserInput, push_subscriptionUncheckedCreateWithoutUserInput> | push_subscriptionCreateWithoutUserInput[] | push_subscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: push_subscriptionCreateOrConnectWithoutUserInput | push_subscriptionCreateOrConnectWithoutUserInput[]
    createMany?: push_subscriptionCreateManyUserInputEnvelope
    connect?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
  }

  export type sessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type accountUpdateManyWithoutUserNestedInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutUserInput | accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutUserInput | accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: accountUpdateManyWithWhereWithoutUserInput | accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type categoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutUserInput | categoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutUserInput | categoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutUserInput | categoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type push_subscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<push_subscriptionCreateWithoutUserInput, push_subscriptionUncheckedCreateWithoutUserInput> | push_subscriptionCreateWithoutUserInput[] | push_subscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: push_subscriptionCreateOrConnectWithoutUserInput | push_subscriptionCreateOrConnectWithoutUserInput[]
    upsert?: push_subscriptionUpsertWithWhereUniqueWithoutUserInput | push_subscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: push_subscriptionCreateManyUserInputEnvelope
    set?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    disconnect?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    delete?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    connect?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    update?: push_subscriptionUpdateWithWhereUniqueWithoutUserInput | push_subscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: push_subscriptionUpdateManyWithWhereWithoutUserInput | push_subscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: push_subscriptionScalarWhereInput | push_subscriptionScalarWhereInput[]
  }

  export type sessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutUserInput | sessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutUserInput | sessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutUserInput | sessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type taskUpdateManyWithoutUserNestedInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUserInput | taskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUserInput | taskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUserInput | taskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type accountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput> | accountCreateWithoutUserInput[] | accountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: accountCreateOrConnectWithoutUserInput | accountCreateOrConnectWithoutUserInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutUserInput | accountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: accountCreateManyUserInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutUserInput | accountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: accountUpdateManyWithWhereWithoutUserInput | accountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type categoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutUserInput | categoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutUserInput | categoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutUserInput | categoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type push_subscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<push_subscriptionCreateWithoutUserInput, push_subscriptionUncheckedCreateWithoutUserInput> | push_subscriptionCreateWithoutUserInput[] | push_subscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: push_subscriptionCreateOrConnectWithoutUserInput | push_subscriptionCreateOrConnectWithoutUserInput[]
    upsert?: push_subscriptionUpsertWithWhereUniqueWithoutUserInput | push_subscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: push_subscriptionCreateManyUserInputEnvelope
    set?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    disconnect?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    delete?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    connect?: push_subscriptionWhereUniqueInput | push_subscriptionWhereUniqueInput[]
    update?: push_subscriptionUpdateWithWhereUniqueWithoutUserInput | push_subscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: push_subscriptionUpdateManyWithWhereWithoutUserInput | push_subscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: push_subscriptionScalarWhereInput | push_subscriptionScalarWhereInput[]
  }

  export type sessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput> | sessionCreateWithoutUserInput[] | sessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutUserInput | sessionCreateOrConnectWithoutUserInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutUserInput | sessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sessionCreateManyUserInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutUserInput | sessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutUserInput | sessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUserInput | taskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUserInput | taskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUserInput | taskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type userCreateWithoutAccountInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category?: categoryCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAccountInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category?: categoryUncheckedCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAccountInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
  }

  export type userUpsertWithoutAccountInput = {
    update: XOR<userUpdateWithoutAccountInput, userUncheckedUpdateWithoutAccountInput>
    create: XOR<userCreateWithoutAccountInput, userUncheckedCreateWithoutAccountInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAccountInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAccountInput, userUncheckedUpdateWithoutAccountInput>
  }

  export type userUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUncheckedUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutCategoryInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCategoryInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCategoryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCategoryInput, userUncheckedCreateWithoutCategoryInput>
  }

  export type taskCreateWithoutCategoryInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notification?: notificationCreateNestedManyWithoutTaskInput
    user?: userCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutCategoryInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    user_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notification?: notificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutCategoryInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutCategoryInput, taskUncheckedCreateWithoutCategoryInput>
  }

  export type taskCreateManyCategoryInputEnvelope = {
    data: taskCreateManyCategoryInput | taskCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCategoryInput = {
    update: XOR<userUpdateWithoutCategoryInput, userUncheckedUpdateWithoutCategoryInput>
    create: XOR<userCreateWithoutCategoryInput, userUncheckedCreateWithoutCategoryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCategoryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCategoryInput, userUncheckedUpdateWithoutCategoryInput>
  }

  export type userUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type taskUpsertWithWhereUniqueWithoutCategoryInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutCategoryInput, taskUncheckedUpdateWithoutCategoryInput>
    create: XOR<taskCreateWithoutCategoryInput, taskUncheckedCreateWithoutCategoryInput>
  }

  export type taskUpdateWithWhereUniqueWithoutCategoryInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutCategoryInput, taskUncheckedUpdateWithoutCategoryInput>
  }

  export type taskUpdateManyWithWhereWithoutCategoryInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutCategoryInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    id?: StringFilter<"task"> | string
    title?: StringFilter<"task"> | string
    description?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    quadrant?: StringNullableFilter<"task"> | string | null
    position?: IntNullableFilter<"task"> | number | null
    completed?: BoolNullableFilter<"task"> | boolean | null
    completed_at?: DateTimeNullableFilter<"task"> | Date | string | null
    user_id?: StringNullableFilter<"task"> | string | null
    category_id?: StringNullableFilter<"task"> | string | null
    created_at?: DateTimeNullableFilter<"task"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"task"> | Date | string | null
  }

  export type taskCreateWithoutNotificationInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    category?: categoryCreateNestedOneWithoutTaskInput
    user?: userCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutNotificationInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    user_id?: string | null
    category_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type taskCreateOrConnectWithoutNotificationInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutNotificationInput, taskUncheckedCreateWithoutNotificationInput>
  }

  export type notification_delivery_logCreateWithoutNotificationInput = {
    id: string
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
    push_subscription?: push_subscriptionCreateNestedOneWithoutNotification_delivery_logInput
  }

  export type notification_delivery_logUncheckedCreateWithoutNotificationInput = {
    id: string
    subscription_id?: string | null
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notification_delivery_logCreateOrConnectWithoutNotificationInput = {
    where: notification_delivery_logWhereUniqueInput
    create: XOR<notification_delivery_logCreateWithoutNotificationInput, notification_delivery_logUncheckedCreateWithoutNotificationInput>
  }

  export type notification_delivery_logCreateManyNotificationInputEnvelope = {
    data: notification_delivery_logCreateManyNotificationInput | notification_delivery_logCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type taskUpsertWithoutNotificationInput = {
    update: XOR<taskUpdateWithoutNotificationInput, taskUncheckedUpdateWithoutNotificationInput>
    create: XOR<taskCreateWithoutNotificationInput, taskUncheckedCreateWithoutNotificationInput>
    where?: taskWhereInput
  }

  export type taskUpdateToOneWithWhereWithoutNotificationInput = {
    where?: taskWhereInput
    data: XOR<taskUpdateWithoutNotificationInput, taskUncheckedUpdateWithoutNotificationInput>
  }

  export type taskUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUpdateOneWithoutTaskNestedInput
    user?: userUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logUpsertWithWhereUniqueWithoutNotificationInput = {
    where: notification_delivery_logWhereUniqueInput
    update: XOR<notification_delivery_logUpdateWithoutNotificationInput, notification_delivery_logUncheckedUpdateWithoutNotificationInput>
    create: XOR<notification_delivery_logCreateWithoutNotificationInput, notification_delivery_logUncheckedCreateWithoutNotificationInput>
  }

  export type notification_delivery_logUpdateWithWhereUniqueWithoutNotificationInput = {
    where: notification_delivery_logWhereUniqueInput
    data: XOR<notification_delivery_logUpdateWithoutNotificationInput, notification_delivery_logUncheckedUpdateWithoutNotificationInput>
  }

  export type notification_delivery_logUpdateManyWithWhereWithoutNotificationInput = {
    where: notification_delivery_logScalarWhereInput
    data: XOR<notification_delivery_logUpdateManyMutationInput, notification_delivery_logUncheckedUpdateManyWithoutNotificationInput>
  }

  export type notification_delivery_logScalarWhereInput = {
    AND?: notification_delivery_logScalarWhereInput | notification_delivery_logScalarWhereInput[]
    OR?: notification_delivery_logScalarWhereInput[]
    NOT?: notification_delivery_logScalarWhereInput | notification_delivery_logScalarWhereInput[]
    id?: StringFilter<"notification_delivery_log"> | string
    notification_id?: StringNullableFilter<"notification_delivery_log"> | string | null
    subscription_id?: StringNullableFilter<"notification_delivery_log"> | string | null
    delivery_channel?: StringNullableFilter<"notification_delivery_log"> | string | null
    status?: StringNullableFilter<"notification_delivery_log"> | string | null
    error_message?: StringNullableFilter<"notification_delivery_log"> | string | null
    sent_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    delivered_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    clicked_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notification_delivery_log"> | Date | string | null
  }

  export type notificationCreateWithoutNotification_delivery_logInput = {
    id: string
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
    task?: taskCreateNestedOneWithoutNotificationInput
  }

  export type notificationUncheckedCreateWithoutNotification_delivery_logInput = {
    id: string
    task_id?: string | null
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notificationCreateOrConnectWithoutNotification_delivery_logInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutNotification_delivery_logInput, notificationUncheckedCreateWithoutNotification_delivery_logInput>
  }

  export type push_subscriptionCreateWithoutNotification_delivery_logInput = {
    id: string
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
    user?: userCreateNestedOneWithoutPush_subscriptionInput
  }

  export type push_subscriptionUncheckedCreateWithoutNotification_delivery_logInput = {
    id: string
    user_id?: string | null
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
  }

  export type push_subscriptionCreateOrConnectWithoutNotification_delivery_logInput = {
    where: push_subscriptionWhereUniqueInput
    create: XOR<push_subscriptionCreateWithoutNotification_delivery_logInput, push_subscriptionUncheckedCreateWithoutNotification_delivery_logInput>
  }

  export type notificationUpsertWithoutNotification_delivery_logInput = {
    update: XOR<notificationUpdateWithoutNotification_delivery_logInput, notificationUncheckedUpdateWithoutNotification_delivery_logInput>
    create: XOR<notificationCreateWithoutNotification_delivery_logInput, notificationUncheckedCreateWithoutNotification_delivery_logInput>
    where?: notificationWhereInput
  }

  export type notificationUpdateToOneWithWhereWithoutNotification_delivery_logInput = {
    where?: notificationWhereInput
    data: XOR<notificationUpdateWithoutNotification_delivery_logInput, notificationUncheckedUpdateWithoutNotification_delivery_logInput>
  }

  export type notificationUpdateWithoutNotification_delivery_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUpdateOneWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateWithoutNotification_delivery_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionUpsertWithoutNotification_delivery_logInput = {
    update: XOR<push_subscriptionUpdateWithoutNotification_delivery_logInput, push_subscriptionUncheckedUpdateWithoutNotification_delivery_logInput>
    create: XOR<push_subscriptionCreateWithoutNotification_delivery_logInput, push_subscriptionUncheckedCreateWithoutNotification_delivery_logInput>
    where?: push_subscriptionWhereInput
  }

  export type push_subscriptionUpdateToOneWithWhereWithoutNotification_delivery_logInput = {
    where?: push_subscriptionWhereInput
    data: XOR<push_subscriptionUpdateWithoutNotification_delivery_logInput, push_subscriptionUncheckedUpdateWithoutNotification_delivery_logInput>
  }

  export type push_subscriptionUpdateWithoutNotification_delivery_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutPush_subscriptionNestedInput
  }

  export type push_subscriptionUncheckedUpdateWithoutNotification_delivery_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logCreateWithoutPush_subscriptionInput = {
    id: string
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
    notification?: notificationCreateNestedOneWithoutNotification_delivery_logInput
  }

  export type notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput = {
    id: string
    notification_id?: string | null
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notification_delivery_logCreateOrConnectWithoutPush_subscriptionInput = {
    where: notification_delivery_logWhereUniqueInput
    create: XOR<notification_delivery_logCreateWithoutPush_subscriptionInput, notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput>
  }

  export type notification_delivery_logCreateManyPush_subscriptionInputEnvelope = {
    data: notification_delivery_logCreateManyPush_subscriptionInput | notification_delivery_logCreateManyPush_subscriptionInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutPush_subscriptionInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountCreateNestedManyWithoutUserInput
    category?: categoryCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPush_subscriptionInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    category?: categoryUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPush_subscriptionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPush_subscriptionInput, userUncheckedCreateWithoutPush_subscriptionInput>
  }

  export type notification_delivery_logUpsertWithWhereUniqueWithoutPush_subscriptionInput = {
    where: notification_delivery_logWhereUniqueInput
    update: XOR<notification_delivery_logUpdateWithoutPush_subscriptionInput, notification_delivery_logUncheckedUpdateWithoutPush_subscriptionInput>
    create: XOR<notification_delivery_logCreateWithoutPush_subscriptionInput, notification_delivery_logUncheckedCreateWithoutPush_subscriptionInput>
  }

  export type notification_delivery_logUpdateWithWhereUniqueWithoutPush_subscriptionInput = {
    where: notification_delivery_logWhereUniqueInput
    data: XOR<notification_delivery_logUpdateWithoutPush_subscriptionInput, notification_delivery_logUncheckedUpdateWithoutPush_subscriptionInput>
  }

  export type notification_delivery_logUpdateManyWithWhereWithoutPush_subscriptionInput = {
    where: notification_delivery_logScalarWhereInput
    data: XOR<notification_delivery_logUpdateManyMutationInput, notification_delivery_logUncheckedUpdateManyWithoutPush_subscriptionInput>
  }

  export type userUpsertWithoutPush_subscriptionInput = {
    update: XOR<userUpdateWithoutPush_subscriptionInput, userUncheckedUpdateWithoutPush_subscriptionInput>
    create: XOR<userCreateWithoutPush_subscriptionInput, userUncheckedCreateWithoutPush_subscriptionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPush_subscriptionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPush_subscriptionInput, userUncheckedUpdateWithoutPush_subscriptionInput>
  }

  export type userUpdateWithoutPush_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUpdateManyWithoutUserNestedInput
    category?: categoryUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPush_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    category?: categoryUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutSessionInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountCreateNestedManyWithoutUserInput
    category?: categoryCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSessionInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    category?: categoryUncheckedCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSessionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
  }

  export type userUpsertWithoutSessionInput = {
    update: XOR<userUpdateWithoutSessionInput, userUncheckedUpdateWithoutSessionInput>
    create: XOR<userCreateWithoutSessionInput, userUncheckedCreateWithoutSessionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSessionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSessionInput, userUncheckedUpdateWithoutSessionInput>
  }

  export type userUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUpdateManyWithoutUserNestedInput
    category?: categoryUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    category?: categoryUncheckedUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type notificationCreateWithoutTaskInput = {
    id: string
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logCreateNestedManyWithoutNotificationInput
  }

  export type notificationUncheckedCreateWithoutTaskInput = {
    id: string
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type notificationCreateOrConnectWithoutTaskInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutTaskInput, notificationUncheckedCreateWithoutTaskInput>
  }

  export type notificationCreateManyTaskInputEnvelope = {
    data: notificationCreateManyTaskInput | notificationCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutTaskInput = {
    id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    user?: userCreateNestedOneWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutTaskInput = {
    id: string
    name: string
    color?: string | null
    user_id?: string | null
    created_at?: Date | string | null
  }

  export type categoryCreateOrConnectWithoutTaskInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutTaskInput, categoryUncheckedCreateWithoutTaskInput>
  }

  export type userCreateWithoutTaskInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountCreateNestedManyWithoutUserInput
    category?: categoryCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionCreateNestedManyWithoutUserInput
    session?: sessionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTaskInput = {
    id: string
    name?: string | null
    email: string
    email_verified?: Date | string | null
    image?: string | null
    notification_enabled?: boolean | null
    notification_time_before?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    account?: accountUncheckedCreateNestedManyWithoutUserInput
    category?: categoryUncheckedCreateNestedManyWithoutUserInput
    push_subscription?: push_subscriptionUncheckedCreateNestedManyWithoutUserInput
    session?: sessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTaskInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
  }

  export type notificationUpsertWithWhereUniqueWithoutTaskInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutTaskInput, notificationUncheckedUpdateWithoutTaskInput>
    create: XOR<notificationCreateWithoutTaskInput, notificationUncheckedCreateWithoutTaskInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutTaskInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutTaskInput, notificationUncheckedUpdateWithoutTaskInput>
  }

  export type notificationUpdateManyWithWhereWithoutTaskInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutTaskInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: StringFilter<"notification"> | string
    task_id?: StringNullableFilter<"notification"> | string | null
    type?: StringNullableFilter<"notification"> | string | null
    send_at?: DateTimeFilter<"notification"> | Date | string
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    read?: BoolNullableFilter<"notification"> | boolean | null
    read_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    created_at?: DateTimeNullableFilter<"notification"> | Date | string | null
  }

  export type categoryUpsertWithoutTaskInput = {
    update: XOR<categoryUpdateWithoutTaskInput, categoryUncheckedUpdateWithoutTaskInput>
    create: XOR<categoryCreateWithoutTaskInput, categoryUncheckedCreateWithoutTaskInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutTaskInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutTaskInput, categoryUncheckedUpdateWithoutTaskInput>
  }

  export type categoryUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpsertWithoutTaskInput = {
    update: XOR<userUpdateWithoutTaskInput, userUncheckedUpdateWithoutTaskInput>
    create: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTaskInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTaskInput, userUncheckedUpdateWithoutTaskInput>
  }

  export type userUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUpdateManyWithoutUserNestedInput
    category?: categoryUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUpdateManyWithoutUserNestedInput
    session?: sessionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notification_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_time_before?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: accountUncheckedUpdateManyWithoutUserNestedInput
    category?: categoryUncheckedUpdateManyWithoutUserNestedInput
    push_subscription?: push_subscriptionUncheckedUpdateManyWithoutUserNestedInput
    session?: sessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type accountCreateWithoutUserInput = {
    id: string
    type?: string | null
    provider?: string | null
    provider_account_id?: string | null
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type accountUncheckedCreateWithoutUserInput = {
    id: string
    type?: string | null
    provider?: string | null
    provider_account_id?: string | null
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type accountCreateOrConnectWithoutUserInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput>
  }

  export type accountCreateManyUserInputEnvelope = {
    data: accountCreateManyUserInput | accountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutUserInput = {
    id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    task?: taskCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
    task?: taskUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutUserInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput>
  }

  export type categoryCreateManyUserInputEnvelope = {
    data: categoryCreateManyUserInput | categoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type push_subscriptionCreateWithoutUserInput = {
    id: string
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logCreateNestedManyWithoutPush_subscriptionInput
  }

  export type push_subscriptionUncheckedCreateWithoutUserInput = {
    id: string
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedCreateNestedManyWithoutPush_subscriptionInput
  }

  export type push_subscriptionCreateOrConnectWithoutUserInput = {
    where: push_subscriptionWhereUniqueInput
    create: XOR<push_subscriptionCreateWithoutUserInput, push_subscriptionUncheckedCreateWithoutUserInput>
  }

  export type push_subscriptionCreateManyUserInputEnvelope = {
    data: push_subscriptionCreateManyUserInput | push_subscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sessionCreateWithoutUserInput = {
    id: string
    session_token?: string | null
    expires?: Date | string | null
    created_at?: Date | string | null
  }

  export type sessionUncheckedCreateWithoutUserInput = {
    id: string
    session_token?: string | null
    expires?: Date | string | null
    created_at?: Date | string | null
  }

  export type sessionCreateOrConnectWithoutUserInput = {
    where: sessionWhereUniqueInput
    create: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput>
  }

  export type sessionCreateManyUserInputEnvelope = {
    data: sessionCreateManyUserInput | sessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type taskCreateWithoutUserInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notification?: notificationCreateNestedManyWithoutTaskInput
    category?: categoryCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutUserInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    category_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    notification?: notificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutUserInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput>
  }

  export type taskCreateManyUserInputEnvelope = {
    data: taskCreateManyUserInput | taskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type accountUpsertWithWhereUniqueWithoutUserInput = {
    where: accountWhereUniqueInput
    update: XOR<accountUpdateWithoutUserInput, accountUncheckedUpdateWithoutUserInput>
    create: XOR<accountCreateWithoutUserInput, accountUncheckedCreateWithoutUserInput>
  }

  export type accountUpdateWithWhereUniqueWithoutUserInput = {
    where: accountWhereUniqueInput
    data: XOR<accountUpdateWithoutUserInput, accountUncheckedUpdateWithoutUserInput>
  }

  export type accountUpdateManyWithWhereWithoutUserInput = {
    where: accountScalarWhereInput
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyWithoutUserInput>
  }

  export type accountScalarWhereInput = {
    AND?: accountScalarWhereInput | accountScalarWhereInput[]
    OR?: accountScalarWhereInput[]
    NOT?: accountScalarWhereInput | accountScalarWhereInput[]
    id?: StringFilter<"account"> | string
    user_id?: StringNullableFilter<"account"> | string | null
    type?: StringNullableFilter<"account"> | string | null
    provider?: StringNullableFilter<"account"> | string | null
    provider_account_id?: StringNullableFilter<"account"> | string | null
    refresh_token?: StringNullableFilter<"account"> | string | null
    access_token?: StringNullableFilter<"account"> | string | null
    expires_at?: IntNullableFilter<"account"> | number | null
    token_type?: StringNullableFilter<"account"> | string | null
    scope?: StringNullableFilter<"account"> | string | null
    id_token?: StringNullableFilter<"account"> | string | null
    session_state?: StringNullableFilter<"account"> | string | null
  }

  export type categoryUpsertWithWhereUniqueWithoutUserInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutUserInput, categoryUncheckedUpdateWithoutUserInput>
    create: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutUserInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutUserInput, categoryUncheckedUpdateWithoutUserInput>
  }

  export type categoryUpdateManyWithWhereWithoutUserInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutUserInput>
  }

  export type categoryScalarWhereInput = {
    AND?: categoryScalarWhereInput | categoryScalarWhereInput[]
    OR?: categoryScalarWhereInput[]
    NOT?: categoryScalarWhereInput | categoryScalarWhereInput[]
    id?: StringFilter<"category"> | string
    name?: StringFilter<"category"> | string
    color?: StringNullableFilter<"category"> | string | null
    user_id?: StringNullableFilter<"category"> | string | null
    created_at?: DateTimeNullableFilter<"category"> | Date | string | null
  }

  export type push_subscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: push_subscriptionWhereUniqueInput
    update: XOR<push_subscriptionUpdateWithoutUserInput, push_subscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<push_subscriptionCreateWithoutUserInput, push_subscriptionUncheckedCreateWithoutUserInput>
  }

  export type push_subscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: push_subscriptionWhereUniqueInput
    data: XOR<push_subscriptionUpdateWithoutUserInput, push_subscriptionUncheckedUpdateWithoutUserInput>
  }

  export type push_subscriptionUpdateManyWithWhereWithoutUserInput = {
    where: push_subscriptionScalarWhereInput
    data: XOR<push_subscriptionUpdateManyMutationInput, push_subscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type push_subscriptionScalarWhereInput = {
    AND?: push_subscriptionScalarWhereInput | push_subscriptionScalarWhereInput[]
    OR?: push_subscriptionScalarWhereInput[]
    NOT?: push_subscriptionScalarWhereInput | push_subscriptionScalarWhereInput[]
    id?: StringFilter<"push_subscription"> | string
    user_id?: StringNullableFilter<"push_subscription"> | string | null
    endpoint?: StringFilter<"push_subscription"> | string
    p256dh?: StringFilter<"push_subscription"> | string
    auth?: StringFilter<"push_subscription"> | string
    user_agent?: StringNullableFilter<"push_subscription"> | string | null
    is_active?: BoolNullableFilter<"push_subscription"> | boolean | null
    created_at?: DateTimeNullableFilter<"push_subscription"> | Date | string | null
    last_used_at?: DateTimeNullableFilter<"push_subscription"> | Date | string | null
  }

  export type sessionUpsertWithWhereUniqueWithoutUserInput = {
    where: sessionWhereUniqueInput
    update: XOR<sessionUpdateWithoutUserInput, sessionUncheckedUpdateWithoutUserInput>
    create: XOR<sessionCreateWithoutUserInput, sessionUncheckedCreateWithoutUserInput>
  }

  export type sessionUpdateWithWhereUniqueWithoutUserInput = {
    where: sessionWhereUniqueInput
    data: XOR<sessionUpdateWithoutUserInput, sessionUncheckedUpdateWithoutUserInput>
  }

  export type sessionUpdateManyWithWhereWithoutUserInput = {
    where: sessionScalarWhereInput
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyWithoutUserInput>
  }

  export type sessionScalarWhereInput = {
    AND?: sessionScalarWhereInput | sessionScalarWhereInput[]
    OR?: sessionScalarWhereInput[]
    NOT?: sessionScalarWhereInput | sessionScalarWhereInput[]
    id?: StringFilter<"session"> | string
    session_token?: StringNullableFilter<"session"> | string | null
    user_id?: StringNullableFilter<"session"> | string | null
    expires?: DateTimeNullableFilter<"session"> | Date | string | null
    created_at?: DateTimeNullableFilter<"session"> | Date | string | null
  }

  export type taskUpsertWithWhereUniqueWithoutUserInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutUserInput, taskUncheckedUpdateWithoutUserInput>
    create: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput>
  }

  export type taskUpdateWithWhereUniqueWithoutUserInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutUserInput, taskUncheckedUpdateWithoutUserInput>
  }

  export type taskUpdateManyWithWhereWithoutUserInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutUserInput>
  }

  export type taskCreateManyCategoryInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    user_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type taskUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateManyWithoutTaskNestedInput
    user?: userUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logCreateManyNotificationInput = {
    id: string
    subscription_id?: string | null
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notification_delivery_logUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    push_subscription?: push_subscriptionUpdateOneWithoutNotification_delivery_logNestedInput
  }

  export type notification_delivery_logUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscription_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logCreateManyPush_subscriptionInput = {
    id: string
    notification_id?: string | null
    delivery_channel?: string | null
    status?: string | null
    error_message?: string | null
    sent_at?: Date | string | null
    delivered_at?: Date | string | null
    clicked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notification_delivery_logUpdateWithoutPush_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateOneWithoutNotification_delivery_logNestedInput
  }

  export type notification_delivery_logUncheckedUpdateWithoutPush_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notification_delivery_logUncheckedUpdateManyWithoutPush_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_channel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clicked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateManyTaskInput = {
    id: string
    type?: string | null
    send_at: Date | string
    title: string
    message: string
    read?: boolean | null
    read_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type notificationUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUpdateManyWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type notificationUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accountCreateManyUserInput = {
    id: string
    type?: string | null
    provider?: string | null
    provider_account_id?: string | null
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type categoryCreateManyUserInput = {
    id: string
    name: string
    color?: string | null
    created_at?: Date | string | null
  }

  export type push_subscriptionCreateManyUserInput = {
    id: string
    endpoint: string
    p256dh: string
    auth: string
    user_agent?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
    last_used_at?: Date | string | null
  }

  export type sessionCreateManyUserInput = {
    id: string
    session_token?: string | null
    expires?: Date | string | null
    created_at?: Date | string | null
  }

  export type taskCreateManyUserInput = {
    id: string
    title: string
    description?: string | null
    due_date?: Date | string | null
    quadrant?: string | null
    position?: number | null
    completed?: boolean | null
    completed_at?: Date | string | null
    category_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type accountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_account_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: taskUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUpdateManyWithoutPush_subscriptionNestedInput
  }

  export type push_subscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification_delivery_log?: notification_delivery_logUncheckedUpdateManyWithoutPush_subscriptionNestedInput
  }

  export type push_subscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type taskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUpdateManyWithoutTaskNestedInput
    category?: categoryUpdateOneWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: notificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quadrant?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}