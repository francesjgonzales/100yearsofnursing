const mongoose = require('mongoose')

const albertaSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: [true]
        },
        year: {
            type: String,
            required: true,

        },
        title: {
            type: String,
            require: true,
        },
        article: {
            type: String,
            require: true,
        },
        theme:
        {
            type: String,
            require: false,
        }

    }
)

const Alberta = mongoose.model('alberta', albertaSchema);

module.exports = Alberta;