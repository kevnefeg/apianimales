const ProductModel = require('../models/product.model');

exports.createProduct = async (req, res, next) => {
    try {
        let { name, description, price, image, serviceID } = req.body;
        let newProduct = await ProductModel.create({
            name,
            description,
            price,
            image: req.file.path,
            serviceID,
        });
        res.send({ newProduct });
    } catch (error) {
        next(error);
    }
};

//TODO: TODOS LOS PRODUCTOS DE UN SERVICIO
exports.getAllProducts = async (req, res, next) => {
    try {
        let products = await ProductModel.find({}, "-password")
        res.send({
            count: products.length,
            products,
        });
    } catch (error) {
        next(error);
    }
};

//Pregunta para el update
exports.updateProducts = async (req, res, next) => {
    try {
        let productoUpdate = req.params.id;
        let  { name, description, price, image, category } = req.body;       
         let product = await ProductModel.findById({id: productoUpdate});

        if (!product) 
            return res.status(404).send({
                message: "The product with the given ID was not found.",
            });
        
            product.name =name;
            product.description = description;
            product.price = price;
            product.image = image;
            product.category = category;

            let updateProduct = await product.save();

        if ( product == updateProduct) {
            return res.send({
                message: "product updated successfully",
                product : {name, description, price, image, category},
            });
        }
     
        res.send({
            message: "cannot update product",
        });
       
    } catch (error) {
        next(error);
    }
};

exports.deleteProducts = async (req, res, next) => {
    try {
        let id = req.params.id;
        let product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).send({
                message: "product not found",
            });
        }
        await ProductModel.findByIdAndDelete(id);
        res.send({
            message: "product deleted",
        });
    } catch (error) {
        next(error);
    }
};