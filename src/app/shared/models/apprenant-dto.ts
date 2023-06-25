import {JeuDto} from "./jeu-dto";

export class ApprenantDto {
  numApprenant!: number;
  nomApprenant!: string;
  prenomApprenant!: string;
  inscriptions!: Set<JeuDto>;
}
