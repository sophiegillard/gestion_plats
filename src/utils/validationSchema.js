// Validation des inputs
import * as yup from "yup";

const validationSchema = yup.object().shape({
    dishName: yup.string('Veuillez insérer du text uniquement.')
        .required('Veuillez indiquer le libellé.')
        .min(3, "Veuillez insérer minimum 3 caractères.")
        .matches(/^[a-zA-Z0-9,'\-/\s]+$/, 'Le libellé ne doit pas contenir de caractères spéciaux'),
    dishCat: yup.string('Veuillez insérer du text uniquement.')
        .required('Veuillez indiquer la catégorie.'),
    dishProvider: yup.string('Veuillez insérer du text uniquement.')
        .required('Veuillez indiquer le fournisseur.'),
    dishPrice: yup.number('Veuillez entrer uniquement des chiffres.')
        .required('Veuillez indiquer le prix.')
        .positive('Veuillez indiquer un prix correct.'),

});