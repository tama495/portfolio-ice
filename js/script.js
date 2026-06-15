// Intersection Observer
const elements = document.querySelectorAll(".mujuryoku");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
elements.forEach(el => observer.observe(el));


// Swiperアイス
//  HTML が読み込まれたら実行
// .swiper というクラスを持つ要素に対してスライダーを作る swiper という変数にインスタンスを保存
// アクティブなスライドを中央に配置
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 3,
      }
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});



// アイス選択
const maxSelect = 5;
const images = document.querySelectorAll('.ice');
const countText = document.getElementById('count');

images.forEach(img => {
  img.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected').length;

    if (img.classList.contains('selected')) {
      img.classList.remove('selected');
    } else {
      if (selected >= maxSelect) {
        alert("選べるのは最大5つまでです");
        return;
      }
      img.classList.add('selected');
    }

    const newCount = document.querySelectorAll('.selected').length;
    countText.textContent = `選択数: ${newCount} / ${maxSelect}`;
  });
});



// 宇宙飛行士のコメントここから
document.addEventListener("DOMContentLoaded", () => {
  const come1 = document.getElementById("come1");
  const come2 = document.getElementById("come2");

  come1.addEventListener("click", () => {

    // スマホ
    if (window.innerWidth <= 768) {
      return;
    }

    const isHidden = getComputedStyle(come2).display === "none";
    come2.style.display = isHidden ? "block" : "none";
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   const come1 = document.getElementById("come1");
//   const come2 = document.getElementById("come2");

//   come1.addEventListener("click", () => {
//     const isHidden = getComputedStyle(come2).display === "none";

//     come2.style.display = isHidden ? "block" : "none";
//   });
// });


/*スマホ版ナビここから*/
document.addEventListener("DOMContentLoaded", () => {
  const menubtn1 = document.getElementById("menubtn1");
  const navlist1 = document.getElementById("navlist1");

  menubtn1.addEventListener("click", () => {
    const isHidden = getComputedStyle(navlist1).display === "none";

    navlist1.style.display = isHidden ? "block" : "none";
  });
});
