<template>
    <div class="relative">
        <input v-if="type === 'text'"
            :type="type"
            :value="value"
            @input="updateInput"
            :placeholder="placeholder"
            className="w-full rounded-lg p-2 mb-4
                border-solid border-2 border-[#7A7A7A]"
            :style="`background-color: ${bgcolor};`">
        
        <input v-if="type === 'password'"
            :type="isHiddenOne ? 'password': 'text'"
            :value="value"
            @input="updateInput"
            :placeholder="placeholder"
            className="w-full rounded-lg p-2 mb-4
                border-solid border-2 border-[#7A7A7A]"
            :style="`background-color: ${bgcolor};`">
        <input-icon v-if="type === 'password'"
            :name="isHiddenOne ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'"
            @click="changePass"/>

        
        <input v-if="type === 'question'"
            type="text"
            :value="value"
            @input="updateInput"
            :placeholder="placeholder"
            className="w-full rounded-lg p-4 mb-4 bg-[#F9F9F9]
                border-solid border-2 border-[#EBF0ED]" />
            
        <textarea v-if="type === 'answer'"
            type="textarea"
            :value="value"
            @input="updateInput"
            :placeholder="placeholder"
            className="w-full h-[180px] rounded-lg p-4 mb-4 bg-[#F9F9F9]
                border-solid border-2 border-[#EBF0ED]
                scrollbar scrollbar-thumb-[#008AB6]
                scrollbar-track-[#D9D9D9] resize-none" />
        
        <textarea v-if="type === 'terms'"
            type="textarea"
            :value="value"
            @input="updateInput"
            :placeholder="placeholder"
            className="w-full h-[720px] rounded-lg p-4 mb-4 bg-[#F9F9F9]
                border-solid border-2 border-[#EBF0ED]
                scrollbar scrollbar-thumb-[#008AB6]
                scrollbar-track-[#D9D9D9] resize-none" />
        
    </div>
</template>

<script>
import InputIcon from './InputIcon.vue';

export default {
    name: 'InputForm',
    components: {
        InputIcon
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        bgcolor: {
            type: String,
            default: '#F9F9F9'
        }
    },
    data() {
        return {
            isHiddenOne: true,
        }
    },
    methods: {
        updateInput(event) {
            this.$emit("update:value", event.target.value);
        },
        changePass() {
            this.isHiddenOne = !this.isHiddenOne;
        },
    }
};
</script>
