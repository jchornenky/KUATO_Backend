const mongoose = require('mongoose');

const SearchQuerySchema = mongoose.Schema({
    name: String,
    type: String,
    query: String,
    reason: String,
    severity: String,
    value: String,
    createdByAuthId: mongoose.Schema.Types.ObjectId,
    updatedByAuthId: mongoose.Schema.Types.ObjectId,
    reportFlag: String,
    useRegex: { type: Boolean, default: false },
    isLinks: { type: Boolean, default: false },
    isImages: { type: Boolean, default: false },
    isYoutube: { type: Boolean, default: false }
});

module.exports = SearchQuerySchema;
