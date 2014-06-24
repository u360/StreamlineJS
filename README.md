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

The View code is regular HTML with regular JavaScript mixed in. If a line starts with `<`, it is an HTML line.
If the line does not end with `>`, then the following is an HTML line as well. All following lines will be
treated as HTML lines until a line does end with `>`.
