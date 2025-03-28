class DataCollections<T extends MedicsData> {
  private donnees: T[] = [];

  add(donnee: T): void {
    this.donnees.push(donnee);
  }

  supprimer(id: number): void {
    this.donnees = this.donnees.filter((data) => data.id !== id);
  }

  update(donnee: T): void {
    const index = this.donnees.findIndex((data) => data.id === donnee.id);
    if (index !== -1) this.donnees[index] = donnee;
  }

  search(predicate: (donnee: T) => boolean): T[] {
    return this.donnees.filter(predicate);
  }

  sort(compare: (a: T, b: T) => number): void {
    this.donnees.sort(compare);
  }

  getAll(): void {
    this.donnees.forEach((data) => data.showDetails());
  }
}
