// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getFloatingIP(args: GetFloatingIPArgs, opts?: pulumi.InvokeOptions): Promise<GetFloatingIPResult> {
    return pulumi.runtime.invoke("do:core/getFloatingIP:getFloatingIP", {
        "ipAddress": args.ipAddress,
    }, opts);
}

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
