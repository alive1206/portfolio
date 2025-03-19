import { HomeIcon, Palette, Phone, User } from 'lucide-react'

export const navigationList = [
  {
    index: 0,
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    index: 1,
    title: 'About',
    icon: <User />,
  },
  {
    index: 2,
    title: 'Projects',
    icon: <Palette />,
  },
  {
    index: 3,
    title: 'Contact',
    icon: <Phone />,
  },
]

export const projectList = [
  {
    id: '1',
    name: 'Mini Fighter',
    description: 'Website application for game Mini Fighter',
    date: '2025-02-17',
    gitLink: 'https://github.com/alive1206/minifighter',
    demoLink: 'https://minifighter-ivory.vercel.app/',
  },
  {
    id: '2',
    name: 'Pokedex',
    description: 'Pokedex for Pokemon',
    date: '2025-01-15',
    gitLink: 'https://github.com/alive1206/pokedex',
    demoLink: 'https://pokedex-black-mu.vercel.app/',
  },
  {
    id: '3',
    name: 'Movie Web application',
    description: 'Watch movie online',
    date: '2024-09-10',
    gitLink: 'https://github.com/alive1206/movie-web-app',
    demoLink: 'https://movie-web-app-pied.vercel.app/',
  },
]
