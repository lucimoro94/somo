
<template>
  
  <div class="xl:w-4/6 mx-auto p-2 overflow-y-scroll no-scrollbar h-screen">
    
    <SearchBar :placeholder="'What are you searching for?'" class="sticky top-12 z-10" />

    <div class="mt-10">
      <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 xl:grid-cols-6 place-items-stretch" >
        <Product v-for="product in products" :key="product.id" :product="product" class="w-full"/>
      </div>
    </div>

  </div>

  <AccountFloatingButton v-model:active="active" />
  <SidePanel v-model:active="active" />

</template>

<script setup>
  import Product from '@/components/Product.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import SidePanel from '@/components/uiElements/SidePanel.vue'
  import AccountFloatingButton from '@/components/uiElements/AccountFloatingButton.vue'

  import { appStore } from '@/stores/Store.js'

  import { ref } from 'vue'

  const products = appStore().getProducts

  const users = appStore().getUsers

  const active = ref(true)
  

</script>

<style scoped>

</style>
