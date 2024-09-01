// models/Stundenplan.ts
import mongoose from 'mongoose';

const StundenplanSchema = new mongoose.Schema({
    fach: { type: String, required: true },
    kurse: [{ type: String, required: true }],
});

export default mongoose.models.Stundenplan || mongoose.model('Stundenplan', StundenplanSchema);
