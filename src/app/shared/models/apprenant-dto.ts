import {JeuDto} from "./jeu-dto";

export interface ApprenantDto {
  numApprenant: number;
  nomApprenant: string;
  prenomApprenant: string;
  inscriptions: Set<JeuDto>;
}
