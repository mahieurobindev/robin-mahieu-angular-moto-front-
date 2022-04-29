import { Moto } from './moto';

export interface MotoFormData {
  isUpdateMode: boolean;
  motoToUpdate?: moto;
  idToCreate?: number;
}
