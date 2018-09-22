import * as pulumi from "@pulumi/pulumi";
export declare function getFloatingIP(args: GetFloatingIPArgs, opts?: pulumi.InvokeOptions): Promise<GetFloatingIPResult>;
/**
 * A collection of arguments for invoking getFloatingIP.
 */
export interface GetFloatingIPArgs {
    readonly ipAddress: string;
}
/**
 * A collection of values returned by getFloatingIP.
 */
export interface GetFloatingIPResult {
    readonly dropletId: number;
    readonly region: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
