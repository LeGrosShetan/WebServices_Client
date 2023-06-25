import {JeuDto} from "./jeu-dto";

export interface ApprenantDto {
  numApprenant: number | null;
  nomApprenant: string;
  prenomApprenant: string;
  inscriptions: JeuDto[];
}
