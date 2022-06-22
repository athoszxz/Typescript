import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("gh!");
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong");
});

app.listen(4321, () => {
    console.log("Server is running on port 4321");
});