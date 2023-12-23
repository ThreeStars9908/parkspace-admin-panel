<template>
    <button className="font-semibold rounded-lg py-2 px-6 mb-2 cursor-pointer hover:shadow-lg min-w-[160px]
        border-solid border-2 border-[#008AB6]"
        :style="`background-color: ${bgcolor}; color: ${color};`">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'DefaultButton',
    props: {
        title: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: '#F8F8F8',
        },
        bgcolor: {
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
