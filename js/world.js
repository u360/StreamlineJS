define(function (require) {
  return {

    model: {
      stateName: ""
    },

    view: function () {/*
      <h3>Hello < json.stateName >!</h3>
      <p>The state name was returned by the world.php script
          <br>which is located in the php folder.</p>
      <p>When you click the Back button, notice that the state
          <br>code will be prepopulated with your previous entry.</p>
      <button class="world-click">Back</button>
    */},

    controller: function () {
      $(".world-click").click(function () {
        streamline("hello", "", "", "main-div");
      });
    }

  };
});
