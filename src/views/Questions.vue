<template>
  <div class="questions">
    <div class="cadre" v-if="idx <= 14">
        <Question  @addScore="score = $event" @addIdx="idx = $event" />
    </div>

    <div class="cadre" v-if="idx > 14">
      <p class="difficulty">
        Score
      </p>
    </div>

    <div class="final" v-if="idx > 14">
      {{ score }}
    </div>

    <div class="bottom">
      <router-link to="/" class="back">
        Back
      </router-link>

      <div class="score" v-if="idx <= 14">
        {{ score }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import Question from '../components/Question.vue'

export default {
  name: 'Questions',
  components:{
    Question
  },
  props:{
    category: String
  },
  data:() => ({
    idx: 0,
    score: 0,
    answer: 2,
  }),
  computed:{
    ...mapGetters({
      questions: 'getQuestions',
      currentQuestion: 'getCurrentQuestion'
    }),
    myScore() {
      if(this.idx <=  14){
        return 'score'
      } else {
        return 'final'
      }
    }
  },
  mounted(){
    this.setQuestions(this.category)
  },
  methods:{
    ...mapActions([
      'setQuestions',
    ]),
  }
}
</script>


<style scoped>
.questions{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  min-height: 100vh;
  height: 100%;
}

.difficulty{
  width: 100%;
  line-height: 50px;
  text-transform: uppercase;
  text-align: center;
  background: green;
  color: white;
  font-weight: 600;
  font-size: 1.8em;
  margin-bottom: 25px;
}

.question{
  text-align: center;
  font-weight: 500;
  font-size: 1.5em;
  padding: 5% 20px 5px 20px;
  margin-bottom: 50px;
}

.answers{
  display: flex;
  flex-wrap: wrap;
  padding: 5% 0px 0px 0px;
  justify-content: center;
  align-items: center;
}

.cadre{
  position: relative;

  width: 50%;
  min-height: 550px;

  border-radius: 13px;
  border: solid 5px green;

  background: rgb(177, 176, 176);

  box-shadow: 0px 0px 10px black;
}

.bottom{
  display: flex;
  justify-content: space-between;
  width: 55%;
}

.score,.back{
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
  position: relative;
  bottom: 75px;
  background: green;
  box-shadow: 0px 0px 10px black;
  border-radius: 10px;
  cursor: default;

  transition: .15s ease-in;
}

.back{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.back:hover{
  background: #000;
  color: green;
}

.final{
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;

  position: absolute;
  
  transition: .5s ease-in;
}

.final::before{
  content: 'Votre score final est de :';
}

.final::after{
  content: '/ 15';
}

p{
  cursor: default;
}

@media only screen and (max-width: 800px) {
  .cadre{
    width: 95%;
  }

  .score,.back{
    width: 75px;
    height: 75px;
    line-height: 75px;
    font-size: 1.6em;

    bottom: 50px;
  }
}
</style>
