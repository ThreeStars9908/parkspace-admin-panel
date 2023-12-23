<template>
    <div class="header">
        <div className="flex flex-row justify-between mb-2">
            <div className="text-[28px] text-left font-semibold">
                {{ title }}
            </div>
        </div>
        <div className="h-[0.5px] w-full mr-70 bg-[#C9C9C9]" />
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: {
            type: String,
            required: true
        },
    },
}
</script>
