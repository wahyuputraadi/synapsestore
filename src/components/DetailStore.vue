<template>
   <div id="product-details">
    <div class="container">
    <!-- breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i> Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </ol>
      </nav>  
      <hr>
    <!-- akhir breadcrumb -->
      <div class="row">
        <div class="col-lg-4">
          <div class="product-pic">
            <img class="product-big-img" src="../assets/headset.png"   width="100%"    height="auto" />
          </div>
          <div class="product-pic-thumbs">
            <carousel class="row mt-2" :nav="false">
              <div class="col">
                  <div class="img-cover m-1">
                    <img width="100%" src="../assets/cover1.png" />
                  </div>
              </div>
              <div class="col">
                  <div class="img-cover m-1">
                    <img width="100%"  src="../assets/cover2.png" />
                  </div>
              </div>
              <div class="col">
                  <div class="img-cover m-1">
                    <img width="100%"  src="../assets/cover3.png" />
                  </div>
              </div>
               <div class="col">
                  <div class="img-cover m-1">
                    <img width="100%"  src="../assets/cover3.png" />
                  </div>
              </div>
               <div class="col">
                  <div class="img-cover m-1">
                    <img width="100%"  src="../assets/cover2.png" />
                  </div>
              </div>
            </carousel>
          </div>
        </div>
        <div class="col-lg-6 text-left ml-5">
          <h3><strong>Adidas Jogger Nite 3M</strong></h3>
          <hr />
          <h6><strong>IDR</strong> 1.999.800</h6>
          <div class="row">
            <div class="col py-3">
              <button type="button" class="btn btn-light" v-on:click="count--">
                  <img style="width: 25px" src="../assets/min.png" alt="" />  
              </button>
              <b class="p-2" style="font-size:25px;">{{ count }}</b>
              <button type="button" class="btn btn-light" v-on:click="count++">
                <img style="width: 25px" src="../assets/plus.png" alt="" />
              </button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="bg-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, error officia. Rem aperiam laborum voluptatum vel,
                  pariatur modi hic provident eum iure natus quos non a sequi,
                  id accusantium! Autem.
                  <br>
                  <br>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, error officia. Rem aperiam laborum voluptatum vel,
                  pariatur modi hic provident eum iure natus quos non a sequi,
                  id accusantium! Autem.
                </p>
              </div>
              <router-link class="btn btn-warning mt-3" to="/keranjang"
                >Tambahkan ke keranjang <i class="fas fa-cart-plus"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: "ProductDetails",
  components : {
    carousel
  },
  data () {
    return {
      count: 0,
    }
  }
};
</script>

<style>

</style>