import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('HomeView.vue testing', () => {
    
    const $store = {
        state: {
            board: {
                cells: undefined
            }
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(HomeView, {
        global: {
            mocks: {
                $store
            }
        }
    });

    it('check color', async () => {
        wrapper.find('.cell');
    });

    it('checks reset button', async () => {
        await wrapper.find('button').trigger('click');
        expect($store.dispatch).toBeCalledWith("RESET");
    });
})