db.tracks.aggregate([
    {
        $group: {
            _id: "$author_id",
            count: {$count: {}}
        }
    },
    {
        $lookup: {
            from: 'users',
            localField: '_id',
            foreignField: '_id',
            as: 'author'
        }
    },
    {
        $unwind: '$author'
    },
    {
        $project: {
            author_fullname: '$author.fullname',
            count: 1,
            _id: 0
        }
    }
])