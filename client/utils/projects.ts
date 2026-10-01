import type { Project } from '../../models/Project'

export const projects: Project[] = [
  {
    slug: 'momodex',
    title: 'Momodex',
    category: 'Web development',
    description:
      "Built as a one-week group project during DevAcademy, Momodex is a gamified citizen-science app that turns real-world nature observations into a collectible card and battle game built to get more people outside, observing New Zealand's native and invasive species, and (eventually) contributing that data back to real conservation research.",
    image: '/images/momodex-bento.png',
    imageAlt:
      'Momodex landing page over a close-up of a tūī, with screens for logging an observation, battle cards and achievements',
    path: '/projects/momodex',
  },
  // {
  //   slug: 'z-energy-redesign',
  //   title: 'Z Energy Redesign',
  //   category: 'UX design',
  //   description:
  //     'Built as a group project for Mission Ready HQ, the brief was about redesigning Z Energy’s station locator and fuel price comparison experience to better serve mobile users and road trip travellers.',
  //   image: '/images/z-energy-cover.jpg',
  //   imageAlt:
  //     'Redesigned Z Energy station locator showing a map, station details and service filters',
  //   // path: '/projects/z-energy-redesign', // add once the page exists
  // },
]