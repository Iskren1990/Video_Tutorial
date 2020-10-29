function sanitizeObj(obj) {
    const sanitizedObj = Object.assign({}, obj);

    Object.keys(obj).forEach(key => sanitizeObj[key].trim());

    return sanitizedObj;
}