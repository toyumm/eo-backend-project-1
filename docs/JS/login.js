document.addEventListener('DOMContentLoaded', function() {
    const loginId = document.getElementById('loginId');
    const loginPw = document.getElementById('loginPw');
    const loginBtn = document.getElementById('loginBtn');

    const ID = 'link';
    const PW = 'a12345678';

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (loginId.value.trim() === '') {
            alert('아이디를 입력하세요.');
            loginId.focus();
            return;
        }

        if (loginPw.value.trim() === '') {
            alert('비밀번호를 입력하세요.');
            loginPw.focus();
            return;
        }

        if (loginId.value !== ID || loginPw.value !== PW) {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            loginPw.value = '';
            loginPw.focus();
            return;
        }

        localStorage.setItem('isLogin', 'true');

        alert('로그인 되었습니다.');
        location.href = '../index.html';
    });

});
