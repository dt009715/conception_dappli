class Medics extends MedicsData {
  constructor(
    id: number,
    public nom: string,
    public posology: string,
    public secondaryEffect: string[] = []
  ) {
    super(id);
  }

  showDetails(): void {
    console.log(
      `Médicament ID: ${this.id}, Nom: ${this.nom}, Posologie: ${
        this.posology
      }, Effets secondaires: ${this.secondaryEffect.join(", ")}`
    );
  }
}
