<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const github = "https://github.com/SAFIYEV/HeyAgent";
const baseUrl = import.meta.env.BASE_URL;
const menuOpen = ref(false);
const selected = ref(0);
const copied = ref(false);
const copyError = ref(false);
const scenarios = [
  {
    label: "Документы",
    icon: "▤",
    prompt: "Собери заметки со встречи в документ и сохрани на Google Drive.",
    reply: "Соберу ключевые решения и следующие шаги в одном месте.",
    steps: [
      "Прочитал заметки со встречи",
      "Создал документ с итогами",
      "Сохранил в рабочую папку",
    ],
    file: "Итоги встречи",
    type: "GOOGLE DOCS",
    result: "Документ готов",
  },
  {
    label: "Браузер",
    icon: "⊞",
    prompt: "Найди три подходящих отеля в Баку и сравни условия.",
    reply: "Открою браузер, изучу варианты и соберу сравнение.",
    steps: [
      "Открыл страницы отелей",
      "Сравнил расположение и условия",
      "Подготовил таблицу вариантов",
    ],
    file: "Отели в Баку",
    type: "СРАВНЕНИЕ",
    result: "Варианты собраны",
  },
  {
    label: "Файлы",
    icon: "⌘",
    prompt: "Разложи файлы в папке проекта по типам.",
    reply: "Изучу содержимое папки и подготовлю понятную структуру.",
    steps: [
      "Проверил файлы проекта",
      "Распределил по типам",
      "Проверил новую структуру",
    ],
    file: "Папка проекта",
    type: "РАБОЧИЙ СТОЛ",
    result: "Файлы упорядочены",
  },
];
const scenario = computed(() => scenarios[selected.value]);
const command =
  'git clone https://github.com/SAFIYEV/HeyAgent.git\ncd HeyAgent\nnpm install\nnpm run build\nnpx hey onboard\nnpx hey ask "Открой блокнот и напиши список покупок"';
let motion: gsap.MatchMedia | undefined;
let copyTimer: ReturnType<typeof setTimeout> | undefined;
async function copyCommands() {
  try {
    await navigator.clipboard.writeText(command);
    copied.value = true;
    copyError.value = false;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch {
    copyError.value = true;
  }
}
function closeMenu() {
  menuOpen.value = false;
}
function escapeMenu(event: KeyboardEvent) {
  if (event.key === "Escape") closeMenu();
}
function changeTab(event: KeyboardEvent, index: number) {
  if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  selected.value =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? 2
        : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3;
  document.getElementById(`scenario-${selected.value}`)?.focus();
}
onMounted(() => {
  document.addEventListener("keydown", escapeMenu);
  motion = gsap.matchMedia();
  motion.add("(prefers-reduced-motion: no-preference)", () => {
    gsap
      .timeline({
        defaults: { ease: "power3.out", clearProps: "transform,opacity" },
      })
      .from(".nav", { y: -12, opacity: 0, duration: 0.6 })
      .from(
        ".hero .eyebrow, .hero h1, .hero-intro",
        { y: 28, opacity: 0, duration: 0.85, stagger: 0.12 },
        0.12,
      )
      .from(
        ".hero-bottom",
        { y: 35, scale: 0.975, opacity: 0, duration: 1 },
        0.4,
      );
    gsap.utils
      .toArray<HTMLElement>(".reveal:not(.hero-bottom):not(.feature)")
      .forEach((element) => {
        gsap.from(element, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: element, start: "top 94%", once: true },
        });
      });
    gsap.utils.toArray<HTMLElement>(".feature").forEach((element, index) => {
      gsap.from(element, {
        y: 36,
        opacity: 0,
        duration: 0.75,
        delay: (index % 2) * 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: element, start: "top 96%", once: true },
      });
    });
    gsap.from(".process-list li", {
      y: 18,
      opacity: 0,
      duration: 0.7,
      stagger: 0.14,
      ease: "power2.out",
      clearProps: "transform,opacity",
      scrollTrigger: {
        trigger: ".process-list",
        start: "top 90%",
        once: true,
      },
    });
  });
});
onUnmounted(() => {
  motion?.revert();
  clearTimeout(copyTimer);
  document.removeEventListener("keydown", escapeMenu);
});
</script>

<template>
  <a class="skip-link" href="#content">Перейти к содержимому</a>
  <header class="wrap nav">
    <a class="brand" href="#" aria-label="HeyAgent — на главную"
      ><img src="/heyagent-icon.svg" width="35" height="35" alt="" />HeyAgent</a
    >
    <nav
      id="navigation"
      class="nav-links"
      :class="{ open: menuOpen }"
      aria-label="Главная навигация"
    >
      <a href="#features" @click="closeMenu">Возможности</a
      ><a href="#how-it-works" @click="closeMenu">Как это работает</a
      ><a href="#faq" @click="closeMenu">Вопросы</a>
    </nav>
    <div class="nav-right">
      <a
        class="text-link"
        :href="github"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub ↗</a
      ><a class="button small" href="#start">Начать <span>↗</span></a
      ><button
        class="menu-button"
        :aria-expanded="menuOpen"
        aria-controls="navigation"
        :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? "×" : "☰" }}
      </button>
    </div>
  </header>
  <main id="content">
    <section class="wrap hero">
      <div class="hero-top">
        <div>
          <p class="eyebrow">
            <i class="status-dot" /> Локальный AI-агент. Открытый исходный код.
          </p>
          <h1>Ваш компьютер.<br /><span>Теперь с агентом.</span></h1>
        </div>
        <div class="hero-intro">
          <p>
            Просто скажите, что нужно сделать. HeyAgent откроет приложения,
            поработает с файлами и браузером — прямо на вашем компьютере.
          </p>
          <div class="actions">
            <a class="button" href="#start">Запустить HeyAgent <span>↗</span></a
            ><a class="button outline" href="#demo"
              >Посмотреть в деле <span>↓</span></a
            >
          </div>
        </div>
      </div>
      <div id="demo" class="hero-bottom reveal">
        <div class="demo">
          <aside class="demo-sidebar">
            <div class="brand">
              <img
                src="/heyagent-icon.svg"
                width="25"
                height="25"
                alt=""
              />HeyAgent
            </div>
            <small>ПРИМЕРЫ ЗАДАЧ</small>
            <div
              class="scenario-tabs"
              role="tablist"
              aria-label="Сценарии работы"
            >
              <button
                v-for="(item, index) in scenarios"
                :id="`scenario-${index}`"
                :key="item.label"
                role="tab"
                :aria-selected="selected === index"
                :tabindex="selected === index ? 0 : -1"
                aria-controls="scenario-panel"
                class="scenario"
                :class="{ active: selected === index }"
                @click="selected = index"
                @keydown="changeTab($event, index)"
              >
                <span aria-hidden="true">{{ item.icon }}</span
                >{{ item.label }}
              </button>
            </div>
            <div class="local-status">
              <i class="status-dot" /> На вашем компьютере
            </div>
          </aside>
          <div class="demo-body">
            <div class="demo-topline">
              <span>Рабочее пространство</span
              ><span>Демонстрация сценария</span>
            </div>
            <div
              id="scenario-panel"
              :key="selected"
              class="demo-content"
              role="tabpanel"
              :aria-labelledby="`scenario-${selected}`"
              aria-live="polite"
            >
              <div>
                <p class="user-prompt">{{ scenario.prompt }}</p>
                <div class="agent-response">
                  <strong>HeyAgent</strong>
                  <p>{{ scenario.reply }}</p>
                </div>
                <ul class="task-steps">
                  <li v-for="step in scenario.steps" :key="step">
                    <b>✓</b>{{ step }}
                  </li>
                </ul>
              </div>
              <div class="result-card">
                <div class="result-icon" aria-hidden="true">▤</div>
                <small>{{ scenario.type }}</small>
                <h3>{{ scenario.file }}</h3>
                <div class="document-lines" aria-hidden="true">
                  <i /><i /><i /><i />
                </div>
                <span>✓ {{ scenario.result }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="demo-caption">
          <span
            >Вы ставите задачу. Агент планирует, действует и проверяет
            результат.</span
          ><span>Desktop · Terminal · Telegram</span>
        </div>
      </div>
    </section>
    <div class="wrap integration-strip">
      <p>Работает с привычными инструментами</p>
      <strong>Google Workspace</strong><strong>Telegram</strong
      ><strong>Chrome</strong><strong>Ollama</strong><strong>OpenRouter</strong>
    </div>
    <section class="wrap partner-strip reveal" aria-labelledby="partners-title">
      <h2 id="partners-title">Наш партнёр</h2>
      <a class="partner-link" href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" aria-label="AWS — Amazon Web Services, открыть сайт партнёра">
        <img :src="`${baseUrl}partners/aws.svg`" width="76" height="46" alt="AWS" loading="lazy" />
        <span>Amazon Web Services</span>
        <span aria-hidden="true">↗</span>
      </a>
    </section>
    <section id="features" class="wrap section">
      <div class="section-heading reveal">
        <h2>Меньше рутины.<br />Больше сделанного.</h2>
        <p>
          Один агент для задач, которые обычно требуют десятка вкладок и вашего
          внимания.
        </p>
      </div>
      <div class="feature-grid">
        <article class="feature reveal">
          <div class="feature-visual" aria-hidden="true">
            <div class="app-square">⌘</div>
            <div class="app-square">⊞</div>
            <div class="app-square">▤</div>
          </div>
          <h3>Весь компьютер в деле</h3>
          <p>
            Открывает приложения, переключает окна, работает с мышью,
            клавиатурой и файлами.
          </p>
        </article>
        <article class="feature reveal">
          <div class="feature-visual" aria-hidden="true">
            <div class="mini-window">
              <span>○ ○ ○ &nbsp; Браузер</span
              ><b>Найти → сравнить → собрать результат</b>
            </div>
          </div>
          <h3>Браузер, который помогает</h3>
          <p>
            Ищет информацию, работает с открытыми вкладками и вашим профилем
            Chrome, Edge или Яндекс Браузера.
          </p>
        </article>
        <article class="feature reveal">
          <div class="feature-visual" aria-hidden="true">
            <div class="mini-chat">
              Подготовь документ к встрече.<br /><small
                >Отправлено через Telegram</small
              >
            </div>
          </div>
          <h3>Задача с телефона. Работа на ПК.</h3>
          <p>
            Напишите своему Telegram-боту. Локальный агент выполнит задачу на
            включённом компьютере.
          </p>
        </article>
        <article class="feature reveal">
          <div class="feature-visual" aria-hidden="true">
            <div class="memory-chips">
              <span>Ваши предпочтения</span><span>История задач</span
              ><span>Контекст проекта</span>
            </div>
          </div>
          <h3>Помнит, с чем вы работаете</h3>
          <p>
            Сохраняет сессии, историю миссий и память рабочего пространства,
            чтобы продолжать с контекстом.
          </p>
        </article>
      </div>
    </section>
    <section id="how-it-works" class="section process-section">
      <div class="wrap process-layout">
        <div class="reveal">
          <p class="eyebrow">От запроса до результата</p>
          <h2>
            Вы задаёте цель.<br /><span>HeyAgent берёт<br />на себя шаги.</span>
          </h2>
          <p class="intro">
            Говорите обычными словами. Агент сам выстраивает последовательность
            действий и показывает, что происходит.
          </p>
          <a class="button light" href="#start"
            >Дать первую задачу <span>↗</span></a
          >
        </div>
        <ol class="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Понимает задачу</h3>
              <p>
                Разбирает запрос и выбирает подходящие инструменты: браузер,
                приложения или интеграции.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Составляет план</h3>
              <p>
                Разбивает работу на шаги и ставит миссию в управляемую очередь.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Действует на компьютере</h3>
              <p>
                Выполняет шаги с учётом разрешений. Запрашивает подтверждение,
                когда этого требует выбранный режим.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Проверяет результат</h3>
              <p>
                Сверяет результат с задачей и повторяет шаг, если ошибку можно
                исправить.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section class="wrap section control">
      <div class="control-copy reveal">
        <h2>Самостоятельный агент.<br />Ваши правила.</h2>
        <p>
          Вы выбираете модель и доступные инструменты. Используйте облачного
          провайдера или локальную модель через Ollama. Для чувствительных
          действий настройте подтверждения.
        </p>
        <a
          :href="`${github}#security-and-permissions`"
          target="_blank"
          rel="noopener noreferrer"
          >Подробнее о разрешениях ↗</a
        >
      </div>
      <div class="permissions reveal">
        <div class="permissions-head">
          <strong>Настройки доступа</strong><span>Пример</span>
        </div>
        <div class="permission-row">
          <span>Работа с файлами</span><span>По разрешению</span>
        </div>
        <div class="permission-row">
          <span>Чувствительные действия</span><span>Подтверждать</span>
        </div>
        <div class="permission-row">
          <span>Выбор модели</span><span>За вами</span>
        </div>
        <p>Доступ зависит от выбранного режима и подключённых инструментов.</p>
      </div>
    </section>
    <section id="start" class="wrap section start">
      <div class="reveal">
        <h2>Познакомьтесь<br />со своим агентом.</h2>
        <p>
          Установите HeyAgent, подключите модель через мастер настройки и дайте
          первую задачу.
        </p>
        <div class="requirements">
          <span>Node.js 22+</span><span>Git + npm</span
          ><span>Windows 10 / 11 рекомендуется</span>
        </div>
        <div class="actions">
          <a
            class="button outline"
            :href="`${github}#quick-start`"
            target="_blank"
            rel="noopener noreferrer"
            >Инструкция на GitHub ↗</a
          >
        </div>
      </div>
      <div class="code-block reveal">
        <div class="code-header">
          <span>Быстрый старт · терминал</span
          ><button @click="copyCommands" aria-live="polite">
            {{ copied ? "Скопировано ✓" : "Скопировать" }}
          </button>
        </div>
        <pre><code>{{ command }}</code></pre>
        <p v-if="copyError" role="status" class="copy-error">
          Не удалось скопировать. Выделите команды вручную.
        </p>
      </div>
    </section>
    <section id="faq" class="wrap section faq">
      <h2>Хорошие вопросы.</h2>
      <details>
        <summary>Это бесплатный проект?</summary>
        <p>
          Исходный код HeyAgent открыт под лицензией AGPL-3.0. Облачные модели и
          сторонние сервисы могут тарифицироваться отдельно. Условия
          использования кода описаны в репозитории.
        </p>
      </details>
      <details>
        <summary>Все данные остаются на компьютере?</summary>
        <p>
          Агент работает локально, но при выборе облачной модели передаёт ей
          данные, необходимые для задачи. Подключённые сервисы также
          обрабатывают данные. Для работы с локальной моделью можно настроить
          Ollama.
        </p>
      </details>
      <details>
        <summary>Как управлять агентом с телефона?</summary>
        <p>
          Подключите персонального Telegram-бота по инструкции в репозитории.
          Компьютер должен быть включён, а локальный gateway — запущен. После
          этого можно отправлять задачи боту с телефона.
        </p>
      </details>
      <details>
        <summary>С какой системы лучше начать?</summary>
        <p>
          Для наиболее полного управления рабочим столом рекомендуется Windows
          10 или 11. Нужны Node.js 22+, npm, Git и доступ к поддерживаемой
          модели. Инструкции для других платформ доступны в README.
        </p>
      </details>
    </section>
    <section class="wrap final-cta reveal">
      <h2>Есть задача?<br />Скажите: «Hey, Agent».</h2>
      <p>Ваши инструменты. Ваша модель. Ваш личный агент.</p>
      <a class="button" href="#start">Начать с HeyAgent <span>↗</span></a>
    </section>
  </main>
  <footer class="wrap footer">
    <a href="#" class="brand"
      ><img src="/heyagent-icon.svg" width="30" height="30" alt="" />HeyAgent</a
    ><span
      >© {{ new Date().getFullYear() }} HeyAgent · Open source · AGPL-3.0</span
    >
    <div class="footer-links">
      <a :href="github" target="_blank" rel="noopener noreferrer">GitHub ↗</a
      ><a
        :href="`${github}#quick-start`"
        target="_blank"
        rel="noopener noreferrer"
        >Документация ↗</a
      >
    </div>
  </footer>
</template>
