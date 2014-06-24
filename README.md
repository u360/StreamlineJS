StreamlineJS
============

StreamlineJS is a lightweight JavaScript framework that makes building Single Page Applications (SPAs) simple. It is designed using Model View Controller (MVC) architecture along with Asynchronous Module Definition (AMD). It will truly streamline your app!

Module Template
===============

All code in StreamlineJS is written in modules that take the following form:

Example file name: js/mymodule.js

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

Example file name: js/model/mymodule.js

    define(function (require) {
      return {
        model: {
          ...
        }
      };
    });

Example file name: js/view/mymodule.js

    define(function (require) {
      return {
        view: function () {/*
          ...
        */}
      };
    });

File name: js/controller/mymodule.js

    define(function (require) {
      return {
        controller: function () {
          ...
        }
      };
    });


Model JSON Object
=================

StreamlineJS stores the `model` of all of the modules in one global JSON object named `json`.

To access the `model` of a module in it's `view` code, you reference the one global `json` object.


View Function
=============

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

New Syntax
==========

The only new syntax that StreamlineJS uses is a `< ... >` block. If a `<` is followed by a space, the code until a space followed by a `>` is treated as a JavaScript expression.

This StreamlineJS code...

    var name = "John Doe";
    <td>Hello < name >!</td>
    <a href="#">
      < "Click Here" >
    </a>
    
Will render this HTML...

    <td>Hello John Doe!</td>
    <a href="#">Click Here</a>    
    

    
