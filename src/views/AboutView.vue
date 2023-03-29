<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ useCount.count }}</p>
    <button @click="useCount.increment">添加</button>
    <div class="pdf">
      <iframe
        src="/pdfjs2.6.347/web/viewer.html?file=https://static0.xesimg.com/light-live-fe-static/test/talqs-test/paper.pdf"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { useCounterStore } from "../stores/counter"
export default defineComponent({
  setup() {
    const useCount = useCounterStore()
    return {
      useCount
    }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.pdf {
  width: 1000px;
  height: 500px;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
