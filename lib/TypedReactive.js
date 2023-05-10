var TypedReactive = {
  install: function (Vue) {
    // setup of typedSet method
    Vue.typedSet = Vue.set;
    Vue.prototype.$typedSet = Vue.set;

    // setup of typedDelete method
    Vue.typedDelete = Vue.delete;
    Vue.prototype.$typedDelete = Vue.delete;
  },
};

module.exports = TypedReactive;
