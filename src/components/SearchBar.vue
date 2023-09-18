<template>
  
    <v-text-field
      v-model="searchedProduct"
      :loading="loading"
      density="default"
      variant="solo"
      :label="label"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="search(searchedProduct)"
      @keyup.enter="search(searchedProduct)"
    ></v-text-field>
  
</template>

<script>
  import { reactive, toRefs } from 'vue'
  import { appStore } from '@/store/app'
  
  const productStore = appStore().products

  export default {
    setup() {
      const searchBar = reactive({
        loading: false,
        label: '',
        searchedProduct: ''
      });

      function search(searchedProduct) {
        searchBar.loading = true;
        setTimeout(() => {
            searchBar.loading = false;
            productStore.searchedProduct = searchedProduct
            searchBar.searchedProduct = '';
        }, 1000);
      };

      return { ...toRefs(searchBar), search };

    }
  };
</script>