<template>
  
    <div class="w-11/12 border border-gray-200 rounded-lg flex flex-col shadow-md bg-white/70 overflow-hidden">
      <div class="bg-slate-100 relative">
        <span class="absolute bg-orange-500 text-white px-1 bottom-1 right-1 font-semibold">-30%</span>
        <img src="https://image.migros.ch/mo-custom/v-w-200-h-171/965fd54d6523e2f475ad3f6b65b4ab49d5d97a58/gesamtes-alnatura-sortiment.jpg" class="w-full h-32 object-none object-center">
      </div>
      <div class="pt-1 px-4">
        <h3 class="font-medium text-gray-900">{{ product.title }}</h3>
        <p class="text-gray-500 text-sm">{{ product.description }}</p>
      </div>
      <div class="flex flex-row h-full items-end mt-1 px-4 mb-2">
        <p class="text-gray-900 font-medium text-base flex-none">CHF {{ product.price }}</p>
        <p class="text-gray-500 text-sm italic flex-auto flex justify-end leading-4 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {{ product.store.name}}
        </p>
      </div>
    </div>
  
  </template>
  
  <script>
    
    import { ref } from 'vue'

    export default {
        props: {
            product: Object
        },
        setup(props) {
  
            const product = props.product
  
            return { product }
        }
    }
  </script>