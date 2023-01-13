<template>
  <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
    aria-expanded="false" aria-controls="collapseExample">
    Test Me
  </button>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Testy test test text that was collapsed.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suggestions: [
        {
          "suggestionId": 1,
          "description": "Change the colors!",
          "product": {
            "sku": "skusku4",
            "name": "Mac",
            "pictureUrl": "https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png",
            "description": "descriptiomdescriptiomdescriptiomdescriptiom"
          },
          "reviewer": {
            "firstName": "John",
            "lastName": "Smith",
            "profilePictureUrl": "https://pl.pinterest.com/pin/327848047887112192/"
          },
          "review": {
            "status": "DECLINED",
            "reply": "Thx for your suggestion"
          },
          "user": {
            "firstName": "John",
            "lastName": "Smith",
            "profilePictureUrl": "https://pl.pinterest.com/pin/327848047887112192/"
          }
        }
      ]
    }
  }
}
</script>