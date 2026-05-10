export type Locale = 'ru' | 'en'

export type Messages = {
  metaTitle: string
  metaDescription: string
  colearnMetaTitle: string
  colearnMetaDescription: string
  navVectors: string
  navFounder: string
  navContact: string
  navProducts: string
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
  edtechText: string
  edtechMore: string
  legalTitle: string
  legalText: string
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
  footerLinkProducts: string
  footerContact: string
  footerWhatsApp: string
  footerMediaH: string
  footerTelegramMatrixon: string
  colearnTagline: string
  colearnVisionTitle: string
  colearnVisionLead: string
  colearnVisionBody: string
  colearnF1Title: string
  colearnF1Text: string
  colearnF2Title: string
  colearnF2Text: string
  colearnF3Title: string
  colearnF3Text: string
  colearnF4Title: string
  colearnF4Text: string
  colearnBack: string
}

export const messages: Record<Locale, Messages> = {
  ru: {
    metaTitle: 'MATRIXON',
    metaDescription: 'MATRIXON',
    colearnMetaTitle: 'CoLearn — обучение с ИИ | MATRIXON',
    colearnMetaDescription:
      'CoLearn: платформа нового поколения — ИИ в каждом уроке, сообщество и признание прогресса.',
    navVectors: 'Направления',
    navFounder: 'Команда',
    navContact: 'Контакты',
    navProducts: 'Продукты',
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
      'Запускаем собственные продукты в EdTech и LegalTech — узкий фокус, чтобы быстрее проверять гипотезы и поддерживать качество.',
    edtechText:
      'Обучайтесь интересно, доступно и эффективно с ИИ. CoLearn — наш продукт в EdTech.',
    edtechMore: 'Подробнее о CoLearn',
    legalTitle: 'LegalTech',
    legalText:
      'Документы, согласования и сроки. Инструменты в этой зоне должны быть предсказуемыми и с нормальной историей изменений.',
    teamSectionTitle: 'Команда',
    teamSectionLead:
      'Два сооснователя на одном уровне — без «главного сверху». Роли разные, ответственность за продукт общая.',
    founderMaratName: 'Марат Сафиев',
    founderMaratBadge: 'Сооснователь · CEO · CTO',
    founderMaratP1:
      'Сафиев Марат (Safiyev Marat) — сооснователь MATRIXON. Совмещает позиции генерального директора (CEO) и технического директора (CTO).',
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
    footerLinkProducts: 'Продукты',
    footerContact: 'Контакты',
    footerWhatsApp: 'WhatsApp',
    footerMediaH: 'Медиа',
    footerTelegramMatrixon: 'Telegram — MATRIXON',
    footerBottomPrefix: 'Связь:',
    colearnTagline:
      'Платформа нового поколения: ИИ в каждом уроке, живое сообщество и признание вашего прогресса.',
    colearnVisionTitle: 'Видение продукта',
    colearnVisionLead: 'Будущее обучения — персональный ИИ для каждого.',
    colearnVisionBody:
      'CoLearn переосмысливает онлайн-обучение с помощью ИИ — чтобы каждый шаг подстраивался под вас.',
    colearnF1Title: 'Курсы и проверки под вас',
    colearnF1Text:
      'ИИ собирает курсы и задания нужной сложности — вы растёте в своём темпе.',
    colearnF2Title: 'ИИ-наставник в каждом уроке',
    colearnF2Text:
      'Персональный наставник рядом на каждом занятии: спросите, повторите, углубитесь.',
    colearnF3Title: 'Сообщество, которое связывает',
    colearnF3Text:
      'Комьюнити и образовательный нетворкинг — вы не учитесь в одиночку.',
    colearnF4Title: 'Достижения, которыми можно делиться',
    colearnF4Text:
      'Сертификаты и награды, которые отражают реальный прогресс.',
    colearnBack: '← К MATRIXON',
  },
  en: {
    metaTitle: 'MATRIXON',
    metaDescription: 'MATRIXON',
    colearnMetaTitle: 'CoLearn — AI-native learning | MATRIXON',
    colearnMetaDescription:
      'CoLearn: a next-generation platform — AI in every lesson, community, and recognition for your progress.',
    navVectors: 'Focus',
    navFounder: 'Team',
    navContact: 'Contact',
    navProducts: 'Products',
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
      'We build our own products in EdTech and LegalTech — a narrow focus so we can validate ideas faster and keep quality bar high.',
    edtechText:
      'Learn in a way that is engaging, accessible, and productive — with AI. CoLearn is our EdTech product.',
    edtechMore: 'About CoLearn',
    legalTitle: 'LegalTech',
    legalText: 'comming soon',
    teamSectionTitle: 'Team',
    teamSectionLead:
      'Two co-founders side by side — no “single face” hierarchy. Different roles, shared ownership of the product.',
    founderMaratName: 'Marat Safiyev',
    founderMaratBadge: 'Co-founder · CEO · CTO',
    founderMaratP1:
      'Marat Safiyev (Safiyev Marat) is a co-founder of MATRIXON. He serves as Chief Executive Officer (CEO) and Chief Technology Officer (CTO).',
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
    footerLinkProducts: 'Products',
    footerContact: 'Contact',
    footerWhatsApp: 'WhatsApp',
    footerMediaH: 'Media',
    footerTelegramMatrixon: 'Telegram — MATRIXON',
    colearnTagline:
      'A next-generation platform: AI in every lesson, a live community, and recognition for your progress.',
    colearnVisionTitle: 'Product vision',
    colearnVisionLead: 'The future of learning is a personal AI for everyone.',
    colearnVisionBody:
      'CoLearn reimagines online learning with AI — so every step fits you.',
    colearnF1Title: 'Courses & quizzes that fit you',
    colearnF1Text:
      'Our AI builds courses and quizzes at any difficulty — you grow at your pace.',
    colearnF2Title: 'Your AI mentor in every lesson',
    colearnF2Text:
      'A personal AI mentor walks with you in every lesson — ask, repeat, go deeper.',
    colearnF3Title: 'Community that connects',
    colearnF3Text:
      'Community and educational networking — you never learn alone.',
    colearnF4Title: 'Proof you can share',
    colearnF4Text:
      'Beautiful certificates and achievements that celebrate real progress.',
    colearnBack: '← Back to MATRIXON',
  },
}
