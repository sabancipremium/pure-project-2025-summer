// Team data for the interactive card pack

export interface Link {
  type: 'email' | 'github' | 'linkedin' | 'website' | 'researchgate' | 'orcid';
  value: string;
  label: string;
}

export interface Member {
  id: number;
  name: string;
  pictureUrl: string;
  duty: string;
  university: string;
  bgColor: string;
  links: Link[];
}

export const teamData: Member[] = [
  {
    id: 1,
    name: 'Prof. Burç Mısırlıoğlu',
    pictureUrl: '/images/team/sarah.jpg', // Placeholder - will use initials
    duty: 'Project Supervisor',
    university: 'Sabancı University',
    bgColor: '#E3F2FD', // Light Blue
    links: [
      { type: 'email', value: 'burc@sabanciuniv.edu', label: 'Email' },
      { type: 'github', value: 'https://github.com/sarahchen', label: 'GitHub' }
    ]
  },
  {
    id: 2,
    name: 'Ahmet Ekiz',
    pictureUrl: '/images/team/ahmed.jpg',
    duty: 'Undergraduate Researcher',
    university: 'Sabancı University',
    bgColor: '#E8F5E8', // Light Green
    links: [
      { type: 'email', value: 'ahmed.hassan@stanford.edu', label: 'Email' },
      { type: 'linkedin', value: 'https://linkedin.com/in/ahmedhassan', label: 'LinkedIn' }
    ]
  },
  {
    id: 3,
    name: 'Doğa Sümer',
    pictureUrl: '/images/team/maria.jpg',
    duty: 'Undergraduate Researcher',
    university: 'Sabancı University',
    bgColor: '#FFF3E0', // Light Orange
    links: [
      { type: 'email', value: 'maria.rodriguez@caltech.edu', label: 'Email' },
      { type: 'github', value: 'https://github.com/mariarodriguez', label: 'GitHub' },
      { type: 'website', value: 'https://mariarodriguez.dev', label: 'Portfolio' }
    ]
  },
  {
    id: 4,
    name: 'Ege Tarık Sağıroğlu',
    pictureUrl: '/images/team/yuki.jpg',
    duty: 'Undergraduate Researcher',
    university: 'Sabancı University',
    bgColor: '#F3E5F5', // Light Purple
    links: [
      { type: 'email', value: 'yuki.tanaka@u-tokyo.ac.jp', label: 'Email' },
      { type: 'researchgate', value: 'https://researchgate.net/profile/yuki-tanaka', label: 'ResearchGate' }
    ]
  },
  {
    id: 5,
    name: 'Atakan Yapıcı',
    pictureUrl: '/images/team/james.jpg',
    duty: 'Undergraduate Researcher',
    university: 'İstanbul Technical University',
    bgColor: '#FCE4EC', // Light Pink
    links: [
      { type: 'email', value: 'james.wilson@harvard.edu', label: 'Email' },
      { type: 'github', value: 'https://github.com/jameswilson', label: 'GitHub' }
    ]
  },
  {
    id: 6,
    name: 'Sihyeon Park',
    pictureUrl: '/images/team/elena.jpg',
    duty: 'Undergraduate Researcher',
    university: 'Oxford University',
    bgColor: '#E0F2F1', // Light Teal
    links: [
      { type: 'email', value: 'elena.petrov@oxford.ac.uk', label: 'Email' },
      { type: 'linkedin', value: 'https://linkedin.com/in/elenapetrov', label: 'LinkedIn' },
      { type: 'orcid', value: 'https://orcid.org/0000-0000-0000-0000', label: 'ORCID' }
    ]
  }
];
