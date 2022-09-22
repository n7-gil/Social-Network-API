const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reaction: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: date,
    default: date.now,
    get: (date) => timeSince(date),
  },
});
