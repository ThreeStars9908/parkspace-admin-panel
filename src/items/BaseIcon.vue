<template>
    <i :class="name"
        :style="`font-size: ${size}; color: ${color}`"></i>
</template>

<script>
export default {
    name: 'BaseIcon',
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: '1.25em'
        },
        color: {
            type: String,
            default: '#000'
        },
    },
};
</script>
