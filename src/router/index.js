import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

import Landing from '../pages/Landing.vue'
import Profile from '../pages/Profile.vue'
import Skill from '../pages/Skill.vue'
import Feedback from '../pages/Feedback.vue'
import Personal from '../pages/Personal.vue'
import Attend from '../pages/Attend.vue'
import Unsatisfy from '../pages/Unsatisfy.vue'
import Impact from '../pages/Impact.vue'
import EvanKeynote from '../pages/EvanKeynote.vue'
import LineQuizMain from '../pages/LineQuizMain.vue'
import LineQuizLottery from '../pages/LineQuizLottery.vue'
import LineQuiz1 from '../pages/LineQuiz1.vue'
import LineQuiz2 from '../pages/LineQuiz2.vue'
import LineQuiz3 from '../pages/LineQuiz3.vue'
import LineQuiz4 from '../pages/LineQuiz4.vue'
import LineQuiz5 from '../pages/LineQuiz5.vue'
import LineQuizResult from '../pages/LineQuizResult.vue'
import AfterParty from '../pages/AfterParty.vue'
import EvanAndKazupon from '../pages/EvanAndKazupon.vue'
import AdventCalendar from '../pages/AdventCalendar.vue'
import VueSlide from '../pages/VueSlide.vue'
import NextMeetup from '../pages/NextMeetup.vue'
import TheEnd from '../pages/TheEnd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/attend',
    name: 'Attend',
    component: Attend
  },
  {
    path: '/unsatisfy',
    name: 'Unsatisfy',
    component: Unsatisfy
  },
  {
    path: '/impact',
    name: 'Impact',
    component: Impact
  },
  {
    path: '/evan_keynote',
    name: 'EvanKeynote',
    component: EvanKeynote
  },
  {
    path: '/line_quiz_main',
    name: 'LineQuizMain',
    component: LineQuizMain
  },
  {
    path: '/line_quiz_lottery',
    name: 'LineQuizLottery',
    component: LineQuizLottery
  },
  {
    path: '/line_quiz_1',
    name: 'LineQuiz1',
    component: LineQuiz1
  },
  {
    path: '/line_quiz_2',
    name: 'LineQuiz2',
    component: LineQuiz2
  },
  {
    path: '/line_quiz_3',
    name: 'LineQuiz3',
    component: LineQuiz3
  },
  {
    path: '/line_quiz_4',
    name: 'LineQuiz4',
    component: LineQuiz4
  },
  {
    path: '/line_quiz_5',
    name: 'LineQuiz5',
    component: LineQuiz5
  },
  {
    path: '/line_quiz_result',
    name: 'LineQuizResult',
    component: LineQuizResult
  },
  {
    path: '/after_party',
    name: 'AfterParty',
    component: AfterParty
  },
  {
    path: '/evan_and_kazupon',
    name: 'EvanAndKazupon',
    component: EvanAndKazupon
  },
  {
    path: '/advent_calendar',
    name: 'AdventCalendar',
    component: AdventCalendar
  },
  {
    path: '/vue_slide',
    name: 'VueSlide',
    component: VueSlide
  },
  {
    path: '/next_meetup',
    name: 'NextMeetup',
    component: NextMeetup
  },
  {
    path: '/the_end',
    name: 'TheEnd',
    component: TheEnd
  }
]

const pages = routes.map(page => page.name)
store.dispatch('onFetch', { pages })

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : 'vue-fes-japan-2018-feedback/',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('setPage', { name: to.name, pages })
  return next()
})

window.addEventListener('click', e => {
  // console.log(e.offsetX + '/' + window.screen.width + ' : ', e.offsetY + '/' + window.screen.height)

  if (e.offsetX > (window.screen.width / 2)) {
    store.dispatch('onNext', { pages })
  } else {
    store.dispatch('onLast')
  }
})

window.addEventListener('keydown', e => {
  const { which } = e
  if (which < 37 || which > 40) return

  e.preventDefault()
  if (which === 37 || which === 38) {
    return store.dispatch('onLast')
  }

  store.dispatch('onNext', { pages })
})

export default router
