export interface CursedTechnique {
  id?: string; // optional because MongoDB will generate it
  _ct: string;
  user: string; // other user properties...
}
