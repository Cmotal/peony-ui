declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.md" {
  import { Component } from "vue";
  var component: Component;
  export default component;
}
