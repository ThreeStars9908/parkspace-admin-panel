<!-- eslint-disable -->
<template>
    <div className="p-6 rounded-lg
    shadow-[4px_6px_30px_0px_#00000020] mt-4">
        <div className="flex flex-row justify-between">
            <div className="text-left font-semibold text-[16px]">Cancellation plan percentage</div>
            <div className="text-[#008AB6] cursor-pointer">
                <v-icon name="bi-plus-circle"
                    scale="1.25" fill="#008AB6"/>
                <span className="ml-4 mr-2 font-semibold">Add new</span>
            </div>
        </div>
        <div v-for="(item, index) in 2" v-bind:key="index" 
            className="my-[24px] grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
            <div className="text-left text-[16px] font-normal text-[#3F3F44]">
                Cancellation plan name
                <div className="ml-auto">
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="name"
                            className="w-full px-[10px] py-2">
                        <v-icon name="md-edit-outlined"
                            scale="1.25" fill="#9B9B9F"
                            class="absolute -ml-8 mt-2" />
                    </div>
                </div>
            </div>
            <div className="text-left text-[16px] font-normal text-[#3F3F44]">
                Cancellation charge
                <div className="ml-auto">
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="charge"
                            className="w-full px-[10px] py-2">
                        <v-icon name="md-edit-outlined"
                            scale="1.25" fill="#9B9B9F"
                            class="absolute -ml-8 mt-2" />
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[272px] h-[44px]
        px-[16px] py-[8px] font-semibold m-auto
        rounded-lg bg-[#008AB6] text-white text-[16px] cursor-pointer"
        @click="this.confirmCancellations = true;">
            Confirm cancellation plans
        </div>
        <v-dialog v-model="confirmCancellations"
                width="auto">
            <confirm-cancellation-plans-change-popup @confirmCancellationChange="confirmCancellationChange" />
        </v-dialog>
    </div>
</template>
<!-- eslint-disable -->
<script>
import ConfirmCancellationPlansChangePopup from '../PopupComponents/FinancesPopups/ConfirmCancellationPlansChangePopup.vue';

export default {
    name: 'CancellationPlanBlockComponent',
    components: {
        ConfirmCancellationPlansChangePopup,
    },
    data() {
        return {
            confirmCancellations: false,
        };
    },
    methods: {
        confirmCancellationChange(val) {
        this.confirmCancellations = val;
        },
    },
}
</script>
