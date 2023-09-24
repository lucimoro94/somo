
import { defineStore } from "pinia"
import { ref, computed } from 'vue'

import { useFirestore, useCollection, useDocument } from 'vuefire'
import { collection, query, where, getDocs, onSnapshot, doc, setDoc, addDoc } from "firebase/firestore";

export const appStore = defineStore('appStore', () => {
    const count = ref(12)

    const db = useFirestore()
    const tblProducts = useCollection(collection(db, 'products'))

    const getProducts = computed(() => tblProducts)

    return {count, getProducts}
})