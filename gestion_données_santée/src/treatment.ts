class Treatment extends MedicsData {
  constructor(
    id: number,
    public beginningDate: Date,
    public endingDate: Date,
    public medics: Medics[] = []
  ) {
    super(id);
  }

  showDetails(): void {
    console.log(
      `Traitement ID: ${
        this.id
      }, Durée: ${this.getDuree()} jours, Médicaments: ${this.medics
        .map((m) => m.nom)
        .join(", ")}`
    );
  }

  getDuree(): number {
    const duree =
      (this.endingDate.getTime() - this.beginningDate.getTime()) /
      (1000 * 3600 * 24);
    return Math.ceil(duree);
  }
}
