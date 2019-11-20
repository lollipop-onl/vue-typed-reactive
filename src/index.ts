import Vue, { PluginObject } from 'vue';
import { WritableKeys, OptionalKeys } from './utils';

declare module 'vue/types/vue' {
  interface Vue {
    /** Type-safe version of Vue.set */
    $typedSet<T extends object, K extends WritableKeys<T>>(object: T, key: K, value: NonNullable<T[K]>): T[K];
    /** Type-safe version of Vue.delete */
    $typedDelete<T extends object, K extends OptionalKeys<T>>(object: T, key: K): void;
  }
  
  interface VueConstructor {
    /** Type-safe version of vm.$set */
    typedSet<T extends object, K extends WritableKeys<T>>(object: T, key: K, value: NonNullable<T[K]>): T[K];
    /** Type-safe version of vm.$delete */
    typedDelete<T extends object, K extends OptionalKeys<T>>(object: T, key: K): void;
  }
}

const TypedReactive: PluginObject<never> = {
  install: (Vue) => {
    // setup of typedSet method
    Vue.typedSet = Vue.set;
    Vue.prototype.$typedSet = Vue.set;

    // setup of typedDelete method
    Vue.typedDelete = Vue.delete;
    Vue.prototype.$typedDelete = Vue.delete;
  },
};

export default TypedReactive;
