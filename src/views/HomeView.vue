<template>
  <div class="home container mt-3">
    <form>
      <div class="row">
        <div class="col-5">
          <input type="text" class="form-control" placeholder="Keywords" />
        </div>
        <div class="col-1">
          <button type="submit" class="btn btn-dark mb-2">Search</button>
        </div>
      </div>
    </form>
    <form>
      <h1>Filters</h1>
    </form>
  </div>

  <div class="container">
    <div class="row products">
      <div v-for="item in products" :key="item" class="col-lg-10">
        <div class="p-2 mt-3 border rounded item row">
          <div class="fw-semibold fs-5 col-2">{{ item.name }}</div>
          <div class="row">
            <img :src="item.pictureUrl" class="img-fluid" alt="productImage" />
            <div class="col-3">{{ item.description }}</div>
            <div class="col-2" v-for="opinion in item.opinions" :key="opinion">
              <div>{{ opinion.advantages }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      products: [
        {
          sku: "skusku",
          name: "Samsung Galaxy S20",
          pictureUrl:
            "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s20-fe-5g-images/cloud-navy/PDP-GALLERY-S20-FE-cloud-Navy-Lockup-01-1600x1200.jpg?$product-details-jpg$",
          description: 'Ekran "6,5cala 6/128GB"',
          opinionAvg: null,
          firstName: "Uzytkownik",
          opinions: [
            {
              opinionValue: 1,
              description: "5",
              pictureUrl: "1",
              advantages: ["Super jest"],
              disadvantages: null,
              firstName: "Uzytkownik",
            },
          ],
          categories: [
            {
              categoryName: "Smartfony",
              visible: true,
            },
          ],
        },
        {
          sku: "skuu",
          name: "MacBook Air M1",
          pictureUrl:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664472289661",
          description: "Procesor Intel, dysk tysionc, cztery ka xD",
          opinionAvg: null,
          firstName: "Uzytkownik2",
          opinions: [
            {
              opinionValue: 2,
              description: "1",
              pictureUrl: "1",
              advantages: ["No tak srednio bym powiedzial"],
              disadvantages: ["zdjecieSlabegoProduktu.pl"],
              firstName: "Uzytkownik2",
            },
          ],
          categories: [
            {
              categoryName: "Laptopy",
              visible: true,
            },
          ],
        },
      ],
      actualPage: 1,
      numberOfPages: 1,
    };
  },
};
</script>

<style>
.item {
  height: 300px;
}
.item img {
  object-fit: contain;
  max-width: 55%;
  max-height: 55%;
}
</style>
