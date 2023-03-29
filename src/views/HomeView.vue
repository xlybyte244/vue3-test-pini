

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div>pinia</div>
    <p>{{cartStore.count}}</p>
    <button @click="cartStore.addCount">add</button>
    <div class="box">
      <span>哈哈哈哈hhsdfs</span>
      <svg-icon icon-class="abv" style="width: 50px;height:50px" class="svg" color="#ccc"/>
    </div>
  </main>
</template>

<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { useCart } from '@/stores/cart.js'
const cartStore = useCart()

</script>

<style scoped>
.box {

}
</style>