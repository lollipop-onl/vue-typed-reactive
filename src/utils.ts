/** Pick values of object */
export type Values<T extends object> = T[keyof T];

/** Compare two types */
export type IsEquals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

/** Pick writable property keys */
export type WritableKeys<T extends Record<any, any>> = Values<{
  [P in keyof T]-?: IsEquals<{ [K in P]: T[P] }, { -readonly [K in P]: T[P]}> extends true ? P : never;
}>;

/** Pick optional property keys */
export type OptionalKeys<T extends Record<any, any>> = Values<{
  [P in keyof T]-?: undefined extends T[P] ? P : never;
}>;
