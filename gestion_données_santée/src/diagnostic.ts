class Diagnostic extends MedicsData {
  constructor(
    id: number,
    public description: string,
    public severite: string,
    public categorie: string
  ) {
    super(id);
  }

  showDetails(): void {
    console.log(
      `Diagnostic ID: ${this.id}, Description: ${this.description}, Sévérité: ${this.severite}, Catégorie: ${this.categorie}`
    );
  }
}
