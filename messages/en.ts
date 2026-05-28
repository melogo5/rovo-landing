import type { Messages } from "./ru";

export const en: Messages = {
  meta: {
    title: "Rovo — learn volleyball in 10 minutes a day",
    description:
      "Personalised training plan, skill tree, and short lessons. Learn volleyball at your own pace.",
  },
  nav: {
    cta: "I want to try",
  },
  hero: {
    kicker: "Beta · coming to App Store and Google Play",
    h1: {
      line1: "Learn to",
      line1Accent: "attack.",
      line2: "Learn to",
      line2Accent: "receive.",
      line3: "Start",
      line3Strike: "winning.",
    },
    sub: "Just 10 minutes a day. Skill tree, short lessons, real progress.",
    cta: "I want to try",
    ctaSecondary: "How it works",
    metaBeta: "Open beta",
    metaTime: "10 minutes a day",
    metaPlatform: "iOS · Android",
    floatStreak: "7 day streak",
    floatStreakSub: "don't break it!",
    floatXp: "+30 XP",
    floatXpSub: "lesson complete",
  },
  problem: {
    kicker: "Sound familiar?",
    h2: "You step on the court — and something's off.",
    lead: "We're building Rovo for two people. One of them might be you.",
    cardA: {
      tag: "Beginner",
      quote:
        '"I step on the court and don\'t know where to stand. The ball flies — and I\'m always a second late."',
      hint: "Needs the basics: stance, footwork, first touches.",
    },
    cardB: {
      tag: "Club player",
      quote:
        '"I\'ve played for a year, but my attack still won\'t click. I watch YouTube — nothing changes."',
      hint: "Needs structure: a real path and feedback, not another video.",
    },
  },
  how: {
    kicker: "How it works",
    h2: "Three steps — and the court starts making sense.",
    step1: {
      title: "Choose your path",
      desc: "Beginner, attacker, libero or beach player — the skill tree adapts to you.",
    },
    step2: {
      title: "Take short lessons",
      desc: "Video, explanation, task. 10 minutes — and you're one step closer to the court.",
    },
    step3: {
      title: "Track your progress",
      desc: "XP, levels, daily streaks. Visible progress is what keeps you coming back.",
    },
  },
  diff: {
    kicker: "What makes us different",
    h2a: "Short lessons. Skill tree. ",
    h2b: "Real progress.",
    p: 'Other apps hand you a catalog of 50 videos and say "watch." We give you a path — and walk you through it, step by step.',
    checkItems: [
      "One next step — always clear what to do",
      "10-minute lessons — fits before practice",
      "Real on-court tasks, not just theory",
    ],
    crossItems: [
      "Endless video library",
      '10-hour "everything at once" courses',
    ],
  },
  programs: {
    kicker: "Programs",
    h2: "Pick where to start.",
    lead: "Each program is a complete path. Take one or combine several.",
    metaTime: "~10 min a day",
    popular: "popular",
    items: [
      {
        title: "Beginner",
        desc: "From zero to confident play. Stance, passes, first serve.",
        days: "30 days",
        popular: true,
      },
      {
        title: "Solid reception",
        desc: "Serve receive, positioning, reading the opponent's attack.",
        days: "14 days",
        popular: false,
      },
      {
        title: "Attacker",
        desc: "Approach, swing, line and angle. Become a threat at the net.",
        days: "30 days",
        popular: false,
      },
      {
        title: "Beach volleyball",
        desc: "2v2 tactics, sand, wind, hand signals. A complete separate course.",
        days: "full course",
        popular: false,
      },
    ],
  },
  finalCta: {
    kicker: "We're building right now",
    h2: "Would you use an app like this?",
    p: "We're building Rovo right now. Answer one question — it helps us make it better.",
    btn: "Answer one question",
    mini: "one minute — no signup",
  },
  survey: {
    kicker: "One question",
    question: "Would you use an app like this?",
    answers: ["Yes, definitely", "Depends on price", "Not sure"],
    emailPlaceholder: "your email (optional)",
    emailHint: "to notify you at launch",
    submit: "Submit",
    success: "Thank you! We'll let you know when we launch.",
    error: "Something went wrong. Please try again.",
  },
  footer: {
    links: {
      about: "About",
      contact: "Contact",
      telegram: "Telegram",
    },
    copy: "© 2026 · Made with love for volleyball",
  },
};
