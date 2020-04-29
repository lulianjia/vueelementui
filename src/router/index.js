import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/components/Upload'
import TimePicker from '@/components/TimePicker'
import Table from '@/components/Table'
import NavMenu from '@/components/NavMenu'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/time',
      name: 'TimePicker',
      component: TimePicker
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/nav',
      name: 'NavMenu',
      component: NavMenu
    }
  ]
})
