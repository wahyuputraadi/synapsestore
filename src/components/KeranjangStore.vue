<template>
    <div id="KeranjangStore">
      <div class="container">
           <!-- breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/product-detail"><i class="fas fa-list"></i> Detail</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
        </ol>
      </nav>  
      <hr>
    <!-- akhir breadcrumb -->
          <div class="row">
              <div class="col-lg-7">
                    <table class="table">
                        <tr>
                            <th>Gambar</th>
                            <th>Nama Barang</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td><img width="100px" src="../assets/headset.png" alt=""></td>
                            <td><h6>Adidas Jogger Nite 3M</h6></td>
                            <td><router-link to=""><div class="btn btn-danger"><i class="fas fa-trash"></i></div></router-link></td>
                        </tr>
                    </table>
              </div>
              <div class="col-lg-5">
                  <div class="product-checkout p-3">
                    <ul><h6>ID Transaction <span>#SH12000</span></h6></ul>
                    <hr class="border-white">
                    <ul><h6>ID Transaction <span>#SH12000</span></h6></ul>
                    <hr class="border-white">
                    <ul><h6>ID Transaction <span>#SH12000</span></h6></ul>
                    <hr class="border-white">
                    <ul><h6>ID Transaction <span>#SH12000</span></h6></ul>
                    <hr class="border-white">
                    <ul><h6>ID Transaction <span>#SH12000</span></h6></ul>
                    <hr class="border-white">
                    <ul><h6>ID Transaction <span>#SH12000</span></h6></ul>
                  </div>
                  <router-link to="/berhasil-store"><button class="btn btn-warning text-white mt-2 py-2 form-control">Pesan Sekarang</button></router-link>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'KeranjangStore'
}
</script>

<style>

</style>