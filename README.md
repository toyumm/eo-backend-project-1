# AI Portal Project

## 📖 프로젝트 개요
본 프로젝트는 **[ESTSOFT] 백엔드 개발자 양성과정 14회차**의  
**첫 번째 팀 프로젝트**입니다.

간단한 **AI 포털 사이트 화면 설계**를 목표로 하였으며,  
여러 AI 서비스를 하나의 웹 페이지에서 접근할 수 있는  
포털 형태의 UI 구조를 구현했습니다.

본 프로젝트는 **프론트엔드만을 사용**하여 구현되었습니다.

---

## 🗂 프로젝트 관리
- GitHub Repository  
  https://github.com/yunsang2/eo-backend-project-1/tree/main

---

## 👥 팀 정보

### 팀명
**Link**  
> 팀원들이 서로 연결되어 하나의 시너지를 만들어낸다는 의미

### 팀원 및 역할
- **윤상이 (팀장)**
  - 메인 페이지 구축
  - 로그인 페이지
  - 검색 결과 페이지
  - 다크 모드 구현

- **현길용**
  - 회원가입 페이지
  - 비밀번호 찾기 페이지
  - PPT 제작

- **최서윤**
  - 검색 내역 페이지
  - 개인정보 확인 및 수정 페이지
  - PPT 제작

---

## 🎯 프로젝트 목표
- 프론트엔드 기술만을 활용한 검색 포털 사이트 구현
- 페이지 이동 흐름과 UI 구조 설계에 집중
- 간단한 기능 구현을 통한 웹 서비스 구조 이해

---

## 🌐 배포 주소
- GitHub Pages  
  https://yunsang2.github.io/eo-backend-project-1/

---

## 🧭 사이트 구조 (페이지 흐름)

### 메인 페이지
- 로그인 페이지 이동
- 회원가입 페이지 이동
- 검색 결과 페이지 이동

### 로그인 이후
- 내 정보 페이지 이동
- 검색 내역 페이지 이동

### 로그인 페이지
- 회원가입 페이지 이동
- 비밀번호 찾기 페이지 이동

### 공통
- 모든 페이지에서 로고 클릭 시 메인 페이지로 이동

---

## 📁 디렉터리 구조

docs/
├─ index.html                # 메인 진입 페이지
│
├─ CSS/                      # 스타일시트
│  ├─ reset.css              # CSS 초기화
│  ├─ theme.css              # 다크모드 및 테마
│  ├─ layout-style.css       # 공통 레이아웃
│
│  ├─ main-style.css         # 메인 페이지
│  ├─ login-style.css        # 로그인 페이지
│  ├─ signup-style.css       # 회원가입 페이지
│  ├─ password-style.css    # 비밀번호 찾기
│
│  ├─ history-style.css      # 검색 내역 페이지
│  ├─ information-style.css # 개인정보 페이지
│  └─ questionresult-style.css # 검색 결과 페이지
│
├─ HTML/                     # 페이지 HTML
│  ├─ head.html              # 공통 헤더
│  ├─ foot.html              # 공통 푸터
│
│  ├─ login.html             # 로그인
│  ├─ signup.html            # 회원가입
│  ├─ password.html          # 비밀번호 찾기
│
│  ├─ history.html           # 검색 내역
│  ├─ information.html       # 개인정보 확인/수정
│  └─ question-result.html   # 검색 결과
│
├─ JS/                       # JavaScript
│  ├─ main.js                # 메인 페이지 로직
│  ├─ login.js               # 로그인 처리
│  ├─ signup.js              # 회원가입 처리
│  ├─ password.js            # 비밀번호 찾기 처리
│  └─ layout.js              # 공통 레이아웃 제어
│
└─ image/                    # 이미지 리소스
   ├─ logo.png               # 로고
   ├─ logo_text.png          # 텍스트 로고
   ├─ head-logo.png          # 헤더 로고
   └─ 돋보기.png             # 검색 아이콘

---

## 🛠 사용 기술
- HTML
- CSS
- JavaScript

---

## 📚 참고 자료
- W3Schools  
  https://www.w3schools.com

---

## ⏱ 제작 기간
- 2025.12.12 ~ 2026.01.02
