import { shallowMount } from '@vue/test-utils';

import JobsList from './JobsList.vue';
import jobs from '../assets/data.json';

const availableJobs = jobs.map((job) => Object.assign({}, job, {
  logo: job.logo.replace(/.\/images\//g, ''), // we don't want the relative path used
  selectable: [job.role, job.level].concat(job.languages, job.tools.reverse())
}));

describe('JobsList.vue', () => {
  test('renders a partial list containing the "Senior" position tag', () => {
    const wrapper = shallowMount(JobsList, {
      props: { 
        jobs: availableJobs, 
        selectedFilter: new Set(['Senior']) 
      }
    });
    expect(wrapper.get('article > div > div > p').text()).toEqual('Senior Frontend Developer');
  });

  test('should emit addFilter event to parent when a tablet is clicked to add a new filter', async () => {
    const wrapper = shallowMount(JobsList, {
      props: { 
        jobs: availableJobs, 
        selectedFilter: new Set(['CSS']) 
      }
    });
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.emitted()).toHaveProperty('addFilter');
  });
});
