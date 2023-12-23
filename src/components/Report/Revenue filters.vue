<!-- eslint-disable -->
<template>
    <div>
      <div className="p-6 shadow-[4px_6px_30px_0px_#00000020]
             rounded-lg mt-4 flex flex-col justify-between h-fit">
        <div>
          <div className="flex flex-row justify-between">
            <div className="font-semibold text-[16px]">Revenue filters</div>
            <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
            <div @click="isShow = !isShow"
                 className="cursor-pointer">
              <base-icon :name="!isShow ? 'fa fa-arrow-down' : 'fa fa-arrow-up'" />
            </div>
          </div>
          <div className="mt-6"
               v-show="isShow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between">
              <div>
                <div className="font-normal text-[16px] text-left">
                  Filter to date:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                  <div className="mr-2 mb-2 col-span-2">
                    <VueDatePicker v-model="start_date"
                                  :enable-time-picker="false" />
                  </div>
                  <div className="">to:</div>
                  <div className="mr-2 mb-2 col-span-2">
                    <VueDatePicker v-model="start_date"
                                  :enable-time-picker="false"
                                  style="height = 44px;" />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-normal text-[16px] text-left">
                  Or search for period:
                </div>
                <div className="h-[44px] mr-2 mb-2">
                    <v-select label="Last 7 days"
                              :items="[
                                'Last 7 days',
                                'Last 15 days',
                                'Last Month',
                                'Last 3 months',
                                'Last 6 months',
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
          <div className="w-fit px-[16px] py-[8px] font-semibold ml-auto
              rounded-[10px] bg-[#008AB6] text-white text-[16px]
              cursor-pointer my-auto">
            <span className="mr-4">
              <base-icon name="fa fa-search" color="#F8F8F8"/>
            </span>Search
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BaseIcon from '../../items/BaseIcon.vue'
  
  export default {
    name: 'RevenueFilters',
    data() {
      return {
        isShow: true,
        start_date: new Date(),
        end_date: new Date(),
      };
    },
    components: {
      BaseIcon
    }
  };
  </script>
  