const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: date,
      default: date.now,
      get: (date) => timeSince(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", userSchema);

module.exports = Thought;
