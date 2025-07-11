function encode(text) {
    return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decode(encoded) {
    let padded = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (padded.length % 4) {
        padded += '=';
    }
    return atob(padded);
}

function isEncoded(text) {
    const base64Regex = /^[A-Za-z0-9-_]+$/;
    if (!base64Regex.test(text)) {
        return false;
    }
    try {
        const padded = text.replace(/-/g, '+').replace(/_/g, '/');
        const decoded = decode(padded);
        return /^[\x20-\x7E]*$/.test(decoded);
    } catch (e) {
        return false;
    }
}