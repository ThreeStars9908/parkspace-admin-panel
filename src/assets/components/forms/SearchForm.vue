<template>
    <div class="search-form">
        <label class="text-sm text-gray-900 sr-only">{{ $t(`${search}`) }}</label>
        <div class="relative">
            <div class="absolute inset-y-0 flex items-center ps-2.5">
                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search"
                :value="value"
                @input="updateInput"
                class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-900 rounded-lg bg-gray-50" :placeholder="this.$t(`${placeholder}`)" required>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchForm',
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:value', event.target.value);
        },
    },
}
</script>
