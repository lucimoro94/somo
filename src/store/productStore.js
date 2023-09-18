// Utilities
import { defineStore } from 'pinia'
import { ref, reactive, computed, toRefs, toRef } from 'vue'

export const productStore = defineStore('productStore', () => {
  
  const products = reactive([
    {
      id: 0,
      title: "Carne di pollo",
      description: "Carne di pollo magra",
      price: 2.73,
      picture: "link",
      store: "Coop",
      category: "Meat"
    },
    {
      id: 1,
      title: "Pane di segale",
      description: "Pane di farina di segale con semi di girasole",
      price: 0.89,
      picture: "link",
      store: "Migros",
      category: "Bread"      
    },
    {
      id: 2,
      title: "Anguria nana",
      description: "Anguria nana del Madagascar",
      price: 5.68,
      picture: "link",
      store: "Coop",
      category: "Fruit"      
    }
  ])

  const shoppingList = reactive([
  ])

  const searchedProduct = ref('')
  const filteredCategory = ref('All')

  const get_products = computed(() => products)

  const get_filteredProducts = computed(() => products.filter((product) => (product.title.toLowerCase().search(searchedProduct.value.toLowerCase()) >= 0 || searchedProduct.value == '') && (product.category == filteredCategory.value || filteredCategory.value == 'All') ))
  
  function addToShoppingList(user, product){
    shoppingList.push({id: shoppingList.length+1, userId: user.id, productId: product.id})
  }

  function get_productById(id){
    return products.filter((product) => product.id == id)[0]
  }

  const get_shoppingList = computed(() => shoppingList.map((item) => ({id: item.id, item: get_productById(item.productId)})))

  return { products, get_products, get_filteredProducts, searchedProduct, filteredCategory, addToShoppingList, get_shoppingList }

})
