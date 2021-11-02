
try {
  let btn = $(".js-send-form");
  let form = $(".contact_us_form");
  let nameInp = $("#contact_us_input_name");
  let emailInp = $("#contact_us_input_email");
  let messageInp = $("#contact_us_input_message");
  let emailError = $(".contact_us_input_email_error");
  form.on("submit", (e) => {
    e.preventDefault();
    const name = nameInp.val();
    const email = emailInp.val();
    console.log(email);
    const message = messageInp.val();
    let isError = false;
    emailError.html("");
    emailInp.removeClass("error");
    if (!email) {
      emailError.html("Введите ваш email");
      emailInp.addClass("error");
      isError = true;
    }
    let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegExp.test(email)) {
      emailError.html("Введите корректный email");
      emailInp.addClass("error");
      isError = true;
    }
    if (isError) {
      return;
    }
   
   
    $.ajax({
      type: "POST",
      url: "https://api.inqriz.com/lp-lead",
      contentType: "application/json",
      data: JSON.stringify({
        data: {
          email,
          name,
          message,
        },
      }),
      success: (res) => {
        dataLayer.push({'event': 'formsend'});
        if (res.ok) {
          btn.html("Отправлено!");
        }
      },
    });
  });
} catch (err) {
  console.log(err);
}
