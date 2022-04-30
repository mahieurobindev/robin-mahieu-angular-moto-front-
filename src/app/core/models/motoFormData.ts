import { Moto } from './moto';

export interface MotoFormData {
  isUpdateMode: boolean;
  motoToUpdate?: Moto;
  idToCreate?: number;
}
