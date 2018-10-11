/*
* 有时候我们需要从 store 中的 state 中派生出一些状态
* 这里的常量主要是对state里面做一些映射
* mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性
*/
export const city = state => state.city
export const cityList = state => state.cityList
export const fullScreen = state => state.fullScreen
export const palyer = state => state.palyer
