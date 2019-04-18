import Vue, { VueConstructor } from 'vue';
import Router from 'vue-router';

import store from './store';

import Landing from './views/Landing.vue';
import Profile from './views/Profile.vue';
import Thanks from './views/Thanks.vue';
import Feedback from './views/Feedback.vue';
import Attend from './views/Attend.vue';
import EvanKeynote from './views/EvanKeynote.vue';
import LineQuizMain from './views/LineQuizMain.vue';
import LineQuizLottery from './views/LineQuizLottery.vue';
import LineQuiz1 from './views/LineQuiz1.vue';
import LineQuiz2 from './views/LineQuiz2.vue';
import LineQuiz3 from './views/LineQuiz3.vue';
import LineQuiz4 from './views/LineQuiz4.vue';
import LineQuiz5 from './views/LineQuiz5.vue';
import LineQuizResult from './views/LineQuizResult.vue';
import AfterParty from './views/AfterParty.vue';
import EvanAndKazupon from './views/EvanAndKazupon.vue';
import AdventCalendar from './views/AdventCalendar.vue';
import VueSlide from './views/VueSlide.vue';
import NextMeetup from './views/NextMeetup.vue';

interface Route {
  path: string;
  name: string;
  component: VueConstructor<Vue>;
}

Vue.use(Router);

// History Mode
const historyMode: string = 'history';

// Base URL
const baseUrl: string = process.env.BASE_URL;

// Routes
const routes: Array<Route> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
  {
    path: '/attend',
    name: 'Attend',
    component: Attend,
  },
  {
    path: '/evan_keynote',
    name: 'EvanKeynote',
    component: EvanKeynote,
  },
  {
    path: '/line_quiz_main',
    name: 'LineQuizMain',
    component: LineQuizMain,
  },
  {
    path: '/line_quiz_lottery',
    name: 'LineQuizLottery',
    component: LineQuizLottery,
  },
  {
    path: '/line_quiz_1',
    name: 'LineQuiz1',
    component: LineQuiz1,
  },
  {
    path: '/line_quiz_2',
    name: 'LineQuiz2',
    component: LineQuiz2,
  },
  {
    path: '/line_quiz_3',
    name: 'LineQuiz3',
    component: LineQuiz3,
  },
  {
    path: '/line_quiz_4',
    name: 'LineQuiz4',
    component: LineQuiz4,
  },
  {
    path: '/line_quiz_5',
    name: 'LineQuiz5',
    component: LineQuiz5,
  },
  {
    path: '/line_quiz_result',
    name: 'LineQuizResult',
    component: LineQuizResult,
  },
  {
    path: '/after_party',
    name: 'AfterParty',
    component: AfterParty,
  },
  {
    path: '/evan_and_kazupon',
    name: 'EvanAndKazupon',
    component: EvanAndKazupon,
  },
  {
    path: '/advent_calendar',
    name: 'AdventCalendar',
    component: AdventCalendar,
  },
  {
    path: '/vue_slide',
    name: 'VueSlide',
    component: VueSlide,
  },
  {
    path: '/next_meetup',
    name: 'NextMeetup',
    component: NextMeetup,
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
  },
];

const pages = routes.map(page => page.name);
store.dispatch('onFetch', { pages });

const routerOptions: object = {
  mode: historyMode,
  base: baseUrl,
  routes,
};

const router = new Router(routerOptions);

router.beforeEach((to: any, from: any, next: any) => {
  store.dispatch('setPage', { name: to.name, pages });
  return next();
});

window.addEventListener('click', e => {
  // console.log(e.offsetX + '/' + window.screen.width + ' : ', e.offsetY + '/' + window.screen.height)

  if (e.offsetX > (window.screen.width / 2)) {
    store.dispatch('onNext', { pages });
  } else {
    store.dispatch('onLast');
  }
});

window.addEventListener('keydown', e => {
  const { which } = e;

  if (which < 37 || which > 40) {
    return;
  }

  e.preventDefault();

  if (which === 37 || which === 38) {
    return store.dispatch('onLast');
  }

  store.dispatch('onNext', { pages });
});

export default router;
