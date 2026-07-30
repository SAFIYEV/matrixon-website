export type Locale = 'ru' | 'en'

export type Messages = {
  metaTitle: string
  metaDescription: string
  browserMetaTitle: string
  browserMetaDescription: string
  mixaMetaTitle: string
  mixaMetaDescription: string
  web3FrenMetaTitle: string
  web3FrenMetaDescription: string
  navProduct: string
  navApproach: string
  navPartners: string
  navFounder: string
  navContact: string
  navWrite: string
  navCall: string
  menuAria: string
  langSwitcherAria: string
  langRu: string
  langEn: string
  heroPitch: string
  heroEyebrow: string
  heroWords: readonly [string, string, string]
  heroCtaContact: string
  heroCtaExplore: string
  slideNavIntro: string
  slideNavProduct: string
  slideNavBuild: string
  slideNavPartners: string
  slideNavTeam: string
  slideNavContact: string
  productsTitle: string
  productsLead: string
  productHeyAgentName: string
  productHeyAgentText: string
  productHeyAgentCta: string
  productBrowserName: string
  productBrowserText: string
  productBrowserCta: string
  productMixaName: string
  productMixaText: string
  productMixaCta: string
  productWeb3FrenName: string
  productWeb3FrenText: string
  productWeb3FrenCta: string
  web3FrenBack: string
  web3FrenEyebrow: string
  web3FrenHeroTitle: string
  web3FrenHeroTagline: string
  web3FrenIntro: string
  web3FrenCtaChannel: string
  web3FrenAboutTitle: string
  web3FrenAboutText: string
  web3FrenAboutText2: string
  web3FrenFeaturesTitle: string
  web3FrenF1Title: string
  web3FrenF1Text: string
  web3FrenF2Title: string
  web3FrenF2Text: string
  web3FrenF3Title: string
  web3FrenF3Text: string
  web3FrenF4Title: string
  web3FrenF4Text: string
  web3FrenHowTitle: string
  web3FrenHowStep1: string
  web3FrenHowStep2: string
  web3FrenHowStep3: string
  web3FrenChannelTitle: string
  web3FrenChannelText: string
  web3FrenFinalTitle: string
  web3FrenFinalText: string
  mixaBack: string
  mixaEyebrow: string
  mixaHeroTitle: string
  mixaHeroTagline: string
  mixaIntro: string
  mixaCtaStudio: string
  mixaCtaTry: string
  mixaAboutTitle: string
  mixaAboutText: string
  mixaAboutAudience: string
  mixaServicesTitle: string
  mixaS1Title: string
  mixaS1Text: string
  mixaS2Title: string
  mixaS2Text: string
  mixaS3Title: string
  mixaS3Text: string
  mixaS4Title: string
  mixaS4Text: string
  mixaFeaturesTitle: string
  mixaF1: string
  mixaF2: string
  mixaF3: string
  mixaF4: string
  mixaF5: string
  mixaF6: string
  mixaF7: string
  mixaHowTitle: string
  mixaHowStep1: string
  mixaHowStep2: string
  mixaHowStep3: string
  mixaPricingTitle: string
  mixaPricingLead: string
  mixaPricingNote: string
  mixaPlanStart: string
  mixaPlanStartPrice: string
  mixaPlanStartCredits: string
  mixaPlanStartHint: string
  mixaPlanStandard: string
  mixaPlanStandardPrice: string
  mixaPlanStandardCredits: string
  mixaPlanStandardHint: string
  mixaPlanPro: string
  mixaPlanProPrice: string
  mixaPlanProCredits: string
  mixaPlanProHint: string
  mixaPlanPriority: string
  mixaPositioning: string
  mixaFinalTitle: string
  mixaFinalText: string
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
  founderLegal: string
  qualityTitle: string
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
  footerLinkProduct: string
  footerLinkApproach: string
  footerLinkPartners: string
  footerLinkFounder: string
  footerContact: string
  footerWhatsApp: string
  footerMediaH: string
  footerTelegramMatrixon: string
  footerInstagramMatrixon: string
  partnersTitle: string
  partnersLead: string
  partnerAwsName: string
  partnerAwsText: string
}

export const messages: Record<Locale, Messages> = {
  ru: {
    metaTitle: 'MATRIXON',
    metaDescription: 'MATRIXON — продукты на основе локального ИИ и автоматизации.',
    browserMetaTitle: 'Agentic Browser — локальный ИИ-браузер | MATRIXON',
    browserMetaDescription:
      'Open-source браузер с локальным ИИ на llama.cpp: приватность, агентный режим, чат и менеджер паролей на устройстве.',
    mixaMetaTitle: 'MIXA AI — AI-студия идентичности: аватары, образы и видео | MATRIXON',
    mixaMetaDescription:
      'Превращай фото в новые образы с сохранением лица. Машина времени, AI-аватары, beauty-стилист и короткие видео в одной студии.',
    web3FrenMetaTitle: 'web3 fren — персональный ИИ-агент новостей Web3 | MATRIXON',
    web3FrenMetaDescription:
      'ИИ-агент парсит новости из мира Web3 и публикует только самое новое и актуальное в канале web3 frens Central Asia.',
    navProduct: 'Продукты',
    navApproach: 'Подход',
    navPartners: 'Партнёры',
    navFounder: 'Команда',
    navContact: 'Контакты',
    navWrite: 'Написать',
    navCall: 'Позвонить',
    menuAria: 'Меню',
    langSwitcherAria: 'Язык интерфейса',
    langRu: 'RU',
    langEn: 'EN',
    heroPitch: 'Строим инструменты, которые работают у вас — без лишнего шума.',
    heroEyebrow: 'Open-source · AI products',
    heroWords: ['строим', 'выпускаем', 'масштабируем'] as const,
    heroCtaContact: 'Связаться',
    heroCtaExplore: 'Продукты',
    slideNavIntro: 'Главная',
    slideNavProduct: 'Продукты',
    slideNavBuild: 'Подход',
    slideNavPartners: 'Партнёры',
    slideNavTeam: 'Команда',
    slideNavContact: 'Контакты',
    productsTitle: 'Продукты',
    productsLead: 'То, что уже в работе. Список будет расти.',
    productHeyAgentName: 'HeyAgent',
    productHeyAgentText:
      'Open-source автономный компьютерный ИИ-агент, который выполняет задачи на вашем компьютере.',
    productHeyAgentCta: 'Открыть GitHub',
    productBrowserName: 'Agentic Browser',
    productBrowserText:
      'Open-source браузер с локальным ИИ: модель, чат, агентный режим и пароли остаются на устройстве.',
    productBrowserCta: 'Подробнее',
    productMixaName: 'MIXA AI',
    productMixaText:
      'AI-студия идентичности: аватары, образы и короткие видео с сохранением лица.',
    productMixaCta: 'Подробнее',
    productWeb3FrenName: 'web3 fren',
    productWeb3FrenText:
      'ИИ-агент парсит новости из мира Web3 и публикует только самое новое и актуальное — в канале web3 frens Central Asia.',
    productWeb3FrenCta: 'Подробнее',
    web3FrenBack: '← К MATRIXON',
    web3FrenEyebrow: 'MATRIXON · Central Asia',
    web3FrenHeroTitle: 'web3 fren',
    web3FrenHeroTagline: 'Ваш персональный ИИ-френ',
    web3FrenIntro:
      'Держит вас в курсе последних событий в Web3-индустрии: парсит новости, отбирает только новое и актуальное и публикует в Telegram.',
    web3FrenCtaChannel: 'Открыть канал',
    web3FrenAboutTitle: 'О продукте',
    web3FrenAboutText:
      'web3 fren — ИИ-агент для автоматической публикации новостей. Он следит за источниками в мире Web3, фильтрует шум и оставляет то, что действительно важно прямо сейчас.',
    web3FrenAboutText2:
      'Результат выходит в канале web3 frens Central Asia — свежие посты без ручной рутины, с фокусом на аудиторию Центральной Азии.',
    web3FrenFeaturesTitle: 'Что делает',
    web3FrenF1Title: 'Свежие новости',
    web3FrenF1Text: 'Собирает обновления из Web3-экосистемы и отсекает устаревшее.',
    web3FrenF2Title: 'Быстрые сводки',
    web3FrenF2Text: 'Короткие и понятные посты — суть события без лишней воды.',
    web3FrenF3Title: 'Умный ИИ-агент',
    web3FrenF3Text: 'Сам парсит, отбирает и готовит материалы к публикации.',
    web3FrenF4Title: 'Web3-экосистема',
    web3FrenF4Text: 'Фокус на индустрии: протоколы, рынки, комьюнити и события региона.',
    web3FrenHowTitle: 'Как это работает',
    web3FrenHowStep1: 'Агент мониторит источники новостей Web3',
    web3FrenHowStep2: 'Отбирает только свежее и релевантное',
    web3FrenHowStep3: 'Публикует посты в Telegram-канале web3 frens Central Asia',
    web3FrenChannelTitle: 'Где читать',
    web3FrenChannelText:
      'Все публикации — в открытом канале. Подпишитесь, чтобы получать актуальные сводки по Web3.',
    web3FrenFinalTitle: 'Следите за Web3 без шума',
    web3FrenFinalText: 'Откройте канал и читайте то, что агент уже отобрал для вас.',
    mixaBack: '← К MATRIXON',
    mixaEyebrow: 'MATRIXON · MIXA AI Studio',
    mixaHeroTitle: 'MIXA AI',
    mixaHeroTagline: 'AI-студия идентичности',
    mixaIntro:
      'Превращай своё фото в новые образы — будущее и прошлое, аватары для соцсетей, beauty-стилистику и короткие AI-видео. Лицо остаётся узнаваемым, меняется сцена, стиль и роль.',
    mixaCtaStudio: 'Открыть студию',
    mixaCtaTry: 'Попробовать бесплатно',
    mixaAboutTitle: 'О продукте',
    mixaAboutText:
      'MIXA AI — онлайн-студия визуальной идентичности. Загружаешь портрет, выбираешь сервис и стиль — получаешь фотореалистичный результат с сохранением лица.',
    mixaAboutAudience:
      'Подходит для личного бренда, контента в соцсетях, креативных экспериментов и примерки образов без фотосессии.',
    mixaServicesTitle: 'Сервисы',
    mixaS1Title: 'Машина времени',
    mixaS1Text:
      'Трансформации личности: через 10 или 20 лет, в прошлом, в спортивной форме, в исторической эпохе или в кастомном образе по запросу.',
    mixaS2Title: 'AI-аватары',
    mixaS2Text:
      'Аватары для профиля, LinkedIn, презентаций и личного бренда. Лицо узнаваемо, стиль — от делового до кинематографичного.',
    mixaS3Title: 'Fashion & Beauty',
    mixaS3Text:
      'Виртуальная beauty-студия: макияж, причёска, цветовые палитры и fashion-образ под лицо и настроение.',
    mixaS4Title: 'Video Studio',
    mixaS4Text:
      'Короткие ролики: текст → видео или анимация фото. 6 секунд, 1280×720. Без шаблонов — ваш сценарий.',
    mixaFeaturesTitle: 'Возможности',
    mixaF1: 'Сохранение лица при трансформации',
    mixaF2: 'Готовые шаблоны и свободный промпт',
    mixaF3: 'Сравнение «до / после»',
    mixaF4: 'Галерея и история генераций в облаке',
    mixaF5: 'Приватное хранение медиа',
    mixaF6: 'Интерфейс на русском и английском',
    mixaF7: 'Разовые пакеты кредитов — кредиты не сгорают',
    mixaHowTitle: 'Как это работает',
    mixaHowStep1: 'Загрузи портрет',
    mixaHowStep2: 'Выбери сервис и стиль — или опиши образ своими словами',
    mixaHowStep3: 'Скачай результат или используй его как основу для следующей генерации',
    mixaPricingTitle: 'Тарифы',
    mixaPricingLead:
      'Разовая покупка. 1 генерация изображения = 10 кредитов. Видео — отдельно (дороже по кредитам).',
    mixaPricingNote: 'Во всех пакетах: все режимы генерации и история в облаке.',
    mixaPlanStart: 'Старт',
    mixaPlanStartPrice: '$9',
    mixaPlanStartCredits: '350 кредитов',
    mixaPlanStartHint: '~35 генераций',
    mixaPlanStandard: 'Стандарт',
    mixaPlanStandardPrice: '$19',
    mixaPlanStandardCredits: '1 000 кредитов',
    mixaPlanStandardHint: '~100 генераций',
    mixaPlanPro: 'Про',
    mixaPlanProPrice: '$49',
    mixaPlanProCredits: '3 000 кредитов',
    mixaPlanProHint: '~300 генераций · лучшая цена за кредит',
    mixaPlanPriority: 'Приоритетная обработка',
    mixaPositioning: 'Студия, где твоё лицо остаётся твоим, а образ может быть любым.',
    mixaFinalTitle: 'Твоя студия уже ждёт',
    mixaFinalText: 'Зарегистрируйся, сохрани историю генераций и начни с первого образа.',
    browserBack: '← К MATRIXON',
    browserEyebrow: 'MATRIXON · Open Source',
    browserHeroTitle: 'Agentic Browser',
    browserIntro:
      'Браузер с полностью локальным ИИ: без облака, API-ключей и телеметрии. Модель, пароли и история — только на вашем устройстве.',
    browserCatchTitle: 'Модели',
    browserCatchText:
      'Из коробки — Llama 3 и Gemma. Можно подключить любую open-source LLM (Qwen, Mistral и др.): положите файл модели в папку.',
    browserFeaturesTitle: 'Возможности',
    browserF1Title: 'Приватность',
    browserF1Text: 'Без облака, API-ключей и телеметрии. Данные остаются на устройстве.',
    browserF2Title: 'Локальный ИИ',
    browserF2Text: 'Модель через llama.cpp — без подписок и лимитов. Сеть нужна только для веб-сёрфинга.',
    browserF3Title: 'Агентный режим',
    browserF3Text: 'Поиск в сети, анализ вкладок и извлечение данных за один цикл.',
    browserF4Title: 'AI Chat',
    browserF4Text: 'Многоходовые диалоги, вложения, LaTeX, экспорт и импорт истории.',
    browserF5Title: 'Менеджер паролей',
    browserF5Text: 'Шифрованное хранилище с автозаполнением и мастер-паролем.',
    browserHowTitle: 'Как работает',
    browserHowStep1: 'Запустите браузер.',
    browserHowStep2: 'Подняется локальный llama-server с выбранной моделью.',
    browserHowStep3: 'Введите запрос в чат — получите ответ.',
    browserHowSummary: 'Браузер, ИИ и пароли — в одном приложении.',
    browserLicenseTitle: 'Лицензия',
    browserLicenseText:
      'Проект open-source: изучайте код и вносите вклад. Коммерческое использование без разрешения запрещено.',
    browserGithubCta: 'GitHub',
    browserShotStart: 'Старт',
    browserShotChat: 'AI Chat',
    browserShotAgent: 'AgentPanel',
    browserShotSettings: 'Настройки',
    teamSectionTitle: 'Команда',
    teamSectionLead: 'За продуктами MATRIXON стоит команда под руководством CEO.',
    founderMaratName: 'Марат Сафиев',
    founderMaratBadge: 'CEO',
    founderMaratP1: 'Сафиев Марат — генеральный директор MATRIXON.',
    founderMaratWeb3Lead: 'Сооснователь медиаиздания',
    founderWeb3MediaName: 'web3 frens Central Asia',
    founderMaratActivities: 'Участвует в хакатонах, проводит мероприятия.',
    socialLinkedIn: 'LinkedIn',
    socialTelegram: 'Telegram',
    socialX: 'X',
    socialInstagram: 'Instagram',
    socialYoutube: 'YouTube',
    founderLegal: 'Компания инкорпорирована в Азербайджане как MMC MATRIXON.',
    qualityTitle: 'Как мы выпускаем',
    qualityLead: 'Стабильность важнее громких формулировок: мониторинг, поэтапные выкладки, понятные инструкции.',
    panelStability: 'Надёжность',
    panelStabilityVal: 'Мониторинг и алерты',
    panelDelivery: 'Выкладка',
    panelDeliveryVal: 'По шагам, с откатом',
    panelDocs: 'Операции',
    panelDocsVal: 'Актуальные runbook’и',
    ctaTitle: 'Связаться',
    ctaText: 'Напишите на почту или позвоните.',
    ctaEmail: 'Написать',
    ctaPhone: 'Позвонить',
    footerNavH: 'Разделы',
    footerCompanyH: 'Компания',
    footerLinkProduct: 'Продукты',
    footerLinkApproach: 'Подход',
    footerLinkPartners: 'Партнёры',
    footerLinkFounder: 'Команда',
    footerContact: 'Контакты',
    footerWhatsApp: 'WhatsApp',
    footerMediaH: 'Медиа',
    footerTelegramMatrixon: 'Telegram — MATRIXON',
    footerInstagramMatrixon: 'Instagram — @realmatrixon',
    partnersTitle: 'Партнёры',
    partnersLead: 'Инфраструктура, на которой опираемся при разработке и масштабировании.',
    partnerAwsName: 'Amazon Web Services',
    partnerAwsText: 'Облачная инфраструктура для разработки и масштабирования продуктов.',
  },
  en: {
    metaTitle: 'MATRIXON',
    metaDescription: 'MATRIXON — products built around local AI and automation.',
    browserMetaTitle: 'Agentic Browser — fully local AI browser | MATRIXON',
    browserMetaDescription:
      'Open-source browser with on-device AI via llama.cpp: privacy, agent mode, chat, and a local password manager.',
    mixaMetaTitle: 'MIXA AI — identity studio: avatars, looks & video | MATRIXON',
    mixaMetaDescription:
      'Turn a photo into new looks while keeping your face. Time machine, AI avatars, beauty stylist, and short videos in one studio.',
    web3FrenMetaTitle: 'web3 fren — personal AI agent for Web3 news | MATRIXON',
    web3FrenMetaDescription:
      'An AI agent that parses Web3 news and publishes only what’s new and relevant in the web3 frens Central Asia channel.',
    navProduct: 'Products',
    navApproach: 'Approach',
    navPartners: 'Partners',
    navFounder: 'Team',
    navContact: 'Contact',
    navWrite: 'Email',
    navCall: 'Call',
    menuAria: 'Menu',
    langSwitcherAria: 'Interface language',
    langRu: 'RU',
    langEn: 'EN',
    heroPitch: 'We build tools that run where you are — without the noise.',
    heroEyebrow: 'Open-source · AI products',
    heroWords: ['build', 'ship', 'scale'] as const,
    heroCtaContact: 'Get in touch',
    heroCtaExplore: 'Products',
    slideNavIntro: 'Home',
    slideNavProduct: 'Products',
    slideNavBuild: 'Approach',
    slideNavPartners: 'Partners',
    slideNavTeam: 'Team',
    slideNavContact: 'Contact',
    productsTitle: 'Products',
    productsLead: 'What we are shipping now. More will follow.',
    productHeyAgentName: 'HeyAgent',
    productHeyAgentText:
      'An open-source autonomous AI agent that carries out tasks on your computer.',
    productHeyAgentCta: 'View on GitHub',
    productBrowserName: 'Agentic Browser',
    productBrowserText:
      'Open-source browser with local AI — model, chat, agent mode, and passwords stay on your device.',
    productBrowserCta: 'Learn more',
    productMixaName: 'MIXA AI',
    productMixaText:
      'An AI identity studio: avatars, looks, and short videos that keep your face recognizable.',
    productMixaCta: 'Learn more',
    productWeb3FrenName: 'web3 fren',
    productWeb3FrenText:
      'An AI agent that parses Web3 news and publishes only what’s new and relevant — in the web3 frens Central Asia channel.',
    productWeb3FrenCta: 'Learn more',
    web3FrenBack: '← Back to MATRIXON',
    web3FrenEyebrow: 'MATRIXON · Central Asia',
    web3FrenHeroTitle: 'web3 fren',
    web3FrenHeroTagline: 'Your personal AI fren',
    web3FrenIntro:
      'Keeps you up to date on Web3: parses industry news, keeps only what’s new and relevant, and publishes to Telegram.',
    web3FrenCtaChannel: 'Open channel',
    web3FrenAboutTitle: 'About',
    web3FrenAboutText:
      'web3 fren is an AI agent for automatic news publishing. It watches Web3 sources, filters the noise, and keeps what matters right now.',
    web3FrenAboutText2:
      'Posts go live in the web3 frens Central Asia channel — fresh updates without manual busywork, focused on Central Asia’s audience.',
    web3FrenFeaturesTitle: 'What it does',
    web3FrenF1Title: 'Fresh news',
    web3FrenF1Text: 'Pulls updates from the Web3 ecosystem and drops what’s stale.',
    web3FrenF2Title: 'Quick summaries',
    web3FrenF2Text: 'Short, clear posts — the point of the story without the fluff.',
    web3FrenF3Title: 'Smart AI agent',
    web3FrenF3Text: 'Parses, selects, and prepares materials for publishing on its own.',
    web3FrenF4Title: 'Web3 ecosystem',
    web3FrenF4Text: 'Focused on the industry: protocols, markets, communities, and regional events.',
    web3FrenHowTitle: 'How it works',
    web3FrenHowStep1: 'The agent monitors Web3 news sources',
    web3FrenHowStep2: 'It keeps only what’s fresh and relevant',
    web3FrenHowStep3: 'It publishes posts to the web3 frens Central Asia Telegram channel',
    web3FrenChannelTitle: 'Where to read',
    web3FrenChannelText:
      'Everything goes to the public channel. Subscribe to get current Web3 briefings.',
    web3FrenFinalTitle: 'Follow Web3 without the noise',
    web3FrenFinalText: 'Open the channel and read what the agent already filtered for you.',
    mixaBack: '← Back to MATRIXON',
    mixaEyebrow: 'MATRIXON · MIXA AI Studio',
    mixaHeroTitle: 'MIXA AI',
    mixaHeroTagline: 'AI identity studio',
    mixaIntro:
      'Turn your photo into new looks — future and past, social avatars, beauty styling, and short AI videos. Your face stays recognizable; the scene, style, and role change.',
    mixaCtaStudio: 'Open studio',
    mixaCtaTry: 'Try for free',
    mixaAboutTitle: 'About',
    mixaAboutText:
      'MIXA AI is an online visual identity studio. Upload a portrait, pick a service and style — get a photoreal result that keeps your face.',
    mixaAboutAudience:
      'Built for personal brands, social content, creative experiments, and trying looks without a photoshoot.',
    mixaServicesTitle: 'Services',
    mixaS1Title: 'Time machine',
    mixaS1Text:
      'Identity transforms: 10 or 20 years ahead, the past, athletic form, a historical era, or any custom look you describe.',
    mixaS2Title: 'AI avatars',
    mixaS2Text:
      'Avatars for profiles, LinkedIn, decks, and personal branding. Face stays recognizable; style ranges from corporate to cinematic.',
    mixaS3Title: 'Fashion & Beauty',
    mixaS3Text:
      'A virtual beauty studio: makeup, hair, color palettes, and fashion looks matched to your face and mood.',
    mixaS4Title: 'Video Studio',
    mixaS4Text:
      'Short clips: text → video or photo animation. 6 seconds, 1280×720. No templates — your script.',
    mixaFeaturesTitle: 'Features',
    mixaF1: 'Face preserved through transforms',
    mixaF2: 'Ready templates and free-form prompts',
    mixaF3: 'Before / after comparison',
    mixaF4: 'Gallery and generation history in the cloud',
    mixaF5: 'Private media storage',
    mixaF6: 'Interface in Russian and English',
    mixaF7: 'One-time credit packs — credits do not expire',
    mixaHowTitle: 'How it works',
    mixaHowStep1: 'Upload a portrait',
    mixaHowStep2: 'Pick a service and style — or describe the look in your own words',
    mixaHowStep3: 'Download the result or use it as a base for the next generation',
    mixaPricingTitle: 'Pricing',
    mixaPricingLead:
      'One-time purchase. 1 image generation = 10 credits. Video is separate (more credits).',
    mixaPricingNote: 'Every pack includes all generation modes and cloud history.',
    mixaPlanStart: 'Start',
    mixaPlanStartPrice: '$9',
    mixaPlanStartCredits: '350 credits',
    mixaPlanStartHint: '~35 generations',
    mixaPlanStandard: 'Standard',
    mixaPlanStandardPrice: '$19',
    mixaPlanStandardCredits: '1,000 credits',
    mixaPlanStandardHint: '~100 generations',
    mixaPlanPro: 'Pro',
    mixaPlanProPrice: '$49',
    mixaPlanProCredits: '3,000 credits',
    mixaPlanProHint: '~300 generations · best price per credit',
    mixaPlanPriority: 'Priority processing',
    mixaPositioning: 'A studio where your face stays yours — and the look can be anything.',
    mixaFinalTitle: 'Your studio is ready',
    mixaFinalText: 'Sign up, keep your generation history, and start with the first look.',
    browserBack: '← Back to MATRIXON',
    browserEyebrow: 'MATRIXON · Open Source',
    browserHeroTitle: 'Agentic Browser',
    browserIntro:
      'A browser with fully local AI — no cloud, no API keys, no telemetry. Your model, passwords, and history stay on device.',
    browserCatchTitle: 'Models',
    browserCatchText:
      'Works with Llama 3 and Gemma out of the box. Drop in any open-source LLM (Qwen, Mistral, etc.).',
    browserFeaturesTitle: 'Features',
    browserF1Title: 'Privacy',
    browserF1Text: 'No cloud, no API keys, no telemetry. Data stays on your device.',
    browserF2Title: 'Local AI',
    browserF2Text: 'Runs via llama.cpp — no subscriptions or rate limits. Internet is only for browsing.',
    browserF3Title: 'Agent mode',
    browserF3Text: 'Search the web, analyze tabs, and extract data in one cycle.',
    browserF4Title: 'AI Chat',
    browserF4Text: 'Multi-turn chat, attachments, LaTeX, history export and import.',
    browserF5Title: 'Password manager',
    browserF5Text: 'Encrypted storage with autofill and a master password.',
    browserHowTitle: 'How it works',
    browserHowStep1: 'Launch the browser.',
    browserHowStep2: 'A local llama-server starts with your selected model.',
    browserHowStep3: 'Type a prompt — get an answer.',
    browserHowSummary: 'Browser, AI, and passwords in one app.',
    browserLicenseTitle: 'License',
    browserLicenseText:
      'Fully open source — explore and contribute. Commercial use without prior permission is prohibited.',
    browserGithubCta: 'GitHub',
    browserShotStart: 'Start page',
    browserShotChat: 'AI Chat',
    browserShotAgent: 'AgentPanel',
    browserShotSettings: 'Settings',
    teamSectionTitle: 'Team',
    teamSectionLead: 'MATRIXON is led by its CEO and the team behind the products.',
    founderMaratName: 'Marat Safiyev',
    founderMaratBadge: 'CEO',
    founderMaratP1: 'Marat Safiyev is the Chief Executive Officer of MATRIXON.',
    founderMaratWeb3Lead: 'Co-founder of the media publication',
    founderWeb3MediaName: 'web3 frens Central Asia',
    founderMaratActivities: 'Takes part in hackathons and organizes events.',
    socialLinkedIn: 'LinkedIn',
    socialTelegram: 'Telegram',
    socialX: 'X',
    socialInstagram: 'Instagram',
    socialYoutube: 'YouTube',
    founderLegal: 'The company is incorporated in Azerbaijan as MMC MATRIXON.',
    qualityTitle: 'How we ship',
    qualityLead: 'Stability over slogans: observability, staged rollouts, and clear runbooks.',
    panelStability: 'Reliability',
    panelStabilityVal: 'Monitoring & alerts',
    panelDelivery: 'Rollouts',
    panelDeliveryVal: 'Staged, with rollback',
    panelDocs: 'Operations',
    panelDocsVal: 'Current runbooks',
    ctaTitle: 'Contact',
    ctaText: 'Email or call — we respond directly.',
    ctaEmail: 'Email',
    ctaPhone: 'Call',
    footerNavH: 'Sections',
    footerCompanyH: 'Company',
    footerLinkProduct: 'Products',
    footerLinkApproach: 'Approach',
    footerLinkPartners: 'Partners',
    footerLinkFounder: 'Team',
    footerContact: 'Contact',
    footerWhatsApp: 'WhatsApp',
    footerMediaH: 'Media',
    footerTelegramMatrixon: 'Telegram — MATRIXON',
    footerInstagramMatrixon: 'Instagram — @realmatrixon',
    partnersTitle: 'Partners',
    partnersLead: 'Infrastructure we rely on to build and scale.',
    partnerAwsName: 'Amazon Web Services',
    partnerAwsText: 'Cloud infrastructure for developing and scaling our products.',
  },
}
