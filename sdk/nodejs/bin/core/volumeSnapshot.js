"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
class VolumeSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing VolumeSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new VolumeSnapshot(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["createdAt"] = state ? state.createdAt : undefined;
            inputs["minDiskSize"] = state ? state.minDiskSize : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["regions"] = state ? state.regions : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["volumeId"] = state ? state.volumeId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.volumeId === undefined) {
                throw new Error("Missing required property 'volumeId'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["volumeId"] = args ? args.volumeId : undefined;
            inputs["createdAt"] = undefined /*out*/;
            inputs["minDiskSize"] = undefined /*out*/;
            inputs["regions"] = undefined /*out*/;
            inputs["size"] = undefined /*out*/;
        }
        super("do:core/volumeSnapshot:VolumeSnapshot", name, inputs, opts);
    }
}
exports.VolumeSnapshot = VolumeSnapshot;
//# sourceMappingURL=volumeSnapshot.js.map