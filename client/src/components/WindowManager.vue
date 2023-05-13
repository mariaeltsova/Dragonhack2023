<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div class="col-7 red"><slot></slot></div>
      <div class="col-5"><slot name="secondary"></slot></div>
    </div>
  </div>
</template>
