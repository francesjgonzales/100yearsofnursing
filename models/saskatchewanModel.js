const mongoose = require('mongoose')

const saskatchewanSchema = mongoose.Schema(
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

const Saskatchewan = mongoose.model('saskatchewan', saskatchewanSchema);

module.exports = Saskatchewan;