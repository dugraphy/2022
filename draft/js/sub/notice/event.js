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

$(document).ready(function(){
	var serch_target = $('#serch_target').val();
	$('select[name=serch_target] > option').each(function(){
		if($(this).val() == $('#serch_target').val()){
			$(this).attr('selected','selected');
		}
	});
	$('.title').each(function(){
		var str = $(this).text();
		if(str.length > 80){
			str = str.substr(0, 80);
			$(this).text(str + "...");
		}

		// �좎쭨 鍮꾧탳
		const bbs_date_str = $(this).parent().find('.date').text(); // '2025-04-23 03:14:25'
		const bbs_date = new Date(bbs_date_str);
		const now = new Date();

		const diffTime = now - bbs_date; // 諛�由ъ큹 李⑥씠
		const diffDays = diffTime / (1000 * 60 * 60 * 24); // �쇱닔濡� 蹂���

		if (diffDays <= 2) {
			$(this).append(' <img src="/img/sub/notice/icon_new.gif" alt="NEW" class="new_img" />');
		}
	});
	var i=0;
	$('.posi_name').each(function(){
		i++;
		var str = $(this).text();
		if(str == $('input[name=bb_posi]').val()){
			$(this).css('background-color','#00a1e4');
			$(this).css('color','#fff');
			$(this).css('width','293px');
			$(this).css('height','40px');
			i = 5;
		}
		
		if(i == 4){
			$('#posi_name').css('background-color','#00a1e4');
			$('#posi_name').css('color','#fff');
			$('#posi_name').css('width','293px');
			$('#posi_name').css('height','40px');
		}
	});	
	
});
function aa(target,val){
	while(target.indexOf(val) > -1){
		target = target.replace(val,'');
	}
	return target;
}