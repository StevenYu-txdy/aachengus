// assets/js/carousel.js

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(root => {
    const track = root.querySelector(".carousel-wrapper");
    const items = Array.from(root.querySelectorAll(".carousel-card"));
    const prev  = root.querySelector(".carousel-nav.prev");
    const next  = root.querySelector(".carousel-nav.next");
    const dots  = Array.from(root.querySelectorAll(".carousel-dots span"));
    let idx = 0, autoTimer;

    // 切换到第 i 张
    function slide(i) {
      if (i < 0) i = items.length - 1;
      if (i >= items.length) i = 0;
      idx = i;
      // 只有当它可见时才滚动到可视区域
      items[idx].scrollIntoView({ behavior: "smooth", inline: "start" });
      updateDots();
    }

    // 更新圆点高亮
    function updateDots() {
      dots.forEach(d => d.classList.remove("active"));
      dots[idx]?.classList.add("active");
    }

    // 按钮交互
    prev.addEventListener("click", () => slide(idx - 1));
    next.addEventListener("click", () => slide(idx + 1));

    // 圆点点击
    dots.forEach((d, i) => d.addEventListener("click", () => slide(i)));

    // 滚轮映射横向
    track.addEventListener("wheel", e => {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    });

    // 观察每个卡片，高亮对应圆点
    const ioCards = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          idx = items.indexOf(en.target);
          updateDots();
        }
      });
    }, { root: track, threshold: 0.5 });
    items.forEach(item => ioCards.observe(item));

    // --- 自动播放 控制 ---
    function startAuto() {
      stopAuto();
      autoTimer = setInterval(() => slide(idx + 1), 5000);
    }
    function stopAuto() {
      clearInterval(autoTimer);
    }

    // 只有当 carousel 至少 50% 可见时，才自动播放
    const ioRoot = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startAuto();
      } else {
        stopAuto();
      }
    }, { threshold: 0.5 });
    ioRoot.observe(root);

    // 鼠标/触控 进出继续控制（可选，保持手动交互流畅）
    root.addEventListener("mouseenter", stopAuto);
    root.addEventListener("mouseleave", () => {
      // 如果依然在视口里，再重启
      const rect = root.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startAuto();
      }
    });
    track.addEventListener("touchstart", stopAuto);
    track.addEventListener("touchend", () => {
      const rect = root.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        startAuto();
      }
    });

    // 初始高亮
    updateDots();
  });
});
