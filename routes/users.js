var express = require('express');
var router = express.Router();
// const bodyParser = require("body-parser");
const db = require("../model/helper");

// router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// COPIED FROM OTHER PROJECT


// ROUTE GUARD

async function ensureItemExists( req, res, next) {
  let todosId = req.params.id;
  let result = await db(`SELECT * FROM farmers WHERE id = ${todosId}`);
  if (result.data.length === 1) {
    // ID found; let next middleware have a go
    next();
  } else {
    res.status(404).send({ error: 'User not found' });
  }
}

// HELPER FUNCTION 
async function sendAllItems (res) {
  try {
  let result = await db("SELECT * FROM items ORDER BY id");
  // result.data.forEach(i => i.complete = (i.complete === 1)); // convert 0/1 to false/true

  res.send(result.data);

  } catch (err) {
      res.status(500).send({ error: err.message });
  }
}


router.get("/", (req, res) => {
  res.send("Welcome to the API");
});



router.get("/todos", async (req, res) => {
  sendAllItems(res);
});


router.post("/todos", async (req, res) => {
  
    let { task, complete} = req.body;

    try {
        let sql =`
            INSERT INTO items 
            (task, complete)
            VALUES ('${task}', '${complete}')
        `;
        await db(sql);  // do the insert
        
        sendAllItems(res);

      } catch (err) {
        res.status(500).send({ error: err.message});
     }
  });



router.put("/todos/:id", ensureItemExists, async (req, res) => {
  let todosId = req.params.id;
  let { task, complete } = req.body;

  try {
      let sql = `
      UPDATE items
      SET task = '${task}', complete = '${complete}'
      WHERE id = ${todosId}
        `;
      await db(sql); // do the update

      sendAllItems(res);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});



router.delete("/todos/:id", ensureItemExists, async (req, res) => {

  let todosId = req.params.id;

  try {
    await db(`DELETE FROM items WHERE id = ${todosId}`);
    sendAllItems(res);
} catch (err) {
  res.status(500).send({ error: err.message });
}
});

module.exports = router;
