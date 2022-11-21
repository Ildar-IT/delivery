<template>
  <div :id="this.id.toString()" class="map-tgis">
  </div>
</template>

<script>
import gMap from '2gis-maps'

export default {
  props: {
    id: {
      type: Number,
      default: Date.now()
    },
    center: {
      type: Array,
      default: []
    },
    marker: {
      type: Array,
      default: []
    },
    zoom: {
      type: Number,
      default: 13
    },
  },
  methods: {
    init() {
      let map
      gMap.then(() => {
        map = DG.map(this.id.toString(), {
          'center': this.center,
          'zoom': this.zoom,
          'zoomControl': false,
          'fullscreenControl': false,
        });
        DG.marker(this.marker).addTo(map)

      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style>
.map-tgis {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border-radius: 15px;
}


@media (min-width: 700px) {
  .map-tgis {
    margin-top: 0;
    width: 50%;
    height: 180px;
  }
}
@media (min-width: 960px) {
  .map-tgis {
    height: 220px;
  }
}
</style>
