import express from "express";
const router = express.Router();

router.get("/empresa", (req, res) => {
    res.render("empresa", { titulo: "Empresa" });
});

export default router;
 
