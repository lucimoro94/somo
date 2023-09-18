<template>
  <v-container>
    
    <v-row>
      <v-img src="../assets/logo.png" height="100"></v-img>
    </v-row>

    <v-row>
      <SearchBar :label="'What are you searching for?'" />
    </v-row>

    <v-row class="mt-8">
      <v-col v-for="product in productStore.get_filteredProducts" :key="product.id" cols="6" sm="4" md="2">
        <Product :product="product" />
      </v-col>
    </v-row>  
    
    <Login />

    <FloatingMenu />

  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  //Components
  import FloatingMenu from '@/components/FloatingMenu.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import Product from '@/components/Product.vue'
  import Login from '@/components/Login.vue'

  //Store
  import { appStore } from '@/store/app'

  const userStore = appStore().users
  const productStore = appStore().products

  const { userLogged } = storeToRefs(userStore)

</script>


