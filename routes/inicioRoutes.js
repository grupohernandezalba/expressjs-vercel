import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("inicio", { titulo: "Inicio" });
});

export default router;

 