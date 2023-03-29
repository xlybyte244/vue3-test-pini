import { defineStore } from "pinia";

export const useCart = defineStore('cart', {
  state(){
    return {
      count: 2
    }
  },
  actions: {
    addCount(){
      this.count++
    }
  }
})