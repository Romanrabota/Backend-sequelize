const {Router} = require ('express');
const SuperheroController = require('../controllers/Superhero.controller');
const {getPowerInstance} =  require('../middlewares/Power.mw');
const router = Router();
//router.get('/user');

const PowerController = require('../controllers/Power.controller');

router.post('/superhero',getPowerInstance,SuperheroController.createSuperhero);
//router.post('/superhero',SuperheroController.createSuperhero);
router.post('/power',PowerController.createPower);  
router.get('/superheros',SuperheroController.findAll);
router.get('/superhero/:id',SuperheroController.findOnePK);
router.delete('/superhero/:id',SuperheroController.deleteByPK);
router.put('/superhero/:id',SuperheroController.updateSuperhero);
 



module.exports = router;

