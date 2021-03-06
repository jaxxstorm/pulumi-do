"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Get information on a domain. This data source provides the name, TTL, and zone
 * file as configured on your Digital Ocean account. This is useful if the domain
 * name in question is not managed by Terraform or you need to utilize TTL or zone
 * file data.
 *
 * An error is triggered if the provided domain name is not managed with your
 * Digital Ocean account.
 */
function getDomain(args, opts) {
    return pulumi.runtime.invoke("do:core/getDomain:getDomain", {
        "name": args.name,
    }, opts);
}
exports.getDomain = getDomain;
//# sourceMappingURL=getDomain.js.map