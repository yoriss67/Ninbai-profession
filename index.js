// CACHE
// var now = new Date();
// document.getElementById("now").innerText = (now.getMonth() + 1) + "/" + (now.getDate());

// HAMBURGER MENU
function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById('js_hamburger');
  const overlay = document.getElementById('js_overlay');
  const hamburgerPosition = document.querySelector('.hamburger');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open'); //クラスが含まれていれば削除、含まれていなければ追加する
  });
  overlay.addEventListener('click', function () {
    body.classList.remove('nav_open'); //クラスを削除する
  });
}
toggleNav();

// ARROW
// これがあるとformにジャンプできないのでコメントアウト
// $(function () {
//   $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate(
//       {
//         scrollTop: $($(this).attr('href')).offset().top,
//       },
//       500,
//       'linear',
//     );
//   });
// });

// 🌸
// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('a[href*="#"]');
//     links.forEach(function(link) {
//       link.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         const offsetTop = target.offsetTop;
//         window.scrollTo({
//           top: offsetTop,
//           behavior: 'smooth'
//         });
//       });
//     });
//   });

// SWIPER
// var swiper = new Swiper(".mySwiper", {
//     // spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// const mySwiper = new Swiper('.card01 .swiper', {
//     slidesPerView: 1,
//     spaceBetween: 24,
//     grabCursor: true,
//     pagination: {
//       el: '.card01 .swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.card01 .swiper-button-next',
//       prevEl: '.card01 .swiper-button-prev',
//     },
//     breakpoints: {
//       600: {
//         slidesPerView: 2,
//       },
//       1025: {
//         slidesPerView: 4,
//         spaceBetween: 32,
//       }
//     },
//   });

//   const mySwiper = new Swiper('.card03 .swiper', {

//     speed: 1000,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     loop: true,
//   loopAdditionalSlides: 1,

//   watchSlidesProgress: true,

//   });

// teisi
// //   initial
//   const mySwiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },

//     //   3
//     speed: 1000,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     loop: true,
//   loopAdditionalSlides: 1,

//   watchSlidesProgress: true,
//   });

// OVRVIEW
window.addEventListener('scroll', function () {
  // const productsBoxItem = this.document.querySelector('.products-box-item')
  const scroll = window.pageYOffset;

  const overviewBoxes = document.querySelectorAll('.overview-box');

  //   for(let i=0; i< overviewBoxes.length; i++) {
  //     if (scroll > 1120) {
  //       overviewBoxes[i].classList.add('slide-in')
  //     //   overviewBoxes[i].style.animationDelay = i * 0.3 + 's'
  //     } else {
  //       overviewBoxes[i].classList.remove('slide-in')
  //     }
  //   }

  //   overviewBoxes.forEach(overviewBox => {
  //     if (scroll > 1120) {
  //         overviewBox.classList.add('slide-in')
  //     } else {
  //         overviewBox.classList.remove('slide-in')
  //     }
  //   } )
});

//   🌸❌
// OVRVIEW
// window.addEventListener("scroll", function () {
//     const scroll = window.pageYOffset;

//     const overviewContainer = document.querySelector('.overview-container');
//     const overviewBoxes = document.querySelectorAll('.overview-box');

//     const ContainerTop = overviewContainer.offsetTop;
//     const ContainerHeight = overviewContainer.offsetHeight;

//     overviewBoxes.forEach(overviewBox => {
//       if (scroll > ContainerTop + ContainerHeight/3) {
//         overviewBox.classList.add('slide-in');
//       } else {
//         overviewBox.classList.remove('slide-in');
//       }
//     });
//   });

//   https://www.marukin-ad.co.jp/marulog/?p=1891
// window.addEventListener("scroll", function() {
//     var target = document.querySelectorAll(".overview-box");
//     var top = target.offsetTop;
//     var position = top - window.innerHeight;
//     if (window.pageYOffset > position) {
//     // 要素が見えたときの動き
//     } else {
//     // それ以外の動き
//     }
//     });

// 📄外で宣言
// 1個目と3個目
// const targets = document.querySelectorAll(".overview-box-from-right");
// targets.forEach(function (target) {
//     window.addEventListener("scroll", function () {
//         const top = target.offsetTop;
//         const position = top - window.innerHeight;
//         if (window.pageYOffset > position + 200) {
//             // if (window.pageYOffset > 1500) {

//             target.classList.add('slide-in-from-right');
//         }
//     });
// });

// // 2個目
// window.addEventListener("scroll", function() {
//     const target = document.querySelector(".overview-box-from-left");
//     const top = target.offsetTop;
//     const position = top - window.innerHeight;
//     if (window.pageYOffset > position  + 200) {
//         target.classList.add('slide-in-from-left');
//     }
// });

// NOW
// targets.forEach(function (target) {
// document.querySelector(window).scroll(function(){
//   var tops = document.querySelectorAll(".overview-box").offset().top; // ターゲットの位置取得
//   var position = top - document.querySelector(window).height();  // 発火させたい位置
//   if(document.querySelector(window).scrollTop > position){
//     // 要素が見えたときの動き
//   }else{
//     // それ以外の動き
//   }
// })
// })

// 🌸
// document.querySelector(window).scroll(function() {
//   // Loop through each .overview-box element
//   document.querySelectorAll('.overview-box').forEach(function(box) {
//     var top = box.offsetTop; // Get the position of the current box element
//     var position = top - window.innerHeight; // Calculate the position to trigger the animation
//     if (window.pageYOffset < position) {
//       box.classList.add('fadein');
//     } else {
//       // Animation for all other cases
//     }
//   });
// });

// 🌸
// const overviewBoxes = document.querySelectorAll('.overview-box');

// let triggerPoints = [1400, 1700, 2000];

// let currentBoxIndex = -1;

// window.addEventListener('scroll', function () {

//   const viewportWidth = window.innerWidth;

//   if (viewportWidth < 768) {
//     triggerPoints = [2800, 3500, 4100];
//     cssClass = 'slide-in-from-bottom';
//   } else {
//     triggerPoints = [1400, 1700, 2000];
//     cssClass = 'slide-in-from-right';
//   }

//   const currentPosition = window.pageYOffset;

//   for (let i = 0; i < triggerPoints.length; i++) {
//     if (currentPosition >= triggerPoints[i] && currentBoxIndex < i) {
//       if (viewportWidth > 768) {
//         overviewBoxes[i].classList.add(cssClass);
//         if (i === 1) {
//           overviewBoxes[i].classList.add('slide-in-from-left');
//         }
//       }

//       else {
//         overviewBoxes[i].classList.add(cssClass);

//       }

//       // update the current box index
//       currentBoxIndex = i;
//     }
//   }
// });

// https://ihyt-design.com/blog/scroll-add-class/
// 2023/02/27 11:11 これでできてるが、
function scrollAddClass() {
  const scrollEffect = document.querySelectorAll('.different-box');
  let windowHeight = window.innerHeight;
  for (let i = 0; i < scrollEffect.length; i++) {
    target = scrollEffect[i].getBoundingClientRect().top;

    
    if (target + 300 < windowHeight) {

      // sp
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 768) {
        scrollEffect[i].classList.add('is-active-bottom');
        console.log('sp')
      } else if (viewportWidth >= 768) {


      // 2
      scrollEffect[i].classList.add('is-active-left');
      console.log('surpassed left');

      // 1,3
      if (i % 2 == 0) {
        scrollEffect[i].classList.add('is-active-right');
        console.log('surpassed right');
      }

    }
  }
  
}
}
document.addEventListener('DOMContentLoaded', scrollAddClass);
document.addEventListener('scroll', scrollAddClass);



















//FORM

document.addEventListener('DOMContentLoaded', () => {
  //.validationForm を指定した最初の form 要素を取得
  const validationForm = document.querySelector('.validationForm');
  //.validationForm を指定した form 要素が存在すれば
  if (validationForm) {
    //エラーを表示する span 要素に付与するクラス名（エラー用のクラス）
    const errorClassName = 'error';

    //required クラスを指定された要素の集まり
    const requiredElems = document.querySelectorAll('.required');

    //email クラスを指定された要素の集まり
    const emailElems = document.querySelectorAll('.email');

    //tel クラスを指定された要素の集まり
    const telElems = document.querySelectorAll('.tel');

    //equal-to クラスを指定された要素の集まり
    const equalToElems = document.querySelectorAll('.equal-to');

    // CUSTOM
    const subnameElems = document.querySelectorAll('.subname');

    const hopeElems = document.querySelectorAll('.required.hope');

    const contentElems = document.querySelectorAll('.required.content');

    //エラーメッセージを表示する span 要素を生成して親要素に追加する関数
    //elem ：対象の要素
    //errorMessage ：表示するエラーメッセージ
    const createError = (elem, errorMessage) => {
      //span 要素を生成
      const errorSpan = document.createElement('span');
      //エラー用のクラスを追加（設定）
      errorSpan.classList.add(errorClassName);
      //aria-live 属性を設定
      errorSpan.setAttribute('aria-live', 'polite');
      //引数に指定されたエラーメッセージを設定
      errorSpan.textContent = errorMessage;
      //elem の親要素の子要素として追加
      elem.parentNode.appendChild(errorSpan);
    };

    //form 要素の submit イベントを使った送信時の処理
    validationForm.addEventListener('submit', (e) => {
      //エラーを表示する要素を全て取得して削除（初期化）
      const errorElems = validationForm.querySelectorAll('.' + errorClassName);
      errorElems.forEach((elem) => {
        elem.remove();
      });

      //.required を指定した要素を検証
      requiredElems.forEach((elem) => {
        //値（value プロパティ）の前後の空白文字を削除
        const elemValue = elem.value.trim();
        //値が空の場合はエラーを表示してフォームの送信を中止
        if (elemValue.length === 0) {
          createError(elem, '入力は必須です');
          e.preventDefault();
        }
      });

      //.email を指定した要素を検証
      emailElems.forEach((elem) => {
        //Email の検証に使用する正規表現パターン
        const pattern =
          /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/iu;
        //値が空でなければ
        if (elem.value !== '') {
          //test() メソッドで値を判定し、マッチしなければエラーを表示してフォームの送信を中止
          if (!pattern.test(elem.value)) {
            createError(elem, 'Email アドレスの形式が正しくないようです。');
            e.preventDefault();
          }
        }
      });

      //.tel を指定した要素を検証
      telElems.forEach((elem) => {
        //電話番号の検証に使用する正規表現パターン
        const pattern = /^\d{10,12}$/;
        //値が空でなければ
        if (elem.value !== '') {
          //test() メソッドで値を判定し、マッチしなければエラーを表示してフォームの送信を中止
          if (!pattern.test(elem.value)) {
            createError(elem, '電話番号の形式が正しくないようです。');
            e.preventDefault();
          }
        }
      });

      //.equal-to を指定した要素を検証
      equalToElems.forEach((elem) => {
        //比較対象の要素の id
        const equalToId = elem.dataset.equalTo;
        //または const equalToId = elem.getAttribute('data-equal-to');
        //比較対象の要素
        const equalToElem = document.getElementById(equalToId);
        //値が空でなければ
        if (elem.value !== '' && equalToElem.value !== '') {
          if (equalToElem.value !== elem.value) {
            createError(elem, '入力された値が異なります');
            e.preventDefault();
          }
        }
      });

      //エラーの最初の要素を取得
      const errorElem = validationForm.querySelector('.' + errorClassName);
      //エラーがあればエラーの最初の要素の位置へスクロール
      if (errorElem) {
        const errorElemOffsetTop = errorElem.offsetTop;
        window.scrollTo({
          top: errorElemOffsetTop - 40, //40px 上に位置を調整
          //スムーススクロール
          behavior: 'smooth',
        });
      }

      // CUSTOM
      subnameElems.forEach((elem) => {
        const pattern = /[^ァ-ヶー　]+$/;

        if (elem.value !== '') {
          //test() メソッドで値を判定し、マッチしなければエラーを表示してフォームの送信を中止
          if (pattern.test(elem.value)) {
            alert('全角カタカナではありません');
            createError(elem, '全角カタカナではありません');
            e.preventDefault();
          }
        }
      });

      // CUSTOM

      //電話番号の値を取得する
      let tel = document.getElementsByClassName('tel')[0].value;
      //メールアドレスの値を取得する
      let email = document.getElementsByClassName('email')[0].value;

      //電話番号・メールアドレスが空であれば
      if (tel === '' && email === '') {
        //エラーメッセージを出力する
        // alert('※連絡先を入力してください')
        error.textContent = '※連絡先を入力してください';
        //submitイベントを止める
        e.preventDefault();
      }

      //🌸🌸CUSTOM
      let hopeSelected = false;
      hopeElems.forEach((elem) => {
        if (elem.checked) {
          hopeSelected = true;
        }
      });

      if (!hopeSelected) {
        createError(hopeElems[0], 'どちらかを選択して下さい');
        e.preventDefault();
      }

      let contentSelected = false;
      contentElems.forEach((elem) => {
        if (elem.checked) {
          contentSelected = true;
        }
      });

      if (!contentSelected) {
        createError(contentElems[0], 'どちらかを選択して下さい');
        e.preventDefault();
      }
    });
  }
});




// const form = document.getElementById('form');
// document.querySelector('.top-message-btn').addEventListener('click', function(event) {
//   event.preventDefault();
//   form.scrollIntoView({ behavior: 'smooth' });
// });
