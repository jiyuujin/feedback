import Vue, { VueConstructor } from 'vue';
import Router from 'vue-router';

import store from './store';

interface Route {
  path: string;
  name: string;
  component: VueConstructor<Vue> | any;
}

Vue.use(Router);

// History Mode
const historyMode: string = 'history';

// Base URL
const baseUrl: string = process.env.BASE_URL;

// Routes
let routes: Array<Route> = []
for (let i: number = 0; i < 18; i++) {
  routes.push({
    path: i !== 0 ? `/2018/${i}` : '/2018/',
    name: `Slide2018_${i}`,
    component: () => import(`../content/2018/${i}.md`)
  })
}
for (let i: number = 0; i < 2; i++) {
  routes.push({
    path: i !== 0 ? `/2019/${i}` : '/2019/',
    name: `Slide2019_${i}`,
    component: () => import(`../content/2019/${i}.md`)
  })
}

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
