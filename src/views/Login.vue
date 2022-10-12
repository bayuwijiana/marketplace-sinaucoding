<template>
    <section id="login">
        <div class="container ">
            <div class="row justify-content-evenly content-log">
                <div class="col-lg-5 text-primary text-center left-side mb-3">
                    <img src="../assets/logosinaucoding3.jpg" class="log-title">
                    <h1 class="title">Selamat Datang</h1>
                    <b class="sub-title ">MARKETPLACE </b><b>Sinau Coding</b>
                </div>
                <div class=" col-lg-5 shadow-lg rounded-3 gap-5 right-side">
                    <form  @submit.prevent="login" class="m-20 px-2">
                        <p class="bg-info text-primary title-form text-center rounded-top"> Login</p>
                        <div class="px-3">
                            <label for="Username" class="form-label">Username</label>
                            <input v-model="username" type="text" class="form-control" id="Username" name="username" placeholder="Enter username" autofocus >
                        </div>
                        <div class="px-3">
                            <label for="Password" class="form-label p-10">Password</label>
                            <input v-model="password" type="password" class="form-control p-10" id="Password" name="password" placeholder="Enter password">
                        </div>
                        <div class="d-flex flex-column align-items-center p-3">
                            <button type="submit" class="btn btn-primary">Masuk</button>
                            <router-link to="/register">Belum Punya Akun</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template> 
<script>
import axios from "axios"

export default {
    data: function () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login: async function () {
            await axios.post("http://159.223.57.121:8090/auth/login", {
                username: this.username,
                password: this.password,
            })
                .then(async (response) => {
                    localStorage.setItem("Token", response.data.data.token);
                    console.log(response);
                    
                    this.$router.push('/barang');
                    this.username = "";
                    this.password = "";
                });
        }
    }

}
</script>