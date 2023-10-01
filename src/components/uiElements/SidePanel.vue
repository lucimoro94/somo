<template>

    <div :class="['w-full h-full bg-white/30 absolute inset-0 transition duration-200 ease-linear z-20', {'invisible': active, 'backdrop-blur-sm': !active}]" @click="closePanel"></div>

    <div :class="['w-full md:w-1/3 h-screen absolute top-0 right-0 transition-transform duration-300 ease-in-out bg-white border-l border-l-slate-100 shadow-xl z-20', { 'translate-x-full': active }]">
        
        <span class="absolute top-1 left-1 cursor-pointer" @click="closePanel">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-blue-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
        
        <div :class="['w-10/12 mx-auto', {'hidden': isUserLogged}]" >
            <form @submit.prevent="manageUser">

                <div :class="[{'hidden': registerForm}]">
                    <h2 class="text-xl font-semibold mt-9">You have to login!</h2>
                    <div class="flex flex-col p-4 mt-3 border rounded-md">
                        
                        <label for="email" class="font-medium">Email</label>
                        <input v-model="email" type="text" name="email" placeholder="Type your email" class="border rounded-md pl-2 py-1 mt-2">

                        <span class="mt-4"></span>
                        
                        <label for="password" class="font-medium">Password</label>
                        <input v-model="password" type="password" name="password" placeholder="Type your password" class="border rounded-md pl-2 py-1 mt-2">

                        <span class="mt-5"></span>

                        <button class="border rounded-md bg-blue-700 text-white p-1 font-medium">Login</button>

                        <span class="mt-5"></span>

                        <h2 class="text-center">Not a member? <span class="text-blue-700 cursor-pointer" @click="registerForm = true">Register now!</span></h2>
                    </div>
                </div>

                <div :class="[{'hidden': !registerForm}]">
                    <h2 class="text-xl font-semibold mt-9">You have to register!</h2>
                    <div class="flex flex-col p-4 mt-3 border rounded-md">
                        
                        <label for="name" class="font-medium">Name</label>
                        <input v-model="name" type="text" name="name" placeholder="Type your name" class="border rounded-md pl-2 py-1 mt-2">

                        <span class="mt-4"></span>

                        <label for="surname" class="font-medium">Surname</label>
                        <input v-model="surname" type="text" name="surname" placeholder="Type your surname" class="border rounded-md pl-2 py-1 mt-2">

                        <span class="mt-4"></span>

                        <label for="email" class="font-medium">Email</label>
                        <input v-model="email" type="text" name="email" placeholder="Type your email" class="border rounded-md pl-2 py-1 mt-2">

                        <span class="mt-4"></span>
                        
                        <label for="password" class="font-medium">Password</label>
                        <input v-model="password" type="password" name="password" placeholder="Type your password" class="border rounded-md pl-2 py-1 mt-2">

                        <span class="mt-5"></span>

                        <button class="border rounded-md bg-blue-700 text-white p-1 font-medium">Register</button>

                        <span class="mt-5"></span>

                        <h2 class="text-center">Already a member? <span class="text-blue-700 cursor-pointer" @click="registerForm = false">Login now!</span></h2>
                    </div>
                </div>

            </form>
        </div>

        <div :class="['w-10/12 mx-auto', {'hidden': !isUserLogged}]">
            <h2 class="text-xl font-semibold mt-9">User logged!</h2>
            <div class="flex flex-col p-4 mt-3 border rounded-md">
                        
                <label for="name" class="font-medium">Name</label>
                <input v-model="name" type="text" name="name" placeholder="Type your name" class="border rounded-md pl-2 py-1 mt-2" disabled>
            
            </div>
        </div>
    
    </div>

</template>
  
<script>
    import { ref, toRefs, watch, computed, reactive } from 'vue'
    import { appStore } from '@/stores/Store.js'
    import { storeToRefs } from 'pinia'

    export default {
        props: {
            active: Boolean
        },
        emits: [
            'update:active'
        ],
        setup(props, context) {
            
            const user = reactive({
                name: '',
                surname: '',
                email: '',
                password: ''
            })

            const registerForm = ref(false)

            const { isUserLogged } = storeToRefs(appStore())

            function manageUser(){
                if(registerForm.value){
                    appStore().addNewUser(user)
                }
                else{
                    Object.assign(user, appStore().userLogin({'email': user.email, 'password': user.password}))
                }
            }

            function closePanel(){
                context.emit('update:active', !props.active)
                registerForm.value = false
            }

            return { ...toRefs(user), manageUser, isUserLogged, registerForm, closePanel }

        }
    }
</script>