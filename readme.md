Meteor package for the original typeahead plugin for bootstrap. It will work with bootstrap 3. 
Original repo: https://github.com/bassjobsen/Bootstrap-3-Typeahead

To use: 

    Template.<your-template>.rendered = function(){
        $(this.find('<you-selector>')).typeahead()
    }

