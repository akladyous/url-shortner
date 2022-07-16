import mongoose from "mongoose"
const { Schema } = mongoose;

const clicksSchema = new Schema({
    browser: {
        type: Map,
        of: new Schema({
            name: { type: String, default: null },
            version: { type: String, default: null },
        })
    },
    device: {
        type: Map,
        of: new Schema({
            model: { type: String, default: null },
            type: { type: String, default: null },
            vendor: { type: String, default: null },
        })
    },
    engine: {
        type: Map,
        of: new Schema({
            name: { type: String, default: null },
            version: { type: String, default: null }
        })
    },
    os: {
        type: Map,
        of: new Schema({
            name: { type: String, default: null },
            version: { type: String, default: null },
        })
    },
    cpu: {
        type: Map,
        of: new Schema({
            architecture: { type: String, default: null }
        })
    },
    countClicks: { type: Number, default: 0 },
    url: [{ type: Schema.Types.ObjectId, ref: 'Url' }]
}
    , { timestamps: true, toJSON: { virtuals: true } }
);

export default Clicks = mongoose.model("Clicks", clicksSchema);