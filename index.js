import express from "express";
const app = express();
const port = 30000;

app.get("/files", (_, res) => {
    res.json([]);
});
app.post("/files", (_, res) => {
    res.sendStatus(500);
});
app.get("/files/:id", (req, res) => {
    res.json(req.params.id);
});

app.listen(port, () => {
    console.log(`Storage service listening on port ${port}`);
});