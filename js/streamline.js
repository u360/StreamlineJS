/* StreamlineJS 1.0.0 - Streamline JavaScript AMD MVC Framework
 * Copyright 2014 Philip Johnson and u360.com
 * Released under the MIT license
 * http://github.com/u360/StreamlineJS
 */

define(function (require) {
  return function (name, ext, form, div) {
    if (name.substr(-1) == "*") {
      name = name.substr(0, name.length - 1);
      var module = ["model/" + name, "view/" + name, "controller/" + name];
    } else {
      var module = [name, name, name];
    }
    require(module, function (m, v, c) {
      var lines = v.view.toString().split("\n");
      var js = ["html=[];"];
      var max = lines.length - 1;
      var html = false;
      for (var i = 1; i < max; i ++) {
        var line = lines[i].trim();
        if (html || line.substr(0, 1) == "<") {
          if (line.substr(0, 1) != "<") {
            line = " " + line;
          }
          line = line.split("\\").join("\\\\");
          line = line.split("'").join("\\'");
          line = line.split("< ").join("'+");
          line = line.split(" >").join("+'");
          js.push("html.push('" + line + "');");
          if (line.substr(-1) != ">" || line == "<style>") {
            html = true;
          } else {
            html = false;
          }
        } else {
          js.push(line);
        }
      }
      var tmp = json;
      json = m.model;
      for (var key in tmp) {
       json[key] = tmp[key];
      }
      if (ext != "") {
        if (form != "") {
          var data = $('.' + form).serializeArray();
        } else {
          var data = {};
        }
        var pos = ext.indexOf(".");
        if (pos >= 0) {
          var file = ext.substr(pos + 1) + '/' + ext.substr(0, pos) + '.' + ext.substr(pos + 1);
        } else {
          var file = ext + '/' + name + '.' + ext;
        }
        $.getJSON(file, data, function (obj) {
          for (var key in obj) {
           json[key] = obj[key];
          }
          (function (js, json) {
            eval(js.join("\n"));
          })(js, json);
          $('#' + div).html(html.join(""));
          c.controller();
        });
      }
      else {
        (function (js, json) {
          eval(js.join("\n"));
        })(js, json);
        $('#' + div).html(html.join(""));
        c.controller();
      }
    });
  };
});
