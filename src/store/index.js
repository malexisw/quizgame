import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: ['General Knowledge','Science & Nature','Sports','History','Art','Animals','Politics','Geography','Video Games','Film','Music','Comics'],
    currentQuestion: [],
    questions: null,
    isLoading: null,
  },
  getters:{
    getQuestions: (state) => (state.questions),
    getCurrentQuestion: (state) => (state.currentQuestion),
    getCategories: (state) => (state.categories),
    getLoading: (state) => (state.isLoading)
  },
  mutations: {
    SET_CURRENTQUESTION(state,i){
      state.currentQuestion = state.questions[i]
    },
    SET_QUESTIONS(state,questions){
      questions.forEach(i => state.questions.push(i))
    },
    LOADING(state,e){
      state.isLoading = e
    },
    REMOVE_QUESTIONS(state){
      state.questions = []
    }
  },
  actions: {
    async setQuestions({commit},category){

      commit('LOADING',true)
      commit('REMOVE_QUESTIONS')


      if(category == 'General Knowledge'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })
  
        await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })
  
        await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Science & Nature'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=17&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=17&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=17&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Sports'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'History'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=23&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Art'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=25&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=25&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=25&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Animals'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=27&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=27&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Politics'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=24&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=24&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=24&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Geography'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=22&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=22&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Video Games'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=15&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=15&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Film'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=11&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=11&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Music'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=12&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=12&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })

      } else if(category == 'Comics'){

        await axios.get('https://opentdb.com/api.php?amount=5&category=29&difficulty=easy')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=29&difficulty=medium')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .catch(err => {console.log(err) })

        await axios.get('https://opentdb.com/api.php?amount=5&category=29&difficulty=hard')
        .then(response => { commit('SET_QUESTIONS', response.data.results)})
        .finally( () => { commit('LOADING',false)})
        .catch(err => {console.log(err) })
      }

      commit('SET_CURRENTQUESTION',0)
    }
  },
  modules: {
  }
})
