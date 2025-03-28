class Medics extends MedicsData {
  constructor(
    id: number,
    public nom: string,
    public posologie: string,
    public secondaryEffect: string[] = []
  ) {
    super(id);
  }

  afficherDetails(): void {
    console.log(
      `Médicament ID: ${this.id}, Nom: ${this.nom}, Posologie: ${
        this.posologie
      }, Effets secondaires: ${this.secondaryEffect.join(", ")}`
    );
  }
}
