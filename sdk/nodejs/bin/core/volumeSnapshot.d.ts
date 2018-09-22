import * as pulumi from "@pulumi/pulumi";
export declare class VolumeSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing VolumeSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeSnapshotState): VolumeSnapshot;
    readonly createdAt: pulumi.Output<string>;
    readonly minDiskSize: pulumi.Output<number>;
    readonly name: pulumi.Output<string>;
    readonly regions: pulumi.Output<string[]>;
    readonly size: pulumi.Output<number>;
    readonly volumeId: pulumi.Output<string>;
    /**
     * Create a VolumeSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeSnapshotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VolumeSnapshot resources.
 */
export interface VolumeSnapshotState {
    readonly createdAt?: pulumi.Input<string>;
    readonly minDiskSize?: pulumi.Input<number>;
    readonly name?: pulumi.Input<string>;
    readonly regions?: pulumi.Input<pulumi.Input<string>[]>;
    readonly size?: pulumi.Input<number>;
    readonly volumeId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VolumeSnapshot resource.
 */
export interface VolumeSnapshotArgs {
    readonly name?: pulumi.Input<string>;
    readonly volumeId: pulumi.Input<string>;
}
