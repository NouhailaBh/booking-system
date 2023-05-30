import mongoose from 'mongoose';



const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel', // Référence au modèle d'hôtel si vous en avez un
      required: true,
    },
    numeroRoom: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      default: "2023-06-05",
    },
    endDate: {
      type: Date,
      default: "2023-07-05",
    },
  },
  { timestamps: true }
);

export default mongoose.model('Room', RoomSchema);
