
<template>
    <v-menu :location="'left'" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="#FFD600" size="x-large" elevation="6" icon="mdi-account-circle-outline" class="btn-absolute-bottom-right"></v-btn>
        </template>

        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <Account :title="'Account'"/>    
                </v-list-item-title>
                
                <v-list-item-title>
                    <ShoppingList :title="'Shopping List'"/>
                </v-list-item-title>

            </v-list-item>
        </v-list>
        
    </v-menu>

       

</template>

<script setup>
    import { reactive } from 'vue'
    import { storeToRefs } from 'pinia'
    import ShoppingList from '@/components/ShoppingList.vue'
    import Account from '@/components/Account.vue'
    
    import { appStore } from '@/store/app'

    const { activateLogin } = storeToRefs(appStore())

</script>

<style scoped>

  .btn-absolute-bottom-right{
    position: absolute;
    bottom: 20px;
    right: 20px; 
  }

</style>