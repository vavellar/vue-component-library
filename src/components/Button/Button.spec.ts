import { shallowMount } from '@vue/test-utils'
import Button from '@/lib-components/Button/Button.vue'

describe('Button.vue', () => {
  it('should render button with right text and class', () => {
    const wrapper = shallowMount(Button, {
      props: {
        text: 'This is a button',
        variant: "primary"
      }
    })
    const button = wrapper.find('button')
    expect(button.classes()).toContain('primary')
    expect(button.text()).toBe('This is a button')
  })
})
