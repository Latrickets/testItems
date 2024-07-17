import Item from '../models/Item.js';
import {formatResponse} from '../utils/formatResponse.js';

export const getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    return formatResponse(res, items, 200, 'Items retrieved');
  } catch (error) {
    next(error);
  }
};

export const createItem = async (req, res) => {
  try {
    const {name, description} = req.body;
    const item = await Item.create({name, description});
    return formatResponse(res, item, 201, 'Item created');
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, description} = req.body;
    const item = await Item.findByPk(id);
    if (!item) {
      return formatResponse(res, null, 404, 'Item not found');
    }
    item.name = name;
    item.description = description;
    await item.save();
    return formatResponse(res, item, 200, 'Item updated');
  } catch (error) {
    next(error);
  }
};
