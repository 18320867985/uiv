import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: require('./../components/pages/Home.vue')},
  {path: '/install', component: require('./../components/pages/Install.vue')},
  {path: '/i18n', component: require('./../components/pages/I18n.vue')},
  {path: '/getting-started', component: require('./../components/pages/GettingStarted.vue')},
  {path: '/alert', component: require('./../components/pages/AlertDoc.vue')},
  {path: '/carousel', component: require('./../components/pages/CarouselDoc.vue')},
  {path: '/collapse', component: require('./../components/pages/CollapseDoc.vue')},
  {path: '/date-picker', component: require('./../components/pages/DatePickerDoc.vue')},
  {path: '/dropdown', component: require('./../components/pages/DropdownDoc.vue')},
  {path: '/modal', component: require('./../components/pages/ModalDoc.vue')},
  {path: '/pagination', component: require('./../components/pages/PaginationDoc.vue')},
  {path: '/popover', component: require('./../components/pages/PopoverDoc.vue')},
  {path: '/progress-bar', component: require('./../components/pages/ProgressBarDoc.vue')},
  {path: '/tabs', component: require('./../components/pages/TabsDoc.vue')},
  {path: '/time-picker', component: require('./../components/pages/TimePickerDoc.vue')},
  {path: '/tooltip', component: require('./../components/pages/TooltipDoc.vue')},
  {path: '/typeahead', component: require('./../components/pages/TypeaheadDoc.vue')}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach(route => {
  window.scrollTo(0, 0)
})

export default router
