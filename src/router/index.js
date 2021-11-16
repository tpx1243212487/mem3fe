import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/mem3',
    children: [{
      path: 'mem',
      name: 'MemBoard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'MemBoard', icon: 'dashboard' }
    }]
  },

  {
    path: '/reports',
    component: Layout,
    // redirect: '/reports/table',
    name: 'Reports',
    meta: { title: 'Reports', icon: 'el-icon-s-help' },
    children: [  
      {
        path: 'fixpackreport',
        name: 'Fixpack Report',
        component: () => import('@/views/reports/fixpackreport'),
        meta: { title: 'Fixpack Reporting', icon: 'tree' }
      },
      {
        path: 'estatereport',
        name: 'Estate Report',
        component: () => import('@/views/reports/estatereport'),
        meta: { title: 'Estate Report', icon: 'table' }
      },
      {
        path: 'sapphirereport',
        name: 'Sapphire Report',
        component: () => import('@/views/reports/sapphirereport'),
        meta: { title: 'Sapphire Report', icon: 'table' }
      },
      {
        path: 'patchreport',
        name: 'Patch Report',
        component: () => import('@/views/reports/patchreport'),
        meta: { title: 'Patch Report', icon: 'table' }
      },
      {
        path: 'demisereport',
        name: 'Demise Report',
        component: () => import('@/views/reports/demisereport'),
        meta: { title: 'Demise Report', icon: 'table' }
      },
      {
        path: 'billingreport',
        name: 'Billing Report',
        component: () => import('@/views/reports/billingreport'),
        meta: { title: 'Billing Report', icon: 'table' }
      },
      {
        path: 'billingmainreport',
        name: 'Billing Maintenance Report',
        component: () => import('@/views/reports/billingmainreport'),
        meta: { title: 'Billing Maintenance Report', icon: 'table' }
      },
      {
        path: 'hostbillingdefaultsreport',
        name: 'Host Billing Defaults Report',
        component: () => import('@/views/reports/hostbillingdefaultsreport'),
        meta: { title: 'Host Billing Defaults Report', icon: 'table' }
      }
    ]
  },

  {
    path: '/lookup',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Server/Instance Lookup',
        component: () => import('@/views/lookup/index'),
        meta: { title: 'Server/Instance Lookup', icon: 'form' }
      }
    ]
  },

  {
    path: '/jobmanager',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'JobManager',
        component: () => import('@/views/form/index'),
        meta: { title: 'JobManager', icon: 'form' }
      }
    ]
  },

  {
    path: '/admin',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Admin',
    meta: {
      title: 'Admin',
      icon: 'nested'
    },
    children: [
      {
        path: 'datamanagement',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Data Management',
        meta: { title: 'Data Management' },
        children: [
          {
            path: 'massupdate',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Mass Update',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'jobadministration',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Job Administration',
            meta: { title: 'Job Administration' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'serverinfo',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Server Info',
            meta: { title: 'Server Info' }
          },
          {
            path: 'uploadhpsadata',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Upload HPSA Data',
            meta: { title: 'Upload HPSA Data' }
          },
          {
            path: 'inactivitydays',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'View/Edit Inactivity Days',
            meta: { title: 'View/Edit Inactivity Days' }
          }
        ]
      },
      {
        path: 'runimports',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Run Imports',
        meta: { title: 'Run Imports' }
      }
    ]
  },

  {
    path: 'faq',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'FAQ', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
