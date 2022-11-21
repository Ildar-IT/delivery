<template>
  <div v-if="show" class="dialog-shadow" @click.self="closeModal">
    <div class="dialog">
      <div class="dialog-content">
        <div class="dialog__close" @click="closeModal">
          <span></span>
          <span></span>
        </div>
        <div class="dialog__title">
          <h2>Время работы</h2>
        </div>
        <span class="dialog-content__today" v-if="openUntilTime">Открыто до {{ openUntilTime }}</span>
        <span v-else>Сегодня выходной</span>
        <div class="dialog__divider"></div>
        <div class="dialog__dates">
          <div v-for="item in modifiedDates" :key="item.id"
               class="dialog__date"
               :class="{ 'dialog__date--active':item.isActive}"
          >
            <span>{{ item.title }}</span>
            <span v-if="Array.isArray(item.time)"> {{ item.time[0] }} - {{ item.time[1] }}</span>
            <span v-else>{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    dates: {
      type: Object,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openUntilTime: '',
    }
  },
  computed: {
    modifiedDates() {
      let finalDates = {};
      let daysEN = ['sun', 'mon', 'tue', 'thu', 'wed', 'fri', 'sat'];
      let daysRU = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

      for (let key in this.dates) {
        let dayIndex = daysEN.findIndex(el => el === key);
        let today = new Date();

        if (today.getDay() === dayIndex) {
          this.openUntilTime = this.dates[key] !== null ? this.dates[key].split(';')[1] : '';
        }

        finalDates[key] = {
          id: Date.now(),
          title: daysRU[dayIndex],
          time: this.dates[key] !== null ? this.dates[key].split(';') : 'Выходной' ,
          isActive: today.getDay() === dayIndex
        }
      }

      return finalDates;

    },

  },
  methods: {
    closeModal() {
      this.$emit('update:show', false)
    },
  }
}
</script>

<style>
.dialog-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
  min-width: 360px;
  z-index: 10;
}

.dialog {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  max-width: 600px;

}
.dialog-content {
  position: relative;
  border: 1px solid  rgba(192, 156, 94, 0.95);
  background-color: white;
  border-radius: 20px;
  padding: 25px;
  width: 100%;

}
.dialog__title {
  display: flex;
  justify-content: center;
}

.dialog__title > h2 {
  font-size: 23px;
  margin-bottom: 20px;
}

.dialog span {
  color: #6b6767;
}

.dialog-content__today {
  display: block;
  text-align: center;
}

.dialog__divider {
  background-color: rgba(192, 156, 94, 0.95);
  height: 2px;
  margin: 10px 0;
}

.dialog__dates {
  padding: 0 5px;
}

.dialog__date {
  display: flex;
  justify-content: space-between;
}

.dialog__date--active {
  position: relative;
}

.dialog__date--active span:first-child::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -14px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background: rgba(192, 156, 94, 0.95);
}

.dialog__close {
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 15px;
  top: 26px;
  transition: 0.2s ease-in-out;
}

.dialog__close:hover {
  opacity: 0.8;
}

.dialog__close span {
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgba(20, 14, 20, 0.7);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.dialog__close span:first-child {
  transform: translate(-50%, -50%) rotate(135deg);

}

@media (min-width: 960px) {
  .dialog__title > h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .dialog__date--active span:first-child::before {
    left: -14px;
    width: 7px;
    height: 7px;
  }
  .dialog__close {
    top: 29px;
  }
}
</style>
