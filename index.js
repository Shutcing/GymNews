// const logos = document.querySelectorAll(".logo");
// const sliderHeight = document.querySelector(".slider").clientHeight;

// logos.forEach((logo, index) => {
//   logo.style.top = "100%";
// });

// logos.forEach((logo, index) => {
//   const totalLogos = logos.length;
//   const delay = (index / totalLogos) * 10; // Распределение по времени анимации

//   logo.style.animationDelay = `${delay}s`;

//   logo.addEventListener("animationiteration", () => {
//     // Сброс позиции в начале после завершения анимации
//     logo.style.top = "100%";
//   });
// });

if (window.innerWidth < 800) {
  document.querySelector("body").innerHTML = `
  <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    Извините :(<br>На мобильных устройствах сайт недоступен
  </div>
  `;
} else {
  console.log(window.innerWidth);
}

/*----------------------------------------------------------*/

const logos = document.querySelectorAll(".logo");
const sliderHeight = document.body.scrollHeight * 2;

setTimeout(function () {
  // Задаём начальные параметры
  logos.forEach((logo, index) => {
    const totalLogos = logos.length;
    const spacing = sliderHeight / totalLogos; // Расстояние между логотипами

    // Устанавливаем начальную позицию каждого логотипа
    logo.style.transform = `translateY(${index * spacing}px)`;

    // Добавляем анимацию с интервалом для плавного движения
    const animate = () => {
      let posY = parseInt(
        logo.style.transform.match(/translateY\((.*?)px\)/)[1],
        10
      );

      posY -= 2; // Скорость движения вверх
      logo.style.transform = `translateY(${posY}px) translateX(-50%)`;

      // Когда логотип выходит за пределы экрана, перемещаем его в начало
      if (posY < -logo.clientHeight) {
        posY = sliderHeight;
        logo.style.transform = `translateY(${posY}px) translateX(-50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  });
}, 1000);

/*----how animation-------------------------------------*/
const points = document.querySelectorAll(".how__point");

let i = 0;
for (let point of points) {
  let j = i;
  setTimeout(() => {
    setInterval(function () {
      point.style.opacity = String((Number(point.style.opacity) + 1) % 2);
    }, 2000);
  }, 500 * j);
  i++;
}

/*--Scroll---------------------------------------*/
