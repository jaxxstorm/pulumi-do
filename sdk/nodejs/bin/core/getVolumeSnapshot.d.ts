import * as pulumi from "@pulumi/pulumi";
export declare function getVolumeSnapshot(args?: GetVolumeSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeSnapshotResult>;
/**
 * A collection of arguments for invoking getVolumeSnapshot.
 */
export interface GetVolumeSnapshotArgs {
    readonly mostRecent?: boolean;
    readonly name?: string;
    readonly nameRegex?: string;
    readonly region?: string;
}
/**
 * A collection of values returned by getVolumeSnapshot.
 */
export interface GetVolumeSnapshotResult {
    readonly createdAt: string;
    readonly minDiskSize: number;
    readonly regions: string[];
    readonly size: number;
    readonly volumeId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
