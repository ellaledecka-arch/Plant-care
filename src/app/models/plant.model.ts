export interface Plant {
  id: number;
  name: string;
  light: 'low' | 'bright';
  water: 'low' | 'medium';
  images: string[];
  care: {
    placement: string;
    watering: string;
    cleaning: string;
    propagation: string;
    fertilization: string;
  };
}
