import { assert, IsExact, Has, NotHas } from 'conditional-type-checks';
import { WritableKeys, OptionalKeys } from '../src/utils';

type TypedSet<T extends Object, K extends WritableKeys<T> = WritableKeys<T>> = (object: T, key: K, value: NonNullable<T[K]>) => T[K];
type TypedDelete<T extends Object, K extends OptionalKeys<T> = OptionalKeys<T>> = (object: T, key: K) => void;

type TypedSetKeys<T extends Object> = TypedSet<T> extends (object: T, key: infer K, value: any) => any ? K : never;
type TypedSetValue<T extends Object, K extends WritableKeys<T>> = TypedSet<T> extends (object: T, key: K, value: infer V) => any ? V : never;
type TypedDeleteKey<T extends Object> = TypedDelete<T> extends (object: T, key: infer K) => void ? K : never;

assert<Has<TypedSetKeys<{ foo: string }>, 'foo'>>(true);
assert<Has<TypedSetKeys<{ foo?: string }>, 'foo'>>(true);
assert<Has<TypedSetKeys<{ foo: string | undefined }>, 'foo'>>(true);
assert<NotHas<TypedSetKeys<{ readonly foo: string }>, 'foo'>>(true);
assert<IsExact<TypedSetKeys<number[]>, number>>(true);
assert<IsExact<TypedSetKeys<[1, 2, 3]>, number>>(true);

assert<IsExact<TypedSetValue<{ foo: string }, 'foo'>, string>>(true);
assert<IsExact<TypedSetValue<{ foo?: string }, 'foo'>, string>>(true);
assert<IsExact<TypedSetValue<{ foo?: string | number }, 'foo'>, string | number>>(true);
assert<IsExact<TypedSetValue<{ foo?: string | undefined }, 'foo'>, string>>(true);
assert<IsExact<TypedSetValue<{ foo?: string | undefined }, 'foo'>, undefined>>(false);

assert<NotHas<TypedDeleteKey<{ foo: string }>, 'foo'>>(true);
assert<Has<TypedDeleteKey<{ foo?: string }>, 'foo'>>(true);
assert<NotHas<TypedDeleteKey<{ foo: string | undefined }>, 'foo'>>(true);
assert<NotHas<TypedDeleteKey<{ readonly foo: string }>, 'foo'>>(true);
assert<NotHas<TypedDeleteKey<{ readonly foo?: string }>, 'foo'>>(true);
assert<IsExact<TypedDeleteKey<number[]>, number>>(true);
assert<IsExact<TypedDeleteKey<[1, 2, 3]>, number>>(true);
