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
              <base-icon :name="!isShow ? 'fa fa-angle-down' : 'fa fa-angle-up'" />
            </div>
          </div>
          <div className="mt-6"
               v-show="isShow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:justify-items-start">
                <label className="block text-left mb-2">
                  Filter to date:
                </label>
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <datepicker v-model="start_date"
                    class="text-left"></datepicker>
                  <datepicker v-model="end_date"
                    class="text-left"></datepicker>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end justify-items-end">
                  <label class="block text-left mb-2">
                      Or search for period:
                  </label>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900
                      text-sm rounded-lg block w-full p-2">
                      <option v-for="(item, index) in time_frame"
                          v-bind:key="index" :value="item.id">{{ item.name }}</option>
                  </select>
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
  import Datepicker from 'vuejs3-datepicker'
  // import SelectForm from '../../../src/assets/components/forms/SelectForm.vue'
  import BaseIcon from '../../items/BaseIcon.vue'
  
  export default {
    name: 'RevenueFilters',
    data() {
      return {
        time_frame: [
          {'id': 1, 'name': 'Last 7 days'},
          {'id': 2, 'name': 'Last 15 days'},
          {'id': 3, 'name': 'Last Month'},
          {'id': 4, 'name': 'Last 3 months'},
          {'id': 5, 'name': 'Last 6 months'},
        ],
        isShow: true,
        start_date: new Date(),
        end_date: new Date(),
      };
    },
    components: {
      BaseIcon,
      // SelectForm,
      Datepicker,
    }
  };
  </script>

  <style>

  .vuejs3-datepicker__value {
    white-space: nowrap;
    overflow: hidden;
    min-width: 50px !important;
    padding: 8px 12px !important;
  }
  </style>