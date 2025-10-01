import { _ as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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

const _sfc_main = {
  props: {
    route: String,
    method: String,
    link: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<tr${ssrRenderAttrs(mergeProps({ class: "bg-gray-800 border-gray-700" }, _attrs))}><th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">${ssrInterpolate($props.route)}</th><td class="py-4 px-6 uppercase">${ssrInterpolate($props.method)}</td><td class="py-4 px-6">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    href: $props.link,
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View Route <i class="fa fa-external-link"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" View Route "),
          createVNode("i", { class: "fa fa-external-link" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/api/APITableRow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=APITableRow-12d3efd7.mjs.map
