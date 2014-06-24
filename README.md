StreamlineJS
============

Super Simple JavaScript Template Engine

index.html
==========


Module Template
===============

All code in StreamlineJS is written in modules and takes the following form:

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

View Code
=========

The View code is standard HTML with standard JavaScript mixed in. There are no new commands to learn.

If a line starts with `<`, it is an HTML line. And if the line does not end with `>`, then the following line is an HTML line as well. As well as all of the lines until a line does end with `>`.

All of these lines would be treated as HTML:

    <h2>Hello world!</h2>
    <p>This whole sentence will be treated
        as HTML since the previous line did
        not end with a greater than symbol.</p>
    <button class="primary" onclick="
        alert("Hello world!");">
      <img src="arrow.png" />
    </button>

All of the other lines that do NOT begin with `<` and are not a continuation of an HTML line are treated as JavaScript lines.

Here is some JavaScript mixed in with some HTML lines:

    <tr>
      var friend = ["John", "Mary"];
      foreach( $friend as $name ) {
        <td>      
        
    
