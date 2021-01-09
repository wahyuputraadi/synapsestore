<template>
  <div class="Product-Detail">
    <header-store></header-store>
    <detail-store></detail-store>
    <div class="my-5">
      <promo-store></promo-store>
    </div>
    <footer-store></footer-store>
  </div>
</template>

<script>
import HeaderStore from '@/components/HeaderStore.vue'
import PromoStore from '@/components/PromoStore.vue'
import FooterStore from '@/components/FooterStore.vue'
import DetailStore from '@/components/DetailStore.vue'


export default {
  name: 'Product-Detail',
  components :  {
    HeaderStore,
    PromoStore,
    FooterStore,
    DetailStore,
    }
}
</script>
