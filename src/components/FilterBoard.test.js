import { shallowMount } from '@vue/test-utils';

import FilterBoard from './FilterBoard.vue';

describe('FilterBoard.vue', () => {
  test('renders filters as props', () => {
    const wrapper = shallowMount(FilterBoard, {
      props: { 
        selectedFilter: new Set(['Frontend', 'Junior']) 
      }
    });
    expect(wrapper.props('selectedFilter').size).toBe(2);
  });
});
