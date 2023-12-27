<template>
    <div class="header">
        <div className="flex flex-row justify-between mb-2">
            <div className="text-2xl text-left font-semibold">
                {{ $t(`title.${title}`) }}
            </div>
        </div>
        <div className="h-[0.5px] w-full bg-gray-400" />
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
