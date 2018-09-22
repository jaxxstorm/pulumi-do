import * as pulumi from "@pulumi/pulumi";
export declare function getSSHKey(args: GetSSHKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSSHKeyResult>;
/**
 * A collection of arguments for invoking getSSHKey.
 */
export interface GetSSHKeyArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getSSHKey.
 */
export interface GetSSHKeyResult {
    readonly fingerprint: string;
    readonly publicKey: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
