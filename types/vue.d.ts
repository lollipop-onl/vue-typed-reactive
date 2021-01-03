import { WritableKeys, OptionalKeys } from './utils';

declare module 'vue/types/vue' {
  interface Vue {
    /** Type-safe version of Vue.set */
    $typedSet<T extends Object, K extends WritableKeys<T>>(object: T, key: K, value: T[K]): T[K];
    /** Type-safe version of Vue.delete */
    $typedDelete<T extends Object, K extends OptionalKeys<T>>(object: T, key: K): void;
  }

  interface VueConstructor {
    /** Type-safe version of vm.$set */
    typedSet<T extends Object, K extends WritableKeys<T>>(object: T, key: K, value: T[K]): T[K];
    /** Type-safe version of vm.$delete */
    typedDelete<T extends Object, K extends OptionalKeys<T>>(object: T, key: K): void;
  }
}
