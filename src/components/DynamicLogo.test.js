import { shallowMount } from '@vue/test-utils';

import DynamicLogo from './DynamicLogo.vue';

describe('DynamicLogo.vue', () => {
  test('imports and renders a logo', () => {
    const wrapper = shallowMount(DynamicLogo, {
      props: { 
        name: 'manage.svg'
      }
    });
    expect(wrapper.find('[data-test="logo-container"]').exists()).toBe(true);
  });
});
