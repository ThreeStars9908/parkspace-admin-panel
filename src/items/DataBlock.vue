<template>
    <div class="data-block">
      <div className="shadow-[4px_6px_30px_0px_#00000020]
          rounded-lg p-8 h-full">
          <div className="grid grid-cols-2 mb-8">
              <div className="mr-auto">
                  <base-icon :name="this.icon" :color="this.color" size="2em"/>
              </div>
              <div className="text-2xl
                  text-[#0F83C9] ml-auto">
                  {{ this.value }}
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
            <div className="text-xl text-left">
                {{ this.text }}
            </div>
            <div className="text-[12px] rounded-xl p-4 bg-[#F4F6F7] ml-auto">
                {{ this.desc }}
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import BaseIcon from './BaseIcon.vue'
  
  export default {
      name: 'DataBlock',
      components: { BaseIcon },
      props: ['value', 'icon', 'color', 'text', 'desc'],
  };
  </script>
  