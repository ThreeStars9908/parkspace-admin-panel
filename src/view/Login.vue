<template>
    <div class="login">
        <div className="h-screen flex flex-row justify-between">
            <div v-if="show_background"
                className="absolute h-full z-10">
                <img className="h-full object-cover"
                    src="../../public/assets/img/vector-logo.png" alt="svg image" />
            </div>
            <div className="m-auto z-20 min-w-fit"
                v-show="page == 'Login'">
                <img className="m-auto h-full mb-6"
                    src="../../public/assets/img/brand-login.png"
                    alt="" />
                <div className="text-[#008BB6] mb-8 text-[24px] font-semibold">
                    {{ $t('login.signin') }}
                </div>
                <div className="m-auto">
                    <input-form
                        type="text"
                        placeholder="login.email"
                        v-model:value="email"
                    />
                    <input-form
                        type="password"
                        placeholder="login.password"
                        v-model:value="password"
                    />
                    <div className="text-[#008BB6] underline mb-8 cursor-pointer"
                        @click="page = 'Reset'">
                        {{ $t('login.forgot_password') }}
                    </div>
                    <button className="rounded-lg p-2 mb-4
                        w-full text-white bg-[#0096C2]
                        cursor-pointer hover:shadow-lg"
                        @click="login">
                        {{ $t('login.login') }}
                    </button>
                </div>
            </div>
            
            <div className="m-auto z-20 min-w-fit"
                v-show="page == 'Reset'">
                <img className="m-auto h-full mb-6"
                    src="../../public/assets/img/brand-login.png"
                    alt="" />
                <div className="w-[60%] mx-auto">
                    <div className="text-[#008BB6] mb-8 text-[24px] font-semibold">
                        {{ $t('login.retrieve') }}
                    </div>
                    <div className="m-auto">
                        <input-form
                            type="text"
                            placeholder="login.email"
                            v-model:value="email"
                        />
                        <div className="text-[#7A7A7A] m-auto w-[80%] mb-6">
                            {{ $t('login.sent') }}
                        </div>
                        <button className="rounded-lg p-2 mb-4
                            w-full text-white bg-[#0096C2]
                            cursor-pointer hover:shadow-lg"
                            @click="page = 'Password'">
                            {{ $t('login.send') }}
                        </button>
                    </div>
                </div>
            </div>

            <div className="m-auto z-20 min-w-fit"
                v-show="page == 'Password'">
                <img className="m-auto h-full mb-6"
                    src="../../public/assets/img/brand-login.png"
                    alt="" />
                <div className="text-[#008BB6] mb-8 text-[24px] font-semibold">
                    {{ $t('login.change_password') }}
                </div>
                <div className="m-auto">
                    <input-form
                        type="password"
                        placeholder="login.password"
                        v-model:value="password"
                    />
                    <input-form
                        type="password"
                        placeholder="login.confirm_password"
                        v-model:value="confirmPass"
                    />
                    <button className="rounded-lg p-2 mb-4
                        w-full text-white bg-[#0096C2]
                        cursor-pointer hover:shadow-lg"
                        @click="page = 'Login'">
                        {{ $t('login.confirm_password') }}
                    </button>
                    <div className="m-auto text-[#7A7A7A] mb-2">{{ $t('login.or') }}</div>
                    <div className="m-auto font-semibold text-[#0096C2]
                        cursor-pointer" @click="page = 'Login'">
                        {{ $t('login.loginto') }}
                    </div>
                </div>
            </div>
            <div v-if="show_background"
                className="bg-sky-600 xl:w-[60%] lg:w-[50%]">
                <img className="h-full opacity-40 object-cover"
                    src="../../public/assets/img/background-login.png"
                    alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import InputForm from '../items/InputForm.vue';
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'LoginView',
    components: {
        InputForm
    },
    data() {
        return {
            email: '',
            password: '',
            confirmPass: '',
            show_background: true,
            page: 'Login',
        }
    },
    computed: {
        ...mapState('Auth', ['errors', 'success']),
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        ...mapActions('Auth', ['Login', 'Logout', 'Get_Admin_Data']),
        async login() {
            await this.Login({
                email: this.email,
                password: this.password,
            });
            if(this.errors)
                toast.error(this.errors);
            if(this.success) {
                this.Get_Admin_Data();
                toast.success(this.success);
            }
            
        },
        onResize() {
            if (window.innerWidth <= 992) {
                this.show_background = false;
            } else {
                this.show_background = true;
            }
        },
        goPage(route) {
            this.$router.push({ name: route });
        },
    },
    created() {
        this.Logout();
    },
}
</script>
