const diagnostic = new Diagnostic(1, "Grippe sévère", "Haute", "Respiratoire");

const medic1 = new Medics(1, "Paracétamol", "2 fois par jour", ["Nausées"]);
const medic2 = new Medics(2, "Ibuprofène", "3 fois par jour", ["Fatigue"]);

const treatment = new Treatment(
  1,
  new Date("2023-03-20"),
  new Date("2023-03-25"),
  [medic1, medic2]
);

const consultation = new Consultation(
  1,
  new Date(),
  "Dr. Dupont",
  [diagnostic],
  treatment
);

const consultations = new DataCollections<Consultation>();
consultations.add(consultation);
