import {JeuDto} from "./jeu-dto";

export interface ApprenantDto {
  numApprenant: number | null;
  nomapprenant: string;
  prenomapprenant: string;
  inscriptions: JeuDto[];
}
