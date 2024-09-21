// utils/sendResponse.js

/**
 * Envoie une réponse JSON standardisée.
 * @param {Object} res - L'objet de réponse Express.
 * @param {number} statusCode - Le code de statut HTTP.
 * @param {Object} data - Les données à envoyer dans la réponse.
 * @param {string} [message] - Un message optionnel à inclure dans la réponse.
 */
exports.sendResponse = (res, statusCode, data, message = '') => {
    const success = statusCode >= 200 && statusCode < 300;

    const response = {
        success,
        status: statusCode,
        message,
        data: data || null,
    };

    res.status(statusCode).json(response);
};

/**
 * Envoie une réponse d'erreur JSON standardisée.
 * @param {Object} res - L'objet de réponse Express.
 * @param {number} statusCode - Le code de statut HTTP de l'erreur.
 * @param {string} message - Le message d'erreur.
 * @param {Object} [errors] - Des détails supplémentaires sur l'erreur, si disponibles.
 */
exports.sendErrorResponse = (res, statusCode, message, errors = null) => {
    const response = {
        success: false,
        status: statusCode,
        message,
        errors,
    };

    res.status(statusCode).json(response);
};