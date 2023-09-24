
<template>
    <v-btn variant="plain" @click="isLogged">{{ title }}</v-btn>
    <v-dialog v-model="isActive" width="auto">
        <v-card>
            <v-card-text>
                <v-list lines="one">
                    <v-list-item
                        v-for="(item, index) in shoppingList"
                        :key="index"
                        :title="item.id + ': ' + item.item.title"
                        :subtitle="item.item.description"
                    ></v-list-item>
                </v-list>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block @click="isActive = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import {appStore} from '@/store/app'

    export default {
        props:{
            title: String
        },
        setup(props) {

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
            
            return { isActive, title: props.title, isLogged, shoppingList }
        }
    }

</script>