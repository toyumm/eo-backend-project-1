function validateForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const email = document.getElementById('email').value;

    // 1. 이름 검사 (공백 여부)
    if (name.trim() === '') {
        alert('이름을 입력해주세요.');
        document.getElementById('name');
        return false;
    }

    // 2. 생년월일 검사 (숫자 6자리 형식)
    const dobPattern = /^\d{6}$/;
    if (!dobPattern.test(dob)) {
        alert('유효한 생년월일 6자리를 입력해주세요 (예: 900101).');
        document.getElementById('dob');
        return false;
    }

    // 3. ID 검사 (공백 여부)
    if (id.trim() === '') {
        alert('ID를 입력해주세요.');
        document.getElementById('id');
        return false;
    }

    // 4. 비밀번호 검사 (최소 8자 이상)
    if (password.length < 8) {
        alert('비밀번호는 최소 8자 이상이어야 합니다.');
        document.getElementById('password');
        return false;
    }

    // 5. 비밀번호 일치 확인
    if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        document.getElementById('password-confirm');
        return false;
    }

    // 6. 이메일 검사 (기본 형식)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        document.getElementById('email');
        return false;
    }

    // 모든 검사 통과 시
    alert('회원가입 완료');
    return true;
}