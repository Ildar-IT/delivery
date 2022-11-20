<template>
  <div class="main">
    <div class="main__header">
      <h1>Список:</h1>
      <FindInput v-model="findText"/>
    </div>
    <div class="main__list">
      <Card v-if="filterItems && filterItems.length !== 0"
            v-for="item in filterItems" :key="item.id"
            :machine="item"/>
      <h3 v-else>Список пуст!</h3>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import FindInput from "@/components/FindInput";

export default {
  name: "Main",
  components: {
    Card,
    FindInput
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
  margin-bottom: 30px;
}
.main__header > h1{
  margin-right: 15px;
}


.main__list {
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 40px;
}
</style>
