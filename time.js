$(function () {
    $("td.period").each(function () {
        var value = $(this).html();
        if (value.indexOf('1') != -1) {
            $(this).html('9:00\n　~\n10:30');
        }
        if (value.indexOf('2') != -1) {
            $(this).html('10:40\n　~\n12:10');
        }
        if (value.indexOf('3') != -1) {
            $(this).html('13:00\n　~\n14:30');
        }
        if (value.indexOf('4') != -1) {
            $(this).html('14:40\n　~\n16:10');
        }
        if (value.indexOf('5') != -1) {
            $(this).html('16:20\n　~\n17:50');
        }
    });
});