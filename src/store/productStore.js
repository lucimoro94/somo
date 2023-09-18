// Utilities
import { defineStore } from 'pinia'
import { ref, reactive, computed, toRefs, toRef } from 'vue'

import { useFirestore, useCollection, useDocument } from 'vuefire'
import { collection, query, where, getDocs, onSnapshot, doc, setDoc, addDoc } from "firebase/firestore";

export const productStore = defineStore('productStore', () => {
  
  const db = useFirestore()
  const products = useCollection(collection(db, 'products'))
  
  const categories = useCollection(collection(db, 'categories'))
  const stores = useCollection(collection(db, 'stores'))
  
  const shoppingList = reactive([
  ])

  const searchedProduct = ref('')
  const filteredCategory = ref('All')

  const get_products = computed(() => products)

  const get_filteredProducts = computed(() => products.value.filter((product) => (product.title.toLowerCase().search(searchedProduct.value.toLowerCase()) >= 0 || searchedProduct.value == '') && (product.category == filteredCategory.value || filteredCategory.value == 'All') ))
  
  function addToShoppingList(user, product){
    shoppingList.push({id: shoppingList.length+1, userId: user.id, productId: product.id})
  }

  function get_productById(id){
    return products.value.filter((product) => product.id == id)[0]
  }

  function addProduct(data){
    addDoc(collection(db, "products"), {
      title: data.title,
      description: data.description,
      price: data.price,
      store: doc(db, 'stores', data.store)
    })

  }

  const get_shoppingList = computed(() => shoppingList.map((item) => ({id: item.id, item: get_productById(item.productId)})))

  return { products, get_products, get_filteredProducts, searchedProduct, filteredCategory, addToShoppingList, get_shoppingList, stores, categories, addProduct }

})
