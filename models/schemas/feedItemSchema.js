const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const { ObjectId } = mongoose.Schema.Types;

module.exports = new mongoose.Schema(
  {
    sender: { user: ObjectId, pushToken: String },
    publishedAt: Date,
    unpublishedAt: Date,
    push: Boolean,
    channel: ObjectId,
    locale: String,
    text: String,
    images: [{
      url: String, caption: String, credit: String, default: Boolean,
    }],
    attachments: [{ attachmentType: String, relatedId: ObjectId, data: {} }],
    active: Boolean,
  },
  {
    strict: false,
    timestamps: true,
  },
);
// timestamps: true adds createdAt and updatedAt automagically

// TODO: Figure out future publish/unpublish times using publishedAt/unpublishedAt
// For now, just set publishedAt to the same as createdAt
// TODO: Figure out how we want pinned posts to work
