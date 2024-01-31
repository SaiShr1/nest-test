import * as mongoose from 'mongoose';

export const CurseTechniqueSchema = new mongoose.Schema(
  {
    _ct: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    collection: 'cursed_technique', // This is the correct place for specifying the collection name
  },
);
