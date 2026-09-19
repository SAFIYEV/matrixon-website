<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteLocale } from '../composables/useSiteLocale'
import SocialIcon from '../components/SocialIcon.vue'

const { locale, t } = useSiteLocale()
const mail = 'info@matrixon.org'
const phoneHref = 'tel:+994107365773'

const copy = computed(() => locale.value === 'ru' ? {
  eyebrow: 'AI PRODUCT COMPANY',
  title: 'Создаём AI-продукты, которые работают рядом с вами',
  lead: 'MATRIXON проектирует локальные AI-инструменты и автономных агентов — от идеи и прототипа до работающего продукта.',
  explore: 'Смотреть продукты', contact: 'Связаться',
  build: 'Создаём', ship: 'Запускаем', scale: 'Масштабируем',
  products: 'AI-продукты', productsValue: '4', open: 'Open source', openValue: '2', location: 'Баку', locationValue: 'AZ',
  focusLabel: 'Что мы делаем', focusTitle: 'AI из лаборатории — в реальную работу',
  focusLead: 'Мы соединяем продуктовый дизайн, модели и инженерную инфраструктуру в системах, которыми удобно пользоваться каждый день.',
  pillars: [
    ['Локальные AI-системы', 'Данные, модели и автоматизация остаются под вашим контролем.'],
    ['Автономные агенты', 'Инструменты, которые видят задачу, планируют и выполняют её.'],
    ['Продукт под ключ', 'Проходим путь от концепции до стабильного релиза вместе.'],
  ],
  portfolioLabel: 'Портфолио', portfolioTitle: 'Наши продукты', portfolioLead: 'То, что мы разрабатываем и выпускаем прямо сейчас.',
  founderLabel: 'Команда', founderTitle: 'Люди за MATRIXON', role: 'CEO & Founder',
  founderText: 'Марат Сафиев руководит MATRIXON, участвует в хакатонах и развивает AI- и Web3-сообщество Центральной Азии.',
  ctaLabel: 'MATRIXON', ctaTitle: 'Давайте создадим следующий AI-продукт', ctaText: 'Расскажите о задаче — ответим напрямую и предложим первый маршрут.',
  email: 'Написать нам', call: 'Позвонить', terminalReady: 'system ready',
} : {
  eyebrow: 'AI PRODUCT COMPANY',
  title: 'We build AI products that work where you are',
  lead: 'MATRIXON designs local AI tools and autonomous agents — from idea and prototype to a product people can actually use.',
  explore: 'Explore products', contact: 'Get in touch',
  build: 'Build', ship: 'Ship', scale: 'Scale',
  products: 'AI products', productsValue: '4', open: 'Open source', openValue: '2', location: 'Based in', locationValue: 'Baku',
  focusLabel: 'What we do', focusTitle: 'AI from the lab into real work',
  focusLead: 'We combine product design, models, and engineering infrastructure into systems people enjoy using every day.',
  pillars: [
    ['Local AI systems', 'Data, models, and automation stay under your control.'],
    ['Autonomous agents', 'Tools that see the task, make a plan, and carry it through.'],
    ['End-to-end products', 'We take ideas from concept to a reliable release.'],
  ],
  portfolioLabel: 'Portfolio', portfolioTitle: 'Our products', portfolioLead: 'What we are building and shipping right now.',
  founderLabel: 'Team', founderTitle: 'The people behind MATRIXON', role: 'CEO & Founder',
  founderText: 'Marat Safiyev leads MATRIXON, joins hackathons, and helps grow the AI and Web3 community across Central Asia.',
  ctaLabel: 'MATRIXON', ctaTitle: 'Let’s build the next AI product', ctaText: 'Tell us what you are working on — we will reply directly with a first route forward.',
  email: 'Email us', call: 'Call us', terminalReady: 'system ready',
})

const products = computed(() => [
  { num: '01', name: t.value.productHeyAgentName, text: t.value.productHeyAgentText, to: '/heyagent', tag: 'AUTONOMOUS AGENT' },
  { num: '02', name: t.value.productBrowserName, text: t.value.productBrowserText, to: '/browser', tag: 'LOCAL AI' },
  { num: '03', name: t.value.productMixaName, text: t.value.productMixaText, to: '/mixa', tag: 'CREATIVE AI' },
  { num: '04', name: t.value.productWeb3FrenName, text: t.value.productWeb3FrenText, to: '/web3-fren', tag: 'MEDIA AGENT' },
])

const terminalLines = ref([
  { kind: 'command', text: '$ matrixon studio --status' },
  { kind: 'success', text: '✓ core online' },
  { kind: 'data', text: '  products: 4 active' },
  { kind: 'data', text: '  agents:   ready' },
  { kind: 'data', text: '  location: Baku, AZ' },
])

function runTerminal(command: 'products' | 'agents' | 'contact') {
  const result = command === 'products'
    ? ['$ matrixon list --products', '→ HeyAgent · Agentic Browser · MIXA AI · web3 fren']
    : command === 'agents'
      ? ['$ matrixon agents --health', '✓ all systems operational']
      : ['$ matrixon connect', '→ info@matrixon.org']
  terminalLines.value = [
    ...terminalLines.value.slice(-3),
    { kind: 'command', text: result[0] },
    { kind: 'success', text: result[1] },
  ]
}
</script>

<template>
  <main class="home">
    <section id="intro" class="hero">
      <div class="hero__glow hero__glow--green" />
      <div class="hero__glow hero__glow--blue" />
      <div class="hero__inner">
        <div class="hero__copy">
          <p class="eyebrow"><span />{{ copy.eyebrow }}</p>
          <h1>{{ copy.title }}</h1>
          <p class="hero__lead">{{ copy.lead }}</p>
          <p class="hero__verbs"><span>{{ copy.build }}</span><b>•</b><span>{{ copy.ship }}</span><b>•</b><span>{{ copy.scale }}</span></p>
          <div class="hero__actions">
            <a class="home-btn home-btn--primary" href="#product">{{ copy.explore }} <span>↘</span></a>
            <a class="home-btn home-btn--ghost" href="#contact">{{ copy.contact }}</a>
          </div>
        </div>

        <div class="terminal-wrap" aria-label="MATRIXON system terminal">
          <div class="terminal">
            <div class="terminal__top">
              <div class="terminal__dots"><span /><span /><span /></div>
              <span class="terminal__label">matrixon://studio</span>
              <span class="terminal__status"><i /> {{ copy.terminalReady }}</span>
            </div>
            <div class="terminal__body" aria-live="polite">
              <p v-for="(line, i) in terminalLines" :key="`${line.text}-${i}`" :class="`terminal__line terminal__line--${line.kind}`">{{ line.text }}</p>
              <p class="terminal__prompt"><span>›</span><i /></p>
            </div>
            <div class="terminal__actions">
              <button type="button" @click="runTerminal('products')">list products</button>
              <button type="button" @click="runTerminal('agents')">check agents</button>
              <button type="button" @click="runTerminal('contact')">connect</button>
            </div>
          </div>
          <div class="stats">
            <article><span>{{ copy.products }}</span><strong>{{ copy.productsValue }}</strong></article>
            <article><span>{{ copy.open }}</span><strong>{{ copy.openValue }}</strong></article>
            <article><span>{{ copy.location }}</span><strong>{{ copy.locationValue }}</strong></article>
          </div>
        </div>
      </div>
      <a class="hero__scroll" href="#focus"><span>SCROLL</span><i /></a>
    </section>

    <section id="focus" class="section focus">
      <div class="section__head">
        <p class="section-label">01 / {{ copy.focusLabel }}</p>
        <h2>{{ copy.focusTitle }}</h2>
        <p>{{ copy.focusLead }}</p>
      </div>
      <div class="pillar-grid">
        <article v-for="(pillar, i) in copy.pillars" :key="pillar[0]" class="pillar-card">
          <span>0{{ i + 1 }}</span><div class="pillar-card__icon">{{ ['⌁', '◇', '↗'][i] }}</div><h3>{{ pillar[0] }}</h3><p>{{ pillar[1] }}</p>
        </article>
      </div>
    </section>

    <section id="product" class="section projects">
      <div class="section__head section__head--row">
        <div><p class="section-label">02 / {{ copy.portfolioLabel }}</p><h2>{{ copy.portfolioTitle }}</h2></div>
        <p>{{ copy.portfolioLead }}</p>
      </div>
      <div class="project-grid">
        <RouterLink v-for="product in products" :key="product.num" :to="product.to" class="project-card">
          <div class="project-card__meta"><span>{{ product.num }}</span><span>{{ product.tag }}</span></div>
          <div class="project-card__visual"><span>{{ product.name.slice(0, 1) }}</span><i /><i /><i /></div>
          <div class="project-card__body"><h3>{{ product.name }}</h3><p>{{ product.text }}</p><b>↗</b></div>
        </RouterLink>
      </div>
    </section>

    <section id="team" class="section founder">
      <div class="founder__portrait"><img src="/founders/marat.png" :alt="t.founderMaratName" /><span>MATRIXON / 2026</span></div>
      <div class="founder__copy">
        <p class="section-label">03 / {{ copy.founderLabel }}</p><h2>{{ copy.founderTitle }}</h2>
        <p class="founder__role">{{ copy.role }}</p><h3>{{ t.founderMaratName }}</h3><p>{{ copy.founderText }}</p>
        <div class="founder__socials">
          <a href="https://www.linkedin.com/in/safiyevmarat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon network="linkedin" /></a>
          <a href="https://t.me/SafiyevToday" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><SocialIcon network="telegram" /></a>
          <a href="https://x.com/SafiyevMarat" target="_blank" rel="noopener noreferrer" aria-label="X"><SocialIcon network="x" /></a>
          <a href="https://www.instagram.com/maratsafiyev19/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SocialIcon network="instagram" /></a>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <p class="section-label">04 / {{ copy.ctaLabel }}</p><h2>{{ copy.ctaTitle }}</h2><p>{{ copy.ctaText }}</p>
      <div class="contact__actions"><a class="home-btn home-btn--primary" :href="`mailto:${mail}`">{{ copy.email }} <span>↗</span></a><a class="home-btn home-btn--ghost" :href="phoneHref">{{ copy.call }}</a></div>
      <div class="contact__orb" aria-hidden="true"><span>M</span></div>
    </section>

    <footer class="home-footer">
      <div class="home-footer__brand"><img src="/logo-matrixon.png" alt="" /><strong>MATRIXON</strong></div>
      <p>AI products · autonomous agents · local intelligence</p>
      <div><a href="https://t.me/matrixonAI" target="_blank" rel="noopener noreferrer">Telegram</a><a href="https://www.instagram.com/realmatrixon/" target="_blank" rel="noopener noreferrer">Instagram</a><a :href="`mailto:${mail}`">{{ mail }}</a></div>
      <small>© {{ new Date().getFullYear() }} MATRIXON · Baku, Azerbaijan</small>
    </footer>
  </main>
</template>

<style scoped>
.home{--cyan:#55f7cc;--blue:#40a9ff;color:#edf7ff;background:#050a12;overflow:hidden}.hero,.section,.home-footer{position:relative}.hero{min-height:100vh;min-height:100dvh;padding:148px 5vw 72px;display:flex;align-items:center;background-image:linear-gradient(rgba(84,247,204,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(84,247,204,.035) 1px,transparent 1px);background-size:34px 34px;border-bottom:1px solid rgba(117,160,194,.14)}
.hero::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(5,10,18,.08),rgba(5,10,18,.4) 50%,rgba(5,10,18,.08))}.hero__glow{position:absolute;filter:blur(2px);pointer-events:none;border-radius:50%}.hero__glow--green{width:58vw;height:58vw;left:-34vw;top:-10vw;background:radial-gradient(circle,rgba(23,229,150,.2),transparent 68%)}.hero__glow--blue{width:56vw;height:56vw;right:-28vw;bottom:-34vw;background:radial-gradient(circle,rgba(31,139,255,.25),transparent 68%)}
.hero__inner{position:relative;z-index:2;width:100%;max-width:1180px;margin:0 auto;display:grid;grid-template-columns:minmax(0,.96fr) minmax(480px,1.04fr);gap:54px;align-items:center}.eyebrow,.section-label{font:700 11px/1.2 var(--font-mono);letter-spacing:.15em;text-transform:uppercase;color:var(--cyan)}.eyebrow{display:flex;gap:10px;align-items:center;margin:0 0 20px}.eyebrow span{width:7px;height:7px;border-radius:50%;background:var(--cyan);box-shadow:0 0 14px var(--cyan)}.hero h1{margin:0;max-width:680px;font:800 clamp(3.4rem,5.25vw,4.8rem)/.96 var(--font-display);letter-spacing:-.055em}.hero__lead{max-width:620px;margin:28px 0 0;color:#a8b9cc;font-size:clamp(1.05rem,1.55vw,1.25rem);line-height:1.58}.hero__verbs{display:flex;gap:12px;margin:24px 0 30px;font:600 13px var(--font-mono);text-transform:uppercase;letter-spacing:.1em;color:#b9cad9}.hero__verbs b{color:var(--cyan)}.hero__actions,.contact__actions{display:flex;gap:12px;flex-wrap:wrap}.home-btn{display:inline-flex;align-items:center;justify-content:center;gap:18px;padding:13px 21px;border-radius:10px;border:1px solid rgba(110,164,205,.25);font-weight:700;font-size:14px;text-decoration:none;transition:.2s ease}.home-btn:hover{transform:translateY(-2px)}.home-btn--primary{color:#03120e;background:linear-gradient(120deg,var(--cyan),#3fc1ff);box-shadow:0 10px 30px rgba(70,222,208,.14)}.home-btn--ghost{color:#dce9f4;background:rgba(7,15,26,.55)}
.terminal-wrap{min-width:0}.terminal{overflow:hidden;border:1px solid rgba(94,157,199,.25);border-radius:18px;background:rgba(4,10,18,.89);box-shadow:0 30px 80px rgba(0,0,0,.55),inset 0 1px rgba(255,255,255,.03);backdrop-filter:blur(16px)}.terminal__top{height:52px;padding:0 17px;display:flex;align-items:center;border-bottom:1px solid rgba(102,157,194,.18);color:#64798e;font:10px var(--font-mono);letter-spacing:.08em}.terminal__dots{display:flex;gap:7px}.terminal__dots span{width:9px;height:9px;border-radius:50%;background:#26384d}.terminal__dots span:first-child{background:#1c8d75}.terminal__label{margin:auto}.terminal__status{color:#7d978f}.terminal__status i{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--cyan);box-shadow:0 0 10px var(--cyan)}.terminal__body{height:310px;padding:27px 25px;font:500 13px/1.85 var(--font-mono);color:#b8cada}.terminal__line{margin:0;white-space:pre-wrap}.terminal__line--command{color:#e7f5ff}.terminal__line--success{color:var(--cyan)}.terminal__line--data{color:#8297ab}.terminal__prompt{display:flex;align-items:center;gap:8px;margin:8px 0 0;color:var(--cyan)}.terminal__prompt i{width:8px;height:16px;background:var(--cyan);animation:blink 1s steps(1) infinite}@keyframes blink{50%{opacity:0}}.terminal__actions{display:flex;gap:8px;padding:12px 16px;border-top:1px solid rgba(102,157,194,.15)}.terminal__actions button{padding:7px 10px;border:1px solid rgba(85,247,204,.16);border-radius:6px;background:rgba(85,247,204,.04);color:#7ca99e;font:10px var(--font-mono);cursor:pointer}.terminal__actions button:hover{color:var(--cyan);border-color:rgba(85,247,204,.45)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:12px}.stats article{padding:14px 16px;border:1px solid rgba(94,157,199,.2);border-radius:12px;background:rgba(5,12,22,.76)}.stats span{display:block;color:#71859a;font-size:11px}.stats strong{display:block;margin-top:3px;font:700 22px var(--font-display)}.hero__scroll{position:absolute;z-index:3;left:5vw;bottom:24px;display:flex;align-items:center;gap:12px;color:#53697d;text-decoration:none;font:9px var(--font-mono);letter-spacing:.16em}.hero__scroll i{width:42px;height:1px;background:linear-gradient(90deg,var(--cyan),transparent)}
.section{padding:120px max(5vw,24px);background:#060b13;border-bottom:1px solid rgba(117,160,194,.12)}.section::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 10% 15%,rgba(48,213,165,.06),transparent 28%)}.section__head{position:relative;max-width:760px;margin:0 auto 56px;text-align:center}.section__head h2,.founder h2,.contact h2{margin:14px 0 18px;font:700 clamp(2.4rem,4.7vw,4.3rem)/1.04 var(--font-display);letter-spacing:-.045em}.section__head>p:last-child,.section__head--row>p,.contact>p{color:#8ea2b5;line-height:1.65}.pillar-grid{position:relative;max-width:1120px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.pillar-card{min-height:278px;padding:26px;border:1px solid rgba(102,157,194,.17);border-radius:14px;background:linear-gradient(145deg,rgba(16,29,44,.65),rgba(6,12,22,.65));transition:.3s ease}.pillar-card:hover{transform:translateY(-6px);border-color:rgba(85,247,204,.4);background:rgba(18,42,49,.48)}.pillar-card>span{font:10px var(--font-mono);color:#4f687c}.pillar-card__icon{width:54px;height:54px;margin:36px 0 28px;display:grid;place-items:center;border:1px solid rgba(85,247,204,.24);border-radius:12px;color:var(--cyan);font-size:25px;background:rgba(85,247,204,.04)}.pillar-card h3{margin:0 0 12px;font:700 21px var(--font-display)}.pillar-card p{margin:0;color:#8499ad;font-size:15px;line-height:1.6}
.projects{background:#050a12}.section__head--row{max-width:1120px;display:flex;align-items:end;justify-content:space-between;text-align:left}.section__head--row>p{max-width:380px}.project-grid{position:relative;max-width:1120px;margin:auto;display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.project-card{min-height:350px;overflow:hidden;border:1px solid rgba(102,157,194,.18);border-radius:15px;background:#09111d;color:inherit;text-decoration:none;transition:.3s ease}.project-card:hover{transform:translateY(-5px);border-color:rgba(85,247,204,.42)}.project-card__meta{display:flex;justify-content:space-between;padding:16px 20px;color:#658094;font:9px var(--font-mono);letter-spacing:.13em}.project-card__visual{position:relative;height:145px;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 50% 50%,rgba(85,247,204,.2),transparent 42%),linear-gradient(120deg,#0a2026,#091426 55%,#0b2440)}.project-card:nth-child(2) .project-card__visual,.project-card:nth-child(4) .project-card__visual{background:radial-gradient(circle,rgba(45,139,255,.24),transparent 45%),linear-gradient(120deg,#071827,#0d152d)}.project-card__visual>span{position:relative;z-index:2;display:grid;place-items:center;width:72px;height:72px;border:1px solid rgba(85,247,204,.45);border-radius:18px;background:rgba(3,10,16,.65);color:var(--cyan);font:800 36px var(--font-display);box-shadow:0 0 45px rgba(85,247,204,.15)}.project-card__visual i{position:absolute;width:240px;height:240px;border:1px solid rgba(85,247,204,.1);border-radius:50%}.project-card__visual i:nth-of-type(2){width:340px;height:340px}.project-card__visual i:nth-of-type(3){width:450px;height:450px}.project-card__body{position:relative;padding:24px 25px 28px}.project-card__body h3{margin:0 0 9px;font:700 25px var(--font-display)}.project-card__body p{margin:0;padding-right:42px;color:#8398aa;font-size:14px;line-height:1.6}.project-card__body b{position:absolute;right:24px;top:24px;color:var(--cyan);font-size:20px}
.founder{max-width:none;display:grid;grid-template-columns:minmax(280px,430px) minmax(320px,560px);justify-content:center;gap:80px;align-items:center;background:#07101a}.founder__portrait{position:relative;overflow:hidden;aspect-ratio:4/4.6;border:1px solid rgba(85,247,204,.22);border-radius:18px;background:linear-gradient(145deg,#10212d,#07101a)}.founder__portrait::after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,12,20,.5),transparent 45%)}.founder__portrait img{width:100%;height:100%;object-fit:cover;filter:saturate(.78) contrast(1.06)}.founder__portrait span{position:absolute;z-index:2;bottom:16px;left:18px;color:#a6c2c0;font:9px var(--font-mono);letter-spacing:.15em}.founder__copy{position:relative}.founder__role{margin:34px 0 5px;color:var(--cyan);font:10px var(--font-mono);letter-spacing:.15em;text-transform:uppercase}.founder__copy h3{margin:0 0 14px;font:700 27px var(--font-display)}.founder__copy>p:last-of-type{max-width:540px;color:#91a6b9;line-height:1.65}.founder__socials{display:flex;gap:9px;margin-top:28px}.founder__socials a{width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(102,157,194,.2);border-radius:9px;color:#a4bacb}.founder__socials a:hover{color:var(--cyan);border-color:rgba(85,247,204,.45)}
.contact{text-align:center;padding-top:145px;padding-bottom:145px;background:#050b13}.contact>p{max-width:600px;margin:0 auto}.contact__actions{justify-content:center;margin-top:34px}.contact__orb{position:absolute;right:-110px;top:50%;transform:translateY(-50%);width:270px;height:270px;border:1px solid rgba(85,247,204,.12);border-radius:50%;display:grid;place-items:center;box-shadow:0 0 0 35px rgba(85,247,204,.018),0 0 0 70px rgba(64,169,255,.012)}.contact__orb span{font:800 80px var(--font-display);color:rgba(85,247,204,.1)}.home-footer{padding:46px 5vw 28px;display:grid;grid-template-columns:auto 1fr auto;gap:24px 44px;align-items:center;background:#03070c;border-top:1px solid rgba(117,160,194,.13);color:#698095;font-size:12px}.home-footer__brand{display:flex;align-items:center;gap:10px;color:#e5f3fb;letter-spacing:.08em}.home-footer__brand img{width:32px;height:32px;border-radius:8px}.home-footer>p{text-align:center}.home-footer>div:nth-of-type(2){display:flex;gap:18px}.home-footer a{text-decoration:none}.home-footer a:hover{color:var(--cyan)}.home-footer small{grid-column:1/-1;text-align:center;padding-top:20px;border-top:1px solid rgba(117,160,194,.1);color:#485c6d}
@media(max-width:920px){.hero{padding-top:125px}.hero__inner{grid-template-columns:1fr;gap:52px}.hero__copy{text-align:center}.eyebrow,.hero__verbs,.hero__actions{justify-content:center}.hero__lead{margin-inline:auto}.terminal-wrap{max-width:700px;width:100%;margin:auto}.pillar-grid{grid-template-columns:1fr}.pillar-card{min-height:0}.founder{grid-template-columns:minmax(250px,380px) minmax(300px,1fr);gap:40px}.home-footer{grid-template-columns:1fr;text-align:center}.home-footer__brand,.home-footer>div:nth-of-type(2){justify-content:center}.home-footer>p{margin:0}.home-footer small{grid-column:auto}}
@media(max-width:680px){.hero{padding:112px 18px 65px;align-items:flex-start}.hero__copy{min-width:0}.hero h1{max-width:100%;font-size:clamp(2.75rem,11.5vw,4rem);letter-spacing:-.065em}.hero__lead{font-size:1rem}.hero__verbs{font-size:10px;gap:8px}.terminal__label{display:none}.terminal__body{height:270px;padding:20px 16px;font-size:11px}.terminal__actions{overflow:auto}.stats article{padding:11px}.stats span{font-size:9px}.stats strong{font-size:17px}.section{padding:84px 18px}.section__head--row{display:block}.project-grid{grid-template-columns:1fr}.founder{grid-template-columns:1fr}.founder__portrait{max-width:420px;width:100%;margin:auto}.contact__orb{display:none}.home-btn{width:100%}.hero__actions,.contact__actions{width:100%}.hero__scroll{display:none}}
@media(prefers-reduced-motion:reduce){.terminal__prompt i{animation:none}.home-btn,.project-card,.pillar-card{transition:none}}
</style>
