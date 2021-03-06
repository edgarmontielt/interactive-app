const { Router } = require('express')
const ListController = require('../controllers/lists')

const router = Router()
const listController = new ListController()

router.get('/', listController.getAll)
router.post('/create', listController.create)
router.delete('/delete/:id', listController.deleteTodo)
router.put('/updateStatus/:id', listController.updateStatus)
router.put('/update/:id', listController.updateTodo)

module.exports = router