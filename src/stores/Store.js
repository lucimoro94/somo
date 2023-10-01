
import { defineStore } from "pinia"
import { ref, computed } from 'vue'

import { useFirestore, useCollection, useDocument } from 'vuefire'
import { collection, query, where, getDocs, onSnapshot, doc, setDoc, addDoc } from "firebase/firestore";

export const appStore = defineStore('appStore', () => {
    const count = ref(12)

    const db = useFirestore()
    const tblProducts = useCollection(collection(db, 'products'))

    const tblUsers = useCollection(collection(db, 'users'))

    const getProducts = computed(() => tblProducts)

    const getUsers = computed(() => tblUsers)

    const isUserLogged = ref(false)

    function userLogin(user){

        let loggedUser = tblUsers.value.filter((_user) => _user.email == user.email && _user.password == user.password)

        if(loggedUser.length > 0){
            isUserLogged.value = true
        }
        else{
            isUserLogged.value = false
            return 
        }

        return loggedUser[0]

    }

    function addNewUser(user){
        addDoc(collection(db, "users"), {
          name: user.name,
          surname: user.surname,
          email: user.email,
          password: user.password,
          logged: false
          //password: doc(db, 'stores', data.store) for reference
        })
    }

    return {count, getProducts, getUsers, isUserLogged, userLogin, addNewUser}
})