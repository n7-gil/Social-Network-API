const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

router
    .route('/')
    .get(getUser)
    .post(createUser);

router
    .route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser);

router
    .route('/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;