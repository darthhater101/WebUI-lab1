import { mount } from '@vue/test-utils'
import ProfileView from '@/views/ProfileView.vue'

describe('ProfileView.vue testing', () => {

    const $router = {
        push: jest.fn()
    }
    const $store = {
        state: {
            user: {
                username: "user",
                password: "pass"
            }
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(ProfileView, {
        global: {
            mocks: {
                $router,
                $store
            }
        }
    });

    window.alert = jest.fn();

    it('update with empty fields', async () => {
        await wrapper.find('input[name="username"]').setValue("");
        await wrapper.find('input[name="password"]').setValue("");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('update with empty username', async () => {
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('login with empty password', async () => {
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="password"]').setValue("");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledTimes(0);
        expect(window.alert).toBeCalledWith('Please enter username and password');
    });

    it('update with filled fields', async () => {
        await wrapper.find('input[name="username"]').setValue("username");
        await wrapper.find('input[name="password"]').setValue("password");
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledWith("UPDATE_USER", { username: "username", password: "password" })
    });

    it('logout', async () => {
        await wrapper.find('#logout').trigger('click');
        expect($store.dispatch).toBeCalledWith("LOGOUT_USER");
        expect($router.push).toBeCalledWith("/login");
    }); 
})