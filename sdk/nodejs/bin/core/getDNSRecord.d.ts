import * as pulumi from "@pulumi/pulumi";
/**
 * Get information on a DNS record. This data source provides the name, TTL, and zone
 * file as configured on your Digital Ocean account. This is useful if the record
 * in question is not managed by Terraform.
 *
 * An error is triggered if the provided domain name or record are not managed with
 * your Digital Ocean account.
 */
export declare function getDNSRecord(args: GetDNSRecordArgs, opts?: pulumi.InvokeOptions): Promise<GetDNSRecordResult>;
/**
 * A collection of arguments for invoking getDNSRecord.
 */
export interface GetDNSRecordArgs {
    /**
     * The domain name of the record.
     */
    readonly domain: string;
    /**
     * The name of the record.
     */
    readonly name: string;
}
/**
 * A collection of values returned by getDNSRecord.
 */
export interface GetDNSRecordResult {
    readonly data: string;
    readonly flags: number;
    readonly port: number;
    readonly priority: number;
    readonly tag: string;
    readonly ttl: number;
    readonly type: string;
    readonly weight: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
