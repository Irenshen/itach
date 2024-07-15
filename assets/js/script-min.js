$(document).ready(function(){$('input[type="tel"]').mask("+375 (99) 999-99-99"),$(window).width()>960?$(".burger").click(function(){$(".burger").toggleClass("opened"),$(".menu-dropdown").toggleClass("menu-active")}):$(".burger").click(function(){$(".menu-dropdown--mobile").toggleClass("menu-active")}),$(".header-close").click(function(){$(".menu-dropdown--mobile").removeClass("menu-active"),$("body").removeClass("modal-open")}),$(".custom-tab").click(function(){$(this).addClass("active").siblings().removeClass("active").parent(".custom-tabs-wrap").next(".custom-tabs-content-wrap").find(".custom-tabs-content").removeClass("opened").eq($(this).index()).addClass("opened")}),$(".tariff-tabs-wrap .btn").click(function(){$(".filter-btn--cloud").toggleClass("opened")}),$(".select").each(function(){let e=$(this),t=e.find("option"),i=t.length;t.filter(":selected"),e.hide(),e.wrap('<div class="select"></div>'),$("<div>",{class:"new-select",text:e.children("option:disabled").text()}).insertAfter(e);let s=e.next(".new-select");$("<div>",{class:"new-select__list"}).insertAfter(s);let l=s.next(".new-select__list");for(let n=1;n<i;n++)$("<div>",{class:"new-select__item",html:$("<span>",{text:t.eq(n).text()})}).attr("data-value",t.eq(n).val()).appendTo(l);let a=l.find(".new-select__item");l.slideUp(0),s.on("click",function(){$(this).hasClass("on")?($(this).removeClass("on"),l.slideUp(200)):($(this).addClass("on"),l.slideDown(200),a.on("click",function(){let e=$(this).data("value");$("select").val(e).attr("selected","selected"),s.text($(this).find("span").text()),$(".new-select").each(function(){var e=$(this);e.html(e.text().replace(/(^\w+)/,"<span class='tariff__text-l'>$1</span>"))}),l.slideUp(200),s.removeClass("on").addClass("new-select__checked")}))}),$(".new-select").each(function(){var e=$(this);e.html(e.text().replace(/(^\w+)/,"<span class='tariff__text-l'>$1</span>"))})})}),document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".element-animation-toscroll")){let e=document.querySelectorAll(".element-animation-toscroll");function t(){e.forEach(e=>{let t=e.getBoundingClientRect(),i=window.innerHeight;t.top<=i&&t.bottom>=0?e.classList.add("animate"):e.classList.remove("animate")})}window.addEventListener("scroll",t),t()}if(document.querySelector(".popup")){let i=document.querySelectorAll("[data-popup-id]");i.forEach(e=>{let t=e.getAttribute("data-popup-id"),i=document.querySelector(`[data-popup-open="${t}"]`);i&&i.addEventListener("click",()=>{e.classList.add("is-active"),document.body.classList.add("modal-open")})}),document.addEventListener("click",function(e){let t=e.target;(t.classList.contains("popup-close")||t.classList.contains("popup__inner"))&&(document.querySelectorAll(".popup").forEach(e=>{e.classList.remove("is-active")}),document.body.classList.remove("modal-open"))})}if(document.querySelector(".swiper-container")){new Swiper(".projects-swiper",{slidesPerView:1,spaceBetween:0,touchRatio:1,watchOverflow:!0,watchSlidesVisibility:!0,slideVisibleClass:"visibleSlide",navigation:{nextEl:".swiper-btn-projects-next",prevEl:".swiper-btn-projects-prev"},pagination:{el:".swiper-pagination-progects",type:"progressbar"}}),new Swiper(".clients-slider",{slidesPerView:"auto",slidesPerGroup:6,loop:!0,spaceBetween:90,autoplay:{enabled:!0,delay:0,stopOnLastSlide:!1},allowTouchMove:!1,speed:3e4}),new Swiper(".reviews-swiper",{slidesPerView:2,spaceBetween:28,touchRatio:0,watchOverflow:!0,watchSlidesVisibility:!0,slideVisibleClass:"visibleSlide",navigation:{nextEl:".swiper-btn-rewiews-next",prevEl:".swiper-btn-rewiews-prev"},pagination:{el:".swiper-pagination-rewiews",type:"progressbar"},breakpoints:{800:{slidesPerView:1,spaceBetween:0}}}),new Swiper(".section-slider__slider-wrap",{slidesPerView:2,spaceBetween:30,touchRatio:1,centeredSlides:!0,initialSlide:1,watchOverflow:!0,watchSlidesVisibility:!0,slideVisibleClass:"visibleSlide",navigation:{nextEl:".section-slider__button-next",prevEl:".section-slider__button-prev"},pagination:{el:".section-swiper__swiper-pagination",type:"progressbar"},breakpoints:{500:{spaceBetween:16}}}),new Swiper(".team-swiper",{slidesPerView:2,spaceBetween:30,touchRatio:1,watchOverflow:!0,watchSlidesVisibility:!0,slideVisibleClass:"visibleSlide",navigation:{nextEl:".swiper-btn-team-next",prevEl:".swiper-btn-team-prev"},pagination:{el:".swiper-pagination-team",type:"progressbar"},breakpoints:{500:{slidesPerView:1,spaceBetween:0}}}),new Swiper(".tariffs-swiper",{slidesPerView:4,spaceBetween:20,touchRatio:0,watchOverflow:!0,watchSlidesVisibility:!0,slideVisibleClass:"visibleSlide",navigation:{nextEl:".swiper-btn-tariff-next",prevEl:".swiper-btn-tariff-prev"},breakpoints:{1300:{touchRatio:1,slidesPerView:5,spaceBetween:0}}}),new Swiper(".form-swiper",{slidesPerView:1,spaceBetween:0,touchRatio:0,watchOverflow:!0,watchSlidesVisibility:!0,slideVisibleClass:"visibleSlide",autoHeight:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-btn-form-next",prevEl:".swiper-btn-form-prev"},pagination:{el:".swiper-pagination-form",type:"progressbar"},on:{init(){document.querySelector(".swiper-counter").innerHTML=`<div class="counter__inner"><span class="counter__current">1</span> / <span class="counter__total"> ${this.slides.length} </span></div>`},slideChange(){let e=this.activeIndex+1;document.querySelector(".swiper-counter").innerHTML=`<div class="counter__inner"><span class="counter__current"> ${e} </span> / <span class="counter__total"> ${this.slides.length} </span></div>`}}});let s=document.querySelectorAll(".swiper-btn-form-next"),l=document.querySelector(".form-swiper .swiper-slide"),n=l.querySelectorAll('input[type="radio"]');s.forEach(e=>{e.classList.add("swiper-button-disabled"),e.addEventListener("click",t=>{e.classList.add("swiper-button-disabled")})}),$('input[type="radio"]').on("change",function(){console.log(1),$(".swiper-btn-form-next").each(function(){console.log(2),$(this).removeClass("swiper-button-disabled")})}),s.forEach(e=>{e.addEventListener("click",e=>{let t=!1;n.forEach(e=>{e.checked&&(t=!0)}),t||alert("Выберите опцию")})})}if(document.querySelector(".accordion")){let a=document.getElementsByClassName("accordion");for(let r=0;r<a.length;r++)a[r].addEventListener("click",function(){this.classList.toggle("active");let e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"})}let o={month:{250:1,500:2,1e3:3},year:{250:4,500:5,1e3:6}},c={250:"span4",500:"span5",1e3:"span6"},d=document.querySelector("select"),p=document.querySelector("#tariff-cloud-price-second .tariff__price.tariff__text-l"),u=document.querySelector("#tariff-cloud-price-first .tariff__text-xs.sale");function f(){p.innerText=o[m][d.value],u.innerText=c[d.value]}$(".new-select__item").on("click",function(){this.click(),f()});let w=document.querySelectorAll(".filter-btn"),v=document.querySelectorAll(".tariff__price.tariff__text-l"),h=document.querySelectorAll(".tariff__text-xs.sale"),b=document.querySelectorAll(".tariff__price-percent.tariff__text"),m=document.querySelector(".filter-btn.active").dataset.period;if(w.forEach(e=>{e.addEventListener("click",()=>{w.forEach(e=>e.classList.remove("active")),e.classList.add("active"),2===(m=document.querySelector(".filter-btn.active").dataset.period)&&(u.innerText=c[d.value]),f(),v.forEach(e=>e.classList.remove("show")),v.forEach(t=>{e.classList.contains("no-sale")&&t.classList.contains("no-sale")?(t.classList.add("show"),h.forEach(e=>e.classList.remove("show")),b.forEach(e=>e.classList.remove("show"))):e.classList.contains("no-sale")||t.classList.contains("no-sale")||(t.classList.add("show"),h.forEach(e=>e.classList.add("show")),b.forEach(e=>e.classList.add("show")))})})}),document.querySelector(".tariff-box-item")){let g=document.querySelectorAll(".tariff-box-item__user-num"),y=document.querySelectorAll(".tariff-box-item__price");g.forEach((e,t)=>{e.addEventListener("click",()=>{g.forEach(e=>{e.classList.remove("active")}),y.forEach(e=>{e.classList.remove("show")}),e.classList.add("active"),y[t].classList.add("show")})})}if(document.querySelector("#feedback-form")){let x=document.querySelector('input[name="email"]');x.addEventListener("blur",()=>{if(""!==x.value.trim()){let e=x.nextElementSibling,t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(x.value);t?e.textContent="":e.textContent="Пожалуйста, введите корректный email адрес."}});let S=document.querySelector('input[type="tel"]'),E=S.nextElementSibling;S.addEventListener("blur",()=>{""===S.value.trim()?E.textContent="Это поле обязательно для заполнения.":/^\+\d{2} \((\d{2})|(25)|(29)|(33)|(44)\) \d{3}-\d{2}-\d{2}$/.test(S.value)?E.textContent="":E.textContent="Неверный формат номера телефона."});let L=document.querySelectorAll(".input-item-file input[type=file]");L.forEach(e=>{e.addEventListener("change",()=>{let t=e.files[0],i=e.closest(".input-item-file"),s=i.querySelector(".input-item-file__btn");s.textContent=t.name})});let q=document.getElementById("feedback-form"),C=q.querySelectorAll('input[type="text"]'),k=document.querySelector('input[name="consent"]');q.addEventListener("submit",e=>{e.preventDefault(e);let t=!0;for(let i=0;i<C.length;i++){let s=C[i],l=s.nextElementSibling;s.previousElementSibling&&s.previousElementSibling.classList.contains("req")&&""===s.value.trim()?(t=!1,l.textContent="Это поле обязательно для заполнения."):l.textContent=""}if(""===S.value.trim()?S.nextElementSibling.textContent="Это поле обязательно для заполнения.":S.nextElementSibling.textContent="",k.checked?k.nextElementSibling.classList.remove("error"):(k.nextElementSibling.classList.add("error"),t=!1),t){let n=new FormData(q),a={};for(let[r,o]of n.entries())a[r]=o;console.log(a);let c=document.querySelector(".popup-success");fetch("/submit",{method:"POST",body:n}).then(e=>e.json()).then(e=>{e.success?c.classList.add("is-active"):console.log(e.message)}).catch(e=>console.error(e))}})}});