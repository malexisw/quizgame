<template>
  <div class="loader">
    <div class="triangle un"></div>
    <div class="triangle deux"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;

    background: rgb(204, 203, 203);
}

.un{
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #000 10%, rgb(204, 203, 203) 42%);
  background: -webkit-linear-gradient(left, #000 10%, rgb(204, 203, 203) 42%);
  background: -o-linear-gradient(left, #000 10%, rgb(204, 203, 203) 42%);
  background: -ms-linear-gradient(left, #000 10%, rgb(204, 203, 203) 42%);
  background: linear-gradient(to right, #000 10%, rgb(204, 203, 203) 42%);
  position: absolute;
  -webkit-animation: load 1.4s infinite linear;
  animation: load 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.deux{
  font-size: 5px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #000;
  background: -moz-linear-gradient(right, rgb(204, 203, 203) 42%, #000 10%);
  background: -webkit-linear-gradient(right,rgb(204, 203, 203) 42%, #000 10%);
  background: -o-linear-gradient(right,rgb(204, 203, 203) 42%, #000 10%);
  background: -ms-linear-gradient(right, rgb(204, 203, 203) 42%, #000 10%);
  background: linear-gradient(to left, rgb(204, 203, 203) 42%, #000 10%);
  position: absolute;
  -webkit-animation: load-reverse 1.4s infinite linear;
  animation: load-reverse 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.triangle::before {
  width: 50%;
  height: 50%;
  background: #000;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.triangle::after {
  background: rgb(204, 203, 203);
  width: 85%;
  height: 85%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@-webkit-keyframes load{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes load{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes load-reverse{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes load-reverse{
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>