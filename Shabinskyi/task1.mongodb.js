use('music')

// **Задача. Вывести, какое ко-во треков у каждого автора**
// (проекция: `имя_автора`, `ко-во_треков`)

db.tracks.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "author_id",
            foreignField: "_id",
            as: "author_info"
        }
    },
    {
        $unwind: "$author_info"
    },
    {
        $group: {
            _id: "$author_info.fullname",
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            author_name: "$_id",
            track_count: "$count"
        }
    }
])