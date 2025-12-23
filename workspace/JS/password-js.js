document.addEventListener('DOMContentLoaded', function() {
    const findForm = document.getElementById('find-password-form');
    const mainBtn = document.getElementById('main-button');

    findForm.onsubmit = function() {        
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const email = document.getElementById('email').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('유효한 이메일 주소를 입력해주세요.');
            document.getElementById('email');
            return false;
        }

        alert('비밀번호 찾기 요청을 전송합니다.');
        return true;
    };

    mainBtn.onclick = function() {
        location.href = '../index.html';
    };
});
