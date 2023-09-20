db.tracks.aggregate([
    {
        $group: {
            _id: null,
            count: {$count: {}},
            avg: {$avg: "$duration_secs"}
        }
    },
    {
        $project: {
            _id: 0,
            count: 1,
            avg: 1
        }
    }
])