
<template>
    <v-btn variant="plain" @click="isLogged">{{ title }}</v-btn>
    <v-dialog v-model="isActive" width="auto">
        <v-card>
            <v-card-item>
                <v-card-title>Add product</v-card-title>
                <v-card-subtitle>Insert your email and password to login</v-card-subtitle>
            </v-card-item>
            <v-card-text>
                <v-form @submit.prevent @keyup.enter="addProduct({title: p_title, description: description, price: price, store: s_stores.id, category: s_categories.id})">
                    <v-text-field
                        v-model="p_title"
                        label="Insert your email"
                    ></v-text-field>

                    <v-text-field
                        v-model="description"
                        label="Insert your password"
                    ></v-text-field>

                    <v-text-field
                        v-model="price"
                        label="Insert your password"
                    ></v-text-field>

                    <v-select
                        v-model="s_categories"
                        :items="categories"
                        item-title="name"
                        item-value="id"
                        label="Select"
                        return-object
                        single-line
                    ></v-select>

                    <v-select
                        v-model="s_stores"
                        :items="stores"
                        item-title="name"
                        item-value="id"
                        label="Select"
                        return-object
                        single-line
                    ></v-select>

                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="isActive = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    import { ref, reactive, toRefs } from 'vue'
    import { storeToRefs } from 'pinia'
    import {appStore} from '@/store/app'

    export default {
        props:{
            title: String
        },
        setup(props) {

            const data = reactive({
                p_title: '',
                description: '',
                price: 0
            })

            const categories = appStore().products.categories
            const s_categories = ref(categories[0])
            const stores = appStore().products.stores
            const s_stores = ref(stores[0])


            const isActive = ref(false)
            const { activateLogin } = storeToRefs(appStore())
            const shoppingList = appStore().products.get_shoppingList

            function isLogged(){
                if(appStore().users.userLogged){
                    isActive.value = true
                }
                else{
                    isActive.value = false
                    activateLogin.value = true
                }      
            }
            
            function addProduct(data){
                appStore().products.addProduct(data)
            }

            return { isActive, title: props.title, isLogged, shoppingList, ...toRefs(data), categories, s_categories, stores, s_stores, addProduct }
        }
    }

</script>