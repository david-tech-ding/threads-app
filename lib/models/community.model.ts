import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    collation: { locale: 'en', strength: 1 },
  },
  name: { type: String, required: true },
  image: { type: String },
  bio: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread',
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread',
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Community =
  mongoose.models.Community || mongoose.model('User', communitySchema);

export default Community;
