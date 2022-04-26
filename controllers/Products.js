import BrandModel from "../models/BrandModel.js";
import ProductModel from "../models/ProductModel.js";
import StrainModel from "../models/StrainModel.js";
import TypesModel from "../models/TypesModel.js";
   
export const getAllProducts = async (req, res)=>{
    try {
        const product = await ProductModel.findAll({
            include:[
                {
                    model: TypesModel,
                    attributes:["name"]
                },
                {
                    model: BrandModel,
                    attributes:["name"]
                },
                {
                    model: StrainModel,
                    attributes:["name"]
                } 
            ]
        })
        res.json(product)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllData = async (req, res)=>{
    try {
        const product = await TypesModel.findAll()
        const strain = await StrainModel.findAll()
        const brand = await BrandModel.findAll()
        res.json({product, strain, brand})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findAll({
            include:[
                {
                    model: TypesModel,
                    attributes:["name"]
                },
                {
                    model: BrandModel,
                    attributes:["name"]
                },
                {
                    model: StrainModel,
                    attributes:["name"]
                } 
            ],
            where:{
                id: req.params.id
            }
        })
        res.json(product[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(200).json({
            'message':'Producto creado',
            product
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateProduct = async (req, res) =>{
    try {
        await ProductModel.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.json({
            'message':'Producto actualizado'
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ProductModel.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({
            'message':'Producto eliminado'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}