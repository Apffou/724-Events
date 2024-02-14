export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};
// Ajout de +1 pour afficher le bon mois (tableau commence toujours à 0)
export const getMonth = (date) => MONTHS[date.getMonth() + 1]; 
