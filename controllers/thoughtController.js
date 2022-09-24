const { Thought, User } = require('../models');

// get all thoughts
module.exports = {
    getThought(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // get one thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.courseId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with that ID" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findOneandDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with that ID" })
                    : res.status(200).json({ message: "Succesfully deleted thought" })
            )
    },

    // update a thought
    updateThought(req, res) {
        Thought.findOneandUpdate(
            { _id: req.params.courseId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with that ID" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));

    },

};