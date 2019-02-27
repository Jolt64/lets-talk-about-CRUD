module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db');

    db.get_all_messages()
      .then(messages => {
        res.status(200).send(messages);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  getMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.get_message([id])
      .then(messages => {
        res.status(200).send(messages[0]);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  addMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.session.user;
    const { message } = req.body;

    db.create_message([id, message])
      .then(messages => {
        res.status(200).send(messages);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  deleteMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_message([id])
      .then(messages => {
        res.status(200).send(messages);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  updateMessage: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { message } = req.body;

    db.update_message([id, message])
      .then(messages => {
        res.status(200).send(messages);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
