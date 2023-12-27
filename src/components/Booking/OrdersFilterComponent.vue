<!-- eslint-disable -->
<template>
  <div>
    <div className="p-6 shadow-[4px_6px_30px_0px_#00000020]
           rounded-lg mt-4 flex flex-col justify-between h-fit">
      <div>
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-[16px]">Period Filter</div>
          <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
          <div @click="isShow = !isShow"
               className="cursor-pointer">
            <base-icon :name="!isShow ? 'fa fa-angle-down' : 'fa fa-angle-up'" />
          </div>
        </div>
        <div className="mt-6"
             v-show="isShow">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-16 justify-between">
            <div>
              <div className="font-normal text-[16px] text-left mb-2">
                Period:
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <datepicker v-model="start_date"
                  class="text-left"></datepicker>
                <datepicker v-model="end_date"
                  class="text-left"></datepicker>
              </div>
            </div>
            <div>
              <select-form label="Search for:"
                :options="search_for"/>
            </div>
            <div>
              <select-form label="Time frame:"
                :options="time_frame"/>
            </div>
            <div>
              <select-form label="City:"
                :options="cities"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6"
           v-show="isShow">
        <div className="w-fit px-[16px] py-[8px] font-semibold m-auto
            rounded-[10px] bg-[#008AB6] text-white text-[16px]
            cursor-pointer my-auto"
            @click="Search">
          <span className="mr-4">
            <base-icon name="fa fa-search" color="#F8F8F8"/>
          </span>Filter
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseIcon from '../../items/BaseIcon.vue'
import SelectForm from '../../../src/assets/components/forms/SelectForm.vue'
// import SelectDate from '../../../src/assets/components/forms/SelectDate.vue'
import Datepicker from 'vuejs3-datepicker'

export default {
  name: 'OrdersFilterComponent',
  data() {
    return {
      isShow: true,
      start_date: '',
      end_date: '',
      search_for: [
        {'id': 1, 'name': 'Parking ID'},
        {'id': 2, 'name': 'Client'},
        {'id': 3, 'name': 'Host'},
        {'id': 4, 'name': 'Status'},
        {'id': 5, 'name': 'City'},
      ],
      cities: [
        {'id': 1, 'name': 'City A'},
        {'id': 2, 'name': 'City B'},
        {'id': 3, 'name': 'City C'},
        {'id': 4, 'name': 'City D'},
        {'id': 5, 'name': 'City E'},
      ],
      time_frame: [
        {'id': 1, 'name': 'Last 7 days'},
        {'id': 2, 'name': 'Last 15 days'},
        {'id': 3, 'name': 'Last Month'},
        {'id': 4, 'name': 'Last 3 months'},
        {'id': 5, 'name': 'Last 6 months'},
      ],
    };
  },
  components: {
    BaseIcon,
    SelectForm,
    // SelectDate,
    Datepicker,
  },
  methods: {
    ...mapActions('Booking', ['Filter_Booking']),
    refreshPage() {
      window.location.reload();
    },
    Search() {
      if(this.time_frame) {
        switch(this.time_frame) {
          case 'Last 7 days':
            this.time_frame = 1;
            break;
          case 'Last 15 days':
            this.time_frame = 2;
            break;
          case 'Last Month':
            this.time_frame = 3;
            break;
          case 'Last 3 months':
            this.time_frame = 4;
            break;
          case 'Last 6 months':
            this.time_frame = 5;
            break;
        }
      }
      this.Filter_Booking({
        start_date: this.start_date,
        end_date: this.end_date,
        time_frame: this.time_frame,
        status: this.status,
        city: this.city,
      });
    }
  },
};
</script>

<style>
.vuejs3-datepicker__value {
  width: 100% !important;
  white-space: nowrap;
  overflow: hidden;
  min-width: 50px !important;
  padding: 8px 12px !important;
}
</style>