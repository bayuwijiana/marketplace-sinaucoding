<template>
  <nav class="navbar navbar-dark bg-info fixed-top">
    <div class="container-fluid">
      <div class="align-item-center">
        <a class="navbar-brand nav-title text-primary" href="#">MARKETPLACE</a>
        <img src="../assets/nav-log.png" class="nav-log" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end side-nav text-bg-secondary"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel
        "
      >
        <div class="offcanvas-header bg-info text-center ">
          <h6
            class="offcanvas-title text-white mx"
            id="offcanvasDarkNavbarLabel"
          >
            MARKETPLACE
          </h6>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body mx-auto">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <font-awesome-icon icon="fa-regular fa-closed-captioning" />
              <button class="btn-side" @click="logout">
                <h5>Logout</h5>
              </button>
            </li>
            <li class="nav-item">
              <router-link to="/barang">
                <button class="btn-side">
                  <h5>Barang</h5>
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/supplier"
                ><button class="btn-side">
                  <h5>Supplier</h5>
                </button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("Anda logout");
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.mx {
  margin-left: 17px;
  font-family: Arial, Helvetica, sans-serif;
}
.side-nav {
  opacity: 95%;
  background: lightgray;
}
.btn-side {
  background-color: white;
  border: solid gray 1px;
  width: 200px;
  margin: 2px;
  height: 40px;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.nav-title {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding-left: 50px;
}
.nav-log {
  width: 120px;
  height: 40px;
}
</style>
