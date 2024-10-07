import { describe, it, expect } from "vitest";
import { createRouter, createWebHistory } from "vue-router";
import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";


describe('AboutView', () => {
    it('Valida que componente about existe en la ruta /about', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'about',
                component: AboutView
            }]
        })
        router.push('/about')
        await router.isReady()
        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })

})