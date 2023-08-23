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
  test('should emit remove event to parent when removing an individual tag', async () => {
    const wrapper = shallowMount(FilterBoard, {
      props: { 
        selectedFilter: new Set(['Frontend']) 
      }
    });
    await wrapper.find('div > div > button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('removeFilter');
  });
  test('should emit removeAll event to parent component when clicking the clear text button', async () => {
    const wrapper = shallowMount(FilterBoard, {
      props: { 
        selectedFilter: new Set(['Frontend', 'Junior']) 
      }
    });
    await wrapper.find('#clear-all').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('removeAll');
  });
});