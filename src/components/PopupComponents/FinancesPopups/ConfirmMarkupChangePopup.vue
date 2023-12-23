<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="w-[766px] h-[140px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Confirm markup?
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('confirmMarkupChange', false)">
          <v-icon name="io-close" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[241px] p-[12.5px] border-[#008AB6]
              border-2 text-[#008AB6] rounded-[8px] cursor-pointer
              mx-auto font-semibold text-center bg-white"
             @click="this.$emit('confirmMarkupChange', false)">
          Cancel
        </div>
        <div className="w-[241px] p-[12.5px] bg-[#008AB6]
              text-white rounded-[8px] cursor-pointer
              mx-auto font-semibold text-center"
             @click="this.$emit('confirmMarkupChange', false)">
          Confirm
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmMarkupChangePopup',
  data() {
    return {};
  },
  methods: {},
};
</script>
