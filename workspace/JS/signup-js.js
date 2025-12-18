function validateForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '') {
        alert('이름을 입력해주세요.');
        document.getElementById('name');
        return false;
    }

    const dobPattern = /^\d{6}$/;
    if (!dobPattern.test(dob)) {
        alert('유효한 생년월일 6자리를 입력해주세요 (예: 900101).');
        document.getElementById('dob');
        return false;
    }

    if (id.trim() === '') {
        alert('ID를 입력해주세요.');
        document.getElementById('id');
        return false;
    }

    if (password.length < 8) {
        alert('비밀번호는 최소 8자 이상이어야 합니다.');
        document.getElementById('password');
        return false;
    }

    if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        document.getElementById('password-confirm');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        document.getElementById('email');
        return false;
    }

    alert('회원가입이 완료되었습니다.');
    location.href = '../index.html';
    return false;
}