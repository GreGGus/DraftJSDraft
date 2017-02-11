/**
 * Created by gregoire.portier on 12/01/17.
 */
import { fromJS } from 'immutable'

const mentions = fromJS([
    {
        name: 'Fusils AK45',
        type: 'Arme'
    },
    {
        name: 'Revolver',
        type: 'Arme'

    },
    {
        name: 'Peugeot Bleu',
        type: 'Véhicule'

    },
    {
        name: 'Henri',
        type: 'personnePhysique'
    },
    {
        name: 'Maxime',
        type: 'personnePhysique'
    }
    ]);

export default mentions;
