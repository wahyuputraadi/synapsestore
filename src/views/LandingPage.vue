<template>
  <div class="landing-page">
    <header-store></header-store>
    <banner-store></banner-store>
    <category-store></category-store>
    <best-seller></best-seller>
    <promo-store></promo-store>
    <iklan-store></iklan-store>
    <footer-store></footer-store>
  </div>
</template>

<script>
import HeaderStore from '@/components/HeaderStore.vue'
import BannerStore from '@/components/BannerStore.vue'
import CategoryStore from '@/components/CategoryStore.vue'
import BestSeller from '@/components/BestSeller.vue'
import IklanStore from '@/components/IklanStore.vue'
import PromoStore from '@/components/PromoStore.vue'
import FooterStore from '@/components/FooterStore.vue'


export default {
  name: 'landingPage',
  components :  {
    HeaderStore,
    BannerStore,
    CategoryStore,
    BestSeller,
    IklanStore,
    PromoStore,
    FooterStore
    }
}
</script>
