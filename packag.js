Package.describe({
    summary: "Original bootstrap typeahead plugin for Bootstrap3"
});

Package.on_use(function (api){
    // Package needs jQuery
    api.use(['jquery'], 'client')

    //x-editable
    api.add_files('lib/bootstrap3-typeahead.min.js', 'client'); 
});
