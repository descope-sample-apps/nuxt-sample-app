import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))}><div class="fixed left-0 right-0 spotlight z-10"></div><div class="max-w-520px text-center z-20"><h1 class="text-8xl sm:text-6xl font-medium mb-8"> \u{1F512} Descope + NuxtAuth </h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight"> This sample app uses NuxtAuth in Nuxt 3, to integrate Descope Authentication. </p><div class="w-full flex items-center justify-center"><a href="/protected/page" class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer">Protected Page</a></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Welcome-f3768601.mjs.map
