
import { describe, it, expect } from "vitest";
import { createRouter, createWebHistory } from "vue-router";
import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

//describimos a que componente haremos pruebas
describe('AboutView', () => {

    //se describe cual sera el proposito de la prueba
    it('Valida que componente about existe en la ruta /about', async () => {

        //se crea instancia del router y una ruta que apunta al componente /about
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'about',
                component: AboutView
            }]
        })

        //se navega a la ruta /about
        router.push('/about')

        //se espera a que el router este listo
        await router.isReady()

        //se monta el componente/AboutView usando el enrutador recien creado
        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })

        //se comprueba que el componente AboutView esta montado correctamente en la ruta 
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })

})