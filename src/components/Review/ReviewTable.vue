<template>
  <div class="review-table">
    <div className="shadow-[4px_6px_30px_0px_#00000020]
        rounded-lg overflow-y-auto py-4 px-6
        scrollbar scrollbar-thumb-[#008AB6]
        scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
        <div class="title"
            className="flex flex-row justify-start mb-6 gap-4">
            <div className="text-left font-semibold mr-2">{{ $t('latest') }} {{ $t('reviews') }}</div>
            <search-form v-model:value="search"
                placeholder="search" />
        </div>
        <div class="relative overflow-auto">
            <table class="w-full text-sm text-cneter">
                <thead class="text-md text-left
                    border-b-[1px] border-[#C9C9C9]">
                    <tr>
                        <th class="px-6 py-3 text-left min-w-[160px]">{{ $t('parking_slot') }}</th>
                        <th class="px-6 py-3 text-center">{{ $t('client') }}</th>
                        <th class="px-6 py-3 text-center">{{ $t('host') }}</th>
                        <th class="px-6 py-3 text-center min-w-[160px]">{{ $t('review') }} ({{ $t('to') }} {{ $t('host') }})</th>
                        <th class="px-6 py-3 text-center min-w-[160px]">{{ $t('review') }} ({{ $t('to') }} {{ $t('client') }})</th>
                        <th class="px-6 py-3 text-center min-w-[180px]">{{ $t('review') }} ({{ $t('from') }} {{ $t('user') }} {{ $t('to') }} {{ $t('parkspace') }})</th>
                        <th class="px-6 py-3 text-center min-w-[180px]">{{ $t('review') }} ({{ $t('from') }} {{ $t('host') }} {{ $t('to') }} {{ $t('parkspace') }})</th>
                        <th class="px-6 py-3 text-center min-w-[180px]">{{ $t('review') }} left for the {{ $t('parkspace') }}</th>
                        <th class="px-6 py-3 text-center">{{ $t('hide') }} {{ $t('review') }}</th>
                        <th class="px-6 py-3 text-center">{{ $t('actions') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <reviews-table-item v-for="(item, index) in onFilter"
                        v-bind:key="index"
                        :obj="item"
                        @deleteHs="deleteHs" /> -->
                </tbody>
            </table>
        </div>
    </div>
    <v-dialog v-model="deleteReview"
        width="auto">
        <delete-review @deleteHs="deleteHs"/>
    </v-dialog>
  </div>
</template>

<script>
import SearchForm from '@/assets/components/forms/SearchForm.vue'
import DeleteReview from './DeleteReview.vue'
// import ReviewsTableItem from './ReviewsTableItem.vue'

export default {
    name: 'ReviewTable',
    data() {
        return {
            objeto: [{
                id: 1,
                slot: 'Parking slot name 1',
                client: 'Client A',
                host: 'Host A',
                review_host: 4,
                review_client: 5,
                review_from_user: 5,
                review_from_host: 5,
                review_left: 'Written review from client to host',
                enable: true,
            },
            {
                id: 2,
                slot: 'Parking slot name 2',
                client: 'Client A',
                host: 'Host B',
                review_host: 4,
                review_client: 5,
                review_from_user: 5,
                review_from_host: 5,
                review_left: 'Written review from client to host',
                enable: true,
            },],
            deleteReview: false,
            search: '',
        }
    },
    components: {
        // ReviewsTableItem,
        DeleteReview,
        SearchForm,
    },
    methods: {
        deleteHs(val) {
            this.deleteReview = val;
        }
    },
    computed: {
        onFilter() {
            return this.objeto.filter(item => item.slot.toLowerCase().includes(this.search.toLowerCase()));
        }
    }
}
</script>
