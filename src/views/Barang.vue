<template>
<Navbar/>
    <section class="container-fluid">
        <div class="row">
            <div class="dash-prof ">
                <div class="col-lg-2 text-primary text-center left-prof ">
                    <div class=" profil shadow-lg rounded pt-3">
                        <img src="../assets/profil-log.png" class="log-profil mb-4 ">
                        <p class="dash-title-prof rounded-bottom bg-info text-primary">Bayu</p>
                    </div>
                    <div class=" shadow-lg mb-2 rounded ">
                        <p class="dash-title bg-info text-primary rounded-top">
                            Menu
                        </p>
                        <div class="active">
                            Barang
                        </div>
                        <div class="active">
                            Suplier
                        </div>
                    </div>
                    <div class=" shadow-lg mb-2 rounded">
                        <p class="dash-title-online bg-info text-primary rounded-top">Online</p>
                        <div class="d-flex justify-content-evenly ">
                            <div>hari online </div>
                            <div>: tgl - -</div>
                        </div>
                        <div class="d-flex justify-content-evenly ">
                            <div>waktu online </div>
                            <div>: tgl - -</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-3">
            <div class="row justify-content-lg-evenly content-dash">
               <div class="col-2">
               </div>
                <div class=" col-lg-9 shadow-lg rounded-3 data-cont ">
                    <h3 class="bg-info text-primary rounded-top p-2">Dashboard</h3>
                    <div class="d-flex justify-content-between p-2">
                        <h4>Barang</h4>
                        <button class="btn btn-primary ">
                            Tambah Barang
                        </button>
                    </div>
                    <div class="table-responsive p-2">
                        <table class="table table-bordered">
                                <tr>
                                    <td>No</td>
                                    <td>Nama Barang</td>
                                    <td>Stock</td>
                                    <td>Harga</td>
                                    <td>Nama Suplier</td>
                                    <td>Alamat Suplier</td>
                                    <td>No Telp Supplier</td> 
                                    <td>
                                        Aksi
                                    </td>
                                </tr>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr><tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr><tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr><tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr><tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr><tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr><tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 


<style>
.dash-title-prof{
    font-size: 25px;
    padding: 5px;
    height: 70px;

}
.dash-title{
    font-size: 25px;
    padding: 5px;
    height: 60px;

}.dash-title-online{
    font-size: 25px;
    padding: 5px;
    height: 40px;
}


.action{
    width: 80px;
    margin-top: 1px;
}
</style>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: {
        Navbar,
    }
}
</script>