class DataCollections<T extends MedicsData> {
  private donnees: T[] = [];

  ajouter(donnee: T): void {
    this.donnees.push(donnee);
  }

  supprimer(id: number): void {
    this.donnees = this.donnees.filter((d) => d.id !== id);
  }

  mettreAJour(donnee: T): void {
    const index = this.donnees.findIndex((d) => d.id === donnee.id);
    if (index !== -1) this.donnees[index] = donnee;
  }

  rechercher(predicate: (donnee: T) => boolean): T[] {
    return this.donnees.filter(predicate);
  }

  trier(comparateur: (a: T, b: T) => number): void {
    this.donnees.sort(comparateur);
  }

  afficherToutes(): void {
    this.donnees.forEach((d) => d.afficherDetails());
  }
}
