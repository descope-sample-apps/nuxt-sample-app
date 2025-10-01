import { u as useSession } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "page",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, status } = useSession();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-0f43f914><div class="fixed left-0 right-0 spotlight z-10" data-v-0f43f914></div><div class="max-w-520px text-center z-20" data-v-0f43f914><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0f43f914> See all available session information below: </p><div class="text-left p-5 bg-gray-800 rounded-lg" data-v-0f43f914>`);
      if (unref(status)) {
        _push(`<pre data-v-0f43f914><span data-v-0f43f914>Status:</span> ${ssrInterpolate(unref(status))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)) {
        _push(`<pre data-v-0f43f914><span data-v-0f43f914>Data:</span> ${ssrInterpolate(unref(data))}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/protected/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f43f914"]]);

export { page as default };
//# sourceMappingURL=page-1f81a5bc.mjs.map
