<template>
    <i :class="name"
        style="font-size: 1.25em; color: #7A7A7A;"></i>
</template>

<script>
export default {
    name: 'InputIcon',
    props: {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: '',
        },
    }
};
</script>
