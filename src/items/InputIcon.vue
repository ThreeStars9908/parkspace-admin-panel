<template>
    <i :class="name"
        style="font-size: 1.25em; color: #7A7A7A;"
        class="absolute mt-3 -ml-9 cursor-pointer"></i>
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
