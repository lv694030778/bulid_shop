import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import typeList from '@/components/leftContent/typeList'
import dispose from '@/components/leftContent/dispose'
import rightHeader from '@/components/rightContent/rightHeader'
import nonCommercial from '@/components/rightContent/build_manage/build_list/non_commercial'
import archives from '@/components/rightContent/build_manage/build_list/archives'
import buildArchives from '@/components/rightContent/build_manage/build_list/archives/build_archives'
import buildEdit from '@/components/rightContent/build_manage/build_list/archives/build_edit'
import buildPlan from '@/components/rightContent/build_manage/build_list/archives/build_plan'
import property from '@/components/rightContent/build_manage/build_list/archives/property'
import sellingPrice from '@/components/rightContent/build_manage/build_list/selling_price'
import buildTags from '@/components/rightContent/build_manage/build_list/build_tags'
import periphery from '@/components/rightContent/build_manage/build_list/periphery'
import salesStatus from '@/components/rightContent/build_manage/build_list/salesStatus/salesStatus'
import houseLayout from '@/components/rightContent/build_manage/build_list/houseLayout/houseLayout'
import dynatown from '@/components/rightContent/build_manage/build_list/dynatown/dynatown'
import forensicsList from '@/components/rightContent/build_manage/obtain_evidence/forensics_list'
import evidenceHead from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/evidenceHead'
import basicInformation from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/basicInformation'
import timeAxis from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/timeAxis'
import information from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/information'
import roomPrice from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/roomPrice'
import dynamicLeft from '@/components/rightContent/build_manage/contentMgt/dynamicLeft'
import dynamicRight from '@/components/rightContent/build_manage/contentMgt/dynamicRight'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      props: true,
      component: header,
      redirect:'/typeList',
      children: [
        {
        path: '/typeList',
        name: '楼盘管理',
        props: true,
        component: typeList,
        redirect:'/rightHeader',
        children: [
          {
          path: '/rightHeader',
          name: '楼盘列表',
          props: true,
          component: rightHeader,
          redirect:'/non_commercial',
          children: [{
            path: '/non_commercial',
            name: '非商业',
            props: true,
            component: nonCommercial,
          },
            {
            path: '/archives',
            name: '楼盘信息',
            props: true,
            component: archives,
            redirect:'/buildArchives',
            children: [
              {
              path: '/buildArchives',
              name: '楼盘档案',
              props: true,
              component: buildArchives,
            }, {
              path: '/buildEdit',
              name: '创建楼盘',
              props: true,
              component: buildEdit,
            }, {
              path: '/buildPlan',
              name: '建筑规划',
              props: true,
              component: buildPlan,
            }, {
              path: '/property',
              name: '物业信息',
              props: true,
              component: property,
            }, {
              path: '/sellingPrice',
              name: '销售价格',
              props: true,
              component: sellingPrice,
            }, {
              path: '/buildTags',
              name: '楼盘标签',
              props: true,
              component: buildTags,
            }, {
              path: '/periphery',
              name: '配套周边',
              props: true,
              component: periphery,
            },
              {
                path: '/buildArchives',
                name: '销售状态',
                props: true,
                component: buildArchives,
              }]
          },
            {
              path: '/archives',
              name: '销售状态',
              props: true,
              component: archives,
              redirect:'/salesStatus',
              children: [{
                path: '/salesStatus',
                name: '当前状态',
                props: true,
                component: salesStatus,
              }]
            },
            {
              path: '/archives',
              name: '图片信息',
              props: true,
              component: archives,
              redirect:'/houseLayout',
              children: [{
                path: '/houseLayout',
                name: '户型图',
                props: true,
                component: houseLayout
              }]
            },
            {
              path: '/archives',
              name: '置业顾问',
              props: true,
              component: archives,
              redirect:'/dynatown',
              children: [{
                path: '/dynatown',
                name: '',
                props: true,
                component: dynatown
              }]
            },
          ]
        },
          {
            path: '/rightHeader',
            name: '摇号管理',
            props: true,
            component: rightHeader,
            redirect:'/forensicsList',
            children: [{
              path: '/forensicsList',
              name: '摇号列表',
              component: forensicsList
            },
              {
                path: '/evidenceHead',
                name: '取证详情',
                component: evidenceHead,
                redirect:'/basicInformation',
                children: [{
                  path: '/basicInformation',
                  name: '基本信息',
                  component: basicInformation
                }, {
                  path: '/timeAxis',
                  name: '时间轴',
                  component: timeAxis
                }, {
                  path: '/information',
                  name: '购房资料',
                  component: information
                }, {
                  path: '/roomPrice',
                  name: '一房一价',
                  component: roomPrice
                }]
              }
            ]
          },
          {
            path: '/rightHeader',
            name: '内容管理',
            props: true,
            component: rightHeader,
            redirect:'/forensicsList',
            children: [{
              path: '/dynamicLeft',
              name: '动态管理',
              component: dynamicLeft,
              redirect:'/dynamicRight',
              children: [{
                path: '/dynamicRight',
                name: '',
                component: dynamicRight,
              }]
            }
            ]
          }
        ]
      },
        {
          path: '/dispose',
          name: '配置管理',
          component: dispose
        }]
    }

  ]
})
