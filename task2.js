db.tracks.aggregate([
    {
        $group: {
            _id: "$author_id",
            count_tracks: {'$count': {}}
        }
    },
    {
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "author"
        }
    },
    { $unwind: "$author" },
    {
        $project: {
            author_name: "$author.fullname",
            count_tracks: 1,
            _id: 0
        }
    }
]);