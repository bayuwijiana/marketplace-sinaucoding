<template>
  <Navbar />
  <section id="login">
    <div class="container">
      <div class="row justify-content-center mf">
        <div class="col-lg-6 shadow-lg rounded-3 right-side ">
          <form   >
            <p class="bg-info text-primary title-form px-3 py-2 rounded-top">
              Tambah Barang
            </p>
            <div class=" row pf ">
              <div class="col-3">
                <label for="NamaBarang" class="form-label">Nama Barang</label>
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="NamaBarang"
                  name="namaBarang"
                  placeholder="Enter Nama Barang"
                  autofocus
                />
              </div>
            </div>
            <div class=" row pf">
              <div class="col-3">
                <label for="hargaBarang" class="form-label">Harga Barang</label>
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="hargaBarang"
                  name="harga"
                  placeholder="Enter Harga Barang"
                  autofocus
                />
              </div>
            </div>
            <div class=" row pf">
              <div class="col-3">
                <label for="StokBarang" class="form-label">Stok Barang</label>
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="StokBarang"
                  name="stok"
                  placeholder="Enter Stok Barang"
                  autofocus
                />
              </div>
            </div>
            <div class=" row pf">
              <div class="col-3">
                <label for="SupplierBarang" class="form-label"
                  >Supplier Barang</label
                >
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="SupplierBarang"
                  name="supplier"
                  placeholder="Enter Supplier Barang"
                  autofocus
                />
              </div>
            </div>
            <div class="d-flex justify-content-between pb">
                <router-link to="/barang">
                <button class="btn btn-dark action">Kembali</button>
                </router-link>   
              <button class="btn btn-primary action">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
