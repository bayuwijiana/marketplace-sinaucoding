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
                    <form  class="m-20  px-2">
                        <p class="bg-info text-primary title-form text-center rounded-top"> Login</p>
                        <div class="px-3">
                            <label for="Username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="Username" name="username" placeholder="Enter username" autofocus >
                        </div>
                        <div class="px-3">
                            <label for="Password" class="form-label p-10">Password</label>
                            <input type="password" class="form-control p-10" id="Password" name="password" placeholder="Enter password">
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