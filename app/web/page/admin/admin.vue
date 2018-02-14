<template>
  <layout>
    <div id="example">
      <ul class="list-group list-group-flush" v-for="item of replys">
        <li class="list-group-item">{{item}}
          <button class="btn btn-success btn-sm">change</button>
        </li>
      </ul>
    </div>
  </layout>
</template>

<script>
  import Vue from 'vue';
  export default {
    data() {
      return {
        counter: 0
      }
    }
  }
</script>


