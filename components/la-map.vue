<script lang="ts" setup>
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5pbHNvbmxvcGVzIiwiYSI6ImNpcnAxZTR6MjBlZjZmZ204ajNpenVjcmIifQ._Cwh0-xMibVxObcTLnoZnw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});
</script>

<template>
  <Head>
    <link
      rel="style/css"
      src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
    />
  </Head>
  <div id="map">sou um mapa</div>
</template>

<style scoped></style>
