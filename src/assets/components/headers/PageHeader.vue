<template>
    <div class="header">
        <div class="flex flex-row justify-between mb-2">
            <div class="text-2xl text-left font-semibold">
                {{ $t(`title.${title}`) }}
            </div>
            <search-form placeholder="search"/>
        </div>
        <div class="h-[0.5px] w-full bg-gray-400" />
    </div>
</template>

<script>
import SearchForm from '../forms/SearchForm.vue'

export default {
    name: 'PageHeader',
    components: {
        SearchForm
    },
    props: {
        title: {
            type: String,
            required: true
        },
    },
}
</script>
