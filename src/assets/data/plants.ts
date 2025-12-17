import { Plant } from '../../app/models/plant.model';

export const PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Monstera',
    light: 'bright',
    water: 'medium',
    images: ['assets/img/monstera1.jpg'],
    care: {
      placement: 'Bright, indirect light.',
      watering: 'Water when top soil is dry.',
      cleaning: 'Wipe leaves regularly to remove dust.',
      propagation: 'Stem cuttings with nodes.',
      fertilization: 'Once a month during spring and summer.'
    }
  },
  {
    id: 2,
    name: 'Snake Plant',
    light: 'low',
    water: 'low',
    images: ['assets/img/snake1.jpg'],
    care: {
      placement: 'Low to bright indirect light.',
      watering: 'Water sparingly; allow soil to dry completely.',
      cleaning: 'Dust leaves occasionally.',
      propagation: 'Leaf cuttings or division.',
      fertilization: 'Very rarely.'
    }
  },
  {
    id: 3,
    name: 'Pothos',
    light: 'low',
    water: 'medium',
    images: ['assets/img/pothos1.jpg'],
    care: {
      placement: 'Low to bright indirect light.',
      watering: 'Water when top layer of soil is dry.',
      cleaning: 'Rinse or wipe leaves gently.',
      propagation: 'Stem cuttings in water or soil.',
      fertilization: 'Monthly during growing season.'
    }
  },
  {
    id: 4,
    name: 'ZZ Plant',
    light: 'low',
    water: 'low',
    images: ['assets/img/zzplant1.jpg'],
    care: {
      placement: 'Low to bright indirect light.',
      watering: 'Water every 2–3 weeks.',
      cleaning: 'Wipe leaves to maintain shine.',
      propagation: 'Leaf cuttings or division.',
      fertilization: 'Minimal feeding required.'
    }
  },
  {
    id: 5,
    name: 'Cast Iron Plant',
    light: 'low',
    water: 'low',
    images: ['assets/img/castiron1.jpg'],
    care: {
      placement: 'Low light, shaded areas.',
      watering: 'Water sparingly.',
      cleaning: 'Wipe leaves when dusty.',
      propagation: 'Division.',
      fertilization: 'Once or twice per year.'
    }
  },
  {
    id: 6,
    name: 'Spider Plant',
    light: 'bright',
    water: 'medium',
    images: ['assets/img/spider1.jpg'],
    care: {
      placement: 'Bright indirect light.',
      watering: 'Water when soil is partly dry.',
      cleaning: 'Rinse leaves occasionally.',
      propagation: 'Plantlets.',
      fertilization: 'Every 2–4 weeks in spring/summer.'
    }
  },
  {
    id: 7,
    name: 'Rubber Tree',
    light: 'bright',
    water: 'medium',
    images: ['assets/img/rubber1.jpg'],
    care: {
      placement: 'Bright indirect light.',
      watering: 'Water when top soil dries.',
      cleaning: 'Clean large leaves with damp cloth.',
      propagation: 'Stem cuttings.',
      fertilization: 'Monthly during growing season.'
    }
  },
  {
    id: 8,
    name: 'Prayer Plant',
    light: 'bright',
    water: 'high',
    images: ['assets/img/prayer1.jpg'],
    care: {
      placement: 'Bright indirect light.',
      watering: 'Keep soil consistently moist.',
      cleaning: 'Mist leaves regularly.',
      propagation: 'Division.',
      fertilization: 'Every 2 weeks in spring/summer.'
    }
  },
  {
    id: 9,
    name: 'Fiddle Leaf Fig',
    light: 'bright',
    water: 'medium',
    images: ['assets/img/fiddle1.jpg'],
    care: {
      placement: 'Bright indirect light.',
      watering: 'Water when top soil is dry.',
      cleaning: 'Wipe leaves frequently.',
      propagation: 'Stem cuttings.',
      fertilization: 'Monthly during growth.'
    }
  },
  {
    id: 10,
    name: 'Aloe Vera',
    light: 'direct',
    water: 'low',
    images: ['assets/img/aloe1.jpg'],
    care: {
      placement: 'Direct sunlight.',
      watering: 'Water deeply but infrequently.',
      cleaning: 'Remove dead leaves.',
      propagation: 'Offsets (pups).',
      fertilization: 'Once in spring.'
    }
  },
  {
    id: 11,
    name: 'Cactus',
    light: 'direct',
    water: 'low',
    images: ['assets/img/cactus1.jpg'],
    care: {
      placement: 'Direct sunlight.',
      watering: 'Very minimal watering.',
      cleaning: 'Brush off dust.',
      propagation: 'Offsets or cuttings.',
      fertilization: 'Once or twice a year.'
    }
  },
  {
    id: 12,
    name: 'Jade Plant',
    light: 'direct',
    water: 'low',
    images: ['assets/img/jade1.jpg'],
    care: {
      placement: 'Bright to direct sunlight.',
      watering: 'Allow soil to dry completely.',
      cleaning: 'Wipe thick leaves.',
      propagation: 'Leaf or stem cuttings.',
      fertilization: 'Once per month in spring/summer.'
    }
  }
];
