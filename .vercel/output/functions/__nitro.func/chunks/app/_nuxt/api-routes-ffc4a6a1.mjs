import __nuxt_component_0 from './APITableRow-12d3efd7.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../server.mjs';
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
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "api-routes",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_APITableRow = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto mt-5 px-5" }, _attrs))}><div class="overflow-x-auto relative rounded"><table class="w-full text-sm text-left text-gray-400"><thead class="text-xs uppercase bg-gray-700 text-gray-400"><tr><th scope="col" class="py-3 px-6">Route</th><th scope="col" class="py-3 px-6">Method</th><th scope="col" class="py-3 px-6">Link</th></tr></thead><tbody>`);
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/session",
        method: "get",
        link: "/api/auth/session"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/signin",
        method: "get",
        link: "/api/auth/signin"
      }, null, _parent));
      _push(ssrRenderComponent(_component_APITableRow, {
        route: "/signout",
        method: "get & post",
        link: "/api/auth/signout"
      }, null, _parent));
      _push(`</tbody></table></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/api-routes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=api-routes-ffc4a6a1.mjs.map
