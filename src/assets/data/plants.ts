import { Plant } from '../../app/models/plant.model';

export const PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Monstera',
    light: 'bright',
    water: 'medium',
    images: ['assets/img/monstera.jpg'],
    care: {
      placement: 'Bright indirect light.',
      watering: 'Water when top soil is dry.',
      cleaning: 'Wipe leaves with damp cloth.',
      propagation: 'Stem cuttings.',
      fertilization: 'Once a month during growing season.'
    }
  },
  {
    id: 2,
    name: 'Snake Plant',
    light: 'low',
    water: 'low',
    images: ['assets/img/snake.jpg'],
    care: {
      placement: 'Low to bright indirect light.',
      watering: 'Very little water.',
      cleaning: 'Dust leaves occasionally.',
      propagation: 'Leaf cuttings.',
      fertilization: 'Rarely.'
    }
  }
];
