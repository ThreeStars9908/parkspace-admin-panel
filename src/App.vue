<template>
  <div class="app">
    <sidebar-menu :menu="menu"
      :collapsed="isClosed"
      @update:collapsed="onToggleCollapse"
      @collapse="onToggleCollapse"
      v-if="currentRouteName != 'login'"
    >
      <template v-slot:toggle-icon>
        <div className="ml-auto mr-3">
          <base-icon
          :name="!isClosed ? 'fa-solid fa-circle-arrow-left': 'fa-solid fa-circle-arrow-right'"
          size="2em" color="#F9F9F9" />
        </div>
      </template>
      <template v-slot:header>
        <div v-show="!isClosed">
          <img className="m-auto mb-8"
            src="../public/assets/img/brand-logo.png"
            alt="" />
          <div className="h-0.5 w-[90%] mx-auto bg-[#F9F9F9]" />
        </div>
      </template>
      <template v-slot:footer>
        <div className="h-0.5 w-[90%] mx-auto bg-[#F9F9F9]" />
        <div v-show="!isClosed"
          @click="goPage('login')"
          className="w-[90%] mx-auto ml-8 text-[#F9F9F9] cursor-pointer flex">
        </div>
      </template>
    </sidebar-menu>
    <router-view
      :className="currentRouteName != 'login'
      ? (!isClosed ? 'ml-[320px] mr-[50px] my-20 ' :
      'ml-[100px] mr-[50px] my-20 ') : ''"
    />
  </div>
</template>

<script>
import BaseIcon from './items/BaseIcon.vue';
import { mapState } from 'vuex';

export default {
  components: { BaseIcon },
  name: 'App',
  data() {
    return {
      menu: [
        {
          href: '/dashboard/',
          title: 'Dashboard',
          icon: 'fa fa-house',
        },
        {
          href: '/user/',
          title: 'User Management',
          icon: 'fa fa-users',
        },
        {
          href: '/report/',
          title: 'Reports',
          icon: 'fab fa-trello',
        },
        {
          href: '/booking/',
          title: 'Booking management and Finance',
          icon: 'fa fa-dollar-sign',
        },
        {
          href: '/support/',
          title: 'Support',
          icon: 'fa fa-circle-exclamation',
        },
        {
          href: '/requisition/',
          title: 'Requisitions',
          icon: 'fa fa-clock',
        },
        {
          href: '/review/',
          title: 'Reviews',
          icon: 'fa fa-star',
        },
        {
          href: '/subscription/',
          title: 'Subscriptions and Cashback',
          icon: 'fa fa-shopping-bag',
        },
        {
          href: '/documentation/',
          title: 'Legal documentation',
          icon: 'fa fa-file',
        },
        {
          href: '/configuration/',
          title: 'Configurations',
          icon: 'fa fa-cog',
        },
        {
          href: '/account/',
          title: 'My account',
          icon: 'fa fa-user',
        },
        {
          href: '/login/',
          title: 'Logout',
          icon: 'fa fa-right-from-bracket',
        }
      ],
      isClosed: false,
    }
  },
  props: {
    relative: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    ...mapState('Auth', ['success']),
    currentRouteName() {
      return this.$route.name;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onToggleCollapse() {
      this.isClosed = !this.isClosed;
    },
    goPage(route) {
      this.$router.push({ name: route });
    },
    onResize() {
      if (window.innerWidth <= 768) {
        this.isClosed = true;
      } else {
        this.isClosed = false;
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.v-sidebar-menu {
  background-color: #008BB6 !important;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
}

.v-sidebar-menu .vsm--toggle-btn {
  order: -1;
  border-top-right-radius: 32px;
  background-color: #008BB6 !important;
}

.v-sidebar-menu.vsm_collapsed .vsm--toggle-btn {
  padding: 0;
  justify-content: center;
}

.v-sidebar-menu .vsm--item {
  width: 90% !important;
  margin: .5rem auto;
}

.v-sidebar-menu .vsm--icon {
  background-color: #008BB6 !important;
}

.v-sidebar-menu .vsm--link {
  padding: 10px 12px !important;
}

.v-sidebar-menu .vsm--link .vsm--icon {
  color: #F9F9F9;
  font-size: 1.5rem;
  background-color: rgba(0,0,0,.0) !important;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active .vsm--icon {
  color: #008BB6;
  background-color: rgba(0,0,0,.0) !important;
}

.v-sidebar-menu .vsm--item_mobile .vsm--link_level-1.vsm--link_active {
  color: #F9F9F9 !important;
}

.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  color: #008BB6;
  background-color: #F9F9F9;
  box-shadow: none !important;
  border-radius: 12px;
}

.v-sidebar-menu .vsm--link_hover {
  border-radius: .5rem;
}

.v-sidebar-menu .vsm--title {
  white-space: normal;
  line-height: 1.25;
}

.v-sidebar-menu .vsm--link_active {
  font-weight: 600;
}

</style>
