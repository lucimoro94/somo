
<template>

  <SearchBar :placeholder="'What are you searching for?'"/>

  <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-4 justify-items-center mt-10" >
    <Product v-for="product in products" :key="product.id" :product="product"/>
  </div>
  
</template>

<script setup>
import Product from '@/components/Product.vue'
import SearchBar from '@/components/Searchbar.vue'
import { appStore } from '@/stores/Store.js'

const products = appStore().getProducts

</script>

<style scoped>

</style>
