// Utilities
import { defineStore } from 'pinia'
import { ref, reactive, computed, toRefs, toRef } from 'vue'

import { useFirestore, useCollection } from 'vuefire'
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

export const userStore = defineStore('userStore', () => {
  
  const db = useFirestore()
  const users = useCollection(collection(db, 'users'))

  const userLogged = ref(false)

  const get_users = computed(() => users)

  const get_loggedUser = computed(() => users.value.filter((user) => user.logged == true)[0])

  function login(data){
    if(users.value.filter((user) => user.email == data.email && user.password == data.password).length > 0){
      users.value.filter((user) => user.email == data.email && user.password == data.password)[0].logged = true      
      userLogged.value = true
      console.log(users.value)
    }
    else{
      userLogged.value = false
    }
    return userLogged.value
  }

  return { users, get_users, userLogged, login, get_loggedUser }

})
