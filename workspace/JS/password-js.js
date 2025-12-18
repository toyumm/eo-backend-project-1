function validateFindPasswordForm() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '') {
        alert('이름을 입력해주세요.');
        document.getElementById('name');
        return false;
    }

    if (id.trim() === '') {
        alert('아이디를 입력해주세요.');
        document.getElementById('id').focus();
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        document.getElementById('email').focus();
        return false;
    }

    alert('비밀번호 찾기 요청을 전송합니다.');
    location.href = '../index.html';
    return false;
}
