<template>
  <div id="BannerStore">
     <!-- banner -->
      <div class="row">
        <div class="col">
           <carousel class="container" :items="1" :autoplay="true" :nav="false">
            <div class="bg-banner">
                <div class="row">
                  <div class="col-lg-6   kolom-kiri">
                    <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
                    <router-link to="/product-detail"><div type="button" class="btn btn-outline-light mt-3">Lihat Barang  <i class="fas fa-arrow-right"></i></div></router-link>
                  </div>
                  <div class="col-lg-6">
                    <img width="100%" height="auto" src="../assets/camera.png" alt="">
                  </div>
                </div>
            </div>
             <div class="bg-banner">
                <div class="row">
                  <div class="col-lg-6  kolom-kiri">
                    <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
                    <router-link to="/product-detail"><div type="button" class="btn btn-outline-light mt-3">Lihat Barang  <i class="fas fa-arrow-right"></i></div></router-link>
                  </div>
                  <div class="col-lg-6">
                    <img width="100%" height="auto" src="../assets/camera.png" alt="">
                  </div>
                </div>
            </div>
             <div class="bg-banner">
                <div class="row">
                  <div class="col-lg-6 kolom-kiri">
                    <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
                    <router-link to="/product-detail"><div type="button" class="btn btn-outline-light mt-3">Lihat Barang  <i class="fas fa-arrow-right"></i></div></router-link>
                  </div>
                  <div class="col-lg-6">
                    <img width="100%" height="auto" src="../assets/camera.png" alt="">
                  </div>
                </div>
            </div>
        </carousel>
          </div>
      </div>
      <!-- akhir banner -->
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'BannerStore',
  components : {
    carousel
  }
}
</script>


<style scoped>

</style>
