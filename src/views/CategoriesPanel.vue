<template>
  <div>
    <button type="button" class="btn btn-dark mt-2" :disabled="editPanel" @click="visibleChange">Add New
      Category</button>
    <div v-if="visibleAddPanel" class="input-group mt-4">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Category and visibility</span>
      </div>
      <input type="text" class="form-control" v-model.trim="categoryName">
      <select v-model="visible">
        <option value=true>True</option>
        <option value=false>False</option>
      </select>
      <button type="button" class="btn btn-outline-dark" @click="addCategory()">Add category</button>
    </div>
    <div v-if="hasAddedCategories">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Visible</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category, index in categories" :key="category.categoryName">
            <td>{{ category.categoryName }}</td>
            <td>{{ category.visible }}</td>
            <td>
              <button 
                type="button" 
                class="btn btn-danger" 
                :disabled="editPanel"
                @click="removeCategory(index)"
                >
                Remove
              </button>
            </td>
            <td>
              <button 
                type="button" 
                class="btn btn-dark" 
                :disabled="editPanel" 
                @click=editToggle(index)
                >
                Edit Category
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="editPanel">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Category</span>
        </div>
        <label class="form-control">{{ pickedCategory.categoryName }}</label>
        <select v-model="this.pickedCategory.visible">
          <option value=true>True</option>
          <option value=false>False</option>
        </select>
      </div>
      <div class="button-control">
        <button 
          type="button" 
          class="btn btn-dark mt-3" 
          @click="saveEdit()"
          >
          Save Edit
        </button>
        <button 
          type="button" 
          class="btn btn-dark mt-3" 
          @click="back()"
          >
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { GetRequest, PostRequest, PutRequest, DeleteRequest } from "@/communication/Network.ts";

export default {
  data() {
    return {
      visibleAddPanel: false,
      editPanel: false,
      pickedCategory: null,
      index: null,
      categories: [],
      visible: true,
      categoryName: '',
    }
  },
  methods: {
    loadCategories() {
      GetRequest.getAllCategories().then(res => {
        this.categories = res;
      });
    },
    addCategory() {
      const toBool = (this.visible === 'true');
      PostRequest.addCategory(this.categoryName, toBool).then(res=> {
        this.categories.push(res);
      })
      this.categoryName = '';
      this.visible = null;
    },
    removeCategory(index) { 
      DeleteRequest.deleteCategory(this.categories[index].categoryName).then(res => {
        console.log(res);
        this.loadCategories();
      });
    },
    visibleChange() {
      this.visibleAddPanel = !this.visibleAddPanel;
    },
    editToggle(index) {
      this.editPanel = !this.editPanel;
      this.pickedCategory = this.categories[index];
      this.index = index;
    },
    saveEdit() {
      const toBool = (this.pickedCategory.visible === 'true');
      const edit = {
        categoryName: this.pickedCategory.categoryName,
        isVisible: toBool,
      };
      PutRequest.editCategory(edit.categoryName, edit.isVisible).then(res => {
        this.categories[this.index] = res;
      });
      this.editPanel = !this.editPanel;
    },
    back() {
      this.editPanel = !this.editPanel;
    }
  },
  computed: {
    hasAddedCategories() {
      return this.categories && this.categories.length > 0;
    },
    disableButton() {
      if (this.selectedView === 'editProduct') {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.loadCategories();
  },
}
</script>

<style scoped>
.button-control {
  display: flex;
  justify-content: center;
  gap: 10px;
}

</style>