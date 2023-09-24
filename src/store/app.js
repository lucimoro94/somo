// Utilities
import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { userStore } from '@/store/userStore'
import { productStore } from '@/store/productStore'

export const appStore = defineStore('appStore', () => {
  
  const users = userStore()
  const products = productStore()

  const activateLogin = ref(false)


  return { users, products, activateLogin }

})
