# vue-typed-reactive

![vtyped](https://raw.githubusercontent.com/lollipop-onl/vue-typed-reactive/master/vtyped.png)

This plugin is provide type-safe version of Vue reactivity methods.

## Installation

```sh
$ yarn add @lollipop-onl/vue-typed-reactive
# or
$ npm install -S @lollipop-onl/vue-typed-reactive
```

## Setup

### Step 1. Register to Vue app

```ts
import TypedReactive from '@lollipop-onl/vue-typed-reactive';

Vue.use(TypedReactive);
```

With Nuxt.js:

```ts
// nuxt.config.ts
const config: Configuration = {
  ...
  modules: [
    '@/plugins/libs/vue-typed-reactive/nuxt',
  ],
  ...
};
```

### Step 2. Add types in tsconfig.json

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "@lollipop-onl/vue-typed-reactive"
    ]
  }
}
```

Setup completed!

### Step X. Set a weak types in tsconfig.json

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "@lollipop-onl/vue-typed-reactive/weak"
    ]
  }
}
```

when, next code is allowed:

```ts
const foo: { a: number } = { a: 0 };

// `foo.a` is a NOT optional property. but allowed on weak type mode.
Vue.typedDelete(foo, 'a');
```

## Usage

In Vue component:

```ts
@Component
export default class SampleComponent extends Component {
  /**
   * Change user age
   * @param age Age of user
   */
  changeUseAge(age: number): void {
    this.$typedSet(this.profile, 'age', age);
  }

  /**
   * Remove user middlename
   */
  removeUserMiddleName(): void {
    this.$typedDelete(this.profile, 'middlename');
  }
}
```

In Vuex mutation

```ts
export const mutations = {
  setUserProfile(state, payload) {
    Vue.typedSet(state, 'profile', payload);
  },
}
```

# Features

**`typeSet(target, propertyName/index, value)`**

* `propertyName` can set only writable properties
* `value` can set only assignable type

**`typedDelete(target, propertyName/index)`**

* `propertyName` can set only optional properties

# License

MIT
