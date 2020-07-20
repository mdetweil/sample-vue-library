import { shallowMount, createLocalVue } from '@vue/test-utils'
import BaseTextField from '@/components/_base-Text-Field.vue';
import vuetify from "vuetify";

describe('BaseTextField.vue', () => {
  let wrapper: any;
  beforeEach( () => {
    const localVue = createLocalVue();
    localVue.use(vuetify);

    wrapper = shallowMount(BaseTextField, {
      localVue
    })
  })
  
  it('returns a vue instancee', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  })
})
