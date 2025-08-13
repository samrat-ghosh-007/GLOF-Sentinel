const express = require('express');
const {
  getAllLakes,
  createLake,
  updateLake,
  deleteLake, 
  getLakeById
} = require('../controllers/lakeController');
const { auth, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.get('/',auth, getAllLakes);
router.get('/:id', auth, getLakeById);       
router.post('/', auth, isAdmin, createLake);
router.patch('/:id', auth, isAdmin, updateLake);
router.delete('/:id', auth, isAdmin, deleteLake);

module.exports = router;
