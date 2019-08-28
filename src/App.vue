<template>
  <div id="app">
    <div class="row justify-content-center">
      <!-- <img alt="Vue logo" width="100px" src="./assets/logo.png"> -->
    </div>
    <Task />
  </div>
</template>

<script>
import Task from './components/Task.vue'

export default {
  name: 'app',
  components: {
    Task
  }

  
}
</script>


