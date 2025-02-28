import express from "express";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const router = express.Router();

const dbPromise = open({
    filename: "./database.sqlite",
    driver: sqlite3.Database
});

router.get("/", async (req, res) => {
    const db = await dbPromise;
    const logs = await db.all("SELECT * FROM logs ORDER BY data_hora DESC");
    res.json(logs);
});

export default router;
