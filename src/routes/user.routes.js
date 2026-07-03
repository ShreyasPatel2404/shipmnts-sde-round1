const express=require("express")
const router=express.Router()

const routes=require("./request.routes")
const app=express();

router.get('/user', function(req, res, next) {
     next(new Error('Internal error'));
});