"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
function getEnv(...vars) {
    for (const v of vars) {
        const value = process.env[v];
        if (value) {
            return value;
        }
    }
    return undefined;
}
exports.getEnv = getEnv;
function getEnvBoolean(...vars) {
    const s = getEnv(...vars);
    if (s !== undefined) {
        // NOTE: these values are taken from https://golang.org/src/strconv/atob.go?s=351:391#L1, which is what
        // Terraform uses internally when parsing boolean values.
        if (["1", "t", "T", "true", "TRUE", "True"].find(v => v === s) !== undefined) {
            return true;
        }
        if (["0", "f", "F", "false", "FALSE", "False"].find(v => v === s) !== undefined) {
            return false;
        }
    }
    return undefined;
}
exports.getEnvBoolean = getEnvBoolean;
function getEnvNumber(...vars) {
    const s = getEnv(...vars);
    if (s !== undefined) {
        const f = parseFloat(s);
        if (!isNaN(f)) {
            return f;
        }
    }
    return undefined;
}
exports.getEnvNumber = getEnvNumber;
function requireWithDefault(req, def) {
    try {
        return req();
    }
    catch (err) {
        if (def === undefined) {
            throw err;
        }
    }
    return def;
}
exports.requireWithDefault = requireWithDefault;
//# sourceMappingURL=utilities.js.map