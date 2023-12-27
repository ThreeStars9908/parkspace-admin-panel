<template>
    <div className="font-semibold rounded-lg
        text-[#008AB6] cursor-pointer mr-2 ml-2 mb-2">
        <base-icon
            :name="icon" :color="color"/> 
        <span v-if="!mobile" class="ml-2">{{ $t(`${title}`) }}</span>
    </div>
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
            default: '#008AB6'
        },
        mobile: {
            type: Boolean,
            default: false
        },
    },
};
</script>
