request = $.ajax({
    url: "https://api.github.com/users/jph98/repos",
    type: "get"
});

request.done(function(repositories) {

    console.log("Done");

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