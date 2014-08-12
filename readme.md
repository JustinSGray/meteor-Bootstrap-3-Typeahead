### Bootstrap-typeahead.js from Bootstrap 2, working with Bootstrap 3

Meteor package for the old, less capable, typeahead plugin for Bootstrap 2, which Twitter [dropped](https://github.com/twbs/bootstrap/issues/7805) in favor of [typeahead.js](https://github.com/twitter/typeahead.js/) -  
see the [meteor-typeahead Atmosphere package for the new typeahead](https://github.com/sergeyt/meteor-typeahead).

This  will work with Bootstrap 3. For more on the history, see [this](https://github.com/JustinSGray/meteor-Bootstrap-3-Typeahead/issues/1#issuecomment-36574822).

Original repo: https://github.com/bassjobsen/Bootstrap-3-Typeahead

To use: 

    Template.<your-template>.rendered = function(){
        $(this.find('<you-selector>')).typeahead()
    }

## See also

You might be better off using [meteor-autocomplete](https://github.com/mizzao/meteor-autocomplete), the native fully-reactive Meteor autocomplete package, with server-side autocompletion, and multiple collection, field and trigger character support.
