import { mount } from '@vue/test-utils';

import App from './App.vue';

describe('App.vue', () => {
  test('Should not display the filter board when there are no filters applied', async () => {
    const wrapper = mount(App, {
      data() { 
        return { 
          selectedFilter: new Set([]) 
        }
      }
    });
    expect(wrapper.find('div.hidden').exists()).toBe(true);
  });
});
