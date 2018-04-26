function setListeners() {
    setExpanderListeners();
}

function setExpanderListeners() {
    $("#content").on('click', '.expand', function(event) {
        var $trigger = $(event.currentTarget)
        var heading = $trigger.html().split(' ')[1]
        var $list = $(event.currentTarget.nextElementSibling)
        if ($list.hasClass('hidden')) {
            $trigger.html('- ' + heading);
            $list.removeClass('hidden');
        } else {
            $list.addClass('hidden');
            $trigger.html('+ ' + heading);
        }
    });
}