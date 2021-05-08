import { getCurrentBaseURL } from './utils/url'

/**
 * HTTP 接口请求入口地址
 */
export const API_BASE_URL = process.env.VUE_APP_BASE_API

/**
 * 静态资源访问入口地址
 */
export const IMAGE_BASE_URL = process.env.VUE_APP_IMAGE_BASE_URL

/**
 * 当前站部署地址，主要用于授权等场景
 */
export const DEPLOY_URL = getCurrentBaseURL()

/**
 * 构建信息
 */
export const BUILD_INFO = {
  // 代码版本：tag or hash
  version: process.env.VUE_APP_BUILD_VERSION,
  // 代码提交版本 git commit version hash
  commithash: process.env.VUE_APP_BUILD_COMMITHASH,
  // 代码分支: git branch
  branch: process.env.VUE_APP_BUILD_BRANCH,
  // 构建时间: number (ms)
  time: parseInt(process.env.VUE_APP_BUILD_TIME)
}
