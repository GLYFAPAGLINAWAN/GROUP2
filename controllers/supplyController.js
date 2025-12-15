const Supply = require('../models/supplyModel');
const { successResponse, errorResponse } = require('../helpers/responseHelper');

// GET ALL SUPPLIES
exports.getAllSupplies = async (req, res) => {
  try {
    const supplies = await Supply.find();
    successResponse(res, 'Supplies fetched successfully', supplies);
  } catch (error) {
    errorResponse(res, 'Failed to fetch supplies', error);
  }
};

// CREATE SUPPLY
exports.createSupply = async (req, res) => {
  try {
    const supply = await Supply.create(req.body);
    successResponse(res, 'Supply created successfully', supply);
  } catch (error) {
    errorResponse(res, 'Failed to create supply', error);
  }
};

// UPDATE SUPPLY
exports.updateSupply = async (req, res) => {
  try {
    const updated = await Supply.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return errorResponse(res, 'Supply not found', null, 404);
    }

    successResponse(res, 'Supply updated successfully', updated);
  } catch (error) {
    errorResponse(res, 'Failed to update supply', error);
  }
};

// DELETE SUPPLY
exports.deleteSupply = async (req, res) => {
  try {
    const deleted = await Supply.findByIdAndDelete(req.query.id);

    if (!deleted) {
      return errorResponse(res, 'Supply not found', null, 404);
    }

    successResponse(res, 'Supply deleted successfully');
  } catch (error) {
    errorResponse(res, 'Failed to delete supply', error);
  }
};
