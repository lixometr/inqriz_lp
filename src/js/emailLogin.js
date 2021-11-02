import Cookie from "js-cookie";
const $email = $('.try_now_form input[type="email"]');
const $error = $('.try_now_error');
$('.try_now_form').on('submit', e => {
    e.preventDefault();
    const email = $email.val();
    resetError()
    $.ajax({
        url: "https://api.inqriz.com/auth/signup",
        method: "POST",
        data: {
            noPassword: true,
            email,
            remember: true
        },
        complete(response) {
            const data = response.responseJSON;
            if (data.error) {
                addError(data.message || "Произошла ошибка");
                return;
            }
            if (data.ok && data.user) {
                Cookie.set('token', data.user.token, { expires: new Date(data.user.tokenExpires), path: "/", domain: "inqriz.com" })
                window.location = 'https://app.inqriz.com';
            } else {
                addError('Произошла ошибка')
            }
        }
    })
})

function addError(text) {
    $email.addClass('error');
    $error.text(text);
}
function resetError() {
    $email.removeClass('error');
    $error.text('');
}