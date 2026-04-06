<script setup lang="ts">
import { router } from '@/router/router';
</script>

<template>

<div class = "container">

    <div class = "card">
        <div class = "card-grid">
            <div v-for = "n in 25" :key="n" class = "cell">
                {{ n }}
            </div>
        </div>
    </div>
    <div class = "input">
        <p>Trivial</p>
        <input></input>
        <p>Easy</p>
        <input></input>
        <p>Moderate</p>
        <input></input>
        <p>Hard</p>
        <input></input>
        <p>Ridiculous</p>
        <input></input>

    </div>

</div>

</template>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.cell {
  border: 1px solid #ccc;
  height: 120px;
  width: 120px;
  text-align: center;
}

.input input{
    padding:20px;
    height:100px;
    width: 400px;
}
</style>