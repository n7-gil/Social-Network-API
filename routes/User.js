app.get("/api/users"),
  (req, res) => {
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  };

app.post("/api/new");
