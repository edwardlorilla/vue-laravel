<template>
    <transition  name="fade">
        <div v-if="show" class="login-box">
        <pre-loader/>
        <div class="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form @submit.prevent="login">
                    <div class="form-group has-feedback">
                        <label for="email">Email address</label>
                        <input id="email" v-model="credential.email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group has-feedback">
                        <label for="password">Password</label>
                        <input id="password" v-model="credential.password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="checkbox icheck">
                                <label>
                                    <input type="checkbox"> Remember Me
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <!-- /.social-auth-links -->

                <p class="mb-1">
                    <a href="#">I forgot my password</a>
                </p>
                <p class="mb-0">
                    <a href="register.html" class="text-center">Register a new membership</a>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    </transition>
</template>
<style>
    @import url('./../../../libs/font-awesome/css/font-awesome.min.css');
    @import url('./../../../libs/admin-lte/adminlte.min.css');
    @import url('./../../../libs/iCheck/square/blue.css');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700');
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
<script>

    import '././../../../libs/iCheck/icheck'
    $(function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        })
    })
    export default{
        data(){
            return{
                credential:{
                    email: '',
                    password: ''
                },
                show: true
            }
        },
        methods:{
            login(){
                let vm = this

                axios.post('/login', vm.credential).then(function () {
                    window.location.href = window.location.href;
                    vm.show = false
                })
            }
        }
    }
</script>
