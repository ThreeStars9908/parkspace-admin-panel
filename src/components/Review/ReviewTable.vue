<template>
  <div class="review-table">
    <div className="shadow-[4px_6px_30px_0px_#00000020]
        rounded-lg overflow-y-auto py-4 px-6
        scrollbar scrollbar-thumb-[#008AB6]
        scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
        <div class="title"
            className="flex flex-row justify-start mb-6">
            <div className="text-left font-semibold mr-2">Latest reviews</div>
            <div className="flex flex-row justify-start bg-[#F8F8F8]
                rounded-3xl border-solid border-2 border-[#C9C9C9]">
                <base-icon name="fa fa-search" class="relative ml-4 mr-2 my-auto"/>
                <input type="text"
                v-model="search"
                placeholder="Search"
                aria-label="search"
                class="px-2 py-2 rounded-r-3xl">
            </div>
        </div>
        <div class="relative overflow-auto">
            <table class="w-full text-sm text-cneter">
                <thead class="text-md text-left
                    border-b-[1px] border-[#C9C9C9]">
                    <tr>
                        <th class="px-6 py-3 text-left min-w-[160px]">Parking slot</th>
                        <th class="px-6 py-3 text-center">Client</th>
                        <th class="px-6 py-3 text-center">Host</th>
                        <th class="px-6 py-3 text-center min-w-[160px]">Review (to host)</th>
                        <th class="px-6 py-3 text-center min-w-[160px]">Review (to client)</th>
                        <th class="px-6 py-3 text-center min-w-[180px]">Review (from user to parkspace)</th>
                        <th class="px-6 py-3 text-center min-w-[180px]">Review (from host to parkspace)</th>
                        <th class="px-6 py-3 text-center min-w-[180px]">Review left for the parking space</th>
                        <th class="px-6 py-3 text-center">Hide review</th>
                        <th class="px-6 py-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <reviews-table-item v-for="(item, index) in onFilter"
                        v-bind:key="index"
                        :obj="item"
                        @deleteHs="deleteHs" />
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
import BaseIcon from '../../items/BaseIcon.vue'
import DeleteReview from './DeleteReview.vue'
import ReviewsTableItem from './ReviewsTableItem.vue'

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
        ReviewsTableItem, DeleteReview,
        BaseIcon
    },
    methods: {
        deleteHs(val) {
            this.deleteReview = val;
        }
    },
    computed: {
        onFilter() {
            return this.objeto.filter(item => item.slot.includes(this.search));
        }
    }
}
</script>
