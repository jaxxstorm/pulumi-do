"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class VolumeAttachment extends pulumi.CustomResource {
    /**
     * Get an existing VolumeAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new VolumeAttachment(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["dropletId"] = state ? state.dropletId : undefined;
            inputs["volumeId"] = state ? state.volumeId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.dropletId === undefined) {
                throw new Error("Missing required property 'dropletId'");
            }
            if (!args || args.volumeId === undefined) {
                throw new Error("Missing required property 'volumeId'");
            }
            inputs["dropletId"] = args ? args.dropletId : undefined;
            inputs["volumeId"] = args ? args.volumeId : undefined;
        }
        super("do:core/volumeAttachment:VolumeAttachment", name, inputs, opts);
    }
}
exports.VolumeAttachment = VolumeAttachment;
//# sourceMappingURL=volumeAttachment.js.map