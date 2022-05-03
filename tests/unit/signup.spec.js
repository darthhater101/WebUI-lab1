import { mount } from '@vue/test-utils'
import SignUpView from '@/views/SignUpView.vue'

describe('SignUpView.vue testing', () => {

    const $router = {
        push: jest.fn()
    }
    const $store = {
        dispatch: jest.fn()
    }

    const wrapper = mount(SignUpView, {
        global: {
            mocks: {
                $router,
                $store
            }
        }
    });

    window.alert = jest.fn();

    it('signup with empty username', async () => {
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect($router.push).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('signup with empty password', async () => {
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="password"]').setValue("");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect($router.push).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('signup with filled fields', async () => {
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledWith("ADD_USER", { username: "username", password: "password", score: 0 })
        expect($router.push).toBeCalledWith("/login");
    });
})