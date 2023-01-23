import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

test('mount component', async () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = mount(HelloWorld, {
    props: {
      msg: "Hello world",
    },
  })

  expect(wrapper.text()).toContain('Hello world')
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('count is 1')

  await wrapper.get('button').trigger('click')

  expect(wrapper.text()).toContain('count is 2')
})