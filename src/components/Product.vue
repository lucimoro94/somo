<template>
  
    <v-card>
        
        <v-img :src="product.picture"></v-img>
        
        <v-card-item>
            <v-card-title>
                {{ product.title }}
            </v-card-title>
            <v-card-subtitle class="text-wrap">
                {{ product.description }}
            </v-card-subtitle>
        </v-card-item>
        
        <v-card-actions>
            CHF {{ product.price }}.-
            <v-spacer></v-spacer>
            <v-btn color="surface-variant" variant="text" icon="mdi-receipt-text-plus-outline" @click="addToShoppingList_l(product)"></v-btn>
        </v-card-actions>

    </v-card>

</template>

<script>
    import { ref, toRefs } from 'vue'
    import { storeToRefs } from 'pinia'
    import { appStore } from '@/store/app'

    export default {
        props: {
            product: Object
        },
        setup(props) {

            const product = ref(props.product)
            const { activateLogin } = storeToRefs(appStore())
            const { userLogged, get_loggedUser } = storeToRefs(appStore().users)
            const { addToShoppingList } = appStore().products

            function addToShoppingList_l(product){
                if(userLogged.value){
                    addToShoppingList(get_loggedUser.value, product)
                }
                else{
                    activateLogin.value = true
                }
            }

            return { product, addToShoppingList_l }
        }
    }
</script>