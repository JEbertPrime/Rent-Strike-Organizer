const express = require('express');

const LandlordCtrl = require('../controllers/landlord-ctrl');

const router = express.Router();

router.post('/landlord', LandlordCtrl.createLandlord);
router.put('/landlord/:id', LandlordCtrl.updateLandlord);
router.delete('/landlord/:id', LandlordCtrl.deleteLandlord);
router.get('/landlord/:id', LandlordCtrl.getLandlordById);
router.get('/landlord/comments/:id', LandlordCtrl.getLandlordCommentsById);
router.put('/landlord/comments/put/:id', LandlordCtrl.addLandlordComment);

router.get('/landlords', LandlordCtrl.getLandlords);
router.get('/landlords/:name', LandlordCtrl.getLandlordsByName);

module.exports = router;
