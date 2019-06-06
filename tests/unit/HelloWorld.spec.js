import { mount } from '@vue/test-utils'
import store from '@/store'
import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'
import Vuetify from 'vuetify'

describe("HelloWorld.vue", () => {
    let wrapper;
    beforeAll(() => {
        Vue.use(Vuetify, {});
        wrapper = mount(HelloWorld, { store, Vue })
    }),
    test("true is true", () => {
        expect(true).toEqual(true)
    });
    test("Mounts correctly", () => {
        expect(wrapper.isVueInstance).toBeTruthy()
    });
    test("idk what i'm doing", () => {
        wrapper
        expect()
    })
});