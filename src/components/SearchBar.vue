<template>
  
  <div class="relative w-11/12 mt-10 mx-auto">
    <div class="absolute left-4 h-full flex items-center pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-5 h-5 bg-white text-neutral-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </div> 
    <input type="text" :placeholder="placeholder" class="w-full h-11 bg-white appearance-none ring-1 ring-neutral-300 shadow-md rounded-3xl pl-11 focus:ring-2 focus:ring-neutral-300 focus:outline-0 focus:shadow-lg">
  </div>
  
  </template>
  
  <script>
    
    import { ref } from 'vue'

    export default {
        props: {
            placeholder: String
        },
        setup(props) {
  
            const placeholder = props.placeholder
  
            return { placeholder }
        }
    }
  </script>