// Collapse all expandable texts in publication list when expanding a
// new element in the same group (i.e. for the same publication)

var $pubList = $('#publicationList');
$pubList.on('show.bs.collapse','.collapse', function(e) {
    var $myGroup = $(e.target.parentNode);
    $myGroup.find('.collapse.in').collapse('hide');
});
