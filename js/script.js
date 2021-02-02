// event pada saat link diklik
$('.page-scroll').on('click', function(e){
    // Ambil isi href
    var tujuan = $(this).attr('href');
    // Tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
    // Pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
});
