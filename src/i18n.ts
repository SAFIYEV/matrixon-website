export type Locale = 'ru' | 'en'

export type Messages = {
  metaTitle: string
  metaDescription: string
  browserMetaTitle: string
  browserMetaDescription: string
  navVectors: string
  navFounder: string
  navContact: string
  navPartners: string
  navWrite: string
  navCall: string
  menuAria: string
  langSwitcherAria: string
  langRu: string
  langEn: string
  heroPitch: string
  heroCtaContact: string
  heroCtaAbout: string
  vectorsTitleBefore: string
  vectorsTitleAccent: string
  vectorsLead: string
  browserProduct: string
  browserCardText: string
  browserMore: string
  browserBack: string
  browserEyebrow: string
  browserHeroTitle: string
  browserIntro: string
  browserCatchTitle: string
  browserCatchText: string
  browserFeaturesTitle: string
  browserF1Title: string
  browserF1Text: string
  browserF2Title: string
  browserF2Text: string
  browserF3Title: string
  browserF3Text: string
  browserF4Title: string
  browserF4Text: string
  browserF5Title: string
  browserF5Text: string
  browserHowTitle: string
  browserHowStep1: string
  browserHowStep2: string
  browserHowStep3: string
  browserHowSummary: string
  browserLicenseTitle: string
  browserLicenseText: string
  browserGithubCta: string
  browserShotStart: string
  browserShotChat: string
  browserShotAgent: string
  browserShotSettings: string
  teamSectionTitle: string
  teamSectionLead: string
  founderMaratName: string
  founderMaratBadge: string
  founderMaratP1: string
  founderMaratWeb3Lead: string
  founderWeb3MediaName: string
  founderMaratActivities: string
  socialLinkedIn: string
  socialTelegram: string
  socialX: string
  socialInstagram: string
  socialYoutube: string
  founderIbragimName: string
  founderIbragimBadge: string
  founderIbragimBio: string
  founderIbragimLinkedInLabel: string
  founderLegal: string
  qualityTitleBefore: string
  qualityTitleAccent: string
  qualityLead: string
  panelStability: string
  panelStabilityVal: string
  panelDelivery: string
  panelDeliveryVal: string
  panelDocs: string
  panelDocsVal: string
  ctaTitle: string
  ctaText: string
  ctaEmail: string
  ctaPhone: string
  footerNavH: string
  footerCompanyH: string
  footerLinkVectors: string
  footerLinkFounder: string
  footerLinkPartners: string
  footerContact: string
  footerWhatsApp: string
  footerMediaH: string
  footerTelegramMatrixon: string
  partnersTitleBefore: string
  partnersTitleAccent: string
  partnersLead: string
  partnerAwsName: string
  partnerAwsText: string
}

export const messages: Record<Locale, Messages> = {
  ru: {
    metaTitle: 'MATRIXON',
    metaDescription: 'MATRIXON',
    browserMetaTitle: 'MATRIXON Agentic Browser — локальный ИИ-браузер | MATRIXON',
    browserMetaDescription:
      'Open-source браузер с локальным ИИ на llama.cpp: приватность, AgentPanel, чат и менеджер паролей на вашем устройстве.',
    navVectors: 'Направления',
    navFounder: 'Команда',
    navContact: 'Контакты',
    navPartners: 'Партнёры',
    navWrite: 'Написать',
    navCall: 'Позвонить',
    menuAria: 'Меню',
    langSwitcherAria: 'Язык интерфейса',
    langRu: 'RU',
    langEn: 'EN',
    heroPitch: 'Мы не следуем трендам, мы их создаём.',
    heroCtaContact: 'Связаться',
    heroCtaAbout: 'Команда',
    vectorsTitleBefore: 'Что мы делаем',
    vectorsTitleAccent: 'сейчас',
    vectorsLead:
      'Запускаем собственные open-source продукты — узкий фокус, чтобы быстрее проверять гипотезы и поддерживать качество.',
    browserProduct: 'MATRIXON Agentic Browser',
    browserCardText:
      'Open-source браузер с полностью локальным ИИ: без облака, API-ключей и телеметрии — модель, пароли и история только на вашем устройстве.',
    browserMore: 'Подробнее о браузере',
    browserBack: '← К MATRIXON',
    browserEyebrow: 'MATRIXON · Open Source',
    browserHeroTitle: 'MATRIXON Agentic Browser — браузер нового поколения с полностью локальным ИИ',
    browserIntro:
      'Пока все спорят о приватности облачного ИИ, мы сделали продукт, который решает это раз и навсегда: open-source браузер, где ИИ, менеджер паролей и поиск работают целиком на вашем железе.',
    browserCatchTitle: 'В чём суть?',
    browserCatchText:
      'Вы не привязаны к одному вендору. Из коробки — Llama 3 и Gemma, но можно подключить любую open-source LLM (Qwen, Mistral и др.): положите файл модели в папку — и готово.',
    browserFeaturesTitle: 'Ключевые возможности',
    browserF1Title: 'Абсолютная приватность',
    browserF1Text:
      'Без облака, API-ключей и телеметрии. Чаты, пароли и история просмотра остаются только на вашем устройстве.',
    browserF2Title: '100% локальный ИИ',
    browserF2Text:
      'Модель работает на компьютере через llama.cpp — без подписок и лимитов. Интернет нужен только для самого веб-сёрфинга.',
    browserF3Title: 'Агентный режим',
    browserF3Text:
      'ИИ не только отвечает на вопросы — сам ищет в сети, анализирует открытые вкладки и извлекает данные за один цикл.',
    browserF4Title: 'Продвинутый AI Chat',
    browserF4Text:
      'Полноценный чат: многоходовые диалоги, вложения файлов, рендер LaTeX, экспорт и импорт истории.',
    browserF5Title: 'Локальный менеджер паролей',
    browserF5Text:
      'Шифрованное хранилище с автозаполнением и мастер-паролем. Без облачной синхронизации.',
    browserHowTitle: 'Как это работает?',
    browserHowStep1: 'Запустите браузер.',
    browserHowStep2: 'Автоматически поднимется локальный llama-server с выбранной моделью.',
    browserHowStep3: 'Введите запрос в чат — получите ответ.',
    browserHowSummary:
      'Всё в одном: больше не нужно переключаться между браузером, платными AI-чатами и сторонними менеджерами паролей.',
    browserLicenseTitle: 'Open Source и лицензия',
    browserLicenseText:
      'Проект полностью open-source — изучайте код, тестируйте и вносите вклад. Коммерческое использование без предварительного разрешения запрещено: продукт создан как независимое решение для пользователей и сообщества.',
    browserGithubCta: 'Репозиторий на GitHub',
    browserShotStart: 'Стартовая страница',
    browserShotChat: 'AI Chat',
    browserShotAgent: 'AgentPanel',
    browserShotSettings: 'Настройки',
    teamSectionTitle: 'Команда',
    teamSectionLead:
      'За продуктами MATRIXON стоит команда, которую возглавляет генеральный директор.',
    founderMaratName: 'Марат Сафиев',
    founderMaratBadge: 'Генеральный директор (CEO)',
    founderMaratP1:
      'Сафиев Марат (Safiyev Marat) — 17-летний генеральный директор (CEO) MATRIXON.',
    founderMaratWeb3Lead: 'Сооснователь медиаиздания',
    founderWeb3MediaName: 'web3 frens Central Asia',
    founderMaratActivities:
      'Принимает участие в хакатонах, проводит мероприятия.',
    socialLinkedIn: 'LinkedIn',
    socialTelegram: 'Telegram',
    socialX: 'X',
    socialInstagram: 'Instagram',
    socialYoutube: 'YouTube',
    founderIbragimName: 'Ибрагим Гасымов',
    founderIbragimBadge: 'Сооснователь · CEO · CTO',
    founderIbragimBio:
      'Сооснователь MATRIXON (Ibragim Gasymov). Совмещает позиции генерального директора (CEO) и технического директора (CTO). Принимает участие в хакатонах.',
    founderIbragimLinkedInLabel: 'LinkedIn',
    founderLegal:
      'Компания инкорпорирована в Азербайджане как MMC MATRIXON.',
    qualityTitleBefore: 'Релизы',
    qualityTitleAccent: 'без громких обещаний',
    qualityLead:
      'Для нас важнее стабильность: наблюдаемость, поэтапные выкладки и понятные инструкции для тех, кто сопровождает продукт.',
    panelStability: 'Надёжность',
    panelStabilityVal: 'Мониторинг и алерты',
    panelDelivery: 'Выкладка',
    panelDeliveryVal: 'По шагам, с откатом',
    panelDocs: 'Операции',
    panelDocsVal: 'Актуальные runbook’и',
    ctaTitle: 'Вопросы или идея для совместной работы?',
    ctaText: 'Напишите на почту или позвоните — ответим по существу.',
    ctaEmail: 'Написать',
    ctaPhone: 'Позвонить',
    footerNavH: 'Разделы',
    footerCompanyH: 'Компания',
    footerLinkVectors: 'Направления',
    footerLinkFounder: 'Команда',
    footerLinkPartners: 'Партнёры',
    footerContact: 'Контакты',
    footerWhatsApp: 'WhatsApp',
    footerMediaH: 'Медиа',
    footerTelegramMatrixon: 'Telegram — MATRIXON',
    partnersTitleBefore: 'Наши',
    partnersTitleAccent: 'партнёры',
    partnersLead:
      'Мы работаем с лидерами индустрии, чтобы создавать надёжные и масштабируемые решения.',
    partnerAwsName: 'Amazon Web Services',
    partnerAwsText:
      'Облачная инфраструктура и сервисы для разработки и масштабирования наших продуктов.',
  },
  en: {
    metaTitle: 'MATRIXON',
    metaDescription: 'MATRIXON',
    browserMetaTitle: 'MATRIXON Agentic Browser — fully local AI browser | MATRIXON',
    browserMetaDescription:
      'Open-source browser with on-device AI via llama.cpp: privacy, AgentPanel, chat, and a local password manager.',
    navVectors: 'Focus',
    navFounder: 'Team',
    navContact: 'Contact',
    navPartners: 'Partners',
    navWrite: 'Email',
    navCall: 'Call',
    menuAria: 'Menu',
    langSwitcherAria: 'Interface language',
    langRu: 'RU',
    langEn: 'EN',
    heroPitch: "We don't follow trends — we create them.",
    heroCtaContact: 'Get in touch',
    heroCtaAbout: 'Team',
    vectorsTitleBefore: 'What we ship',
    vectorsTitleAccent: 'today',
    vectorsLead:
      'We build our own open-source products — a narrow focus so we can validate ideas faster and keep quality bar high.',
    browserProduct: 'MATRIXON Agentic Browser',
    browserCardText:
      'Open-source browser with fully local AI — no cloud, no API keys, no telemetry. Your model, passwords, and history stay on your device.',
    browserMore: 'About the browser',
    browserBack: '← Back to MATRIXON',
    browserEyebrow: 'MATRIXON · Open Source',
    browserHeroTitle: 'Meet MATRIXON Agentic Browser — the next-gen fully local AI browser',
    browserIntro:
      'While everyone debates data privacy in cloud-based AI, we built a product that solves it once and for all: an open-source browser where AI, the password manager, and search run entirely on your own hardware.',
    browserCatchTitle: "What's the catch?",
    browserCatchText:
      'You are not locked into any vendor. Works out of the box with Llama 3 and Gemma, but you can run any open-source LLM (Qwen, Mistral, etc.) — drop the model file into the folder and you are good to go.',
    browserFeaturesTitle: 'Key features',
    browserF1Title: 'Absolute privacy',
    browserF1Text:
      'No cloud, no API keys, zero telemetry. Chats, passwords, and browsing history stay strictly on your device.',
    browserF2Title: '100% local AI',
    browserF2Text:
      'The model runs on your computer via llama.cpp — no subscriptions or rate limits. Internet is only required for actual web browsing.',
    browserF3Title: 'Agentic AI mode',
    browserF3Text:
      'AI does not just answer questions — it can search the web, analyze open tabs, and extract data in a single execution cycle.',
    browserF4Title: 'Advanced AI Chat',
    browserF4Text:
      'Full chat UI with multi-turn dialogues, file attachments, LaTeX rendering, and history export/import.',
    browserF5Title: 'Local password manager',
    browserF5Text:
      'Encrypted storage with autofill, protected by your master password. No cloud sync.',
    browserHowTitle: 'How it works',
    browserHowStep1: 'Launch the browser.',
    browserHowStep2: 'It automatically starts a local llama-server with your selected model.',
    browserHowStep3: 'Type your prompt in the chat — get your answer.',
    browserHowSummary:
      'All-in-one: no more switching between browsers, paid AI chats, and third-party password managers.',
    browserLicenseTitle: 'Open source & licensing',
    browserLicenseText:
      'The project is fully open source — explore the code, test it, and contribute. Commercial use without prior permission is prohibited; this was built as an independent solution for users and the community.',
    browserGithubCta: 'View on GitHub',
    browserShotStart: 'Start page',
    browserShotChat: 'AI Chat',
    browserShotAgent: 'AgentPanel',
    browserShotSettings: 'Settings',
    teamSectionTitle: 'Team',
    teamSectionLead:
      'MATRIXON is led by its CEO and the team behind our products.',
    founderMaratName: 'Marat Safiyev',
    founderMaratBadge: 'Chief Executive Officer (CEO)',
    founderMaratP1:
      'Marat Safiyev (Safiyev Marat) is the 17-year-old Chief Executive Officer (CEO) of MATRIXON.',
    founderMaratWeb3Lead: 'Co-founder of the media publication',
    founderWeb3MediaName: 'web3 frens Central Asia',
    founderMaratActivities:
      'He takes part in hackathons and organizes events.',
    socialLinkedIn: 'LinkedIn',
    socialTelegram: 'Telegram',
    socialX: 'X',
    socialInstagram: 'Instagram',
    socialYoutube: 'YouTube',
    founderIbragimName: 'Ibragim Gasymov',
    founderIbragimBadge: 'Co-founder · CEO · CTO',
    founderIbragimBio:
      'Co-founder of MATRIXON (Ibragim Gasymov). He serves as Chief Executive Officer (CEO) and Chief Technology Officer (CTO). He takes part in hackathons.',
    founderIbragimLinkedInLabel: 'LinkedIn',
    founderLegal:
      'The company is incorporated in Azerbaijan as MMC MATRIXON.',
    qualityTitleBefore: 'Shipping',
    qualityTitleAccent: 'without the hype',
    qualityLead:
      'Stability matters more than slogans: observability, staged rollouts, and up-to-date runbooks for the team running the product.',
    panelStability: 'Reliability',
    panelStabilityVal: 'Monitoring & alerts',
    panelDelivery: 'Rollouts',
    panelDeliveryVal: 'Staged, with rollback',
    panelDocs: 'Operations',
    panelDocsVal: 'Current runbooks',
    ctaTitle: 'Questions or a collaboration idea?',
    ctaText: 'Email or call — we will respond directly.',
    ctaEmail: 'Email',
    ctaPhone: 'Call',
    footerNavH: 'Sections',
    footerCompanyH: 'Company',
    footerLinkVectors: 'Focus',
    footerLinkFounder: 'Team',
    footerLinkPartners: 'Partners',
    footerContact: 'Contact',
    footerWhatsApp: 'WhatsApp',
    footerMediaH: 'Media',
    footerTelegramMatrixon: 'Telegram — MATRIXON',
    partnersTitleBefore: 'Our',
    partnersTitleAccent: 'partners',
    partnersLead:
      'We work with industry leaders to build reliable, scalable solutions.',
    partnerAwsName: 'Amazon Web Services',
    partnerAwsText:
      'Cloud infrastructure and services to develop and scale our products.',
  },
}
