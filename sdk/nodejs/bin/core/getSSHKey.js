"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
function getSSHKey(args, opts) {
    return pulumi.runtime.invoke("do:core/getSSHKey:getSSHKey", {
        "name": args.name,
    }, opts);
}
exports.getSSHKey = getSSHKey;
//# sourceMappingURL=getSSHKey.js.map