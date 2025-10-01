import { defineComponent, createBlock, Teleport, h } from 'vue';
import { c as createError } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '../../nitro/config.mjs';
import 'destr';
import 'cookie-es';
import 'scule';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import 'requrl';
import 'vue/server-renderer';

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    var _a;
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    if (typeof component === "object") {
      await ((_a = component.__asyncLoader) == null ? void 0 : _a.call(component));
    }
    return () => [
      createBlock(Teleport, { to: "nuxt-island" }, [h(component || "span", props.context.props)])
    ];
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-3a357bad.mjs.map
