import { shallowMount } from '@vue/test-utils';

import DynamicLogo from './DynamicLogo.vue';

describe('DynamicLogo.vue', () => {
  test('imports and renders a logo as an svg', () => {
    const wrapper = shallowMount(DynamicLogo, {
      props: { 
        name: ''
      }
    });
  });
});
