/** Pick values of object */
export type Values<T extends object> = T[keyof T];

/** AND condition */
export type And<X extends boolean, Y extends boolean> =
  X extends true
    ? Y extends true
      ? true
      : false
    : false;

/** Compare two types */
export type IsEquals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

/** is optional property */
export type IsOptional<T extends Object, P extends keyof T> = IsEquals<{ [K in P]: T[P] }, { [K in P]?: T[P] }>;

/** is readonly property */
export type IsNotReadonly<T extends Object, P extends keyof T> = IsEquals<{ [K in P]: T[P] }, { -readonly [K in P]: T[P]}>;

/** Pick writable property keys */
export type WritableKeys<T extends Object> =
  T extends any[] ? number : Values<{
    [P in keyof T]-?: IsNotReadonly<T, P> extends true ? P : never;
  }>;

/** Pick optional property keys */
export type OptionalKeys<T extends Object> =
  T extends any[] ? number : Values<{
    [P in keyof T]-?: And<IsOptional<T, P>, IsNotReadonly<T, P>> extends true ? P : never;
  }>;
