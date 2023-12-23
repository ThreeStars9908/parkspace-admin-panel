<template>
    <div class="configuration">
        <page-header title="Configurations" />
        <choose-language />
        <choose-currency />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '../items/PageHeader.vue'
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
        ...mapActions('Configuration' ,['Show_Languages', 'Show_Currencies']),
    },
    created() {
        this.Show_Languages();
        this.Show_Currencies();
    },
}
</script>
