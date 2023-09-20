use('music')

// Задача. Вывести среднюю продолжительность всех треков
// (проекция: кол-во_треков, сред_прод_треков)

db.tracks.aggregate([
    {
        $group: {
            _id: null,
            total_duration: { $sum: "$duration_secs" },
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            count: 1,
            avg_duration: { $divide: ["$total_duration", "$count"] }
        }
    }
])
