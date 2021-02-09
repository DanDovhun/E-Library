function showResults() {
  var name = document.getElementById("input").value;
  name = name.toLowerCase();

  $(".outputs").hide();

  if (document.getElementById("all").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
  
      console.log(x);
  
      text = "";
  
      for (i = 0; i < x.length; i++) {
        text += "<tr>";
        text += "<td>" + x[i].title    + "</td>";
        text += "<td>" + x[i].author   + "</td>";
        text += "<td>" + x[i].language + "</td>";
        text += "<td>" + x[i].genre    + "</td>";
        text += "<td>" + x[i].room     + "</td>";
        text += "<td>" + x[i].shelf    + "</td>";
        text += "</tr>";
      }
  
      document.getElementById("output").innerHTML = text;
      $(".outputs").show(500);
    });
  }

  if (document.getElementById("title").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
      var text = "";
  
      for (i = 0; i < x.length; i++) {
        var param = x[i].title.toLowerCase();

        if (param.includes(name)) {
          text += "<tr>";
          text += "<td>" + x[i].title    + "</td>";
          text += "<td>" + x[i].author   + "</td>";
          text += "<td>" + x[i].language + "</td>";
          text += "<td>" + x[i].genre    + "</td>";
          text += "<td>" + x[i].room     + "</td>";
          text += "<td>" + x[i].shelf    + "</td>";
          text += "</tr>";
        }
      }
  
      if (text.length == 0) {
        alert("Nič sa nenašlo");
      }

      else {
        document.getElementById("output").innerHTML = text;
        $(".outputs").show(500);
      }
    });
  }

  if (document.getElementById("author").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
      var text = "";
  
      for (i = 0; i < x.length; i++) {
        var param = x[i].author.toLowerCase();
        
        if (param.includes(name)) {
          text += "<tr>";
          text += "<td>" + x[i].title    + "</td>";
          text += "<td>" + x[i].author   + "</td>";
          text += "<td>" + x[i].language + "</td>";
          text += "<td>" + x[i].genre    + "</td>";
          text += "<td>" + x[i].room     + "</td>";
          text += "<td>" + x[i].shelf    + "</td>";
          text += "</tr>";
        }
      }

      if (text.length == 0) {
        alert("Nič sa nenašlo");
      }

      else {
        document.getElementById("output").innerHTML = text;
        $(".outputs").show(500);
      }
    });  
  }

  if (document.getElementById("language").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
      var text = "";
  
      for (i = 0; i < x.length; i++) {
        var param = x[i].language.toLowerCase();

        if (param.includes(name)) {
          text += "<tr>";
          text += "<td>" + x[i].title    + "</td>";
          text += "<td>" + x[i].author   + "</td>";
          text += "<td>" + x[i].language + "</td>";
          text += "<td>" + x[i].genre    + "</td>";
          text += "<td>" + x[i].room     + "</td>";
          text += "<td>" + x[i].shelf    + "</td>";
          text += "</tr>";
        }
      }

      if (text.length == 0) {
        alert("Nič sa nenašlo");
      }

      else {
        document.getElementById("output").innerHTML = text;
        $(".outputs").show(500);
      }
    });  
  }

  if (document.getElementById("genre").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
      var text = "";
  
      for (i = 0; i < x.length; i++) {
        var param = x[i].genre.toLowerCase();

        if (param.includes(name)) {
          text += "<tr>";
          text += "<td>" + x[i].title    + "</td>";
          text += "<td>" + x[i].author   + "</td>";
          text += "<td>" + x[i].language + "</td>";
          text += "<td>" + x[i].genre    + "</td>";
          text += "<td>" + x[i].room     + "</td>";
          text += "<td>" + x[i].shelf    + "</td>";
          text += "<tr>";
        }
      }

      if (text.length == 0) {
        alert("Nič sa nenašlo");
      }

      else {
        document.getElementById("output").innerHTML = text;
        $(".outputs").show(500);
      }
    });  
  }

  if (document.getElementById("room").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
      var text = "";
  
      for (i = 0; i < x.length; i++) {
        var param = x[i].room.toLowerCase();

        if (param.includes(name)) {
          text += "<tr>";
          text += "<td>" + x[i].title    + "</td>";
          text += "<td>" + x[i].author   + "</td>";
          text += "<td>" + x[i].language + "</td>";
          text += "<td>" + x[i].genre    + "</td>";
          text += "<td>" + x[i].room     + "</td>";
          text += "<td>" + x[i].shelf    + "</td>";
          text += "</tr>";
        }
      }

      if (text.length == 0) {
        alert("Nič sa nenašlo");
      }

      else {
        document.getElementById("output").innerHTML = text;
        $(".outputs").show(500);
      }
    });  
  }

  if (document.getElementById("shelf").checked) {
    $.getJSON("javascripts/books.json", function(json) {
      var x = json.books;
      var text = "";
  
      for (i = 0; i < x.length; i++) {
        var param = x[i].shelf.toLowerCase();

        if (param.includes(name)) {
          text += "<tr>";
          text += "<td>" + x[i].title    + "</td>";
          text += "<td>" + x[i].author   + "</td>";
          text += "<td>" + x[i].language + "</td>";
          text += "<td>" + x[i].genre    + "</td>";
          text += "<td>" + x[i].room     + "</td>";
          text += "<td>" + x[i].shelf    + "</td>";
          text += "</tr>";
        }
      }

      if (text.length == 0) {
        alert("Nič sa nenašlo");
      }

      else {
        document.getElementById("output").innerHTML = text;
        $(".outputs").show(500);
      }
    });  
  }
}