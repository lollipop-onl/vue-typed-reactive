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
// @/plugins/libs/vue-typed-reactive.ts
import { Plugin } from '@nuxt/types';
import Vue from 'vue';
import TypedReactive from '@lollipop-onl/vue-typed-reactive';

const plugin: Plugin = () => {
  Vue.use(TypedReactive);
};

export default plugin;
```

```ts
// nuxt.config.ts
const config: Configuration = {
  ...
  plugins: [
    '@/plugins/libs/vue-typed-reactive',
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
