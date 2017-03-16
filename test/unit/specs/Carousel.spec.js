import Vue from 'vue'
import Carousel from '@/components/Carousel.vue'
import Slide from '@/components/Slide.vue'

describe('Carousel', () => {
  it('should not be able to work if not using <carousel><slide>...</slide></carousel>', () => {
    let _error = window.console.error
    try {
      let spy = sinon.spy(window.console, 'error')
      let res = Vue.compile('<carousel><slide><slide>{{ msg }}</slide></slide></carousel>')
      let vm = new Vue({
        data () {
          return {
            msg: 'hello'
          }
        },
        components: {Carousel, Slide},
        render: res.render,
        staticRenderFns: res.staticRenderFns
      })
      vm.$mount()
      sinon.assert.called(spy)
    } finally {
      window.console.error = _error
    }
  })

  it('should be ok if not <slide> present in <carousel>', () => {
    let res = Vue.compile('<carousel>{{msg}}</carousel>')
    let vm = new Vue({
      data () {
        return {
          msg: 'hello'
        }
      },
      components: {Carousel, Slide},
      render: res.render,
      staticRenderFns: res.staticRenderFns
    })
    vm.$mount()
    vm.$destroy()
  })
})
