import Vue from 'vue';
// @ts-ignore
import TypedReactive from '@lollipop-onl/vue-typed-reactive';

export default function TypedReactiveModule () {
  Vue.use(TypedReactive);
};

module.exports.meta = require('../package.json');
