document.addEventListener("DOMContentLoaded", function() {
    const gnb = document.querySelector('.gnb');
    const depth2s = document.querySelectorAll('.depth2');
    const defaultHeight = 60; // GNB의 기본 높이 (CSS와 동일하게 설정)
    let maxSubHeight = 0;

    // 1. 가장 긴 서브메뉴의 높이 계산하기
    depth2s.forEach(ul => {
        // absolute라서 높이가 안 잡힐 수 있으므로 scrollHeight 사용
        if (ul.scrollHeight > maxSubHeight) {
            maxSubHeight = ul.scrollHeight;
        }
    });

    // 여유 공간(padding 등)을 위해 40px 정도 더해줌
    const totalHeight = defaultHeight + maxSubHeight + 40; 

    // 2. 마우스 올렸을 때 높이 늘리기
    gnb.addEventListener('mouseenter', function() {
        gnb.style.height = totalHeight + 'px';
    });

    // 3. 마우스 뗐을 때 원래대로
    gnb.addEventListener('mouseleave', function() {
        gnb.style.height = defaultHeight + 'px';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const btnHam = document.querySelector('.btn-ham');
    const btnClose = document.querySelector('.btn-close');
    const fullMenu = document.getElementById('full-menu');

    // 1. 스크롤 이벤트: 헤더 스타일 변경
    window.addEventListener('scroll', () => {
        // 스크롤 양이 100px 이상일 때 fixed 클래스 추가
        if (window.scrollY > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    // 2. 햄버거 버튼 클릭: 전체 메뉴 열기
    btnHam.addEventListener('click', (e) => {
        e.preventDefault();
        fullMenu.classList.add('active');
        // 메뉴 열렸을 때 스크롤 방지
        document.body.style.overflow = 'hidden';
    });

    // 3. 닫기 버튼 클릭: 전체 메뉴 닫기
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        fullMenu.classList.remove('active');
        // 스크롤 방지 해제
        document.body.style.overflow = 'auto';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const examItems = document.querySelectorAll('.text-cont');

    examItems.forEach(item => {
        item.addEventListener('click', function() {
            // 1. 기존에 활성화된 다른 아이템들의 active 클래스 제거 (선택 사항)
            // 만약 여러 개를 동시에 열고 싶다면 아래 forEach 루프를 삭제하세요.
            examItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // 2. 클릭한 아이템에 active 클래스 토글 (넣었다 뺐다)
            this.classList.toggle('active');
        });
    });
});