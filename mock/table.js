import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})
const data2 = Mock.mock({
  'items|30': [{
    photo: '@id',
    anomaly: 0.246,
    warnTimes:4,
    taskSource:'数据中心',
    warnTime:'@datetime',
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    checkStatus:'未核查'
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/workFind/getPersonFatigue',
    type: 'post',
    response: config => {
      const items = data2.items
      return {
        code: 20000,
        success:true,
        errorMsg:null,
        msg:'操作成功！',
        object: {
          total: items.length,
          data: items
        }
      }
    }
  }
]
