<template>
    <div class="review">
        <page-header title="review" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <review-box title="total_rating"
                total="0" first="0" second="0" third="0" fourth="0" fifth="0" average="0"
            />
            <review-box title="parkspace_rating"
                total="0" first="0" second="0" third="0" fourth="0" fifth="0" average="0"
            />
            <review-box title="client_rating"
                total="0" first="0" second="0" third="0" fourth="0" fifth="0" average="0"
            />
            <review-box title="host_rating"
                total="0" first="0" second="0" third="0" fourth="0" fifth="0" average="0"
            />
        </div>
        <div class="table-block"
            className="mt-6">
            <review-table />
        </div>
    </div>
</template>

<script>
import PageHeader from '../../src/assets/components/headers/PageHeader.vue'
import ReviewBox from '../items/ReviewBox.vue'
import ReviewTable from '../components/Review/ReviewTable.vue'

export default {
    name: 'ReviewView',
    components: {
        PageHeader,
        ReviewBox,
        ReviewTable,
    },
}
</script>
