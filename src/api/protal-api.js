import request from '../request/request'

/**
 * 获取导航栏目列表
 * @param {*} data
 * @returns
 */
export function navTopics (data) {
  return request({
    url: '/protal/nav/topics',
    method: 'post',
    data
  })
}

/**
 * 获取首页栏目列表
 * @param {*} data
 * @returns
 */
export function homeTopics (data) {
  return request({
    url: '/protal/home/topics',
    method: 'post',
    data
  })
}

/**
 * 根据id获取栏目信息
 * @param {*} data
 * @returns
 */
export function topic (params) {
  return request({
    url: '/protal/topic',
    method: 'get',
    params
  })
}

/**
 * 根据栏目获取信息分类列表
 * @param {*} data
 * @returns
 */
export function cates (data) {
  return request({
    url: '/protal/cates',
    method: 'post',
    data
  })
}

/**
 * 根据 topic_id 和 cate_id 获取信息列表
 * @param {*} data
 * @returns
 */
export function infos (data) {
  return request({
    url: '/protal/infos',
    method: 'post',
    data
  })
}

/**
 * 根据id获取信息详情
 * @param {*} data
 * @returns
 */
export function info (id) {
  return request({
    url: `/protal/info/${id}`,
    method: 'get'
  })
}

/**
 * 获取资料文件列表
 * @param {*} data
 * @returns
 */
export function files (data) {
  return request({
    url: `/protal/files`,
    method: 'post',
    data
  })
}

/**
 * 在线留言
 * @param {*} data
 * @returns
 */
export function onlinemsg (data) {
  return request({
    url: '/protal/online/msg',
    method: 'post',
    data
  })
}

export default { navTopics, homeTopics, topic, cates, infos, info, files, onlinemsg }
