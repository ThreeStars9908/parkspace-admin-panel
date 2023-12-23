<!-- eslint-disable -->
<template>
    <div className="p-6 rounded-lg
    shadow-[4px_6px_30px_0px_#00000020] mt-4">
        <div className="text-left font-semibold text-[16px]">Markup</div>
        <div className="my-[24px] grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
            <div className="text-left text-[16px] font-normal text-[#3F3F44]">
                Host percentage
                <div className="ml-auto">
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="host"
                            className="w-full px-[10px] py-2">
                        <v-icon name="md-edit-outlined"
                            scale="1.25" fill="#9B9B9F"
                            class="absolute -ml-8 mt-2" />
                    </div>
                </div>
            </div>
            <div className="text-left text-[16px] font-normal text-[#3F3F44]">
                Parkspace percentage
                <div className="ml-auto">
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="parkspace"
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
        @click="this.confirmMarkups = true;">
            Confirm markup
        </div>
        <v-dialog v-model="confirmMarkups"
                width="auto">
            <confirm-markup-change-popup @confirmMarkupChange="confirmMarkupChange" />
        </v-dialog>
    </div>
</template>
<!-- eslint-disable -->
<script>
import ConfirmMarkupChangePopup from '../PopupComponents/FinancesPopups/ConfirmMarkupChangePopup.vue';

export default {
    name: 'MarkupBlockComponent',
    components: {
        ConfirmMarkupChangePopup,
    },
    data() {
        return {
            confirmMarkups: false,
        };
    },
    methods: {
    confirmMarkupChange(val) {
      this.confirmMarkups = val;
    },
  },
}
</script>
