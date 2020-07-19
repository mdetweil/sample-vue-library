import { shallowMount } from '@vue/test-utils'
import BaseTextField from '@/components/_base-Text-Field.vue';

function getMountedComponent(Component: any, propsData: any) {
  return shallowMount(Component, {
    propsData
  })
}

describe('BaseTextField.vue', () => {
  it('renders label when passed', () => {
    const wrapper = getMountedComponent(BaseTextField, { label: "Hello"});
    console.log(wrapper.vm.$data)
    expect(wrapper.vm.$data.rulesFlag).toBe([]);
  })
})
