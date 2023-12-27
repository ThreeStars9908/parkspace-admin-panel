<template>
    <div class="relative">
        <div v-if="type === 'text'"
            class="mb-4">
            <input
            :type="type"
            :value="value"
            @input="updateInput"
            :placeholder="this.$t(`${placeholder}`)"
            className="bg-gray-50 border border-gray-300
                text-gray-900 text-md rounded-lg block w-full p-2
                focus:ring-blue-500 focus:border-blue-500"
            :style="`background-color: ${bgcolor};`"
            required>
        </div>
        <div v-if="type === 'password'"
            class="relative mb-4">
            <input
            :type="isHiddenOne ? 'password': 'text'"
            :value="value"
            @input="updateInput"
            :placeholder="this.$t(`${placeholder}`)"
            className="bg-gray-50 border border-gray-300
                text-gray-900 text-md rounded-lg block w-full p-2
                focus:ring-blue-500 focus:border-blue-500"
            :style="`background-color: ${bgcolor};`">
            <input-icon v-if="type === 'password'"
                :name="isHiddenOne ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'"
                @click="changePass"
                class="float-right -mt-8 mr-3 cursor-pointer"/>
        </div>
        
        <input v-if="type === 'question'"
            type="text"
            :value="value"
            @input="updateInput"
            :disabled="!disabled"
            :placeholder="this.$t(`${placeholder}`)"
            className="w-full rounded-lg p-4 mb-4 bg-[#F9F9F9]
                border-solid border-2 border-[#EBF0ED]" />
            
        <textarea v-if="type === 'answer'"
            type="textarea"
            :value="value"
            @input="updateInput"
            :disabled="!disabled"
            :placeholder="this.$t(`${placeholder}`)"
            className="w-full h-[180px] rounded-lg p-4 mb-4 bg-[#F9F9F9]
                border-solid border-2 border-[#EBF0ED]
                scrollbar scrollbar-thumb-[#008AB6]
                scrollbar-track-[#D9D9D9] resize-none" />
        
        <textarea v-if="type === 'terms'"
            type="textarea"
            :value="value"
            @input="updateInput"
            :disabled="!disabled"
            :placeholder="this.$t(`${placeholder}`)"
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
        },
        disabled: {
            type: Boolean,
            default: false,
        },
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
