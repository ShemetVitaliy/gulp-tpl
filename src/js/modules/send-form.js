export function sendForm() {
  console.log('sendForm');
  $('.send-form').submit(function() {
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: '../mail.php',
      data: th.serialize()
    }).done(function() {
      $('.thanks-message').addClass('open');
      setTimeout(function() {
        $('.thanks-message').removeClass('open');
        th.trigger('reset');
      }, 3000);
    });
    return false;
  });
}
