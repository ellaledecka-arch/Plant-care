import { CareHack } from "src/app/models/care-hacks.model";

export const CARE_HACKS: CareHack[] = [
  {
    id: 1,
    title: 'Ideal soil',
    description: 'Why soil quality matters',
    content: 'Use well-draining soil to prevent root rot...',
    image: 'assets/img/care/soil.png'
  },
  {
    id: 2,
    title: 'When to water',
    description: 'Avoid overwatering',
    content: 'Always check the top layer...',
    image: 'assets/img/care/water.png'
  },
  {
    id: 3,
    title: 'Cleaning leaves',
    description: 'Keep leaves dust-free',
    content: 'Dust reduces photosynthesis...',
    image: 'assets/img/care/cleaning.png'
  }
];
