import MegaMenu from 'primevue/megamenu';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, items } from './NavBarPrueba.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'MegaMenu', typeof __VLS_localComponents, "MegaMenu", "MegaMenu", "MegaMenu"> &
__VLS_WithComponent<'Button', typeof __VLS_localComponents, "Button", "Button", "Button"> &
__VLS_WithComponent<'Avatar', typeof __VLS_localComponents, "Avatar", "Avatar", "Avatar">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.MegaMenu; __VLS_components.MegaMenu;
// @ts-ignore
[MegaMenu, MegaMenu,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
__VLS_components.Button;
// @ts-ignore
[Button,];
__VLS_components.Avatar;
// @ts-ignore
[Avatar,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("card"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'MegaMenu' extends keyof typeof __VLS_ctx ? { 'MegaMenu': typeof __VLS_ctx.MegaMenu; } : typeof __VLS_resolvedLocalAndGlobalComponents).MegaMenu;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, model: ((__VLS_ctx.items)), class: ("p-3 surface-0 shadow-2"), style: ({}), }));
({} as { MegaMenu: typeof __VLS_5; }).MegaMenu;
({} as { MegaMenu: typeof __VLS_5; }).MegaMenu;
const __VLS_7 = __VLS_6({ ...{}, model: ((__VLS_ctx.items)), class: ("p-3 surface-0 shadow-2"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, model: ((__VLS_ctx.items)), class: ("p-3 surface-0 shadow-2"), style: ({}), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["template"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).start;
{
const __VLS_13 = __VLS_intrinsicElements["img"];
const __VLS_14 = __VLS_elementAsFunctionalComponent(__VLS_13);
const __VLS_15 = __VLS_14({ ...{}, src: ("../../assets/img/logo.png"), class: ("h-8"), alt: ("Flowbite Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, src: ("../../assets/img/logo.png"), class: ("h-8"), alt: ("Flowbite Logo"), });
const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15)!;
let __VLS_17!: __VLS_NormalizeEmits<typeof __VLS_16.emit>;
}
// @ts-ignore
[items, items, items,];
}
}
{
const __VLS_18 = __VLS_intrinsicElements["template"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
const __VLS_20 = __VLS_19({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, });
{
const [{ item }] = __VLS_getSlotParams((__VLS_8.slots!).item);
if (item.root) {
{
const __VLS_21 = __VLS_intrinsicElements["a"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
const __VLS_23 = __VLS_22({ ...{}, class: ("flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, class: ("flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"), style: ({}), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
__VLS_directiveFunction(__VLS_ctx.vRipple)(undefined);
{
const __VLS_26 = __VLS_intrinsicElements["span"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, class: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ((item.icon)), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
__VLS_styleScopedClasses = (item.icon);
}
{
const __VLS_31 = __VLS_intrinsicElements["span"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, class: ("ml-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("ml-2"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
(item.label);
(__VLS_34.slots!).default;
}
(__VLS_24.slots!).default;
}
}
else if (!item.image) {
{
const __VLS_36 = __VLS_intrinsicElements["a"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, class: ("flex align-items-center p-3 cursor-pointer mb-2 gap-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("flex align-items-center p-3 cursor-pointer mb-2 gap-2"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
{
const __VLS_41 = __VLS_intrinsicElements["span"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: ("inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = __VLS_intrinsicElements["i"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: (([item.icon, 'text-lg'])), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: (([item.icon, 'text-lg'])), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
__VLS_styleScopedClasses = ([item.icon, 'text-lg']);
}
(__VLS_44.slots!).default;
}
{
const __VLS_51 = __VLS_intrinsicElements["span"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, class: ("inline-flex flex-column gap-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("inline-flex flex-column gap-1"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
{
const __VLS_56 = __VLS_intrinsicElements["span"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("font-medium text-lg text-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("font-medium text-lg text-900"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
(item.label);
(__VLS_59.slots!).default;
}
{
const __VLS_61 = __VLS_intrinsicElements["span"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, class: ("white-space-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, class: ("white-space-nowrap"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
(item.subtext);
(__VLS_64.slots!).default;
}
(__VLS_54.slots!).default;
}
(__VLS_39.slots!).default;
}
}
else {
{
const __VLS_66 = __VLS_intrinsicElements["div"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, class: ("flex flex-column align-items-start gap-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-column align-items-start gap-3"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
{
const __VLS_71 = __VLS_intrinsicElements["img"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, alt: ("megamenu-demo"), src: ((item.image)), class: ("w-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, alt: ("megamenu-demo"), src: ((item.image)), class: ("w-full"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
}
{
const __VLS_76 = __VLS_intrinsicElements["span"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
(item.subtext);
(__VLS_79.slots!).default;
}
{
const __VLS_81 = ({} as 'Button' extends keyof typeof __VLS_ctx ? { 'Button': typeof __VLS_ctx.Button; } : typeof __VLS_resolvedLocalAndGlobalComponents).Button;
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, label: ((item.label)), outlined: (true), }));
({} as { Button: typeof __VLS_81; }).Button;
const __VLS_83 = __VLS_82({ ...{}, label: ((item.label)), outlined: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, label: ((item.label)), outlined: (true), });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
}
(__VLS_69.slots!).default;
}
}
}
}
{
const __VLS_86 = __VLS_intrinsicElements["template"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).end;
{
const __VLS_89 = ({} as 'Avatar' extends keyof typeof __VLS_ctx ? { 'Avatar': typeof __VLS_ctx.Avatar; } : typeof __VLS_resolvedLocalAndGlobalComponents).Avatar;
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{}, image: ("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"), shape: ("circle"), }));
({} as { Avatar: typeof __VLS_89; }).Avatar;
const __VLS_91 = __VLS_90({ ...{}, image: ("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"), shape: ("circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_89, typeof __VLS_91> & Record<string, unknown>) => void)({ ...{}, image: ("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"), shape: ("circle"), });
const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91)!;
let __VLS_93!: __VLS_NormalizeEmits<typeof __VLS_92.emit>;
}
}
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["p-3"];
__VLS_styleScopedClasses["surface-0"];
__VLS_styleScopedClasses["shadow-2"];
__VLS_styleScopedClasses["h-8"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["cursor-pointer"];
__VLS_styleScopedClasses["px-3"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["overflow-hidden"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["text-lg"];
__VLS_styleScopedClasses["uppercase"];
__VLS_styleScopedClasses["ml-2"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["p-3"];
__VLS_styleScopedClasses["cursor-pointer"];
__VLS_styleScopedClasses["mb-2"];
__VLS_styleScopedClasses["gap-2"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["justify-content-center"];
__VLS_styleScopedClasses["border-circle"];
__VLS_styleScopedClasses["bg-primary"];
__VLS_styleScopedClasses["w-3rem"];
__VLS_styleScopedClasses["h-3rem"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["flex-column"];
__VLS_styleScopedClasses["gap-1"];
__VLS_styleScopedClasses["font-medium"];
__VLS_styleScopedClasses["text-lg"];
__VLS_styleScopedClasses["text-900"];
__VLS_styleScopedClasses["white-space-nowrap"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["flex-column"];
__VLS_styleScopedClasses["align-items-start"];
__VLS_styleScopedClasses["gap-3"];
__VLS_styleScopedClasses["w-full"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
