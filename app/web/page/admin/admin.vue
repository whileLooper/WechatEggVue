<template>
  <layout>
    <div id="example" class="">
      <p class="text">Greeting Message when users subscribe your account: <span class="label label-info">{{greetingMsg}}</span></p>       
      <div class="input-group input-group-sm">
        <input type="text" class="form-control" v-bind:placeholder=greetingMsg v-model="inputGreeting">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button" v-on:click="onSubmit(inputGreeting)">Submit</button>
        </span>
      </div>
      <br>
      <ul class="list-group list-group-flush" v-for="(item, index) of replys">
        <li class="list-group-item">
          <p class="text">This is auto reply content for keyword: <span class="label label-info">{{index}}</span></p>
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" v-bind:placeholder=item>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Submit</button>
            </span>
          </div><!-- /input-group -->
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
        inputGreeting: ''
      }
    },
    methods: {
      onSubmit(msg) {
        if (msg.length > 0) {
          console.log(msg);
          this.$http.post('/admin/updateGreetingMSG', { 'greeting': msg })
            .then ((res)=> console.log (res.body))
            .catch ((error)=> console.log(error));
        }
      }
    }
  }
</script>


