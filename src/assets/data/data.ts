import sport from '../images_robust/sport1.png'
import dumbbell from '../images_robust/dumbbell1.png'
import trainer from '../images_robust/trainer1.png'
import gym from '../images_robust/gym1.png'
import photo1 from '../images_robust/Rectangle13.png'
import photo2 from '../images_robust/Rectangle14.png'
import photo3 from '../images_robust/Rectangle15.png'

export const aboutData = [
  {
    title: 'Equipe qualificada',
    icon: sport,
    about:
      'Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos.',
    more: 'conheça nossos profissionais',
    alt: 'icon sport'
  },
  {
    title: 'Ambiente motivador',
    icon: dumbbell,
    about:
      'Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos.',
    more: 'Faça um tour virtual',
    alt: 'icon dumbbell'
  },
  {
    title: 'Aulas diversas',
    icon: trainer,
    about:
      'Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses.',
    more: 'Ver modalidades',
    alt: 'icon trainer'
  },
  {
    title: 'Equipamentos modernos',
    icon: gym,
    about:
      'Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes.',
    more: 'Faça um tour virtual',
    alt: 'icon gym'
  }
]

export const plansData = [
  {
    plan: 'passe de 1 dia',
    photo: photo1,
    payment: 'Teste gratuitamente',
    price: 0,
    alt: 'homem levantando barra',
    recommended: false
  },
  {
    plan: 'passe de 1 mês',
    photo: photo2,
    payment: 'À partir de',
    price: 99.9,
    alt: 'homem com luva de box',
    recommended: true
  },
  {
    plan: 'passe de 1 ano',
    photo: photo3,
    payment: 'À partir de',
    price: 999.0,
    alt: 'homem com corda nas maos',
    recommended: false
  }
]
