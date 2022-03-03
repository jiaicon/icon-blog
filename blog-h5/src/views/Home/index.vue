<template>
  <div>
    <JHeader />
    <div class="nav-outer">
      <div class="nav-inner">
        <JNav @getContainerList="getData" />
      </div>
    </div>
    <div class="container">
      <router-view :data="state.list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import JHeader from '@/views/Home/components/JHeader/index.vue';
import JNav from '@/views/Home/components/JNav/index.vue';

const state = reactive({ list: [] })
const layout = {
  components: {JHeader, JNav},
}
function getData(e) {
  console.log(e.source_key)
  state.list = [
    {id: 1, title: 'abc', content: 'dasdas'},
    {id: 2, title: 'abc', content: 'dasdas'},
    {id: 3, title: 'abc', content: 'dasdas'},
    {id: 4, title: 'abc', content: 'dasdas'},
    {id: 5, title: 'abc', content: 'dasdas'},
    {id: 6, title: 'abc', content: 'dasdas'},
  ];
}

</script>

<style>
.container {
  position: relative;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 960px;
  background-color: #FFFFFF;
}
.nav-outer {
  background-color: #FFFFFF;
}
.nav-inner {
  margin: 0 auto;
  width: 100%;
  max-width: 1010px;
}
</style>
