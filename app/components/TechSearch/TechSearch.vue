<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore/searchStore'
import { ref } from 'vue'

const searchStore = useSearchStore()
const search = ref('')
const handleSearch = () => {
  searchStore.updateSearch(search.value)
}
</script>
<template>
  <div class="tech-search">
    <input type="text" v-model="search" placeholder="Search for a technology" />
    <button @click="handleSearch">Search</button>
  </div>
</template>
<style scoped>
.tech-search {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
