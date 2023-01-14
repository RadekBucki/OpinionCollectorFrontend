<template>
  <div v-if="hasSuggestions">
    <h1 class="container mt-3">Suggestions</h1>
    <suggestion-item v-for="suggestion in suggestions" 
      :key="suggestion.suggestionId"
      :id="suggestion.suggestionId"
      :sku="suggestion.product.sku"
      :description="suggestion.description"
      :user="suggestion.user"
      class="mt-3"
      >
    </suggestion-item>
  </div>
</template>

<script>
import { GetRequest } from "@/communication/Network.ts";

import SuggestionItem from '@/components/suggestion/SuggestionItem.vue';

export default {
  components: {
    SuggestionItem,
  },
  data() {
    return {
      suggestions: [],
    }
  },
  computed: {
    hasSuggestions() {
      return this.suggestions && this.suggestions.length > 0;
    },
  },
  methods: {
    loadSuggestions() {
      GetRequest.getAllSuggestions().then(res => {
        this.suggestions = res;
      });
    },
  },
  mounted() {
    this.loadSuggestions();
  }
}
</script>