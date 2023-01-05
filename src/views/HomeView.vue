<template>
  <div class="home container mt-3">
    <!-- <h1>This is a home page</h1> -->
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
      <h3>Filters</h3>
    </form>
  </div>

  <div class="container">
    <div class="row products">
      <div v-for="item in products" :key="item" class="col-lg-10">
        <div class="p-2 mt-3 border rounded item row">
          <div class="fw-semibold fs-5 col-2">{{ item.name }}</div>
          <div class="row">
            <img :src="item.img" class="img-fluid col-3" />
            <div class="col-6">{{ item.description }}</div>
            <div class="col-1" v-for="opinion in item.opinions" :key="opinion">
              <div>{{ opinion }}</div>
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
          name: "Samsung",
          img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          description:
            "Samsung headphones are known for their high-quality audio, comfortable fit, and sleek design. Many models also feature features such as noise cancelling, wireless connectivity, and long battery life. Overall, Samsung headphones are a reliable and convenient choice for listening to music, making phone calls, and more.",
          opinions: ["Cool", "Awesome"],
        },
        {
          name: "RayBan",
          img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          description:
            "Ray-Ban is a popular brand of eyewear known for its high-quality sunglasses and eyeglasses. Ray-Ban glasses are designed to provide optimal vision and protection from the sun's harmful UV rays. The brand is known for its iconic styles such as the Aviator, Wayfarer, and Clubmaster, which have been worn by celebrities and trendsetters for decades. ",
          opinions: ["Cool", "Awesome"],
        },
      ],
    };
  },
};
</script>

<style></style>
