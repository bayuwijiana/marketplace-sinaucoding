<template>
    <Navbar />
    <section id="login">
        <div class="container">
            <div class="row justify-content-center mf">
                <div class="col-lg-6 shadow-lg rounded-3 right-side ">
                    <form @submit.prevent="ChangeData()">
                        <p class="bg-info text-primary title-form px-3 py-2 rounded-top">
                           Update Barang
                        </p>
                        <div class=" row pf ">
                            <div class="col-3">
                                <label for="NamaBarang" class="form-label">Nama Barang</label>
                            </div>
                            <div class="col-8  ">
                                <input v-model="namaBarang" type="text" class="form-control" id="NamaBarang" name="namaBarang"
                                    placeholder="Enter Nama Barang" autofocus />
                            </div>
                        </div>
                        <div class=" row pf">
                            <div class="col-3">
                                <label for="hargaBarang" class="form-label">Harga Barang</label>
                            </div>
                            <div class="col-8  ">
                                <input v-model="  harga  " type="text" class="form-control" id="hargaBarang" name="harga"
                                    placeholder="Enter Harga Barang" autofocus />
                            </div>
                        </div>
                        <div class=" row pf">
                            <div class="col-3">
                                <label for="StokBarang" class="form-label">Stok Barang</label>
                            </div>
                            <div class="col-8  ">
                                <input v-model="stok" type="text" class="form-control" id="StokBarang" name="stok"
                                    placeholder="Enter Stok Barang" autofocus />
                            </div>
                        </div>
                        <div class=" row pf">
                            <div class="col-3">
                                <label for="SupplierBarang" class="form-label">Supplier Barang</label>
                            </div>
                            <div class="col-8  ">
                            <select name="" id="" v-model="supplier">
                                <option v-for="(data,index) in dataSupplier" v-bind:key="data.index" :value="data">{{ data.namaSupplier }}</option>
                            </select>
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
import axios from "axios"

export default {
    data: function () {
        return {
            namaBarang: '',
            harga: '',
            stok: '',
            supplier: [],
            dataSupplier: [],
        }
    },
    created() {
        this.getUpdateBarang();
        this.getSupplier() 
    }, methods: {
        async getUpdateBarang() {
            const id = this.$route.query.id;
            console.log(id);
            const { data } = await axios.get("http://159.223.57.121:8090/barang/find-by-id/" + id,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: 0,
                        limit: 15
                    }
                });

            this.namaBarang = data.data.namaBarang,
                this.harga = data.data.harga,
                this.stok = data.data.stok,
                this.supplier = data.data.supplier
            console.log('data yang akan diupdate:', data.data);

        },
        async ChangeData() {
            const id = this.$route.query.id;
            let dataBarang = {
                namaBarang:this.namaBarang ,
                harga:this.harga,
                stok:this.stok,
                supplier:this.supplier,
            }
            await axios.put("http://159.223.57.121:8090/barang/update/" + id, dataBarang, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                const data = await response.data;

                if (data.status === 'OK') {
                    alert('sukses update Barang');
                }
                console.log('update ke data :', dataBarang);
                this.$router.push('/barang');
               
            });

        },
        async getSupplier() {
            const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: 0,
                        limit: 15
                    }
                });
            console.log('data:', data.data);
            this.dataSupplier = await data.data;
        },


    },

    components: {
        Navbar,
    },
};
</script>
