const glide = new Glide('.glide')
const captionsEl = document.querySelectorAll('.slide-caption')

//划过来显示的效果
glide.on(['mount.after', 'run.after'], () => {
  //glide.index显示能看见轮播的下标
  const caption = captionsEl[glide.index];
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: 'linear',
    delay: anime.stagger(400, { start: 300 }),
    translateY: [anime.stagger([40, 10]), 0]
  });
});

//让划过去的标题和文字消失
glide.on('run.before', () => {
  document.querySelectorAll('.slide-caption > *').forEach(el => {
    el.style.opacity = 0
  })
})

glide.mount()

const isotope = new Isotope('.cases', {
  layoutMode: 'fitRows',
  itemSelector: '.case-item'
})

const filterBtns = document.querySelector('.filter-btns');

filterBtns.addEventListener('click', e => {
  let { target } = e;
  const filterOption = target.getAttribute('data-filter');
  if (filterOption) {
    document.querySelectorAll('.filter-btn.active').forEach(btn => {
      btn.classList.remove('active')
    });
    target.classList.add('active')

    isotope.arrange({ filter: filterOption })
  }
})