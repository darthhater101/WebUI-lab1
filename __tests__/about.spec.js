import { mount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue testing', () => {
    const wrapper = mount(AboutView);

    it('checks if image exist', () => {
        const images = wrapper.findAll('img');
        expect(images.length).toBe(1);
    });
})