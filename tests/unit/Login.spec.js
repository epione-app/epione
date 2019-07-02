import { mount } from '@vue/test-utils'
import store from '@/store'
import Login from '@/components/ui/auth/Login.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

describe("Login.vue", () => {
    let wrapper;
    beforeAll(() => {
        Vue.use(Vuetify, {});
        wrapper = mount(Login, { store, Vue });
    }),
    test("Is Vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy()
    });
})