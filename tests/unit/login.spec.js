import { mount } from '@vue/test-utils'
import LoginView from '@/views/LogInView.vue'

describe('LoginView.vue testing', () => {

    const $router = {
        push: jest.fn()
    }
    const $store = {
        dispatch: jest.fn()
    }

    const wrapper = mount(LoginView, {
        global: {
            mocks: {
                $router,
                $store
            }
        }
    });

    window.alert = jest.fn();

    it('login with empty username', async () => {

        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($router.push).toBeCalledTimes(0);
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('login with empty password', async () => {

        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="password"]').setValue("");
        await wrapper.find('button').trigger('click');
        expect($router.push).toBeCalledTimes(0);
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('login with filled fields', async () => {

        await wrapper.find('input[name="username"]').setValue("default");
        await wrapper.find('input[name="password"]').setValue("1111");
        await wrapper.find('button').trigger('click');
        expect($router.push).toBeCalledWith("/profile")
        expect($store.dispatch).toBeCalledWith("LOGIN_USER", { username: "default", password: "1111" })
    });
})