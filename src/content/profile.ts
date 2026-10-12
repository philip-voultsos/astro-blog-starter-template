export const profile = {
  name: 'Philip Voultsos',
  role: 'Sixth-form student',
  school: 'Byron College',
  location: 'Athens, Greece',
  email: 'philip@voultsos.com',
  linkedin: 'https://www.linkedin.com/in/voultsosp/',
  outsideSchool: 'Linux desktop environments, mechanical watch movements, and legacy media hardware.',
  research: {
    question: 'To what extent did the 2008–2024 polycrisis affect the popularity of right-wing populism in Britain?',
    summary: 'The project compares economic shocks and political developments with changes in public support during this period.'
  },
  background: [
    {
      index: '01',
      label: 'Academic direction',
      title: 'Politics, economics, and history',
      paragraphs: [
        'I study Mathematics, Economics, History, and Politics at Byron College. I intend to read Philosophy, Politics and Economics at university.',
        'My interests are political economy, political theory, and modern British history. I compare political developments with their economic and historical context, then assess explanations against evidence. I am particularly interested in how institutions shape incentives and how economic disruption affects political support.'
      ]
    },
    {
      index: '02',
      label: 'Research',
      title: 'The Extended Project Qualification',
      paragraphs: [
        'My project asks how the polycrisis between 2008 and 2024 affected the popularity of right-wing populism in Britain. It examines the relationship between economic shocks, political events, and changes in public support.'
      ]
    },
    {
      index: '03',
      label: 'Model United Nations',
      title: 'Research, instruction, and debate',
      paragraphs: [
        'As Secretary-General and Student Head of the Organising Committee for Byron College’s International MUN Conference, I coordinate conference planning and academic materials. I also direct and teach the school MUN club, preparing weekly sessions on procedure, policy analysis, resolution drafting, and public speaking.',
        'As a committee chair and student officer at local and international conferences, I guide debate and prepare study guides and research reports. The roles involve source-based research, structured argument, and event organisation.'
      ]
    },
    {
      index: '04',
      label: 'Outside school',
      title: 'Technical interests',
      paragraphs: [
        'I configure Linux desktop environments, study mechanical watch movements, and maintain legacy media hardware. I am interested in system design, mechanical function, and maintenance.'
      ]
    }
  ]
} as const;

export const homeCopy = {
  disciplineLine: 'Politics, economics, history.',
  introduction: 'I study how political ideas become institutions, how institutions shape economic outcomes, and how history helps explain political change. I intend to read Philosophy, Politics and Economics.',
  focusTitle: 'Questions across disciplines',
  workTitle: 'Research and service',
  studiesTitle: 'A quantitative and historical foundation',
  studiesSummary: `I study Mathematics, Economics, History, and Politics at ${profile.school}.`,
  contactTitle: 'Further information',
  cvAction: 'Open academic CV'
} as const;

export const backgroundCopy = {
  metaDescription: 'Academic interests, research approach, current studies, and selected Model UN work.',
  titleLead: 'Institutions, ideas,',
  titleEmphasis: 'and political change.',
  lede: `I am a ${profile.role} at ${profile.school} in ${profile.location}. My academic interests centre on the relationship between political institutions, economic life, and history.`,
  cvNote: 'The CV records my education, conference responsibilities, awards, and other academic experience.'
} as const;

export const academicFocus = [
  {
    title: 'Political economy',
    description: 'How institutions, incentives, and policy choices shape markets and the distribution of economic outcomes.'
  },
  {
    title: 'Political thought and history',
    description: 'How political ideas and historical events influence institutions, public debate, and political movements.'
  },
  {
    title: 'Research and argument',
    description: 'Comparing claims with historical context and economic evidence; presenting conclusions through debate and written research.'
  }
] as const;

export const appointments = [
  {
    period: '2025 — present',
    title: 'Secretary-General and Student Head of the Organising Committee',
    organisation: 'Byron College International MUN Conference',
    description: 'Coordinate conference planning and academic materials, and connect student organisers, school leadership, and participants.'
  },
  {
    period: '2025 — present',
    title: 'Student Director and Instructor',
    organisation: 'Model United Nations Club, Byron College',
    description: 'Plan weekly training and prepare practical guides on procedure, policy analysis, resolution drafting, public speaking, and diplomacy.'
  },
  {
    period: '2025 — present',
    title: 'Committee Chair and Student Officer',
    organisation: 'Local and international Model UN conferences',
    description: 'Chair committees, guide structured debate, and prepare study guides and research reports on international issues.'
  }
] as const;

export const studies = ['Mathematics', 'Economics', 'History', 'Politics'] as const;
