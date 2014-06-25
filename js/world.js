define(function (require) {
  return {

    model: {
      state_name: ""
    },

    view: function () {/*
      <div class="panel-body">
        <h3 class="text-info">
          < "That would be " + json.state_name + "." >
        </h3>
        <p>The state name was returned by the world.php script.</p>
        <p>When you click the Back button, notice that the state
            <br>code will be prepopulated with your previous entry.</p>
        <p><button class="btn btn-lg btn-default world-click"
            type="button">Back</button></p>
      </div>
    */},

    controller: function () {
      var $ = require("jquery");
      var streamline = require("streamline");
      $(".world-click").click(function () {
        streamline("hello", "", "", "main-div");
      });
    }

  };
});
