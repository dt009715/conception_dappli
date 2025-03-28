class Consultation extends MedicsData {
  constructor(
    id: number,
    public date: Date,
    public medecin: string,
    public diagnostics: Diagnostic[] = [],
    public traitement?: Treatment
  ) {
    super(id);
  }

  showDetails(): void {
    console.log(
      `Consultation ID: ${
        this.id
      }, Date: ${this.date.toDateString()}, Médecin: ${this.medecin}`
    );
    this.diagnostics.forEach((data) => data.showDetails());
  }
}
