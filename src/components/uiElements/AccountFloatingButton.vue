<template>

<div class="w-14 h-14 absolute bottom-3 right-3 ring-1 ring-slate-400 rounded-full shadow-lg shadow-slate-400 flex justify-center items-center cursor-pointer bg-white" @click="$emit('update:active', !active)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-slate-700">
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
    </svg>
</div>

</template>
  
<script>

    import { ref, toRefs, watch, computed } from 'vue'

    export default {
        props: {
            active: Boolean
        },
        emits: [
            'update:active'
        ],
        setup(props) {
        }
    }
</script>