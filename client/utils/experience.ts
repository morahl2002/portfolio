import type {
  EducationEntry,
  ExperienceEntry,
  SkillGroup,
} from '../../models/Experience'

// Newest first
export const experience: ExperienceEntry[] = [
  {
    role: 'Student Developer',
    organisation: 'DevAcademy Aotearoa',
    period: 'Jun 2026 – Oct 2026',
    highlights: [
      'Completed an intensive 17-week course across the front and back end: JavaScript, HTML, CSS, TypeScript, React, Node.js and SQLite (with Knex).',
      'Worked in multiple groups on short weekly projects under Agile, plus week-long projects using a ticket workflow.',
      'Learned about data sovereignty and Te Tiriti o Waitangi, and their impact on the tech space and the people in it.',
    ],
  },
  {
    role: 'UX Designer',
    organisation: 'Seen Ventures',
    period: 'Nov 2025 – Jan 2026',
    highlights: [
      'Turned raw stakeholder feedback into 4 personas and customer journey maps alongside the UX team.',
      'Built and maintained brand guidelines and 20+ high-fidelity UI screens in Figma for a live platform.',
      'Prototyped and iterated on designs in Figma, testing concepts to validate assumptions before development.',
      'Partnered with the dev team through implementation, learning how design intent survives once it hits code, and how to advocate for it.',
    ],
  },
  {
    role: 'Home Care Provider',
    organisation: 'Private',
    period: 'May 2023 – May 2025',
    highlights: [
      'Managed competing priorities and unpredictable daily demands, building a calm, problem-solving approach under pressure.',
      'Coordinated with healthcare professionals and kept detailed records, building clear written communication.',
      'Handled scheduling, budgeting and administrative tasks.',
    ],
  },
  {
    role: 'Retail Assistant',
    organisation: 'Kmart Australia',
    period: 'May 2022 – Feb 2023',
    highlights: [
      'Handled high-volume, fast-paced work reliably.',
      'Read customer needs quickly and adjusted my approach on the spot, a user-empathy skill I now apply to UX and product decisions.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    qualification: 'New Zealand Certificate in Applied Software Development',
    institution: 'DevAcademy Aotearoa',
    period: 'Jun 2026 – Oct 2026',
  },
  {
    qualification: 'Certificate in Information Technology',
    institution: 'Yoobee College of Creative Innovation',
    period: 'Jan 2026 – Jun 2026',
  },
  {
    qualification: 'New Zealand Diploma in Web Development and Design',
    institution: 'Mission Ready HQ',
    period: 'May 2025 – Jan 2026',
  },
  {
    qualification: 'NCEA Levels 1, 2 and 3',
    institution: 'Kelston Girls College',
    period: 'Graduated 2020',
  },
]

// Technical skills are already shown by the tech stack marquee
export const strengths: SkillGroup[] = [
  {
    label: 'SKILLSET',
    items: [
      'Adaptability and fast learning',
      'Stakeholder communication',
      'Bridging user needs and technical development',
      'Time management',
      'Problem-solving under pressure',
      'Collaboration and productive conflict resolution',
    ],
  },
  {
    label: 'INTERESTS',
    items: [
      'UX/UI design',
      'Graphic design',
      'Video editing',
      'Any and all genres of music',
      'Reading comic books and pretending I know whats going on',
      'Losing at Overwatch'
    ],
  },
]

export const background =
  'Hailing from indigenous and Polynesian roots, I am driven by getting more Pasifika faces into the tech space, while growing my love for creativity in web development and delving into unexplored spaces I wouldn’t usually find myself in.'