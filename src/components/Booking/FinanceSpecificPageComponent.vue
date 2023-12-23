<template>
  <div>
    <div className="my-[24px]
    shadow-[4px_6px_30px_0px_#00000020] rounded-lg
    p-[36px]">
      <specific-header-component @changeDes="(val) => this.$emit('changeToDescript', val)" />
      <specific-infos-component />
      <specific-booking-component />
      <specific-transaction-component />
      <div className="m-auto">
        <div className="flex flex-row">
          <div className="text-[#008AB6] cursor-pointer text-[16px] font-semibold ml-auto">
            <span>
              <base-icon name="fa fa-download" color="#008AB6"/>
            </span>
            Export payment voucher
          </div>
          <div className="text-[#008AB6] cursor-pointer text-[16px] font-semibold ml-4 mr-auto">
            <span>
              <base-icon name="fa fa-print" color="#008AB6" />
            </span>
            Print
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpecificHeaderComponent from './SpecificPageComponents/SpecificHeaderComponent.vue';
import SpecificInfosComponent from './SpecificPageComponents/SpecificInfosComponent.vue';
import SpecificBookingComponent from './SpecificPageComponents/SpecificBookingComponent.vue';
import SpecificTransactionComponent from './SpecificPageComponents/SpecificTransactionComponent.vue';
import BaseIcon from '../../items/BaseIcon.vue'

export default {
  name: 'FinanceSpecificPageComponent',
  components: {
    SpecificHeaderComponent,
    SpecificInfosComponent,
    SpecificBookingComponent,
    SpecificTransactionComponent,
    BaseIcon,
  },
};
</script>
