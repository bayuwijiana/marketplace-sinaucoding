<template>
    <Navbar />
    <section id="login">
        <div class="container">
            <div class="row justify-content-center mf">
                <div class="col-lg-6 shadow-lg rounded-3 right-side ">
                    <form>
                        <p class="bg-info text-primary title-form px-3 py-2 rounded-top">
                            Tambah Supplier
                        </p>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="NamaSupplier" class="form-label">Nama Supplier</label>
                            </div>
                            <div class="col-8  ">
                                <input type="text" class="form-control" id="NamaSupplier" name="namaSupplier"
                                    placeholder="Masukan Nama Supplier" autofocus />
                            </div>
                        </div>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="AlamatSupplier" class="form-label">Nama Supplier</label>
                            </div>
                            <div class="col-8  ">
                                <input type="text" class="form-control" id="AlamatSupplier" name="alamat"
                                    placeholder="Masukan Alamat Supplier" autofocus />
                            </div>
                        </div>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="NoTelpSupplier" class="form-label">No Telp Supplier</label>
                            </div>
                            <div class="col-8  ">
                                <input type="text" class="form-control" id="NoTelpSupplier" name="noTelp"
                                    placeholder="Masukan No Telp Supplier" autofocus />
                            </div>
                        </div>
                     
                        <div class="d-flex justify-content-between pb">
                            <router-link to="/supplier">
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
