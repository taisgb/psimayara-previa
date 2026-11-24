document.documentElement.classList.add('js-enabled');
const faqData = [
  ['Quando devo procurar uma psicóloga?', 'A psicoterapia pode ser procurada em momentos de sofrimento, mudanças e perdas, mas também para desenvolver autoconhecimento e habilidades pessoais.'],
  ['O que é ansiedade?', 'É uma emoção que prepara o organismo diante de ameaças percebidas. Quando é intensa, frequente e prejudica o cotidiano, merece atenção.'],
  ['Como funciona o atendimento online?', 'O contato acontece por videochamada ao vivo. É importante ter conexão estável, fones de ouvido e um ambiente privado, sem interrupções.'],
  ['Terapia é só conversar com uma pessoa desconhecida?', 'Não. O diálogo terapêutico tem objetivos e utiliza recursos e técnicas fundamentados na Psicologia.'],
  ['O que devo falar na primeira consulta?', 'Você pode contar o que motivou a busca por atendimento. Não precisa encontrar as palavras perfeitas: a psicóloga deve respeitar seu tempo.'],
  ['Quanto tempo leva para perceber resultados?', 'Não há um prazo único. O processo depende da demanda, da história de vida e da participação da pessoa atendida.'],
  ['Como a terapia pode ajudar nas relações amorosas?', 'Pode ajudar a compreender dificuldades nas relações e a desenvolver formas diferentes de lidar com conflitos e necessidades.'],
  ['Quanto tempo dura uma sessão de terapia?', 'Segundo o site, a duração média de uma sessão é de 50 minutos.'],
  ['A psicoterapia funciona para todo mundo?', 'O site destaca a importância do comprometimento com o processo e que a evolução não acontece sempre de forma linear.'],
  ['Existe um jeito certo de se comportar na terapia?', 'A proposta é que você tenha espaço para se expressar como é, sem medo de julgamento.'],
  ['Como sei que encontrei a profissional certa?', 'Sentir-se respeitada, acolhida e perceber contribuição ao seu desenvolvimento são sinais importantes.'],
  ['O que devo levar para as sessões?', 'Você pode anotar acontecimentos, sentimentos e questões que deseja trabalhar ou compartilhar durante o encontro.'],
  ['Alguma abordagem é melhor para ansiedade e depressão?', 'No site, Mayara explica que as diferentes vertentes da Psicologia têm fundamentação teórica e metodológica para lidar com demandas humanas.'],
  ['Depois de começar, preciso fazer terapia para sempre?', 'Não necessariamente. A duração varia de acordo com cada processo, e a permanência não é obrigatória.'],
  ['A psicóloga vai me dizer o que fazer?', 'O trabalho clínico não é dar conselhos pessoais, mas apoiar a pessoa no processo de autoconhecimento e construção de seus caminhos.'],
  ['Uma atividade terapêutica substitui psicoterapia?', 'Não. Atividades que promovem bem-estar não equivalem à psicoterapia, que é uma prática profissional de cuidado e tratamento.'],
  ['Como perceber minha evolução na terapia?', 'Mudanças nas formas de compreender e enfrentar dificuldades podem indicar avanços. Oscilações ao longo do processo também podem acontecer.']
];
const faqList = document.getElementById('faq-list');
if (faqList) {
  faqList.innerHTML = faqData.map(([question, answer], index) => `
    <details class="faq-item reveal" ${index === 0 ? 'open' : ''}>
      <summary><span>${question}</span><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></summary>
      <div class="faq-answer"><p>${answer}</p></div>
    </details>`).join('');
}
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('nav-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('nav-open');
    document.body.classList.remove('menu-open');
  }));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('nav-open'); document.body.classList.remove('menu-open'); } });
}
const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.09, rootMargin: '0px 0px -25px 0px' }) : null;
document.querySelectorAll('.reveal').forEach((element) => observer ? observer.observe(element) : element.classList.add('is-visible'));
const bar = document.querySelector('.scroll-progress');
let queued = false;
const updateBar = () => { const maxScroll = document.documentElement.scrollHeight - window.innerHeight; if (bar) bar.style.transform = `scaleX(${maxScroll > 0 ? scrollY / maxScroll : 0})`; queued = false; };
window.addEventListener('scroll', () => { if (!queued) { requestAnimationFrame(updateBar); queued = true; } }, { passive: true });
updateBar();
const heroImage = document.querySelector('.hero-photo');
if (heroImage) heroImage.addEventListener('error', () => { heroImage.classList.add('photo-unavailable'); heroImage.setAttribute('alt', ''); });
