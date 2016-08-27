
module.exports = function (server, db) {

    server.get('/api/books/:id', function (req, res, next) {
        console.log(req.params.id);
        db.BooksAndAuthor.find({$or:[{Book_id:req.params.id},{_id:req.params.id}]}, function (err, data) {
                res.writeHead(200, {
                    'Content-Type': 'application/json; charset=utf-8'
                });
                res.end(JSON.stringify(data));
            });
        return next();
    });

}