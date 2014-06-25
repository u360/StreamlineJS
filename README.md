StreamlineJS.com
================

StreamlineJS is a lightweight JavaScript framework that makes building Single Page Applications (SPAs) simple. It is designed using a Model-View-Controller (MVC) architecture and the Asynchronous Module Definition (AMD). It will truly streamline your app!

Your app will be divided into small modules that are loaded on an as-needed basis to speed up the responsiveness of your app. All HTML rendering is done on the client, so your back-end code only has to output JSON objects.

Module
======

All code in StreamlineJS is written in modules that take the following form:

js/mymodule.js

    define(function (require) {
      return {

        model: {
          ...
        },

        view: function () {/*
          ...
        */},

        controller: function () {
          ...
        }

      };
    });

Each module defines a `model` JSON object, a `view` function that is commented out, and a normal `controller` function.

The module can be defined all in one file, or in three seperate files like this:

js/model/mymodule.js

    define(function (require) {
      return {
        model: {
          ...
        }
      };
    });

js/view/mymodule.js

    define(function (require) {
      return {
        view: function () {/*
          ...
        */}
      };
    });

js/controller/mymodule.js

    define(function (require) {
      return {
        controller: function () {
          ...
        }
      };
    });


Model
=====

StreamlineJS stores the `model` of all of the modules in one global JSON object named `json`.

To access the `model` of a module in it's `view` code, you reference the one global `json` object.


View
====

The View code is standard HTML with standard JavaScript mixed in. There are no new commands to learn.

If a line starts with `<`, it is an HTML line. And if the line does not end with `>`, then the following line is an HTML line as well. And all of the lines until a line does end with `>`.

All of these lines would be treated as HTML:

    <h2>Hello world!</h2>
    <p>This whole sentence will be treated
        as HTML since the previous line did
        not end with a greater than symbol.</p>
    <button class="primary" onclick="
        alert("Hello world!");">
      <img src="arrow.png" />
    </button>

All of the other lines that do NOT begin with `<` and are NOT a continuation of an HTML line are treated as standard JavaScript lines.

Here is a code snippet that has some JavaScript lines mixed in with some HTML lines:

    <tr>
      var friend = ["John", "Mary"];
      for (i = 0; i < 2; i++) {
        <td>Hello < friend[i] >!</td>
      }
    </tr>
    
In that code snippet, these are standard JavaScript lines:

    ...
      var friend = ["John", "Mary"];
      for (i = 0; i < 2; i++) {
        ...
      }
    ...
    
In that code snippet, these are standard HTML lines:

    <tr>
      ...
      ...
        <td>Hello < friend[i] >!</td>
      ...
    </tr>

Controller
==========

The `controller` function includes JavaScript that is executed after the HTML has been rendered.

For example, this code registers what will happen if the user clicks on a link or button defined with the `hello-click` class.

    $(".hello-click").click(function () {
      streamline("world", "php", "hello-form", "main-div");
    });

The `streamline` function will serialize all the inputs of the `hello-form` class and send them to the back-end `world.php` script. The results from the back-end script will be stored in the global `json` object. The `world.js` view will then be rendered and the resulting HTML will be placed in the `main-div` element.


New Syntax
==========

The only new syntax that StreamlineJS uses is a `< space ... space >` block. All code between `< space` and `space >` is treated as a JavaScript expression.

This StreamlineJS code...

    var name = "John Doe";
    <td>Hello < name >!</td>
    <a href="#">
      < "Click Here" >
    </a>
    
Will render this HTML...

    <td>Hello John Doe!</td>
    <a href="#">Click Here</a>    
    
index.html
==========

Your StreamlineJS app will consist of one `index.html` HTML file and multiple JavaScript files, one for each module of your your app. Our demo has three modules, `app.js`, `hello.js`, and `world.js`. StreamlineJS only requires two external libraries, RequireJS and jQuery.

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>StreamlineJS Demo</title>
      </head>
      <body>
        <div id="body-div"></div>
        <script src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.11/require.min.js"></script>
        <script>
          require.config({
            baseUrl: "js",
            paths: {
              "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min"
            }
          });
          require(["jquery", "streamline"], function (jquery, streamline) {
            window.$ = jquery;
            window.streamline = streamline;
            $(document).ready(function () {
              streamline("app", "", "", "body-div");
            });
          });
        </script>
      </body>
    </html>

The `index.html` file will initialize RequireJS and call `streamline` to load the main `app` module.

app.js
======

The `app` module renders the main webpage and includes a div where the `hello` and `world` will be viewed.

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

hello.js
========

The `hello` module lets the user enter a two letter state code and sends that to the `world` module.


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

world.js
========

The `world` module receives a two letter state code and looks up the corresponding state name. It includes a button to return to the `hello` module so the user can enter a new state code.


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

streamline()
============

The `streamline` function takes four parameters: streamline(name, ext, form, div)

`name` is the name of the module, excluding `.js`. The module must reside in the `baseUrl` defined in `require.config`. If the module is split into three seperate files, then append an `*` to the name. Example: "mymodule*"

`ext` is the file extension of the back-end code. The file must reside in a folder with the same name. For example, if the back-end program is `mymodule.php`, then the file must be `php/mymodule.php`. Leave blank if there is no back-end code.

`form` is the CSS class of the input fields that will be passed to the back-end code. Do not use `<form>` elements. Just add the same class to each input element that you wish to pass to the back-end code using names like `something-form`.

`div` is the ID of the div where you want the output HTML to be placed. We recommend you use ID names like `something-div`.

License
=======

StreamlineJS is licensed under the MIT license.
