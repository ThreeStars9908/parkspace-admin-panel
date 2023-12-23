<!-- eslint-disable -->
<template>
  <div>
    <!-- eslint-disable-next-line max-len -->
    <div :className="['w-[845px] p-6 shadow-[4px_6px_30px_0px_#00000020] rounded-lg mt-4 flex flex-col justify-between '
  + (isShow ? 'h-[271px]' : 'h-fit')]">
      <div>
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-[16px]">Filters</div>
          <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
          <div @click="isShow = !isShow"
               className="cursor-pointer">
            <v-icon :name="!isShow ? 'md-keyboardarrowdown' : 'md-keyboardarrowup'"
                    scale="1.5" />
          </div>
        </div>
        <div className="mt-6" v-show="isShow">
          <div className="flex flex-row justify-between items-center">
            <div className="font-normal text-[16px]">
              Search Period:
            </div>
            <div className="w-[150px] h-[44px]">
              <VueDatePicker v-model="start_date"
                             :enable-time-picker="false" />
            </div>
            <div className="w-[150px] h-[44px]">
              <VueDatePicker v-model="start_date"
                             :enable-time-picker="false"
                             style="height = 44px;" />
            </div>
            <div className="font-normal text-[16px]">
              Time Frame:
            </div>
            <div className="w-[221px] h-[44px]">
              <v-select label="Filter"
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
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="font-normal text-[16px]">
              Search For:
            </div>
            <div className="w-[241px] h-[44px]">
              <v-select label="Filter"
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
            <div className="">
              <div className="w-fit h-fit
          rounded-[4px] border-2
               border-solid border-[#C9C9C9]
               pl-3">
                <v-icon name="bi-search"
                        scale="1.25"
                        fill="black" />
                <input type="text"
                       v-model="search"
                       placeholder="Search"
                       aria-label="search"
                       className="rounded-[4px] px-2 py-3 w-[384px]
                     h-[40px]">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6" v-show="isShow">
        <div className="w-fit px-[16px] py-[8px] font-semibold m-auto
            rounded-[10px] bg-[#EDBD3A] text-black text-[16px]
            cursor-pointer my-auto">
          <span className="mr-2">
            <v-icon name="bi-search"
                    scale="1.25"
                    fill="black" />
          </span>Search
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinanceFilterComponent',
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
