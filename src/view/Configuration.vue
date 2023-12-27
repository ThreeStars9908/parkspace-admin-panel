<template>
    <div class="configuration">
        <page-header title="setting" />
        <choose-language />
        <choose-currency />
    </div>
</template>

<script>
import PageHeader from '../../src/assets/components/headers/PageHeader.vue'
import ChooseLanguage from '../components/Configuration/ChooseLanguage.vue';
import ChooseCurrency from '../components/Configuration/ChooseCurrency.vue';

export default {
    name: 'ConfigurationView',
    components: {
        PageHeader,
        ChooseLanguage,
        ChooseCurrency,
    },
    methods: {
    },
    created() {
    },
}
</script>
