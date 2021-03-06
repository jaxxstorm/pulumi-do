// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    return pulumi.runtime.invoke("do:core/getVolume:getVolume", {
        "description": args.description,
        "name": args.name,
        "region": args.region,
    }, opts);
}

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
