const express=require("express")
const router=express.Router()

const routes=require("./user.routes")
const app=express();

router.post("/create", (req, res) => {
  res.status(200).json({
    message: "Route is working",
  });
});