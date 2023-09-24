
<template>
    <v-dialog v-model="activateLogin" width="auto">
        <v-card>
            <v-card-item>
                <v-card-title>Login</v-card-title>
                <v-card-subtitle>Insert your email and password to login</v-card-subtitle>
            </v-card-item>
            <v-card-text>
                <v-form @submit.prevent @keyup.enter="login({email: email, password: password})">
                    <v-text-field
                        v-model="email"
                        label="Insert your email"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Insert your password"
                    ></v-text-field>                    
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn type="submit" block class="mt-2" @click="login({email: email, password: password})">Login</v-btn>
                <!--<v-btn color="primary" block @click="loginRequired = false">Close</v-btn>-->
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    import { storeToRefs } from 'pinia'
    import { ref, reactive, toRefs } from 'vue'
    import { appStore } from '@/store/app'

    export default {
        setup() {
            const { activateLogin } = storeToRefs(appStore())
            
            const data = reactive({
                email: '',
                password: ''
            })

            function login(data){
                if(appStore().users.login(data)){
                    activateLogin.value = false
                }
            }
            
            return { ...toRefs(data), login, activateLogin }
        }
    }

</script>