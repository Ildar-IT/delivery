import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    data: null,
  },
  getters: {

  },
  mutations: {
    setData(state, items) {
      state.data = items;
    },
  },
  actions: {
    fetchData() {
      return axios.get(' http://localhost:3000/db')
        .then(response => {
          let data = response.data.machines;
          data.map(el => {
            el.tradePoints = response.data.tradePoints.find(item => item.id === el.tradePointId) || null;
            el.machineTypes = response.data.machineTypes.find(item => item.id === el.typeId).tags || null;
          })
          this.commit('setData', data);
        })
        .catch((err) => console.log(err));
    }
  },
  modules: {
  }
})
