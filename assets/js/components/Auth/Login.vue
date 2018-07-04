<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form @submit.prevent="login">
                    <div class="form-group has-feedback">
                        <label for="email">Email address</label>
                        <input id="email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="form-group has-feedback">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="form-control" placeholder="Password">
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
</template>
<style>
    @import url('./../../../libs/iCheck/square/blue.css');
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
    export default {
        methods: {
            login(){
                var vm = this
                vm.$router.push({name: 'Dashboard'}, function (e) {
                })
            }
        }
    }
</script>
