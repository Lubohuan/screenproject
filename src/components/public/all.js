import $ from 'jquery'
$.fn.textScroll = function () {
    var p = $(this), c = p.children(), speed = 3000; //值越大速度越小
    var cw = c.width(), pw = p.width();
    var t = (cw / 100) * speed;
    var f = null, t1 = 0;
    function ani(tm) {
        counttime();
        c.animate({ left: -cw }, tm, "linear", function () {
            c.css({ left: pw }); clearInterval(f); t1 = 0; t = ((cw + pw) / 100) * speed; ani(t);
        });
    }
    function counttime() {
        f = setInterval(function () {
            t1 += 10;
        }, 10);
    }
    p.on({
        mouseenter: function () {
            c.stop(false, false);
            clearInterval(f);
            console.log(t1);
        }, mouseleave: function () {
            ani(t - t1);
            console.log(t1);
        }
    });
    ani(t);
}

export default {
    scrollfunc(){
        $(".ibox-title").click(function(){
            alert('hi')
        })
    }
}