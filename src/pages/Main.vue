<template>
  <div class="main">
    <div class="main__header">
      <h1>Список:</h1>
      <SearchInput v-model="findText"/>
    </div>
    <div class="main__list">
      <Card v-if="filterItems && filterItems.length !== 0"
            v-for="item in filterItems" :key="item.id"
            :machine="item"/>
      <h2 v-else>Список пуст!</h2>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import SearchInput from "@/components/SearchInput";

export default {
  name: "Main",
  components: {
    Card,
    SearchInput
  },
  data() {
    return {
      findText: '',
    }
  },
  computed: {
    filterItems() {
      let items = this.$store.state.data;
      if (this.findText) {
        let filtered = items.filter(item =>
          item.serialNumber.toLowerCase().includes(this.findText.toLowerCase()));

        if (filtered.length === 0) {
          return items.filter(item =>
            item.tradePoints.location.address.toLowerCase().includes(this.findText.toLowerCase()));
        }
        return filtered;
      }
      return this.$store.state.data;
    }
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
}
</script>

<style>
.main {
  width: 100%;
  height: 100%;
}

.main__header {

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.main__header > h1{
  margin-right: 15px;
}


.main__list {
  overflow-y: scroll;
  max-height: calc(100vh - 86px);

}
.main__list > h2 {
  text-align: center;
}
</style>
