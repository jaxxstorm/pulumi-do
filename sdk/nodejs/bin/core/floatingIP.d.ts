import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean Floating IP to represent a publicly-accessible static IP addresses that can be mapped to one of your Droplets.
 */
export declare class FloatingIP extends pulumi.CustomResource {
    /**
     * Get an existing FloatingIP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FloatingIPState): FloatingIP;
    /**
     * The ID of Droplet that the Floating IP will be assigned to.
     */
    readonly dropletId: pulumi.Output<number | undefined>;
    /**
     * The IP Address of the resource
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * The region that the Floating IP is reserved to.
     */
    readonly region: pulumi.Output<string>;
    /**
     * Create a FloatingIP resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FloatingIPArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FloatingIP resources.
 */
export interface FloatingIPState {
    /**
     * The ID of Droplet that the Floating IP will be assigned to.
     */
    readonly dropletId?: pulumi.Input<number>;
    /**
     * The IP Address of the resource
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The region that the Floating IP is reserved to.
     */
    readonly region?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FloatingIP resource.
 */
export interface FloatingIPArgs {
    /**
     * The ID of Droplet that the Floating IP will be assigned to.
     */
    readonly dropletId?: pulumi.Input<number>;
    /**
     * The IP Address of the resource
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The region that the Floating IP is reserved to.
     */
    readonly region: pulumi.Input<string>;
}
