const router = require('express').Router();
const productValidator = require('../validators/productValidator')
const services = require('../services/productServices')
console.log("userRoutes....................")


//Add product

router.post('/addProduct', productValidator.productReqValidator,
    async (req, res) => {
        try {
            let payLoad = req.body;
            console.log(payLoad+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            let newData = await services.addProduct(payLoad);
            console.log(newData)
            if (newData.productData) {
                return res.status(200).json({
                    statusCode: 200,
                    message: "Successfully added",
                    data: newData.userData
                })
            } else {
                return res.status(200).json({
                    statusCode: 403,
                    message: "Not added successfully",
                    data: {}
                })
            }
        } catch (error) {
            console.log(error)
            res.status(200).json({
                statusCode: 500,
                message: "Some technical issue",
                data: {}
            })
        }

    })


//Get All Users
router.get('/getAllUsers',
    async (req, res) => {
        try {
            let data = await services.getAllUsers();
            if (data.userData) {
                return res.status(200).json({
                    statusCode: 200,
                    message: "All productss successfully fetched",
                    data: data.productData
                })
            } else {
                return res.status(200).json({
                    statusCode: 400,
                    message: "Products does not fetched",
                    data: {}
                })
            }
        } catch (error) {
            console.log(error)
            res.status(200).json({
                statusCode: 400,
                message: "Some technical issue",
                data: {}
            })

        }

    })


module.exports = router;