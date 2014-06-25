define(function (require) {
  return {

    model: {
    },

    view: function () {/*
      <h1>StreamlineJS Demo</h1>
      <div id="main-div"></div>
    */},

    controller: function () {
      streamline("hello", "", "", "main-div");
    }

  };
});
