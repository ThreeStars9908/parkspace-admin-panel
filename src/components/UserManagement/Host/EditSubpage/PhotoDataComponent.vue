<!-- eslint-disable -->
<template>
  <div class="photo-data-component">
    <div className="p-[24px] mt-[40px]
    shadow-[4px_6px_40px_0px_#00000020] border-1 border-[#EBF0ED]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="
          border-4 border-[#107EC4] border-solid rounded-full">
            <img src="../../../../../public/assets/avatar/3753172.png" style="border-radius: 50%;"/>
          </div>
          <div className="my-auto ml-8">
            <div className="text-[16px] font-semibold text-left">{{ selected_host.name }}</div>
            <div className="text-[16px] font-normal text-left">1234 bookings</div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row text-right">
            <div className="text-[16px] font-semibold mr-2">
              Verified Host
            </div>
            <div className="mr-2">
              <v-icon name="ri-shield-star-fill"
                      fill="#008AB6"
                      scale="2" />
            </div>
            <div className="text-[16px] font-semibold mr-2">
              4.8
            </div>
            <div className="mr-2">
              <v-icon name="bi-star-fill"
                      fill="#008AB6" />
            </div>
          </div>
          <div className="text-right text-[#008AB6] cursor-pointer">
            <span className="mr-2">
              <v-icon name="io-repeat-outline"
                      style="color: #008AB6;" />
            </span>Change Profile Picture
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PhotoDataComponent',
  computed: {
    ...mapState('Hosts', ['selected_host']),
  },
};
</script>
