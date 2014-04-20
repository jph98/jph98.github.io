request = $.ajax({
    url: "https://api.github.com/users/jph98/repos",
    type: "get",
    data: {
      type: "public",
      sort: "full_name",
      direction: "asc",
      per_page: "100"
    }
});

request.done(function(repositories) {

    // Load the external template and apply the json data
    $.get('project.mustache.html', function(template, textStatus, jqXhr) {

      var test = { projects: [ {name: "jon"}, {name: "bob"} ]};

      output = Mustache.to_html(template, 
                               { projects: repositories } );

      $("#github-projects").append(output);

    });

});

request.fail(function(jqXHR, textStatus) {
     console.log("Failed to load github projects ");
});