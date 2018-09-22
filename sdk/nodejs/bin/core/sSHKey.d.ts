import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a DigitalOcean SSH key resource to allow you to manage SSH
 * keys for Droplet access. Keys created with this resource
 * can be referenced in your droplet configuration via their ID or
 * fingerprint.
 */
export declare class SSHKey extends pulumi.CustomResource {
    /**
     * Get an existing SSHKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SSHKeyState): SSHKey;
    /**
     * The fingerprint of the SSH key
     */
    readonly fingerprint: pulumi.Output<string>;
    /**
     * The name of the SSH key for identification
     */
    readonly name: pulumi.Output<string>;
    /**
     * The public key. If this is a file, it
     * can be read using the file interpolation function
     */
    readonly publicKey: pulumi.Output<string>;
    /**
     * Create a SSHKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SSHKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SSHKey resources.
 */
export interface SSHKeyState {
    /**
     * The fingerprint of the SSH key
     */
    readonly fingerprint?: pulumi.Input<string>;
    /**
     * The name of the SSH key for identification
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The public key. If this is a file, it
     * can be read using the file interpolation function
     */
    readonly publicKey?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SSHKey resource.
 */
export interface SSHKeyArgs {
    /**
     * The name of the SSH key for identification
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The public key. If this is a file, it
     * can be read using the file interpolation function
     */
    readonly publicKey: pulumi.Input<string>;
}
