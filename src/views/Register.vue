<template>
    <section id="register">
        <div class="container ">
            <div class="row justify-content-evenly content-reg">
                <div class="col-lg-5 text-primary text-center left-side mb-3 ">
                    <img src="../assets/logosinaucoding3.jpg" class="log-title">
                    <h1 class="title">Selamat Datang</h1>
                    <b class="sub-title ">MARKETPLACE </b><b>Sinau Coding</b>
                </div>
                <div class=" col-lg-5 shadow-lg gap-5 rounded right-side ">
                    <p class="bg-info text-primary title-form text-center rounded-top"> Register</p>
                    <form   @submit.prevent="register" class="m-20 ">
                        <div class="px-3">
                            <label for="Username" class="form-label">Username</label>
                            <input v-model="username" type="text" class="form-control" id="Username" name="username"
                                placeholder="Enter username" autofocus>
                        </div>
                        <div class="px-3">
                            <label for="Profilname" class="form-label">Profil Name</label>
                            <input v-model="profilName" type="text" class="form-control" id="profilname" name="profilName"
                                placeholder="Enter profil name">
                        </div>
                        <div class="px-3">
                            <label for="Password" class="form-label p-10">Password</label>
                            <input v-model="password" type="password" class="form-control p-10" id="Password" name="password"
                                placeholder="Enter password">
                        </div>
                        <div class="d-flex flex-column align-items-center p-3">
                            <button type="submit" class="btn btn-primary">Masuk</button>
                            <router-link to="/login">Sudah Punya Akun</router-link>
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
        data:function(){
            return{
                username:'',
                profilName:'',
                password:''
            }
        },
        methods: {
                    register: async function () {
                       await axios .post("http://159.223.57.121:8090/auth/register", {
                                username: this.userName,
                                profilName: this.profilName,
                                password: this.password,
                            })
                            .then(async (response) => {
                                const  data = await response.data;
                                console.log(data);
                                this.$router.push('/login');
                                this.userName = "";
                                this.profilName = "";
                                this.password = "";
                            });
                        }
                 }
        
    }
</script>
<style>
.left-side {
    padding-top: 4%;
}
.right-side{
    border-radius: 30px;
   
}

.title-form {
    height: 50px;
    width: 100%;
}

.log-title {
    width: 360px;
    height: 90px;
    padding-left: 3%;
}

.title {
    font-size: 35px;
    font-weight: bolder;
}

.sub-title {
    font-family: 'Arial', sans-serif;
    font-weight: bolder;
    font-size: 15px;
}
</style>
