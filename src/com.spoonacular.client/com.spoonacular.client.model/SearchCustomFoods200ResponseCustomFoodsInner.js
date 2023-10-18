/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SearchCustomFoods200ResponseCustomFoodsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner
 * @version 1.1
 */
class SearchCustomFoods200ResponseCustomFoodsInner {
    /**
     * Constructs a new <code>SearchCustomFoods200ResponseCustomFoodsInner</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner
     * @param id {Number} 
     * @param title {String} 
     * @param servings {Number} 
     * @param imageUrl {String} 
     * @param price {Number} 
     */
    constructor(id, title, servings, imageUrl, price) { 
        
        SearchCustomFoods200ResponseCustomFoodsInner.initialize(this, id, title, servings, imageUrl, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, servings, imageUrl, price) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['servings'] = servings;
        obj['imageUrl'] = imageUrl;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>SearchCustomFoods200ResponseCustomFoodsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchCustomFoods200ResponseCustomFoodsInner} The populated <code>SearchCustomFoods200ResponseCustomFoodsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchCustomFoods200ResponseCustomFoodsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('servings')) {
                obj['servings'] = ApiClient.convertToType(data['servings'], 'Number');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['title'] = undefined;

/**
 * @member {Number} servings
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['servings'] = undefined;

/**
 * @member {String} imageUrl
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['imageUrl'] = undefined;

/**
 * @member {Number} price
 */
SearchCustomFoods200ResponseCustomFoodsInner.prototype['price'] = undefined;






export default SearchCustomFoods200ResponseCustomFoodsInner;

