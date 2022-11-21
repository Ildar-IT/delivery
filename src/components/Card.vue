<template>
  <div v-if="machine" class="card">
    <div class="card__content">
      <div>
        <h2>#{{ machine.serialNumber }}</h2>
        <div class="card__content__items">
        <span v-for="el in machine.machineTypes"
              :key="el"
              :style="{color: randomColor()}"
        >
          {{ getRuTeg(el) }}
        </span>
        </div>
        <h4 v-if="machine.tradePoints">
          {{ machine.tradePoints.location.address }}
        </h4>
        <h4 v-else>
          Локация не найдена!
        </h4>
        <span>
        Этаж: {{ machine.floor }}
      </span>
      </div>
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

      return `rgba(${this.getRandomArbitrary(1, 20)}0, ${this.getRandomArbitrary(1, 20)}0, 94, 0.75`;
    },
    getRandomArbitrary(min, max) {
      return Math.round((Math.random() * (max - min) + min));
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
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
}

.card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-right: 10px;
}

.card__content > div > h2 {
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
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 5px;
  color: #6b6767;
  border-radius: 7px;
}

.card__content > div > h4 {
  margin-bottom: 2px;
}

.card__content > div {
  margin-bottom: 10px;
}

.card__content-button {
  width: 150px;
  padding: 7px 0;
  border-radius: 10px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.6);
}

.card__content-button:hover {
  color: #fff;
  background: rgba(192, 156, 94, 0.95);
  border: 1px solid transparent;
}


@media (min-width: 700px) {
  .card__content {
    width: 50%;
  }
}

@media (min-width: 960px) {
  .card__content > div {
    margin-bottom: 15px;
  }

  .card {
    padding: 20px;
  }

  .card__content-button {
    padding: 10px 0;
    width: 180px;
  }
}


</style>
