import * as pulumi from "@pulumi/pulumi";
export declare class VolumeAttachment extends pulumi.CustomResource {
    /**
     * Get an existing VolumeAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeAttachmentState): VolumeAttachment;
    readonly dropletId: pulumi.Output<number>;
    readonly volumeId: pulumi.Output<string>;
    /**
     * Create a VolumeAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeAttachmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VolumeAttachment resources.
 */
export interface VolumeAttachmentState {
    readonly dropletId?: pulumi.Input<number>;
    readonly volumeId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VolumeAttachment resource.
 */
export interface VolumeAttachmentArgs {
    readonly dropletId: pulumi.Input<number>;
    readonly volumeId: pulumi.Input<string>;
}
