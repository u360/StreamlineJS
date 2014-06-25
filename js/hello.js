define(function (require) {
  return {

    model: {
      state_code: ""
    },

    view: function () {/*
      <div class="jumbotron">
        <h1>Hello, world!</h1>
        <p>Please enter a two letter state code
            and we will look it up for you.</p>
        <p>
          <input class="hello-form" type="text" name="state_code"
              value="< json.state_code >" />
        </p>
        <p>
          <a href="#" class="btn btn-primary hello-click" role="button">
            < "Search" >
          </a>
        </p>
      </div>
    */},

    controller: function () {
      var $ = require("jquery");
      var streamline = require("streamline");
      $(".hello-click").click(function () {
        streamline("world", "php", "hello-form", "main-div");
      });
    }

  };
});
