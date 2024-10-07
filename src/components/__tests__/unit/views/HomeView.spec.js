import { describe, it, expect } from "vitest";
import HomeView from "@/views/HomeView.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

describe('HomeView', () => {

    it('Valida que el componente about exista en la ruta /', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/',
                name: 'home',
                component: HomeView
            }]
        })
        router.push('/')

        await router.isReady()

        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })
})