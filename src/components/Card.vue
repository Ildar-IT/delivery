<template>
  <div v-if="machine" class="card">
    <div class="card__content">
      <h2>#{{machine.serialNumber}}</h2>
      <div class="card__content__items">
        <span v-for="el in machine.machineTypes"
              :key="el"
              :style="{color: randomColor()}"
        >
          {{getRuTeg(el)}}
        </span>
      </div>
      <h4 v-if="machine.tradePoints">
        {{machine.tradePoints.location.address}}
      </h4>
      <h4 v-else>
        Локация не найдена!
      </h4>
      <span>
        Этаж: {{machine.floor}}
      </span>
      <button class="card__content-button" @click="machine.dialogShow = true">
        Время работы
      </button>
    </div>
    <MapTGis :id="machine.id"
               :center="[machine.tradePoints.location.latitude, machine.tradePoints.location.longitude]"
               :marker="[machine.tradePoints.location.latitude, machine.tradePoints.location.longitude]"
               :zoom="14"/>
    <Dialog v-model:show="machine.dialogShow" :dates="machine.tradePoints.workingTime"/>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
import MapTGis from "@/components/MapTGis";
export default {
  name: "Card",
  props: {
    machine: {
      type: Object,
    }
  },
  components: {
    Dialog,
    MapTGis
  },
  methods: {
    randomColor() {
      return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    },
    getRuTeg(name) {
      switch (name) {
        case 'only_non_cash_payments':
          return 'только безнал'
        case 'coffee':
          return 'кофе'
        case 'cashier':
          return 'есть кассир'
        case 'juices':
          return 'горячий шоколад'
        case 'hot_chocolate':
          return 'соки'

      }
    }
  }
}
</script>

<style>
.card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid #6b6767;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 20px;
}
.card__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 10px;
}
.card__content > h2 {
  margin-bottom: 15px;
}

.card__content__items {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.card__content__items span {
  border: 1px solid #6b6767;
  padding: 5px;
  color: #6b6767;
  border-radius: 7px;
}
.card__content > h4 {
  margin-bottom: 2px;
}
.card__content > span {
  margin-bottom: 20px;
}

.card__content-button {
  width: 150px;
  padding: 5px 0;
  border-radius: 10px;
  background-color: transparent;
  color: #067dcc;
  border: 1px solid #071aa6;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.card__content-button:active {
  color: black;
  border: 1px solid black;
}


@media (min-width: 700px) {
  .card__content {
    width: 50%;
  }
}
@media (min-width: 960px) {

  .card {
    padding: 20px;
  }
  .card__content-button {
    padding: 10px 0;
    width: 180px;
  }
}



</style>
