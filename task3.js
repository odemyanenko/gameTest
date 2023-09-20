db.tracks.insertMany([
    { _id: 1, title: 'Track 1', duration_secs: 8 * 60, author_id: 1 },
    { _id: 2, title: 'Track 2', duration_secs: 4 * 60, author_id: 1 },
    { _id: 3, title: 'Track 3', duration_secs: 5 * 60, author_id: 2 },
    { _id: 4, title: 'Track 4', duration_secs: 4 * 60, author_id: 2 },
    { _id: 5, title: 'Track 5', duration_secs: 3 * 60, author_id: 3 },
    { _id: 6, title: 'Track 6', duration_secs: 6 * 60, author_id: 3 },
    { _id: 7, title: 'Track 7', duration_secs: 12 * 60, author_id: 4 },
    { _id: 8, title: 'Track 8', duration_secs: 10 * 60, author_id: 4 },
    { _id: 9, title: 'Track 9', duration_secs: 9 * 60, author_id: 5 },
    { _id: 10, title: 'Track 10', duration_secs: 7 * 60, author_id: 5 }
])