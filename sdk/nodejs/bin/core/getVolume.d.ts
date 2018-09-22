import * as pulumi from "@pulumi/pulumi";
export declare function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult>;
/**
 * A collection of arguments for invoking getVolume.
 */
export interface GetVolumeArgs {
    readonly description?: string;
    readonly name: string;
    readonly region?: string;
}
/**
 * A collection of values returned by getVolume.
 */
export interface GetVolumeResult {
    readonly dropletIds: number[];
    readonly filesystemLabel: string;
    readonly filesystemType: string;
    readonly size: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
