import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          missionName: '國中英文',
          providerName: '許先生',
          areas: ['juniorhigh', 'english'],
          description:
            "國中到高中的英文文法單字以及協助讀書計畫",
          hourlyRate: 300
        },
        {
          id: 'c2',
          missionName: '高中物理化學',
          providerName: '曾嘉玲',
          areas: ['seniorhigh', 'physics', 'chemistry'],
          description:
            '清大物理系大二學生，兩年家教經驗',
          hourlyRate: 500
        }
      ]


    }
  },
  mutations,
  actions,
  getters
}