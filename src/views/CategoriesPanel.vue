<template>
  <div>
    <button type="button" class="btn btn-dark mt-2" :disabled="editPanel" @click="visibleChange">Add New Category</button>
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
            <td><button type="button" class="btn btn-danger" :disabled="editPanel" @click="removeCategory(index)">Remove</button></td>
            <td><button type="button" class="btn btn-dark" :disabled="editPanel" @click=editToggle(index)>Edit Category</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="editPanel">
      <CategoryEdit v-model="pickedCategory.categoryName"/>
      <button type="button" class="btn btn-dark mt-3" @click=saveEdit()>Save Edit</button>
    </div>
  </div>
</template>

<script>
import CategoryEdit from '@/components/category/CategoryEdit.vue';

export default {
  components: {
    CategoryEdit,
  },
  data() {
    return {
      visibleAddPanel: false,
      editPanel: false,
      pickedCategory: '',
      categories: [
        {
          categoryName: "Smartfony",
          visible: true,
        },
        {
          categoryName: "Klawiatury",
          visible: true,
        },
        {
          categoryName: "Laptopy",
          visible: true,
        },
        {
          categoryName: "SmartWatch",
          visible: false,
        },
        {
          categoryName: "Myszki",
          visible: true,
        },
        {
          categoryName: "Slochawki",
          visible: true,
        },
      ],
      visible: null,
      categoryName: '',
    }
  },
  methods: {
    addCategory() {
      const toBool = (this.visible === 'true');
      this.categories.push({
        categoryName: this.categoryName,
        visible: toBool,
      });
      this.categoryName = '';
      this.visible = null;
    },
    removeCategory(index) {
      this.categories.splice(index, 1);
      //delete
    },
    visibleChange() {
      this.visibleAddPanel = !this.visibleAddPanel;
    },
    editToggle(index) {
      this.editPanel = !this.editPanel;
      this.pickedCategory= this.categories[index];
    },
    saveEdit() {
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
}
</script>