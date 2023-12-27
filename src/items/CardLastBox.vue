<template>
    <div class="card-box">
        <div className="shadow-[4px_6px_30px_0px_#00000020] bg-gray-100
            rounded-lg">
            <div className="px-8 py-6">
                <div className="font-semibold text-xl text-left mb-4">
                    {{ $t(`${this.title}`) }}
                </div>
                <div className="grid grid-cols-3">
                    <div className="mb-2 text-left">
                        <div className="text-md">{{ $t('today') }}</div>
                        <div className="text-xl">{{ this.today }}</div>
                    </div>
                    <div className="mb-2 text-left">
                        <div className="text-md">{{ $t('last_7_days') }}</div>
                        <div className="text-xl">{{ this.this_week }}</div>
                    </div>
                    <div className="mb-2 text-left">
                        <div className="text-md">{{ $t('last_30_days') }}</div>
                        <div className="text-xl">{{ this.this_month }}</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#008AB6] rounded-b-lg px-8 py-2">
                <div className="text-md text-left text-gray-200">{{ $t('last_12_months') }}</div>
                <div className="text-2xl text-left text-gray-100">{{ this.this_month }}</div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'CardLastBox',
      props: ['title', 'today', 'this_week', 'this_month', 'this_year'],
  };
  </script>
  