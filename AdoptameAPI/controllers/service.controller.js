const ServiceModel = require("../models/service.model");

exports.createService = async (req, res, next) => {
    try {
        let { name, description, logo, address, phone, email } = req.body;
        let newService = await ServiceModel.create({
            name,
            description,
            logo: req.file.path,
            address,
            phone,
            email,
        });
        res.send({ newService });
    } catch (error) {
        next(error);
    }
};

// Get all services - 22/6/2022
exports.getAllServices = async (req, res, next) => {    
    try {
        let services = await ServiceModel.find({}, "-password")
            
        res.send({
            count: services.length,
            services,
        });
    } catch (error) {
        next(error);
    }
}

exports.getServiceMain = async (req, res, next) => {    
    try {
        let services = await ServiceModel.find({}, "-password")
            .skip(0)
            .limit(10);
        res.send({
            count: services.length,
            services,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileService = async (req, res, next) => {
    try {
        let name = req.params.name;
        let service = await ServiceModel.findOne({ name }, "-password");
        if (!service) {
            return res.status(404).send({
                message: "service not found",
            });
        }
        res.send({ service });
    } catch (error) {
        next(error);
    }
};

// AÚN falta ver que no sea necesario llenar todos los campos sino que solo se puedan llenar los que se quieran actualizar
exports.updateService = async (req, res, next) => {
        try{
        let ServiceToUpdate = req.params.name;
    
        let{ name, description, logo, address, phone, email } = req.body;
            let service = await ServiceModel.findOne ({name: ServiceToUpdate});
    
            if(!service)
                return res.status(404).send({
                    message: "service not found",
                });
            
            service.name =  name;
            service.description = description;
            service.logo = logo;
            service.address = address;
            service.phone = phone;
            service.email = email;
            
        let updatedService = await service.save();

        if( service == updatedService){
            return res.send({
            message: "service updated successfully",
            service: { name, description, logo, address, phone, email},
            });
        }
        res.send({
            message: "service not updated",
        });
    } catch (error) {
        next(error);
    }
    
};

exports.deleteService = async (req, res, next) => {
    try {
        let id = req.params.id;
        let service = await ServiceModel.findById(id);
        if (!service) {
            return res.status(404).send({
                message: "service not found",
            });
        }
        await service.remove();
        res.send({
            message: "service deleted",
        });
    } catch (error) {
        next(error);
    }
};