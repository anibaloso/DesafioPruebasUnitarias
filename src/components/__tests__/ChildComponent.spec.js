import { describe, it, expect } from "vitest";
import ChildComponent from "../ChildComponent.vue";
import { mount } from "@vue/test-utils";

//se describe a que componente se le hara las pruebas 
describe('ChildComponent', () => {
    it('Emite el evento "enviando" con un mensaje cuando se hace click con el boton', async () => {
        //montamos el componente
        const wrapper = mount(ChildComponent)

        //buscamos el input para el mensaje y el boton enviar
        const input = wrapper.find('input')
        const button = wrapper.find('button')

        //se simula el mensaje agregado en el input
        await input.setValue('Buenas tardes')

        //se simula el apretar el boton
        await button.trigger('click')

        //se verifica que el evento "enviando" fue emitido
        expect(wrapper.emitted().enviando).toBeTruthy()

        //se verifica que el valor emitido es "Buenas tardes"
        expect(wrapper.emitted().enviando[0]).toEqual(['Buenas tardes'])
    })
})