<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="w-[766px] h-[504px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Edit client
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('editClients', false)">
          <v-icon name="io-close" />
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Name
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="selected_client.name"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        E-mail
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="selected_client.email"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Telephone
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="selected_client.cellphone"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Address
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="address" disabled
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="w-[241px] p-[12.5px] bg-[#008AB6]
            text-white rounded-[8px] cursor-pointer
            mx-auto font-semibold text-center"
           @click="this.$emit('editClients', false), Edit_Client(selected_client)">
        Save Changes
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'EditClientPopup',
  data() {
    return {
    };
  },
  computed: {
    ...mapState('Clients', ['selected_client']),
  },
  methods: {
    ...mapActions('Clients', ['Edit_Client']),
  },
};
</script>
