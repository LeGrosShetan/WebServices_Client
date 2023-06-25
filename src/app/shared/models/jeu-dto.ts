export interface JeuDto {
  numJeu: number;
  libelleJeu: string;
  actions: Map<number, string>;
  missions: Map<number, string>;
}
