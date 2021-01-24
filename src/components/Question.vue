<template>
    <div>
        <p class="difficulty">
          {{ currentQuestion.difficulty}}
        </p>
        <p class="question">
          {{ currentQuestion.question }}
        </p>
        
        <div class="answers">
          <button class="response" v-for="(response,index) in setAnswers(currentQuestion.correct_answer, currentQuestion.incorrect_answers)" :key="index" @click="setCurrentQuestion(response)">
            {{ response }}
          </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name:'Question',
    data: () => ({
        idx: 0,
        score: 0
    }),
    computed:{
        ...mapGetters({
            currentQuestion: 'getCurrentQuestion'
        }),
    },
    methods:{
        ...mapMutations([
            'SET_CURRENTQUESTION'
        ]),

        setCurrentQuestion(e){
            e === this.currentQuestion.correct_answer ? this.score++ : this.score 
            this.$emit('addScore',this.score)
            this.idx++
            this.$emit('addIdx',this.idx)
            this.SET_CURRENTQUESTION(this.idx)
        },
        setAnswers(correct,incorrect){
            let answers = []
            let rand = Number

            if(correct != "True"){
                rand = Math.floor(Math.random()* incorrect.length+1);
            } else {
                rand = 0
            }
            
            let j = 0;
            for(let i=0; i<= incorrect.length; i++){
                if(i == rand){
                    answers.push(correct);
                } else {
                    answers.push(incorrect[j]);
                    j++;
                }
            }
            return answers
        }
    }
}
</script>

<style scoped>

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

button{
  cursor: pointer;
  border: solid 1px black;
  border-radius: 5px;
  box-shadow: 3px 3px 8px black;
  font-size: 1.2em;
  transition: .3s ease-out;
}

button:hover{
  transform: scale(1.1);
}

.response{
  padding: 10px;
  margin: 10px 20px;

  width: 40%;
  min-height: 50px;
  height: fit-content;
}

@media only screen and (max-width: 800px) {
  .response{
    width: 80%;
  }

  
  .question{
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .difficulty{
    margin-bottom: 5px;
  }
}
</style>