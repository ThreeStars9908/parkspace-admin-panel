<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="w-[766px] h-[140px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Delete User type?
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('deleteUsertype', false)">
          <base-icon name="fa fa-close" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[241px] p-[12.5px] border-[#008AB6]
              border-2 text-[#F8F8F8] rounded-[8px] cursor-pointer
              mx-auto font-semibold text-center bg-white"
             @click="this.$emit('deleteUsertype', false)">
          Cancel
        </div>
        <div className="w-[241px] p-[12.5px] bg-[#008AB6]
              text-white rounded-[8px] cursor-pointer
              mx-auto font-semibold text-center"
             @click="this.$emit('deleteUsertype', false), Delete_Usertype(selected_usertype.id)">
          Delete
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/items/BaseIcon.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'DeleteUsertypePopup',
  data() {
    return {};
  },
  components: {
    BaseIcon,
  },
  computed: {
    ...mapState('Admins', ['selected_usertype']),
  },
  methods: {
    ...mapActions('Admins', ['Delete_Usertype']),
  },
};
</script>
