<template>
    <button className="font-semibold rounded-lg px-6 py-2 mb-2
        bg-[#008AB6] text-white cursor-pointer hover:shadow-lg">
        <base-icon v-if="!name"
            :name="icon" :color="color"/> 
        <span v-if="!mobile" class="ml-4">{{ title }}</span>
    </button>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
    name: 'TextButton',
    components: {
        BaseIcon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: '#008AB6',
        },
        mobile: {
            type: Boolean,
            default: false
        },
    },
};
</script>
