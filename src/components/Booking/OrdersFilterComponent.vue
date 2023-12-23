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
            <base-icon :name="!isShow ? 'fa fa-arrow-down' : 'fa fa-arrow-up'" />
          </div>
        </div>
        <div className="mt-6"
             v-show="isShow">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-16 justify-between">
            <div>
              <div className="font-normal text-[16px] text-left">
                Period:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="mr-2 mb-2">
                  <VueDatePicker v-model="start_date"
                                :enable-time-picker="false" />
                </div>
                <div className="mr-2 mb-2">
                  <VueDatePicker v-model="end_date"
                                :enable-time-picker="false"
                                style="height = 44px;" />
                </div>
              </div>
            </div>
            <div>
              <div className="font-normal text-[16px] text-left">
                Search for:
              </div>
              <div className="h-[44px] mr-2 mb-2">
                  <v-select label="Status"
                            :items="[
                              'Assigned',
                              'Not Assigned',
                              'To Confirm',
                              'Confirmed',
                              'Cancelled',
                            ]"
                            v-model="status"
                            variant="outlined"
                            density="compact" />
              </div>
            </div>
            <div>
              <div className="font-normal text-[16px] text-left">
                Time frame:
              </div>
              <div className="h-[44px] mr-2 mb-2">
                  <v-select label="Time Frame"
                            :items="[
                              'Last 7 days',
                              'Last 15 days',
                              'Last Month',
                              'Last 3 months',
                              'Last 6 months',
                            ]"
                            v-model="time_frame"
                            variant="outlined"
                            density="compact" />
              </div>
            </div>
            <div>
              <div className="font-normal text-[16px] text-left">
                City:
              </div>
              <div className="h-[44px] mr-2 mb-2">
                <v-select label="Search city name"
                          :items="[
                            'City A',
                            'City B',
                            'City C',
                            'City D',
                            'City E',
                          ]"
                          variant="outlined"
                          density="compact" />
              </div>
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

export default {
  name: 'OrdersFilterComponent',
  data() {
    return {
      isShow: true,
      start_date: new Date(),
      end_date: new Date(),
      status: '',
    };
  },
  components: {
    BaseIcon
  },
  methods: {
    ...mapActions('Booking', ['Filter_Booking']),
    Search() {
      this.Filter_Booking({
        start_date: this.start_date,
        end_date: this.end_date,
        time_frame: this.time_frame,
        status: this.status,
      });
    }
  }
};
</script>
