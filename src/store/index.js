import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SurahList:[],
    loadingStatus:false
  },
  mutations: {
    getSurahList(state, SurahListData){
      state.SurahList = SurahListData
    },
    loadingStatus (state, newLoadingStatus){
      state.loadingStatus=newLoadingStatus
    }
  },
  actions: {
    getSurahList({commit}){
      commit('loadingStatus', true)

      return axios.get(`https://api.quran.sutanlab.id/surah`)
      .then(response=>{
        commit('getSurahList', response.data.data)
        console.log(response.data.data)
        commit('loadingStatus', false)

      })
      .catch(error =>console.log(error))
    }
  },

  getters:{
    SurahList (state){
      return state.SurahList
    },
    loadingStatus (state)
    {
      return state.loadingStatus
    }
  },
  modules: {
  }
})
