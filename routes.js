const express =require("express")

const homeController =require("./controllers/HomeController")
const loginController =require("./controllers/LoginController")
const itemController =require("./controllers/ItemController")

const router = express.Router()


router.post('/auth',loginController.auth)

router.get("/",homeController.index)//コントローラーの処理を読み込み

router.get("/profile",homeController.profile)

router.get("/login",loginController.index)
router.get("/item",itemController.index)
router.get("/item/:id",itemController.show)


module.exports = router//機能として読み込ませる際は記述必須