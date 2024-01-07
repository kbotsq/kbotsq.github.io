// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggleModeButton');

    // 다크모드 토글 함수
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleModeButton.textContent = isDarkMode ? '화이트모드로 전환' : '다크모드로 전환';

        // 사용자 모드 기록을 로컬 스토리지에 저장
        localStorage.setItem('darkMode', isDarkMode.toString()); // toString()을 사용하여 boolean을 문자열로 변환
    }

    // 버튼 클릭 이벤트에 함수 연결
    toggleModeButton.addEventListener('click', toggleDarkMode);

    // 페이지 로드 시 저장된 사용자 모드를 확인하고 적용
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
        toggleDarkMode(); // 다크모드로 설정
    }
});
