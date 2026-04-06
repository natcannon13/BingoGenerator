<script setup lang="ts">
import{ref} from 'vue';
import BingoCard from './BingoCard.vue';
import { router } from '@/router/router';
const showHelp = ref(false);
const simple = ref(false);
</script>

<template>
    <div class = "start">
    <div class="title">
        <h1 class="blue">Bingo Card Generator</h1>
        <h3 class="blue">by Nat Cannon</h3>
    </div>
    <div class="buttons">
        <button @click="router.push('/card'); simple = true">
           Simple Mode
         </button>
        <button @click="router.push('/card'); simple = false">
           Balanced Mode
        </button>
        <button @click="showHelp = true">
            Help
        </button>
    </div>
    </div>
<div v-if="showHelp" class = "overlay">
    <div class = "help-modal">
        <h1 class="blue">Help</h1>
        <p>This is a site to generate custom bingo cards.</p>
        <h2 class="blue">Simple Mode</h2>
        <p >Simple Mode will generate a simple card. Input at least 24 goals, and they will be randomly selected and placed on the card for you to print and play.</p>
        <h2 class="blue">Advanced Mode</h2>
        <p>Balanced Mode will generate a balanced card such that each valid bingo is equally difficult. Input at least 5 goals in each of the 5 difficulty categories. An algorithm will create a balanced card for you to print and play.</p>
        <div class = buttons>
            <button @click="showHelp = false">Close</button>
        </div>
    </div>
</div>  
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: sticky;
  top: -10px;
}

.overlay{
  position: fixed;    
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;      
  justify-content: center;
  align-items: center;

  z-index: 9999; 
}
.help-modal{

    max-width: 60%;
    max-height: 60%;
    border: 5px solid;
    padding: 5%;

    z-index: 9999;

    background: rgb(16, 21, 21);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
}

.start{
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>