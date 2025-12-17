export interface Plant {
  id: number;
  name: string;
  light: 'low' | 'bright' | 'direct';
  water: 'low' | 'medium' | 'high';
  images: string[];
  care: {
    placement: string;
    watering: string;
    cleaning: string;
    propagation: string;
    fertilization: string;
  };
}
