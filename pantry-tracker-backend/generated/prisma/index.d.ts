
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Pantry
 * 
 */
export type Pantry = $Result.DefaultSelection<Prisma.$PantryPayload>
/**
 * Model PantryItem
 * 
 */
export type PantryItem = $Result.DefaultSelection<Prisma.$PantryItemPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantry`: Exposes CRUD operations for the **Pantry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pantries
    * const pantries = await prisma.pantry.findMany()
    * ```
    */
  get pantry(): Prisma.PantryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantryItem`: Exposes CRUD operations for the **PantryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PantryItems
    * const pantryItems = await prisma.pantryItem.findMany()
    * ```
    */
  get pantryItem(): Prisma.PantryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Category: 'Category',
    Unit: 'Unit',
    Pantry: 'Pantry',
    PantryItem: 'PantryItem',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "unit" | "pantry" | "pantryItem" | "product"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Pantry: {
        payload: Prisma.$PantryPayload<ExtArgs>
        fields: Prisma.PantryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          findFirst: {
            args: Prisma.PantryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          findMany: {
            args: Prisma.PantryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>[]
          }
          create: {
            args: Prisma.PantryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          createMany: {
            args: Prisma.PantryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PantryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          update: {
            args: Prisma.PantryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          deleteMany: {
            args: Prisma.PantryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PantryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryPayload>
          }
          aggregate: {
            args: Prisma.PantryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantry>
          }
          groupBy: {
            args: Prisma.PantryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryCountArgs<ExtArgs>
            result: $Utils.Optional<PantryCountAggregateOutputType> | number
          }
        }
      }
      PantryItem: {
        payload: Prisma.$PantryItemPayload<ExtArgs>
        fields: Prisma.PantryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          findFirst: {
            args: Prisma.PantryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          findMany: {
            args: Prisma.PantryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[]
          }
          create: {
            args: Prisma.PantryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          createMany: {
            args: Prisma.PantryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PantryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          update: {
            args: Prisma.PantryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          deleteMany: {
            args: Prisma.PantryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PantryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>
          }
          aggregate: {
            args: Prisma.PantryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantryItem>
          }
          groupBy: {
            args: Prisma.PantryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantryItemCountArgs<ExtArgs>
            result: $Utils.Optional<PantryItemCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    unit?: UnitOmit
    pantry?: PantryOmit
    pantryItem?: PantryItemOmit
    product?: ProductOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Pantries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pantries?: boolean | UserCountOutputTypeCountPantriesArgs
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
  export type UserCountOutputTypeCountPantriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryCountOutputTypeCountProductArgs
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
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    Product: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | UnitCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type PantryCountOutputType
   */

  export type PantryCountOutputType = {
    PantryItems: number
  }

  export type PantryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PantryItems?: boolean | PantryCountOutputTypeCountPantryItemsArgs
  }

  // Custom InputTypes
  /**
   * PantryCountOutputType without action
   */
  export type PantryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryCountOutputType
     */
    select?: PantryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PantryCountOutputType without action
   */
  export type PantryCountOutputTypeCountPantryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    PantryItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PantryItems?: boolean | ProductCountOutputTypeCountPantryItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPantryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    Id: number | null
  }

  export type UserSumAggregateOutputType = {
    Id: number | null
  }

  export type UserMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    LastName: string | null
    Email: string | null
    PasswordHash: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    LastName: string | null
    Email: string | null
    PasswordHash: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    Id: number
    Name: number
    LastName: number
    Email: number
    PasswordHash: number
    CreatedDate: number
    UpdatedDate: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    Id?: true
  }

  export type UserSumAggregateInputType = {
    Id?: true
  }

  export type UserMinAggregateInputType = {
    Id?: true
    Name?: true
    LastName?: true
    Email?: true
    PasswordHash?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type UserMaxAggregateInputType = {
    Id?: true
    Name?: true
    LastName?: true
    Email?: true
    PasswordHash?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type UserCountAggregateInputType = {
    Id?: true
    Name?: true
    LastName?: true
    Email?: true
    PasswordHash?: true
    CreatedDate?: true
    UpdatedDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    Id: number
    Name: string
    LastName: string
    Email: string
    PasswordHash: string
    CreatedDate: Date
    UpdatedDate: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    LastName?: boolean
    Email?: boolean
    PasswordHash?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
    Pantries?: boolean | User$PantriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    Id?: boolean
    Name?: boolean
    LastName?: boolean
    Email?: boolean
    PasswordHash?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "LastName" | "Email" | "PasswordHash" | "CreatedDate" | "UpdatedDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pantries?: boolean | User$PantriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Pantries: Prisma.$PantryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      LastName: string
      Email: string
      PasswordHash: string
      CreatedDate: Date
      UpdatedDate: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pantries<T extends User$PantriesArgs<ExtArgs> = {}>(args?: Subset<T, User$PantriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly Id: FieldRef<"User", 'Int'>
    readonly Name: FieldRef<"User", 'String'>
    readonly LastName: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly PasswordHash: FieldRef<"User", 'String'>
    readonly CreatedDate: FieldRef<"User", 'DateTime'>
    readonly UpdatedDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Pantries
   */
  export type User$PantriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    where?: PantryWhereInput
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    cursor?: PantryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    Id: number | null
  }

  export type CategorySumAggregateOutputType = {
    Id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Description: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    Id: number
    Name: number
    Description: number
    CreatedDate: number
    UpdatedDate: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    Id?: true
  }

  export type CategorySumAggregateInputType = {
    Id?: true
  }

  export type CategoryMinAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type CategoryMaxAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type CategoryCountAggregateInputType = {
    Id?: true
    Name?: true
    Description?: true
    CreatedDate?: true
    UpdatedDate?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
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




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    Id: number
    Name: string
    Description: string
    CreatedDate: Date
    UpdatedDate: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Description?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    Id?: boolean
    Name?: boolean
    Description?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Description" | "CreatedDate" | "UpdatedDate", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Category$ProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Description: string
      CreatedDate: Date
      UpdatedDate: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
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
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
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
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
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
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Category$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly Id: FieldRef<"Category", 'Int'>
    readonly Name: FieldRef<"Category", 'String'>
    readonly Description: FieldRef<"Category", 'String'>
    readonly CreatedDate: FieldRef<"Category", 'DateTime'>
    readonly UpdatedDate: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Product
   */
  export type Category$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    Id: number | null
  }

  export type UnitSumAggregateOutputType = {
    Id: number | null
  }

  export type UnitMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Abbreviation: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Abbreviation: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type UnitCountAggregateOutputType = {
    Id: number
    Name: number
    Abbreviation: number
    CreatedDate: number
    UpdatedDate: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    Id?: true
  }

  export type UnitSumAggregateInputType = {
    Id?: true
  }

  export type UnitMinAggregateInputType = {
    Id?: true
    Name?: true
    Abbreviation?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type UnitMaxAggregateInputType = {
    Id?: true
    Name?: true
    Abbreviation?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type UnitCountAggregateInputType = {
    Id?: true
    Name?: true
    Abbreviation?: true
    CreatedDate?: true
    UpdatedDate?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    Id: number
    Name: string
    Abbreviation: string
    CreatedDate: Date
    UpdatedDate: Date
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Abbreviation?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
    Product?: boolean | Unit$ProductArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>



  export type UnitSelectScalar = {
    Id?: boolean
    Name?: boolean
    Abbreviation?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Abbreviation" | "CreatedDate" | "UpdatedDate", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Unit$ProductArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Abbreviation: string
      CreatedDate: Date
      UpdatedDate: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Unit$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Unit$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly Id: FieldRef<"Unit", 'Int'>
    readonly Name: FieldRef<"Unit", 'String'>
    readonly Abbreviation: FieldRef<"Unit", 'String'>
    readonly CreatedDate: FieldRef<"Unit", 'DateTime'>
    readonly UpdatedDate: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.Product
   */
  export type Unit$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Pantry
   */

  export type AggregatePantry = {
    _count: PantryCountAggregateOutputType | null
    _avg: PantryAvgAggregateOutputType | null
    _sum: PantrySumAggregateOutputType | null
    _min: PantryMinAggregateOutputType | null
    _max: PantryMaxAggregateOutputType | null
  }

  export type PantryAvgAggregateOutputType = {
    Id: number | null
    UserId: number | null
  }

  export type PantrySumAggregateOutputType = {
    Id: number | null
    UserId: number | null
  }

  export type PantryMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    UserId: number | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type PantryMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    UserId: number | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type PantryCountAggregateOutputType = {
    Id: number
    Name: number
    UserId: number
    CreatedDate: number
    UpdatedDate: number
    _all: number
  }


  export type PantryAvgAggregateInputType = {
    Id?: true
    UserId?: true
  }

  export type PantrySumAggregateInputType = {
    Id?: true
    UserId?: true
  }

  export type PantryMinAggregateInputType = {
    Id?: true
    Name?: true
    UserId?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type PantryMaxAggregateInputType = {
    Id?: true
    Name?: true
    UserId?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type PantryCountAggregateInputType = {
    Id?: true
    Name?: true
    UserId?: true
    CreatedDate?: true
    UpdatedDate?: true
    _all?: true
  }

  export type PantryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pantry to aggregate.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pantries
    **/
    _count?: true | PantryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PantryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PantrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryMaxAggregateInputType
  }

  export type GetPantryAggregateType<T extends PantryAggregateArgs> = {
        [P in keyof T & keyof AggregatePantry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantry[P]>
      : GetScalarType<T[P], AggregatePantry[P]>
  }




  export type PantryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryWhereInput
    orderBy?: PantryOrderByWithAggregationInput | PantryOrderByWithAggregationInput[]
    by: PantryScalarFieldEnum[] | PantryScalarFieldEnum
    having?: PantryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryCountAggregateInputType | true
    _avg?: PantryAvgAggregateInputType
    _sum?: PantrySumAggregateInputType
    _min?: PantryMinAggregateInputType
    _max?: PantryMaxAggregateInputType
  }

  export type PantryGroupByOutputType = {
    Id: number
    Name: string
    UserId: number
    CreatedDate: Date
    UpdatedDate: Date
    _count: PantryCountAggregateOutputType | null
    _avg: PantryAvgAggregateOutputType | null
    _sum: PantrySumAggregateOutputType | null
    _min: PantryMinAggregateOutputType | null
    _max: PantryMaxAggregateOutputType | null
  }

  type GetPantryGroupByPayload<T extends PantryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryGroupByOutputType[P]>
            : GetScalarType<T[P], PantryGroupByOutputType[P]>
        }
      >
    >


  export type PantrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    UserId?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    PantryItems?: boolean | Pantry$PantryItemsArgs<ExtArgs>
    _count?: boolean | PantryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantry"]>



  export type PantrySelectScalar = {
    Id?: boolean
    Name?: boolean
    UserId?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
  }

  export type PantryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "UserId" | "CreatedDate" | "UpdatedDate", ExtArgs["result"]["pantry"]>
  export type PantryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    PantryItems?: boolean | Pantry$PantryItemsArgs<ExtArgs>
    _count?: boolean | PantryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PantryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pantry"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      PantryItems: Prisma.$PantryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      UserId: number
      CreatedDate: Date
      UpdatedDate: Date
    }, ExtArgs["result"]["pantry"]>
    composites: {}
  }

  type PantryGetPayload<S extends boolean | null | undefined | PantryDefaultArgs> = $Result.GetResult<Prisma.$PantryPayload, S>

  type PantryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryCountAggregateInputType | true
    }

  export interface PantryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pantry'], meta: { name: 'Pantry' } }
    /**
     * Find zero or one Pantry that matches the filter.
     * @param {PantryFindUniqueArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryFindUniqueArgs>(args: SelectSubset<T, PantryFindUniqueArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pantry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryFindUniqueOrThrowArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryFindFirstArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryFindFirstArgs>(args?: SelectSubset<T, PantryFindFirstArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryFindFirstOrThrowArgs} args - Arguments to find a Pantry
     * @example
     * // Get one Pantry
     * const pantry = await prisma.pantry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pantries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pantries
     * const pantries = await prisma.pantry.findMany()
     * 
     * // Get first 10 Pantries
     * const pantries = await prisma.pantry.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const pantryWithIdOnly = await prisma.pantry.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends PantryFindManyArgs>(args?: SelectSubset<T, PantryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pantry.
     * @param {PantryCreateArgs} args - Arguments to create a Pantry.
     * @example
     * // Create one Pantry
     * const Pantry = await prisma.pantry.create({
     *   data: {
     *     // ... data to create a Pantry
     *   }
     * })
     * 
     */
    create<T extends PantryCreateArgs>(args: SelectSubset<T, PantryCreateArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pantries.
     * @param {PantryCreateManyArgs} args - Arguments to create many Pantries.
     * @example
     * // Create many Pantries
     * const pantry = await prisma.pantry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryCreateManyArgs>(args?: SelectSubset<T, PantryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pantry.
     * @param {PantryDeleteArgs} args - Arguments to delete one Pantry.
     * @example
     * // Delete one Pantry
     * const Pantry = await prisma.pantry.delete({
     *   where: {
     *     // ... filter to delete one Pantry
     *   }
     * })
     * 
     */
    delete<T extends PantryDeleteArgs>(args: SelectSubset<T, PantryDeleteArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pantry.
     * @param {PantryUpdateArgs} args - Arguments to update one Pantry.
     * @example
     * // Update one Pantry
     * const pantry = await prisma.pantry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryUpdateArgs>(args: SelectSubset<T, PantryUpdateArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pantries.
     * @param {PantryDeleteManyArgs} args - Arguments to filter Pantries to delete.
     * @example
     * // Delete a few Pantries
     * const { count } = await prisma.pantry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryDeleteManyArgs>(args?: SelectSubset<T, PantryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pantries
     * const pantry = await prisma.pantry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryUpdateManyArgs>(args: SelectSubset<T, PantryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pantry.
     * @param {PantryUpsertArgs} args - Arguments to update or create a Pantry.
     * @example
     * // Update or create a Pantry
     * const pantry = await prisma.pantry.upsert({
     *   create: {
     *     // ... data to create a Pantry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pantry we want to update
     *   }
     * })
     */
    upsert<T extends PantryUpsertArgs>(args: SelectSubset<T, PantryUpsertArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pantries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryCountArgs} args - Arguments to filter Pantries to count.
     * @example
     * // Count the number of Pantries
     * const count = await prisma.pantry.count({
     *   where: {
     *     // ... the filter for the Pantries we want to count
     *   }
     * })
    **/
    count<T extends PantryCountArgs>(
      args?: Subset<T, PantryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pantry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantryAggregateArgs>(args: Subset<T, PantryAggregateArgs>): Prisma.PrismaPromise<GetPantryAggregateType<T>>

    /**
     * Group by Pantry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryGroupByArgs} args - Group by arguments.
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
      T extends PantryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryGroupByArgs['orderBy'] }
        : { orderBy?: PantryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PantryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pantry model
   */
  readonly fields: PantryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pantry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PantryItems<T extends Pantry$PantryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Pantry$PantryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pantry model
   */
  interface PantryFieldRefs {
    readonly Id: FieldRef<"Pantry", 'Int'>
    readonly Name: FieldRef<"Pantry", 'String'>
    readonly UserId: FieldRef<"Pantry", 'Int'>
    readonly CreatedDate: FieldRef<"Pantry", 'DateTime'>
    readonly UpdatedDate: FieldRef<"Pantry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pantry findUnique
   */
  export type PantryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry findUniqueOrThrow
   */
  export type PantryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry findFirst
   */
  export type PantryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pantries.
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * Pantry findFirstOrThrow
   */
  export type PantryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * Filter, which Pantry to fetch.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pantries.
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * Pantry findMany
   */
  export type PantryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * Filter, which Pantries to fetch.
     */
    where?: PantryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantries to fetch.
     */
    orderBy?: PantryOrderByWithRelationInput | PantryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pantries.
     */
    cursor?: PantryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantries.
     */
    distinct?: PantryScalarFieldEnum | PantryScalarFieldEnum[]
  }

  /**
   * Pantry create
   */
  export type PantryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * The data needed to create a Pantry.
     */
    data: XOR<PantryCreateInput, PantryUncheckedCreateInput>
  }

  /**
   * Pantry createMany
   */
  export type PantryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pantries.
     */
    data: PantryCreateManyInput | PantryCreateManyInput[]
  }

  /**
   * Pantry update
   */
  export type PantryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * The data needed to update a Pantry.
     */
    data: XOR<PantryUpdateInput, PantryUncheckedUpdateInput>
    /**
     * Choose, which Pantry to update.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry updateMany
   */
  export type PantryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pantries.
     */
    data: XOR<PantryUpdateManyMutationInput, PantryUncheckedUpdateManyInput>
    /**
     * Filter which Pantries to update
     */
    where?: PantryWhereInput
    /**
     * Limit how many Pantries to update.
     */
    limit?: number
  }

  /**
   * Pantry upsert
   */
  export type PantryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * The filter to search for the Pantry to update in case it exists.
     */
    where: PantryWhereUniqueInput
    /**
     * In case the Pantry found by the `where` argument doesn't exist, create a new Pantry with this data.
     */
    create: XOR<PantryCreateInput, PantryUncheckedCreateInput>
    /**
     * In case the Pantry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryUpdateInput, PantryUncheckedUpdateInput>
  }

  /**
   * Pantry delete
   */
  export type PantryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
    /**
     * Filter which Pantry to delete.
     */
    where: PantryWhereUniqueInput
  }

  /**
   * Pantry deleteMany
   */
  export type PantryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pantries to delete
     */
    where?: PantryWhereInput
    /**
     * Limit how many Pantries to delete.
     */
    limit?: number
  }

  /**
   * Pantry.PantryItems
   */
  export type Pantry$PantryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    where?: PantryItemWhereInput
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    cursor?: PantryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * Pantry without action
   */
  export type PantryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantry
     */
    select?: PantrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantry
     */
    omit?: PantryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryInclude<ExtArgs> | null
  }


  /**
   * Model PantryItem
   */

  export type AggregatePantryItem = {
    _count: PantryItemCountAggregateOutputType | null
    _avg: PantryItemAvgAggregateOutputType | null
    _sum: PantryItemSumAggregateOutputType | null
    _min: PantryItemMinAggregateOutputType | null
    _max: PantryItemMaxAggregateOutputType | null
  }

  export type PantryItemAvgAggregateOutputType = {
    Id: number | null
    PantryId: number | null
    ProductId: number | null
    Quantity: Decimal | null
  }

  export type PantryItemSumAggregateOutputType = {
    Id: number | null
    PantryId: number | null
    ProductId: number | null
    Quantity: Decimal | null
  }

  export type PantryItemMinAggregateOutputType = {
    Id: number | null
    PantryId: number | null
    ProductId: number | null
    ExpirationDate: Date | null
    Location: string | null
    Quantity: Decimal | null
    Notes: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type PantryItemMaxAggregateOutputType = {
    Id: number | null
    PantryId: number | null
    ProductId: number | null
    ExpirationDate: Date | null
    Location: string | null
    Quantity: Decimal | null
    Notes: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type PantryItemCountAggregateOutputType = {
    Id: number
    PantryId: number
    ProductId: number
    ExpirationDate: number
    Location: number
    Quantity: number
    Notes: number
    CreatedDate: number
    UpdatedDate: number
    _all: number
  }


  export type PantryItemAvgAggregateInputType = {
    Id?: true
    PantryId?: true
    ProductId?: true
    Quantity?: true
  }

  export type PantryItemSumAggregateInputType = {
    Id?: true
    PantryId?: true
    ProductId?: true
    Quantity?: true
  }

  export type PantryItemMinAggregateInputType = {
    Id?: true
    PantryId?: true
    ProductId?: true
    ExpirationDate?: true
    Location?: true
    Quantity?: true
    Notes?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type PantryItemMaxAggregateInputType = {
    Id?: true
    PantryId?: true
    ProductId?: true
    ExpirationDate?: true
    Location?: true
    Quantity?: true
    Notes?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type PantryItemCountAggregateInputType = {
    Id?: true
    PantryId?: true
    ProductId?: true
    ExpirationDate?: true
    Location?: true
    Quantity?: true
    Notes?: true
    CreatedDate?: true
    UpdatedDate?: true
    _all?: true
  }

  export type PantryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryItem to aggregate.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PantryItems
    **/
    _count?: true | PantryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PantryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PantryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantryItemMaxAggregateInputType
  }

  export type GetPantryItemAggregateType<T extends PantryItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePantryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryItem[P]>
      : GetScalarType<T[P], AggregatePantryItem[P]>
  }




  export type PantryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantryItemWhereInput
    orderBy?: PantryItemOrderByWithAggregationInput | PantryItemOrderByWithAggregationInput[]
    by: PantryItemScalarFieldEnum[] | PantryItemScalarFieldEnum
    having?: PantryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantryItemCountAggregateInputType | true
    _avg?: PantryItemAvgAggregateInputType
    _sum?: PantryItemSumAggregateInputType
    _min?: PantryItemMinAggregateInputType
    _max?: PantryItemMaxAggregateInputType
  }

  export type PantryItemGroupByOutputType = {
    Id: number
    PantryId: number
    ProductId: number
    ExpirationDate: Date | null
    Location: string | null
    Quantity: Decimal
    Notes: string | null
    CreatedDate: Date
    UpdatedDate: Date
    _count: PantryItemCountAggregateOutputType | null
    _avg: PantryItemAvgAggregateOutputType | null
    _sum: PantryItemSumAggregateOutputType | null
    _min: PantryItemMinAggregateOutputType | null
    _max: PantryItemMaxAggregateOutputType | null
  }

  type GetPantryItemGroupByPayload<T extends PantryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryItemGroupByOutputType[P]>
            : GetScalarType<T[P], PantryItemGroupByOutputType[P]>
        }
      >
    >


  export type PantryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    PantryId?: boolean
    ProductId?: boolean
    ExpirationDate?: boolean
    Location?: boolean
    Quantity?: boolean
    Notes?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
    Pantry?: boolean | PantryDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantryItem"]>



  export type PantryItemSelectScalar = {
    Id?: boolean
    PantryId?: boolean
    ProductId?: boolean
    ExpirationDate?: boolean
    Location?: boolean
    Quantity?: boolean
    Notes?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
  }

  export type PantryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "PantryId" | "ProductId" | "ExpirationDate" | "Location" | "Quantity" | "Notes" | "CreatedDate" | "UpdatedDate", ExtArgs["result"]["pantryItem"]>
  export type PantryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pantry?: boolean | PantryDefaultArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PantryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PantryItem"
    objects: {
      Pantry: Prisma.$PantryPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      PantryId: number
      ProductId: number
      ExpirationDate: Date | null
      Location: string | null
      Quantity: Prisma.Decimal
      Notes: string | null
      CreatedDate: Date
      UpdatedDate: Date
    }, ExtArgs["result"]["pantryItem"]>
    composites: {}
  }

  type PantryItemGetPayload<S extends boolean | null | undefined | PantryItemDefaultArgs> = $Result.GetResult<Prisma.$PantryItemPayload, S>

  type PantryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantryItemCountAggregateInputType | true
    }

  export interface PantryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PantryItem'], meta: { name: 'PantryItem' } }
    /**
     * Find zero or one PantryItem that matches the filter.
     * @param {PantryItemFindUniqueArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryItemFindUniqueArgs>(args: SelectSubset<T, PantryItemFindUniqueArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PantryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryItemFindUniqueOrThrowArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PantryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindFirstArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryItemFindFirstArgs>(args?: SelectSubset<T, PantryItemFindFirstArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PantryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindFirstOrThrowArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PantryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PantryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryItems
     * const pantryItems = await prisma.pantryItem.findMany()
     * 
     * // Get first 10 PantryItems
     * const pantryItems = await prisma.pantryItem.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends PantryItemFindManyArgs>(args?: SelectSubset<T, PantryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PantryItem.
     * @param {PantryItemCreateArgs} args - Arguments to create a PantryItem.
     * @example
     * // Create one PantryItem
     * const PantryItem = await prisma.pantryItem.create({
     *   data: {
     *     // ... data to create a PantryItem
     *   }
     * })
     * 
     */
    create<T extends PantryItemCreateArgs>(args: SelectSubset<T, PantryItemCreateArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PantryItems.
     * @param {PantryItemCreateManyArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItem = await prisma.pantryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantryItemCreateManyArgs>(args?: SelectSubset<T, PantryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PantryItem.
     * @param {PantryItemDeleteArgs} args - Arguments to delete one PantryItem.
     * @example
     * // Delete one PantryItem
     * const PantryItem = await prisma.pantryItem.delete({
     *   where: {
     *     // ... filter to delete one PantryItem
     *   }
     * })
     * 
     */
    delete<T extends PantryItemDeleteArgs>(args: SelectSubset<T, PantryItemDeleteArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PantryItem.
     * @param {PantryItemUpdateArgs} args - Arguments to update one PantryItem.
     * @example
     * // Update one PantryItem
     * const pantryItem = await prisma.pantryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantryItemUpdateArgs>(args: SelectSubset<T, PantryItemUpdateArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PantryItems.
     * @param {PantryItemDeleteManyArgs} args - Arguments to filter PantryItems to delete.
     * @example
     * // Delete a few PantryItems
     * const { count } = await prisma.pantryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantryItemDeleteManyArgs>(args?: SelectSubset<T, PantryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryItems
     * const pantryItem = await prisma.pantryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantryItemUpdateManyArgs>(args: SelectSubset<T, PantryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PantryItem.
     * @param {PantryItemUpsertArgs} args - Arguments to update or create a PantryItem.
     * @example
     * // Update or create a PantryItem
     * const pantryItem = await prisma.pantryItem.upsert({
     *   create: {
     *     // ... data to create a PantryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryItem we want to update
     *   }
     * })
     */
    upsert<T extends PantryItemUpsertArgs>(args: SelectSubset<T, PantryItemUpsertArgs<ExtArgs>>): Prisma__PantryItemClient<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemCountArgs} args - Arguments to filter PantryItems to count.
     * @example
     * // Count the number of PantryItems
     * const count = await prisma.pantryItem.count({
     *   where: {
     *     // ... the filter for the PantryItems we want to count
     *   }
     * })
    **/
    count<T extends PantryItemCountArgs>(
      args?: Subset<T, PantryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PantryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantryItemAggregateArgs>(args: Subset<T, PantryItemAggregateArgs>): Prisma.PrismaPromise<GetPantryItemAggregateType<T>>

    /**
     * Group by PantryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemGroupByArgs} args - Group by arguments.
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
      T extends PantryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryItemGroupByArgs['orderBy'] }
        : { orderBy?: PantryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PantryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PantryItem model
   */
  readonly fields: PantryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pantry<T extends PantryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PantryDefaultArgs<ExtArgs>>): Prisma__PantryClient<$Result.GetResult<Prisma.$PantryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PantryItem model
   */
  interface PantryItemFieldRefs {
    readonly Id: FieldRef<"PantryItem", 'Int'>
    readonly PantryId: FieldRef<"PantryItem", 'Int'>
    readonly ProductId: FieldRef<"PantryItem", 'Int'>
    readonly ExpirationDate: FieldRef<"PantryItem", 'DateTime'>
    readonly Location: FieldRef<"PantryItem", 'String'>
    readonly Quantity: FieldRef<"PantryItem", 'Decimal'>
    readonly Notes: FieldRef<"PantryItem", 'String'>
    readonly CreatedDate: FieldRef<"PantryItem", 'DateTime'>
    readonly UpdatedDate: FieldRef<"PantryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PantryItem findUnique
   */
  export type PantryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem findUniqueOrThrow
   */
  export type PantryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem findFirst
   */
  export type PantryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryItem findFirstOrThrow
   */
  export type PantryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItem to fetch.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryItem findMany
   */
  export type PantryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter, which PantryItems to fetch.
     */
    where?: PantryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PantryItems to fetch.
     */
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PantryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * PantryItem create
   */
  export type PantryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PantryItem.
     */
    data: XOR<PantryItemCreateInput, PantryItemUncheckedCreateInput>
  }

  /**
   * PantryItem createMany
   */
  export type PantryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemCreateManyInput | PantryItemCreateManyInput[]
  }

  /**
   * PantryItem update
   */
  export type PantryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PantryItem.
     */
    data: XOR<PantryItemUpdateInput, PantryItemUncheckedUpdateInput>
    /**
     * Choose, which PantryItem to update.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem updateMany
   */
  export type PantryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PantryItems.
     */
    data: XOR<PantryItemUpdateManyMutationInput, PantryItemUncheckedUpdateManyInput>
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemWhereInput
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number
  }

  /**
   * PantryItem upsert
   */
  export type PantryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PantryItem to update in case it exists.
     */
    where: PantryItemWhereUniqueInput
    /**
     * In case the PantryItem found by the `where` argument doesn't exist, create a new PantryItem with this data.
     */
    create: XOR<PantryItemCreateInput, PantryItemUncheckedCreateInput>
    /**
     * In case the PantryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryItemUpdateInput, PantryItemUncheckedUpdateInput>
  }

  /**
   * PantryItem delete
   */
  export type PantryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    /**
     * Filter which PantryItem to delete.
     */
    where: PantryItemWhereUniqueInput
  }

  /**
   * PantryItem deleteMany
   */
  export type PantryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PantryItems to delete
     */
    where?: PantryItemWhereInput
    /**
     * Limit how many PantryItems to delete.
     */
    limit?: number
  }

  /**
   * PantryItem without action
   */
  export type PantryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    Id: number | null
    CategoryId: number | null
    UnitId: number | null
  }

  export type ProductSumAggregateOutputType = {
    Id: number | null
    CategoryId: number | null
    UnitId: number | null
  }

  export type ProductMinAggregateOutputType = {
    Id: number | null
    CategoryId: number | null
    UnitId: number | null
    Name: string | null
    Description: string | null
    Brand: string | null
    BarCode: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    Id: number | null
    CategoryId: number | null
    UnitId: number | null
    Name: string | null
    Description: string | null
    Brand: string | null
    BarCode: string | null
    CreatedDate: Date | null
    UpdatedDate: Date | null
  }

  export type ProductCountAggregateOutputType = {
    Id: number
    CategoryId: number
    UnitId: number
    Name: number
    Description: number
    Brand: number
    BarCode: number
    CreatedDate: number
    UpdatedDate: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    Id?: true
    CategoryId?: true
    UnitId?: true
  }

  export type ProductSumAggregateInputType = {
    Id?: true
    CategoryId?: true
    UnitId?: true
  }

  export type ProductMinAggregateInputType = {
    Id?: true
    CategoryId?: true
    UnitId?: true
    Name?: true
    Description?: true
    Brand?: true
    BarCode?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type ProductMaxAggregateInputType = {
    Id?: true
    CategoryId?: true
    UnitId?: true
    Name?: true
    Description?: true
    Brand?: true
    BarCode?: true
    CreatedDate?: true
    UpdatedDate?: true
  }

  export type ProductCountAggregateInputType = {
    Id?: true
    CategoryId?: true
    UnitId?: true
    Name?: true
    Description?: true
    Brand?: true
    BarCode?: true
    CreatedDate?: true
    UpdatedDate?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    Id: number
    CategoryId: number
    UnitId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate: Date
    UpdatedDate: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    CategoryId?: boolean
    UnitId?: boolean
    Name?: boolean
    Description?: boolean
    Brand?: boolean
    BarCode?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Unit?: boolean | UnitDefaultArgs<ExtArgs>
    PantryItems?: boolean | Product$PantryItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    Id?: boolean
    CategoryId?: boolean
    UnitId?: boolean
    Name?: boolean
    Description?: boolean
    Brand?: boolean
    BarCode?: boolean
    CreatedDate?: boolean
    UpdatedDate?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "CategoryId" | "UnitId" | "Name" | "Description" | "Brand" | "BarCode" | "CreatedDate" | "UpdatedDate", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Unit?: boolean | UnitDefaultArgs<ExtArgs>
    PantryItems?: boolean | Product$PantryItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>
      Unit: Prisma.$UnitPayload<ExtArgs>
      PantryItems: Prisma.$PantryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      CategoryId: number
      UnitId: number
      Name: string
      Description: string
      Brand: string
      BarCode: string
      CreatedDate: Date
      UpdatedDate: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PantryItems<T extends Product$PantryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$PantryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly Id: FieldRef<"Product", 'Int'>
    readonly CategoryId: FieldRef<"Product", 'Int'>
    readonly UnitId: FieldRef<"Product", 'Int'>
    readonly Name: FieldRef<"Product", 'String'>
    readonly Description: FieldRef<"Product", 'String'>
    readonly Brand: FieldRef<"Product", 'String'>
    readonly BarCode: FieldRef<"Product", 'String'>
    readonly CreatedDate: FieldRef<"Product", 'DateTime'>
    readonly UpdatedDate: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.PantryItems
   */
  export type Product$PantryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null
    where?: PantryItemWhereInput
    orderBy?: PantryItemOrderByWithRelationInput | PantryItemOrderByWithRelationInput[]
    cursor?: PantryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    LastName: 'LastName',
    Email: 'Email',
    PasswordHash: 'PasswordHash',
    CreatedDate: 'CreatedDate',
    UpdatedDate: 'UpdatedDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Description: 'Description',
    CreatedDate: 'CreatedDate',
    UpdatedDate: 'UpdatedDate'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Abbreviation: 'Abbreviation',
    CreatedDate: 'CreatedDate',
    UpdatedDate: 'UpdatedDate'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const PantryScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    UserId: 'UserId',
    CreatedDate: 'CreatedDate',
    UpdatedDate: 'UpdatedDate'
  };

  export type PantryScalarFieldEnum = (typeof PantryScalarFieldEnum)[keyof typeof PantryScalarFieldEnum]


  export const PantryItemScalarFieldEnum: {
    Id: 'Id',
    PantryId: 'PantryId',
    ProductId: 'ProductId',
    ExpirationDate: 'ExpirationDate',
    Location: 'Location',
    Quantity: 'Quantity',
    Notes: 'Notes',
    CreatedDate: 'CreatedDate',
    UpdatedDate: 'UpdatedDate'
  };

  export type PantryItemScalarFieldEnum = (typeof PantryItemScalarFieldEnum)[keyof typeof PantryItemScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    Id: 'Id',
    CategoryId: 'CategoryId',
    UnitId: 'UnitId',
    Name: 'Name',
    Description: 'Description',
    Brand: 'Brand',
    BarCode: 'BarCode',
    CreatedDate: 'CreatedDate',
    UpdatedDate: 'UpdatedDate'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Id?: IntFilter<"User"> | number
    Name?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    CreatedDate?: DateTimeFilter<"User"> | Date | string
    UpdatedDate?: DateTimeFilter<"User"> | Date | string
    Pantries?: PantryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    Pantries?: PantryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Name?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    CreatedDate?: DateTimeFilter<"User"> | Date | string
    UpdatedDate?: DateTimeFilter<"User"> | Date | string
    Pantries?: PantryListRelationFilter
  }, "Id" | "Email">

  export type UserOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"User"> | number
    Name?: StringWithAggregatesFilter<"User"> | string
    LastName?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    PasswordHash?: StringWithAggregatesFilter<"User"> | string
    CreatedDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    UpdatedDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    Id?: IntFilter<"Category"> | number
    Name?: StringFilter<"Category"> | string
    Description?: StringFilter<"Category"> | string
    CreatedDate?: DateTimeFilter<"Category"> | Date | string
    UpdatedDate?: DateTimeFilter<"Category"> | Date | string
    Product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    Name?: StringFilter<"Category"> | string
    Description?: StringFilter<"Category"> | string
    CreatedDate?: DateTimeFilter<"Category"> | Date | string
    UpdatedDate?: DateTimeFilter<"Category"> | Date | string
    Product?: ProductListRelationFilter
  }, "Id">

  export type CategoryOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Category"> | number
    Name?: StringWithAggregatesFilter<"Category"> | string
    Description?: StringWithAggregatesFilter<"Category"> | string
    CreatedDate?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    UpdatedDate?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    Id?: IntFilter<"Unit"> | number
    Name?: StringFilter<"Unit"> | string
    Abbreviation?: StringFilter<"Unit"> | string
    CreatedDate?: DateTimeFilter<"Unit"> | Date | string
    UpdatedDate?: DateTimeFilter<"Unit"> | Date | string
    Product?: ProductListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Abbreviation?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    Name?: StringFilter<"Unit"> | string
    Abbreviation?: StringFilter<"Unit"> | string
    CreatedDate?: DateTimeFilter<"Unit"> | Date | string
    UpdatedDate?: DateTimeFilter<"Unit"> | Date | string
    Product?: ProductListRelationFilter
  }, "Id">

  export type UnitOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Abbreviation?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Unit"> | number
    Name?: StringWithAggregatesFilter<"Unit"> | string
    Abbreviation?: StringWithAggregatesFilter<"Unit"> | string
    CreatedDate?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    UpdatedDate?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type PantryWhereInput = {
    AND?: PantryWhereInput | PantryWhereInput[]
    OR?: PantryWhereInput[]
    NOT?: PantryWhereInput | PantryWhereInput[]
    Id?: IntFilter<"Pantry"> | number
    Name?: StringFilter<"Pantry"> | string
    UserId?: IntFilter<"Pantry"> | number
    CreatedDate?: DateTimeFilter<"Pantry"> | Date | string
    UpdatedDate?: DateTimeFilter<"Pantry"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    PantryItems?: PantryItemListRelationFilter
  }

  export type PantryOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    UserId?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    User?: UserOrderByWithRelationInput
    PantryItems?: PantryItemOrderByRelationAggregateInput
  }

  export type PantryWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: PantryWhereInput | PantryWhereInput[]
    OR?: PantryWhereInput[]
    NOT?: PantryWhereInput | PantryWhereInput[]
    Name?: StringFilter<"Pantry"> | string
    UserId?: IntFilter<"Pantry"> | number
    CreatedDate?: DateTimeFilter<"Pantry"> | Date | string
    UpdatedDate?: DateTimeFilter<"Pantry"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    PantryItems?: PantryItemListRelationFilter
  }, "Id">

  export type PantryOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    UserId?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    _count?: PantryCountOrderByAggregateInput
    _avg?: PantryAvgOrderByAggregateInput
    _max?: PantryMaxOrderByAggregateInput
    _min?: PantryMinOrderByAggregateInput
    _sum?: PantrySumOrderByAggregateInput
  }

  export type PantryScalarWhereWithAggregatesInput = {
    AND?: PantryScalarWhereWithAggregatesInput | PantryScalarWhereWithAggregatesInput[]
    OR?: PantryScalarWhereWithAggregatesInput[]
    NOT?: PantryScalarWhereWithAggregatesInput | PantryScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Pantry"> | number
    Name?: StringWithAggregatesFilter<"Pantry"> | string
    UserId?: IntWithAggregatesFilter<"Pantry"> | number
    CreatedDate?: DateTimeWithAggregatesFilter<"Pantry"> | Date | string
    UpdatedDate?: DateTimeWithAggregatesFilter<"Pantry"> | Date | string
  }

  export type PantryItemWhereInput = {
    AND?: PantryItemWhereInput | PantryItemWhereInput[]
    OR?: PantryItemWhereInput[]
    NOT?: PantryItemWhereInput | PantryItemWhereInput[]
    Id?: IntFilter<"PantryItem"> | number
    PantryId?: IntFilter<"PantryItem"> | number
    ProductId?: IntFilter<"PantryItem"> | number
    ExpirationDate?: DateTimeNullableFilter<"PantryItem"> | Date | string | null
    Location?: StringNullableFilter<"PantryItem"> | string | null
    Quantity?: DecimalFilter<"PantryItem"> | Decimal | DecimalJsLike | number | string
    Notes?: StringNullableFilter<"PantryItem"> | string | null
    CreatedDate?: DateTimeFilter<"PantryItem"> | Date | string
    UpdatedDate?: DateTimeFilter<"PantryItem"> | Date | string
    Pantry?: XOR<PantryScalarRelationFilter, PantryWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type PantryItemOrderByWithRelationInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    ExpirationDate?: SortOrderInput | SortOrder
    Location?: SortOrderInput | SortOrder
    Quantity?: SortOrder
    Notes?: SortOrderInput | SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    Pantry?: PantryOrderByWithRelationInput
    Product?: ProductOrderByWithRelationInput
  }

  export type PantryItemWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    PantryId_ProductId_ExpirationDate_Location?: PantryItemPantryIdProductIdExpirationDateLocationCompoundUniqueInput
    AND?: PantryItemWhereInput | PantryItemWhereInput[]
    OR?: PantryItemWhereInput[]
    NOT?: PantryItemWhereInput | PantryItemWhereInput[]
    PantryId?: IntFilter<"PantryItem"> | number
    ProductId?: IntFilter<"PantryItem"> | number
    ExpirationDate?: DateTimeNullableFilter<"PantryItem"> | Date | string | null
    Location?: StringNullableFilter<"PantryItem"> | string | null
    Quantity?: DecimalFilter<"PantryItem"> | Decimal | DecimalJsLike | number | string
    Notes?: StringNullableFilter<"PantryItem"> | string | null
    CreatedDate?: DateTimeFilter<"PantryItem"> | Date | string
    UpdatedDate?: DateTimeFilter<"PantryItem"> | Date | string
    Pantry?: XOR<PantryScalarRelationFilter, PantryWhereInput>
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "Id" | "PantryId_ProductId_ExpirationDate_Location">

  export type PantryItemOrderByWithAggregationInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    ExpirationDate?: SortOrderInput | SortOrder
    Location?: SortOrderInput | SortOrder
    Quantity?: SortOrder
    Notes?: SortOrderInput | SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    _count?: PantryItemCountOrderByAggregateInput
    _avg?: PantryItemAvgOrderByAggregateInput
    _max?: PantryItemMaxOrderByAggregateInput
    _min?: PantryItemMinOrderByAggregateInput
    _sum?: PantryItemSumOrderByAggregateInput
  }

  export type PantryItemScalarWhereWithAggregatesInput = {
    AND?: PantryItemScalarWhereWithAggregatesInput | PantryItemScalarWhereWithAggregatesInput[]
    OR?: PantryItemScalarWhereWithAggregatesInput[]
    NOT?: PantryItemScalarWhereWithAggregatesInput | PantryItemScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"PantryItem"> | number
    PantryId?: IntWithAggregatesFilter<"PantryItem"> | number
    ProductId?: IntWithAggregatesFilter<"PantryItem"> | number
    ExpirationDate?: DateTimeNullableWithAggregatesFilter<"PantryItem"> | Date | string | null
    Location?: StringNullableWithAggregatesFilter<"PantryItem"> | string | null
    Quantity?: DecimalWithAggregatesFilter<"PantryItem"> | Decimal | DecimalJsLike | number | string
    Notes?: StringNullableWithAggregatesFilter<"PantryItem"> | string | null
    CreatedDate?: DateTimeWithAggregatesFilter<"PantryItem"> | Date | string
    UpdatedDate?: DateTimeWithAggregatesFilter<"PantryItem"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Id?: IntFilter<"Product"> | number
    CategoryId?: IntFilter<"Product"> | number
    UnitId?: IntFilter<"Product"> | number
    Name?: StringFilter<"Product"> | string
    Description?: StringFilter<"Product"> | string
    Brand?: StringFilter<"Product"> | string
    BarCode?: StringFilter<"Product"> | string
    CreatedDate?: DateTimeFilter<"Product"> | Date | string
    UpdatedDate?: DateTimeFilter<"Product"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    PantryItems?: PantryItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Brand?: SortOrder
    BarCode?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    Category?: CategoryOrderByWithRelationInput
    Unit?: UnitOrderByWithRelationInput
    PantryItems?: PantryItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    BarCode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    CategoryId?: IntFilter<"Product"> | number
    UnitId?: IntFilter<"Product"> | number
    Name?: StringFilter<"Product"> | string
    Description?: StringFilter<"Product"> | string
    Brand?: StringFilter<"Product"> | string
    CreatedDate?: DateTimeFilter<"Product"> | Date | string
    UpdatedDate?: DateTimeFilter<"Product"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    PantryItems?: PantryItemListRelationFilter
  }, "Id" | "BarCode">

  export type ProductOrderByWithAggregationInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Brand?: SortOrder
    BarCode?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Product"> | number
    CategoryId?: IntWithAggregatesFilter<"Product"> | number
    UnitId?: IntWithAggregatesFilter<"Product"> | number
    Name?: StringWithAggregatesFilter<"Product"> | string
    Description?: StringWithAggregatesFilter<"Product"> | string
    Brand?: StringWithAggregatesFilter<"Product"> | string
    BarCode?: StringWithAggregatesFilter<"Product"> | string
    CreatedDate?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    UpdatedDate?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type UserCreateInput = {
    Name: string
    LastName: string
    Email: string
    PasswordHash: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Pantries?: PantryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    Id?: number
    Name: string
    LastName: string
    Email: string
    PasswordHash: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Pantries?: PantryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Pantries?: PantryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Pantries?: PantryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    Name: string
    LastName: string
    Email: string
    PasswordHash: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    Name: string
    Description: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    Id?: number
    Name: string
    Description: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    Name: string
    Description: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    Name: string
    Abbreviation: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Product?: ProductCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    Id?: number
    Name: string
    Abbreviation: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Abbreviation?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Abbreviation?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    Name: string
    Abbreviation: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Abbreviation?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Abbreviation?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryCreateInput = {
    Name: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    User: UserCreateNestedOneWithoutPantriesInput
    PantryItems?: PantryItemCreateNestedManyWithoutPantryInput
  }

  export type PantryUncheckedCreateInput = {
    Id?: number
    Name: string
    UserId: number
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    PantryItems?: PantryItemUncheckedCreateNestedManyWithoutPantryInput
  }

  export type PantryUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPantriesNestedInput
    PantryItems?: PantryItemUpdateManyWithoutPantryNestedInput
  }

  export type PantryUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PantryItems?: PantryItemUncheckedUpdateManyWithoutPantryNestedInput
  }

  export type PantryCreateManyInput = {
    Name: string
    UserId: number
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateInput = {
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Pantry: PantryCreateNestedOneWithoutPantryItemsInput
    Product: ProductCreateNestedOneWithoutPantryItemsInput
  }

  export type PantryItemUncheckedCreateInput = {
    Id?: number
    PantryId: number
    ProductId: number
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryItemUpdateInput = {
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Pantry?: PantryUpdateOneRequiredWithoutPantryItemsNestedInput
    Product?: ProductUpdateOneRequiredWithoutPantryItemsNestedInput
  }

  export type PantryItemUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    PantryId?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateManyInput = {
    PantryId: number
    ProductId: number
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryItemUpdateManyMutationInput = {
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    PantryId?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Category: CategoryCreateNestedOneWithoutProductInput
    Unit: UnitCreateNestedOneWithoutProductInput
    PantryItems?: PantryItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    Id?: number
    CategoryId: number
    UnitId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    PantryItems?: PantryItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    Unit?: UnitUpdateOneRequiredWithoutProductNestedInput
    PantryItems?: PantryItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    UnitId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PantryItems?: PantryItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    CategoryId: number
    UnitId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    UnitId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PantryListRelationFilter = {
    every?: PantryWhereInput
    some?: PantryWhereInput
    none?: PantryWhereInput
  }

  export type PantryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Abbreviation?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Abbreviation?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Abbreviation?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PantryItemListRelationFilter = {
    every?: PantryItemWhereInput
    some?: PantryItemWhereInput
    none?: PantryItemWhereInput
  }

  export type PantryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PantryCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    UserId?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type PantryAvgOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
  }

  export type PantryMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    UserId?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type PantryMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    UserId?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type PantrySumOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PantryScalarRelationFilter = {
    is?: PantryWhereInput
    isNot?: PantryWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PantryItemPantryIdProductIdExpirationDateLocationCompoundUniqueInput = {
    PantryId: number
    ProductId: number
    ExpirationDate: Date | string
    Location: string
  }

  export type PantryItemCountOrderByAggregateInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    ExpirationDate?: SortOrder
    Location?: SortOrder
    Quantity?: SortOrder
    Notes?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type PantryItemAvgOrderByAggregateInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type PantryItemMaxOrderByAggregateInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    ExpirationDate?: SortOrder
    Location?: SortOrder
    Quantity?: SortOrder
    Notes?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type PantryItemMinOrderByAggregateInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    ExpirationDate?: SortOrder
    Location?: SortOrder
    Quantity?: SortOrder
    Notes?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type PantryItemSumOrderByAggregateInput = {
    Id?: SortOrder
    PantryId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Brand?: SortOrder
    BarCode?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Brand?: SortOrder
    BarCode?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
    Name?: SortOrder
    Description?: SortOrder
    Brand?: SortOrder
    BarCode?: SortOrder
    CreatedDate?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    Id?: SortOrder
    CategoryId?: SortOrder
    UnitId?: SortOrder
  }

  export type PantryCreateNestedManyWithoutUserInput = {
    create?: XOR<PantryCreateWithoutUserInput, PantryUncheckedCreateWithoutUserInput> | PantryCreateWithoutUserInput[] | PantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PantryCreateOrConnectWithoutUserInput | PantryCreateOrConnectWithoutUserInput[]
    createMany?: PantryCreateManyUserInputEnvelope
    connect?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
  }

  export type PantryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PantryCreateWithoutUserInput, PantryUncheckedCreateWithoutUserInput> | PantryCreateWithoutUserInput[] | PantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PantryCreateOrConnectWithoutUserInput | PantryCreateOrConnectWithoutUserInput[]
    createMany?: PantryCreateManyUserInputEnvelope
    connect?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PantryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PantryCreateWithoutUserInput, PantryUncheckedCreateWithoutUserInput> | PantryCreateWithoutUserInput[] | PantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PantryCreateOrConnectWithoutUserInput | PantryCreateOrConnectWithoutUserInput[]
    upsert?: PantryUpsertWithWhereUniqueWithoutUserInput | PantryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PantryCreateManyUserInputEnvelope
    set?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    disconnect?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    delete?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    connect?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    update?: PantryUpdateWithWhereUniqueWithoutUserInput | PantryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PantryUpdateManyWithWhereWithoutUserInput | PantryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PantryScalarWhereInput | PantryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PantryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PantryCreateWithoutUserInput, PantryUncheckedCreateWithoutUserInput> | PantryCreateWithoutUserInput[] | PantryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PantryCreateOrConnectWithoutUserInput | PantryCreateOrConnectWithoutUserInput[]
    upsert?: PantryUpsertWithWhereUniqueWithoutUserInput | PantryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PantryCreateManyUserInputEnvelope
    set?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    disconnect?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    delete?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    connect?: PantryWhereUniqueInput | PantryWhereUniqueInput[]
    update?: PantryUpdateWithWhereUniqueWithoutUserInput | PantryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PantryUpdateManyWithWhereWithoutUserInput | PantryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PantryScalarWhereInput | PantryScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutUnitInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUnitInput | ProductUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUnitInput | ProductUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUnitInput | ProductUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUnitInput | ProductUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUnitInput | ProductUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUnitInput | ProductUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPantriesInput = {
    create?: XOR<UserCreateWithoutPantriesInput, UserUncheckedCreateWithoutPantriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPantriesInput
    connect?: UserWhereUniqueInput
  }

  export type PantryItemCreateNestedManyWithoutPantryInput = {
    create?: XOR<PantryItemCreateWithoutPantryInput, PantryItemUncheckedCreateWithoutPantryInput> | PantryItemCreateWithoutPantryInput[] | PantryItemUncheckedCreateWithoutPantryInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutPantryInput | PantryItemCreateOrConnectWithoutPantryInput[]
    createMany?: PantryItemCreateManyPantryInputEnvelope
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
  }

  export type PantryItemUncheckedCreateNestedManyWithoutPantryInput = {
    create?: XOR<PantryItemCreateWithoutPantryInput, PantryItemUncheckedCreateWithoutPantryInput> | PantryItemCreateWithoutPantryInput[] | PantryItemUncheckedCreateWithoutPantryInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutPantryInput | PantryItemCreateOrConnectWithoutPantryInput[]
    createMany?: PantryItemCreateManyPantryInputEnvelope
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPantriesNestedInput = {
    create?: XOR<UserCreateWithoutPantriesInput, UserUncheckedCreateWithoutPantriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPantriesInput
    upsert?: UserUpsertWithoutPantriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPantriesInput, UserUpdateWithoutPantriesInput>, UserUncheckedUpdateWithoutPantriesInput>
  }

  export type PantryItemUpdateManyWithoutPantryNestedInput = {
    create?: XOR<PantryItemCreateWithoutPantryInput, PantryItemUncheckedCreateWithoutPantryInput> | PantryItemCreateWithoutPantryInput[] | PantryItemUncheckedCreateWithoutPantryInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutPantryInput | PantryItemCreateOrConnectWithoutPantryInput[]
    upsert?: PantryItemUpsertWithWhereUniqueWithoutPantryInput | PantryItemUpsertWithWhereUniqueWithoutPantryInput[]
    createMany?: PantryItemCreateManyPantryInputEnvelope
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    update?: PantryItemUpdateWithWhereUniqueWithoutPantryInput | PantryItemUpdateWithWhereUniqueWithoutPantryInput[]
    updateMany?: PantryItemUpdateManyWithWhereWithoutPantryInput | PantryItemUpdateManyWithWhereWithoutPantryInput[]
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
  }

  export type PantryItemUncheckedUpdateManyWithoutPantryNestedInput = {
    create?: XOR<PantryItemCreateWithoutPantryInput, PantryItemUncheckedCreateWithoutPantryInput> | PantryItemCreateWithoutPantryInput[] | PantryItemUncheckedCreateWithoutPantryInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutPantryInput | PantryItemCreateOrConnectWithoutPantryInput[]
    upsert?: PantryItemUpsertWithWhereUniqueWithoutPantryInput | PantryItemUpsertWithWhereUniqueWithoutPantryInput[]
    createMany?: PantryItemCreateManyPantryInputEnvelope
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    update?: PantryItemUpdateWithWhereUniqueWithoutPantryInput | PantryItemUpdateWithWhereUniqueWithoutPantryInput[]
    updateMany?: PantryItemUpdateManyWithWhereWithoutPantryInput | PantryItemUpdateManyWithWhereWithoutPantryInput[]
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
  }

  export type PantryCreateNestedOneWithoutPantryItemsInput = {
    create?: XOR<PantryCreateWithoutPantryItemsInput, PantryUncheckedCreateWithoutPantryItemsInput>
    connectOrCreate?: PantryCreateOrConnectWithoutPantryItemsInput
    connect?: PantryWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPantryItemsInput = {
    create?: XOR<ProductCreateWithoutPantryItemsInput, ProductUncheckedCreateWithoutPantryItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPantryItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PantryUpdateOneRequiredWithoutPantryItemsNestedInput = {
    create?: XOR<PantryCreateWithoutPantryItemsInput, PantryUncheckedCreateWithoutPantryItemsInput>
    connectOrCreate?: PantryCreateOrConnectWithoutPantryItemsInput
    upsert?: PantryUpsertWithoutPantryItemsInput
    connect?: PantryWhereUniqueInput
    update?: XOR<XOR<PantryUpdateToOneWithWhereWithoutPantryItemsInput, PantryUpdateWithoutPantryItemsInput>, PantryUncheckedUpdateWithoutPantryItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutPantryItemsNestedInput = {
    create?: XOR<ProductCreateWithoutPantryItemsInput, ProductUncheckedCreateWithoutPantryItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPantryItemsInput
    upsert?: ProductUpsertWithoutPantryItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPantryItemsInput, ProductUpdateWithoutPantryItemsInput>, ProductUncheckedUpdateWithoutPantryItemsInput>
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutProductInput = {
    create?: XOR<UnitCreateWithoutProductInput, UnitUncheckedCreateWithoutProductInput>
    connectOrCreate?: UnitCreateOrConnectWithoutProductInput
    connect?: UnitWhereUniqueInput
  }

  export type PantryItemCreateNestedManyWithoutProductInput = {
    create?: XOR<PantryItemCreateWithoutProductInput, PantryItemUncheckedCreateWithoutProductInput> | PantryItemCreateWithoutProductInput[] | PantryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutProductInput | PantryItemCreateOrConnectWithoutProductInput[]
    createMany?: PantryItemCreateManyProductInputEnvelope
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
  }

  export type PantryItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PantryItemCreateWithoutProductInput, PantryItemUncheckedCreateWithoutProductInput> | PantryItemCreateWithoutProductInput[] | PantryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutProductInput | PantryItemCreateOrConnectWithoutProductInput[]
    createMany?: PantryItemCreateManyProductInputEnvelope
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type UnitUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<UnitCreateWithoutProductInput, UnitUncheckedCreateWithoutProductInput>
    connectOrCreate?: UnitCreateOrConnectWithoutProductInput
    upsert?: UnitUpsertWithoutProductInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutProductInput, UnitUpdateWithoutProductInput>, UnitUncheckedUpdateWithoutProductInput>
  }

  export type PantryItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<PantryItemCreateWithoutProductInput, PantryItemUncheckedCreateWithoutProductInput> | PantryItemCreateWithoutProductInput[] | PantryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutProductInput | PantryItemCreateOrConnectWithoutProductInput[]
    upsert?: PantryItemUpsertWithWhereUniqueWithoutProductInput | PantryItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PantryItemCreateManyProductInputEnvelope
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    update?: PantryItemUpdateWithWhereUniqueWithoutProductInput | PantryItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PantryItemUpdateManyWithWhereWithoutProductInput | PantryItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
  }

  export type PantryItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PantryItemCreateWithoutProductInput, PantryItemUncheckedCreateWithoutProductInput> | PantryItemCreateWithoutProductInput[] | PantryItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PantryItemCreateOrConnectWithoutProductInput | PantryItemCreateOrConnectWithoutProductInput[]
    upsert?: PantryItemUpsertWithWhereUniqueWithoutProductInput | PantryItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PantryItemCreateManyProductInputEnvelope
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[]
    update?: PantryItemUpdateWithWhereUniqueWithoutProductInput | PantryItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PantryItemUpdateManyWithWhereWithoutProductInput | PantryItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PantryCreateWithoutUserInput = {
    Name: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    PantryItems?: PantryItemCreateNestedManyWithoutPantryInput
  }

  export type PantryUncheckedCreateWithoutUserInput = {
    Id?: number
    Name: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    PantryItems?: PantryItemUncheckedCreateNestedManyWithoutPantryInput
  }

  export type PantryCreateOrConnectWithoutUserInput = {
    where: PantryWhereUniqueInput
    create: XOR<PantryCreateWithoutUserInput, PantryUncheckedCreateWithoutUserInput>
  }

  export type PantryCreateManyUserInputEnvelope = {
    data: PantryCreateManyUserInput | PantryCreateManyUserInput[]
  }

  export type PantryUpsertWithWhereUniqueWithoutUserInput = {
    where: PantryWhereUniqueInput
    update: XOR<PantryUpdateWithoutUserInput, PantryUncheckedUpdateWithoutUserInput>
    create: XOR<PantryCreateWithoutUserInput, PantryUncheckedCreateWithoutUserInput>
  }

  export type PantryUpdateWithWhereUniqueWithoutUserInput = {
    where: PantryWhereUniqueInput
    data: XOR<PantryUpdateWithoutUserInput, PantryUncheckedUpdateWithoutUserInput>
  }

  export type PantryUpdateManyWithWhereWithoutUserInput = {
    where: PantryScalarWhereInput
    data: XOR<PantryUpdateManyMutationInput, PantryUncheckedUpdateManyWithoutUserInput>
  }

  export type PantryScalarWhereInput = {
    AND?: PantryScalarWhereInput | PantryScalarWhereInput[]
    OR?: PantryScalarWhereInput[]
    NOT?: PantryScalarWhereInput | PantryScalarWhereInput[]
    Id?: IntFilter<"Pantry"> | number
    Name?: StringFilter<"Pantry"> | string
    UserId?: IntFilter<"Pantry"> | number
    CreatedDate?: DateTimeFilter<"Pantry"> | Date | string
    UpdatedDate?: DateTimeFilter<"Pantry"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Unit: UnitCreateNestedOneWithoutProductInput
    PantryItems?: PantryItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    Id?: number
    UnitId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    PantryItems?: PantryItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    Id?: IntFilter<"Product"> | number
    CategoryId?: IntFilter<"Product"> | number
    UnitId?: IntFilter<"Product"> | number
    Name?: StringFilter<"Product"> | string
    Description?: StringFilter<"Product"> | string
    Brand?: StringFilter<"Product"> | string
    BarCode?: StringFilter<"Product"> | string
    CreatedDate?: DateTimeFilter<"Product"> | Date | string
    UpdatedDate?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductCreateWithoutUnitInput = {
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Category: CategoryCreateNestedOneWithoutProductInput
    PantryItems?: PantryItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUnitInput = {
    Id?: number
    CategoryId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    PantryItems?: PantryItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUnitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput>
  }

  export type ProductCreateManyUnitInputEnvelope = {
    data: ProductCreateManyUnitInput | ProductCreateManyUnitInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutUnitInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUnitInput, ProductUncheckedUpdateWithoutUnitInput>
    create: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUnitInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUnitInput, ProductUncheckedUpdateWithoutUnitInput>
  }

  export type ProductUpdateManyWithWhereWithoutUnitInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUnitInput>
  }

  export type UserCreateWithoutPantriesInput = {
    Name: string
    LastName: string
    Email: string
    PasswordHash: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type UserUncheckedCreateWithoutPantriesInput = {
    Id?: number
    Name: string
    LastName: string
    Email: string
    PasswordHash: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type UserCreateOrConnectWithoutPantriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPantriesInput, UserUncheckedCreateWithoutPantriesInput>
  }

  export type PantryItemCreateWithoutPantryInput = {
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Product: ProductCreateNestedOneWithoutPantryItemsInput
  }

  export type PantryItemUncheckedCreateWithoutPantryInput = {
    Id?: number
    ProductId: number
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryItemCreateOrConnectWithoutPantryInput = {
    where: PantryItemWhereUniqueInput
    create: XOR<PantryItemCreateWithoutPantryInput, PantryItemUncheckedCreateWithoutPantryInput>
  }

  export type PantryItemCreateManyPantryInputEnvelope = {
    data: PantryItemCreateManyPantryInput | PantryItemCreateManyPantryInput[]
  }

  export type UserUpsertWithoutPantriesInput = {
    update: XOR<UserUpdateWithoutPantriesInput, UserUncheckedUpdateWithoutPantriesInput>
    create: XOR<UserCreateWithoutPantriesInput, UserUncheckedCreateWithoutPantriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPantriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPantriesInput, UserUncheckedUpdateWithoutPantriesInput>
  }

  export type UserUpdateWithoutPantriesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPantriesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUpsertWithWhereUniqueWithoutPantryInput = {
    where: PantryItemWhereUniqueInput
    update: XOR<PantryItemUpdateWithoutPantryInput, PantryItemUncheckedUpdateWithoutPantryInput>
    create: XOR<PantryItemCreateWithoutPantryInput, PantryItemUncheckedCreateWithoutPantryInput>
  }

  export type PantryItemUpdateWithWhereUniqueWithoutPantryInput = {
    where: PantryItemWhereUniqueInput
    data: XOR<PantryItemUpdateWithoutPantryInput, PantryItemUncheckedUpdateWithoutPantryInput>
  }

  export type PantryItemUpdateManyWithWhereWithoutPantryInput = {
    where: PantryItemScalarWhereInput
    data: XOR<PantryItemUpdateManyMutationInput, PantryItemUncheckedUpdateManyWithoutPantryInput>
  }

  export type PantryItemScalarWhereInput = {
    AND?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
    OR?: PantryItemScalarWhereInput[]
    NOT?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[]
    Id?: IntFilter<"PantryItem"> | number
    PantryId?: IntFilter<"PantryItem"> | number
    ProductId?: IntFilter<"PantryItem"> | number
    ExpirationDate?: DateTimeNullableFilter<"PantryItem"> | Date | string | null
    Location?: StringNullableFilter<"PantryItem"> | string | null
    Quantity?: DecimalFilter<"PantryItem"> | Decimal | DecimalJsLike | number | string
    Notes?: StringNullableFilter<"PantryItem"> | string | null
    CreatedDate?: DateTimeFilter<"PantryItem"> | Date | string
    UpdatedDate?: DateTimeFilter<"PantryItem"> | Date | string
  }

  export type PantryCreateWithoutPantryItemsInput = {
    Name: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    User: UserCreateNestedOneWithoutPantriesInput
  }

  export type PantryUncheckedCreateWithoutPantryItemsInput = {
    Id?: number
    Name: string
    UserId: number
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryCreateOrConnectWithoutPantryItemsInput = {
    where: PantryWhereUniqueInput
    create: XOR<PantryCreateWithoutPantryItemsInput, PantryUncheckedCreateWithoutPantryItemsInput>
  }

  export type ProductCreateWithoutPantryItemsInput = {
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Category: CategoryCreateNestedOneWithoutProductInput
    Unit: UnitCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPantryItemsInput = {
    Id?: number
    CategoryId: number
    UnitId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type ProductCreateOrConnectWithoutPantryItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPantryItemsInput, ProductUncheckedCreateWithoutPantryItemsInput>
  }

  export type PantryUpsertWithoutPantryItemsInput = {
    update: XOR<PantryUpdateWithoutPantryItemsInput, PantryUncheckedUpdateWithoutPantryItemsInput>
    create: XOR<PantryCreateWithoutPantryItemsInput, PantryUncheckedCreateWithoutPantryItemsInput>
    where?: PantryWhereInput
  }

  export type PantryUpdateToOneWithWhereWithoutPantryItemsInput = {
    where?: PantryWhereInput
    data: XOR<PantryUpdateWithoutPantryItemsInput, PantryUncheckedUpdateWithoutPantryItemsInput>
  }

  export type PantryUpdateWithoutPantryItemsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPantriesNestedInput
  }

  export type PantryUncheckedUpdateWithoutPantryItemsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutPantryItemsInput = {
    update: XOR<ProductUpdateWithoutPantryItemsInput, ProductUncheckedUpdateWithoutPantryItemsInput>
    create: XOR<ProductCreateWithoutPantryItemsInput, ProductUncheckedCreateWithoutPantryItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPantryItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPantryItemsInput, ProductUncheckedUpdateWithoutPantryItemsInput>
  }

  export type ProductUpdateWithoutPantryItemsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    Unit?: UnitUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPantryItemsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    UnitId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateWithoutProductInput = {
    Name: string
    Description: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    Id?: number
    Name: string
    Description: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type UnitCreateWithoutProductInput = {
    Name: string
    Abbreviation: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type UnitUncheckedCreateWithoutProductInput = {
    Id?: number
    Name: string
    Abbreviation: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type UnitCreateOrConnectWithoutProductInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutProductInput, UnitUncheckedCreateWithoutProductInput>
  }

  export type PantryItemCreateWithoutProductInput = {
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
    Pantry: PantryCreateNestedOneWithoutPantryItemsInput
  }

  export type PantryItemUncheckedCreateWithoutProductInput = {
    Id?: number
    PantryId: number
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryItemCreateOrConnectWithoutProductInput = {
    where: PantryItemWhereUniqueInput
    create: XOR<PantryItemCreateWithoutProductInput, PantryItemUncheckedCreateWithoutProductInput>
  }

  export type PantryItemCreateManyProductInputEnvelope = {
    data: PantryItemCreateManyProductInput | PantryItemCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUpsertWithoutProductInput = {
    update: XOR<UnitUpdateWithoutProductInput, UnitUncheckedUpdateWithoutProductInput>
    create: XOR<UnitCreateWithoutProductInput, UnitUncheckedCreateWithoutProductInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutProductInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutProductInput, UnitUncheckedUpdateWithoutProductInput>
  }

  export type UnitUpdateWithoutProductInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Abbreviation?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Abbreviation?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUpsertWithWhereUniqueWithoutProductInput = {
    where: PantryItemWhereUniqueInput
    update: XOR<PantryItemUpdateWithoutProductInput, PantryItemUncheckedUpdateWithoutProductInput>
    create: XOR<PantryItemCreateWithoutProductInput, PantryItemUncheckedCreateWithoutProductInput>
  }

  export type PantryItemUpdateWithWhereUniqueWithoutProductInput = {
    where: PantryItemWhereUniqueInput
    data: XOR<PantryItemUpdateWithoutProductInput, PantryItemUncheckedUpdateWithoutProductInput>
  }

  export type PantryItemUpdateManyWithWhereWithoutProductInput = {
    where: PantryItemScalarWhereInput
    data: XOR<PantryItemUpdateManyMutationInput, PantryItemUncheckedUpdateManyWithoutProductInput>
  }

  export type PantryCreateManyUserInput = {
    Name: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryUpdateWithoutUserInput = {
    Name?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PantryItems?: PantryItemUpdateManyWithoutPantryNestedInput
  }

  export type PantryUncheckedUpdateWithoutUserInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PantryItems?: PantryItemUncheckedUpdateManyWithoutPantryNestedInput
  }

  export type PantryUncheckedUpdateManyWithoutUserInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    UnitId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Unit?: UnitUpdateOneRequiredWithoutProductNestedInput
    PantryItems?: PantryItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UnitId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PantryItems?: PantryItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    Id?: IntFieldUpdateOperationsInput | number
    UnitId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyUnitInput = {
    CategoryId: number
    Name: string
    Description: string
    Brand: string
    BarCode: string
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type ProductUpdateWithoutUnitInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    PantryItems?: PantryItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUnitInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    PantryItems?: PantryItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUnitInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CategoryId?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    Brand?: StringFieldUpdateOperationsInput | string
    BarCode?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateManyPantryInput = {
    ProductId: number
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryItemUpdateWithoutPantryInput = {
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutPantryItemsNestedInput
  }

  export type PantryItemUncheckedUpdateWithoutPantryInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUncheckedUpdateManyWithoutPantryInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemCreateManyProductInput = {
    PantryId: number
    ExpirationDate?: Date | string | null
    Location?: string | null
    Quantity: Decimal | DecimalJsLike | number | string
    Notes?: string | null
    CreatedDate?: Date | string
    UpdatedDate?: Date | string
  }

  export type PantryItemUpdateWithoutProductInput = {
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Pantry?: PantryUpdateOneRequiredWithoutPantryItemsNestedInput
  }

  export type PantryItemUncheckedUpdateWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    PantryId?: IntFieldUpdateOperationsInput | number
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantryItemUncheckedUpdateManyWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    PantryId?: IntFieldUpdateOperationsInput | number
    ExpirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
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