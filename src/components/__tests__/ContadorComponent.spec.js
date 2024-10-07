import { describe, it, expect } from "vitest";
import ContadorComponent from "../ContadorComponent.vue";
import { mount } from "@vue/test-utils";


describe('ContadorComponent.vue', () => {
    const wrapper = mount(ContadorComponent)

    it('El Html se mantiene en las pruebas', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })


    it('Tiene un boton para aumentar el contador con texto +1', () => {
        const btnAumentar = wrapper.find('#aumentar')
        expect(btnAumentar.text()).toBe('Aumentar +1')
    })
    it('tiene un boton para reducir el contador con texto disminuir-1',()=>{
        const btnReducir =wrapper.find('#disminuir')
        expect(btnReducir.text()).toBe('Disminuir -1')
    })

    it('el contador parte en 0',()=>{
        const contador=wrapper.find('#contador')
        expect(contador.text()).toBe('0')
    })
})
