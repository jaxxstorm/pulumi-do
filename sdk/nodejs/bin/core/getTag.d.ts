import * as pulumi from "@pulumi/pulumi";
export declare function getTag(args: GetTagArgs, opts?: pulumi.InvokeOptions): Promise<GetTagResult>;
/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getTag.
 */
export interface GetTagResult {
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
