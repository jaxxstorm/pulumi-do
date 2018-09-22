"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * Provides a DigitalOcean Floating IP to represent a publicly-accessible static IP addresses that can be mapped to one of your Droplets.
 */
class FloatingIP extends pulumi.CustomResource {
    /**
     * Get an existing FloatingIP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new FloatingIP(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["dropletId"] = state ? state.dropletId : undefined;
            inputs["ipAddress"] = state ? state.ipAddress : undefined;
            inputs["region"] = state ? state.region : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.region === undefined) {
                throw new Error("Missing required property 'region'");
            }
            inputs["dropletId"] = args ? args.dropletId : undefined;
            inputs["ipAddress"] = args ? args.ipAddress : undefined;
            inputs["region"] = args ? args.region : undefined;
        }
        super("do:core/floatingIP:FloatingIP", name, inputs, opts);
    }
}
exports.FloatingIP = FloatingIP;
//# sourceMappingURL=floatingIP.js.map