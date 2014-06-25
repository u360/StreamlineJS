define(function (require) {
  return {

    model: {
      stateCode: ""
    },

    view: function () {/*
      <p>Please enter a two letter state code
          and we will look it up for you.</p>
      <input class="hello-form" type="text" name="stateCode"
          value="< json.stateCode >" />
      <button class="hello-click">Search</button>
    */},

    controller: function () {
      $(".hello-click").click(function () {
        streamline("world", "php", "hello-form", "main-div");
      });
    }

  };
});
